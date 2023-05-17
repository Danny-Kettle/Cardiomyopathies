<template>
  <div id="sbar" class="border-2 flex flex-col justify-center gap-8 items-center py-10 w-full">
    <div class="lg:mr-auto lg:ml-10 flex flex-row gap-4 items-center" v-if="searchType === 'Singular'">
      <label class="text-slate-600 text-md lg:text-lg" for="category-select">Select category:</label>
      <select id="category-select" class="px-2 py-2 shadow" v-model="selectedCategory" @change="updateMutationDataChart">
        <option value="age">Age Groups</option>
        <option value="gender">Gender</option>
      </select>
    </div>
    <div class="w-11/12 lg:w-4/6">
      <div v-if="searchType === 'Overview'">
        <canvas ref="mutations-patient-count" class="mr-0" v-show="searchType === 'Overview'"></canvas>
      </div>
      <div v-if="searchType === 'Singular'">
        <canvas ref="mutations-patient-data" v-show="searchType === 'Singular'"></canvas>
      </div>
      <div v-if="searchType === 'Singular'">
        <canvas ref="mutations-patient-data-2" v-show="searchType === 'Singular'"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    searchType: {
      type: String,
      required: true
    },
    mutationName: {
      type: String
    }
  },
  data() {
    return {
      mutationDataChart: null,
      mutationDataPatientChart: null,
      selectedCategory: 'age'
    }
  },
  mounted() {
    const ctx = this.$refs['mutations-patient-count']?.getContext('2d')
    const ctx2 = this.$refs['mutations-patient-data']?.getContext('2d')
    const ctx3 = this.$refs['mutations-patient-data-2']?.getContext('2d')

    if (this.searchType === 'Overview' && ctx) {
      this.createChart(
        ctx,
        this.getMutationsByGender(this.data),
        'Prevelence of Mutations by Gender'
      )
    } else if (this.searchType === 'Singular' && ctx2 && ctx3 && this.selectedCategory) {
      this.updateMutationDataChart()
      this.updateMutationDataPatientChart()
    }
  },
  watch: {
    mutationName() {
      if (this.mutationDataChart) {
        this.updateMutationDataChart()
      }
      if (this.mutationDataPatientChart) {
        this.updateMutationDataPatientChart()
      }
    }
  },
  methods: {
    updateMutationDataChart() {
      if (this.mutationDataChart) {
        this.mutationDataChart.destroy()
      }

      const ctx2 = this.$refs['mutations-patient-data'].getContext('2d')

      this.mutationDataChart = this.createStackedBarChart(
        ctx2,
        this.getMutationDistributionData(this.data, this.selectedCategory),
        'Mutation Distribution across Age and Gender'
      )
    },
    updateMutationDataPatientChart() {
      if (this.mutationDataPatientChart) {
        this.mutationDataPatientChart.destroy()
      }

      const ctx3 = this.$refs['mutations-patient-data-2']?.getContext('2d')

      this.mutationDataPatientChart = this.createStackedBarChart(
        ctx3,
        this.getMutationPatientDistributionData(this.data),
        'Mutation Distribution across conditions'
      )
    },
    createChart(ctx, chartData, chartLabel) {
      const labels = Array.from(
        new Set([...Object.keys(chartData.male), ...Object.keys(chartData.female)])
      )

      const maleData = labels.map((label) => chartData.male[label] || 0)
      const femaleData = labels.map((label) => chartData.female[label] || 0)

      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Male',
              data: maleData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            },
            {
              label: 'Female',
              data: femaleData,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          animation: false,
          plugins: {
            title: {
              display: true,
              text: chartLabel
            }
          },
          responsive: true,
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          }
        }
      })
    },
    createStackedBarChart(ctx, chartData, chartLabel) {
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: chartData.datasets
        },
        options: {
          animation: false,
          plugins: {
            title: {
              display: true,
              text: chartLabel
            }
          },
          responsive: true,
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true,
              beginAtZero: true
            }
          }
        }
      })
    },
    getMutationsByGender(data) {
      const mutationsByGender = {
        male: {},
        female: {}
      }

      data.forEach((datum) => {
        const mutationFields = [
          'actc',
          'mybpc3',
          'myh7',
          'myl2',
          'tnnci',
          'tnni3',
          'tnnt2',
          'tpm1',
          'ttn'
        ]

        if (datum.row_num && typeof datum.row_num.female === 'boolean') {
          for (const mutation of mutationFields) {
            if (datum[mutation]) {
              const gender = datum.row_num.female ? 'female' : 'male'
              if (mutationsByGender[gender][mutation]) {
                mutationsByGender[gender][mutation] += 1
              } else {
                mutationsByGender[gender][mutation] = 1
              }
            }
          }
        }
      })

      return mutationsByGender
    },
    getMutationDistributionData(data, category) {
      if (category === 'age') {
        return this.getMutationCountsByAgeGroup(data)
      } else if (category === 'gender') {
        return this.getMutationCountsByGender(data)
      }
    },
    getMutationPatientDistributionData(data) {
      return this.getMutationCountsByCategory(data)
    },
    getMutationCountsByAgeGroup(data) {
      const ageGroups = ['0-17', '18-34', '35-49', '50-64', '65+']
      const counts = ageGroups.map((group) => {
        let count = 0
        const [minAge, maxAge] = group.split('-').map(Number)

        data.forEach((datum) => {
          if (
            datum.row_num &&
            datum.row_num.age_at_mri >= minAge &&
            datum.row_num.age_at_mri <= maxAge &&
            datum[this.mutationName.toLowerCase()]
          ) {
            count += 1
          }
        })

        return count
      })

      const datasets = [
        {
          label: this.mutationName,
          data: counts,
          backgroundColor: this.randomColor(0.2),
          borderColor: this.randomColor(1),
          borderWidth: 1
        }
      ]

      return { labels: ageGroups, datasets }
    },
    getMutationCountsByGender(data) {
      const genders = ['Male', 'Female']
      const counts = genders.map((gender) => {
        let count = 0
        const isFemale = gender === 'Female'

        data.forEach((datum) => {
          if (
            datum.row_num &&
            datum.row_num.female === isFemale &&
            datum[this.mutationName.toLowerCase()]
          ) {
            count += 1
          }
        })

        return count
      })

      const datasets = [
        {
          label: this.mutationName,
          data: counts,
          backgroundColor: this.randomColor(0.2),
          borderColor: this.randomColor(1),
          borderWidth: 1
        }
      ]

      return { labels: genders, datasets }
    },
    getMutationCountsByCategory(data) {
      const categories = ['diabetes', 'myectomy', 'hypertension']

      const counts = categories.map((category) => {
        let count = 0

        data.forEach((datum) => {
          if (datum.row_num && datum.row_num[category] && datum[this.mutationName.toLowerCase()]) {
            count += 1
          }
        })
        return count
      })

      const datasets = [
        {
          label: this.mutationName,
          data: counts,
          backgroundColor: this.randomColor(0.2),
          borderColor: this.randomColor(1),
          borderWidth: 1
        }
      ]

      return { labels: categories, datasets }
    },
    randomColor(opacity) {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
  }
}
</script>

<template>
<<<<<<< HEAD
  <div id="radar">
    <div style="width: 1200px; height: 600px" v-if="searchType === 'Singular'">
=======
  <div id="radar" class="border-2 flex flex-col justify-center items-center py-10 w-full">
    <div  v-if="searchType === 'Singular'">
>>>>>>> development.0.2
      <canvas id="radar-chart-canvas" ref="radar-chart"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto'

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
      chartInstance: null,
      selectedCategory: 'ageGroups',
      ageGroups: [
        { label: '18-29', min: 18, max: 29 },
        { label: '30-39', min: 30, max: 39 },
        { label: '40-49', min: 40, max: 49 },
        { label: '50-59', min: 50, max: 59 },
        { label: '60+', min: 60, max: Infinity }
      ],
      genderCategories: ['female', 'male'],
      keyVariables: [
        'ledv',
        'redv',
        'lesv',
        'resv',
        'lvef',
        'rvef',
        'lvmass',
        'rvmass',
        'lsv',
        'rsv'
      ]
    }
  },
  mounted() {
    const ctx = this.$refs['radar-chart'].getContext('2d')

    if (this.searchType === 'Singular' && ctx) {
      this.chartInstance = this.createChart(ctx, this.getChartData(this.data))
    }
  },
  watch: {
    mutationName() {
      if (this.searchType === 'Singular') {
        this.updateChart()
      }
    }
  },
  methods: {
    createChart(ctx, chartData) {
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }
      return new Chart(ctx, {
        type: 'radar',
        data: {
          labels: chartData.labels,
          datasets: chartData.datasets
        },
        options: {
          animation: false,
          scales: {
            r: {
              beginAtZero: true
            }
          }
        }
      })
    },
    updateChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }

      const ctx = this.$refs['radar-chart'].getContext('2d')
      this.chartInstance = this.createChart(ctx, this.getChartData(this.data))
    },
    getChartData(data) {
      const filteredData = data.filter((datum) => datum[this.mutationName.toLowerCase()] === true)
      const categoryData =
        this.selectedCategory === 'ageGroups' ? this.ageGroups : this.genderCategories
      const labels = categoryData.map((cat) => cat.label)

      const datasets = this.keyVariables.map((variable, index) => {
        const colors = [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ]
        const borderColors = [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ]
        return {
          label: variable,
          data: categoryData.map((cat) => {
            const filteredCategoryData = filteredData.filter((datum) => {
              if (this.selectedCategory === 'ageGroups') {
                return (
                  datum.row_num &&
                  datum.row_num.age_at_mri >= cat.min &&
                  datum.row_num.age_at_mri <= cat.max
                )
              } else {
                return datum.row_num && datum.row_num.female === cat
              }
            })
            const sum = filteredCategoryData.reduce((acc, curr) => {
              return acc + curr[variable]
            }, 0)
            const average = sum / filteredCategoryData.length
            return average
          }),
          backgroundColor: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 1
        }
      })
      return {
        labels,
        datasets
      }
    }
  }
}
</script>

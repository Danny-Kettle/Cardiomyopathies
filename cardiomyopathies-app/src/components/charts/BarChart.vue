<template>
  <div id="bar">
    <div style="width: 800px; height: 300px" v-if="searchType === 'Overview'">
      <canvas ref="mutations-count"></canvas>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Overview'">
      <canvas ref="avg-values"></canvas>
    </div>
    <div v-if="searchType === 'Comparison'">
      <label for="field-select">Select field:</label>
      <select id="field-select" v-model="selectedField">
        <option disabled value="">Please select a field</option>
        <option value="lvmass" selected>LV Mass</option>
        <option value="rvef">RVEF</option>
        <option value="rsv">RSV</option>
        <option value="lesv">LESV</option>
        <option value="redv">REDV</option>
        <option value="resv">RESV</option>
        <option value="lvef">LVEF</option>
        <option value="lsv">LSV</option>
        <option value="ledv">LEDV</option>
      </select>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Comparison'">
      <canvas ref="avg-values-comparison"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  data() {
    return {
      selectedField: 'lvmass',
      chartInstance: null,
      comparisonChartInstance: null
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    searchType: {
      type: String,
      required: true
    },
    mutations: {
      type: Array
    },
    apicalHcmFilter: {
      type: Boolean
    }
  },
  mounted() {
    if (this.$refs['mutations-count'] && this.$refs['avg-values']) {
      const mutationCountCtx = this.$refs['mutations-count'].getContext('2d')
      const avgValuesCtx = this.$refs['avg-values'].getContext('2d')

      if (this.searchType === 'Overview') {
        this.createChart(mutationCountCtx, this.getMutationCounts(this.data), 'Mutation Count')
        this.createChart(avgValuesCtx, this.getAvgValues(this.data), 'Average Values')
      } else if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    }
  },
  watch: {
    mutations() {
      if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    },
    selectedField() {
      if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    }
  },
  methods: {
    createChart(ctx, chartData, chartLabel) {
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(chartData),
          datasets: [
            {
              label: chartLabel,
              data: Object.values(chartData)
            }
          ]
        },
        options: {
          animation: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 25,
                suggestedMin: 0,
                suggestedMax: 200
              }
            }
          }
        }
      })
    },
    createHorizontalChart(ctx, chartData, chartLabel) {
      const backgroundColors = [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ]

      const borderColors = backgroundColors.map((color) => color.replace('0.2', '1'))
      const borderColorsByLabel = chartData.labels.map(
        (_, index) => borderColors[index % borderColors.length]
      )

      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              data: chartData.values,
              backgroundColor: backgroundColors,
              borderColor: borderColorsByLabel,
              borderWidth: 1
            }
          ]
        },
        options: {
          animation: false,
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: chartLabel
            },
            legend: {
              display: false
            }
          },
          responsive: true,
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      })
    },
    updateComparisonChart() {
      if (this.comparisonChartInstance) {
        this.comparisonChartInstance.destroy()
      }

      if (this.$refs['avg-values-comparison']) {
        const ctx = this.$refs['avg-values-comparison'].getContext('2d')
        const chartData = this.getAvgValuesForMutations(this.data)

        this.comparisonChartInstance = this.createHorizontalChart(
          ctx,
          chartData,
          `Average ${this.selectedField.toUpperCase()} for mutations: ${this.mutations.join(', ')}`
        )
      }
    },
    getAvgValuesForMutations(data) {
      const field = this.selectedField
      const mutations = this.mutations
      const mutationCounts = {}
      const mutationSums = {}

      data.forEach((datum) => {
        mutations.forEach((mutation) => {
          if (datum[mutation.toLowerCase()]) {
            mutationCounts[mutation] = (mutationCounts[mutation] || 0) + 1
            mutationSums[mutation] = (mutationSums[mutation] || 0) + datum[field]
          }
        })
      })

      const avgValues = mutations.map((mutation) => {
        const sum = mutationSums[mutation] || 0
        const count = mutationCounts[mutation] || 0
        return count ? sum / count : 0
      })

      return {
        labels: mutations,
        values: avgValues
      }
    },
    getMutationCounts(data) {
      const mutationCounts = {
        'No Mutation': 0
      }

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

      data.forEach((datum) => {
        let hasMutation = false
        mutationFields.forEach((mutation) => {
          if (datum[mutation]) {
            mutationCounts[mutation] = (mutationCounts[mutation] || 0) + 1
            hasMutation = true
          }
        })

        if (!hasMutation) {
          mutationCounts['No Mutation']++
        }
      })

      return mutationCounts
    },
    getAvgValues(data) {
      const avgValues = {}
      let count = 0
      const validFields = ['ledv', 'rvef', 'redv', 'lesv', 'lvmass', 'resv', 'rsv', 'lsv', 'lvef']

      data.forEach((datum) => {
        if (datum) {
          for (const key in datum) {
            if (validFields.includes(key)) {
              if (avgValues[key]) {
                avgValues[key] += datum[key]
              } else {
                avgValues[key] = datum[key]
              }
            }
          }
          count++
        }
      })

      for (const key in avgValues) {
        avgValues[key] /= count
      }

      return avgValues
    }
  }
}
</script>

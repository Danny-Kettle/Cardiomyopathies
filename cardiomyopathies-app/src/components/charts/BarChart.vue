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
        <option value="lvmass">LV Mass</option>
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
      selectedField: '',
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
      return new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Average',
              data: chartData.values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            title: {
              display: true,
              text: chartLabel
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
        if (datum.mutations) {
          mutations.forEach((mutation) => {
            if (datum.mutations[mutation]) {
              mutationCounts[mutation] = (mutationCounts[mutation] || 0) + 1
              mutationSums[mutation] = (mutationSums[mutation] || 0) + datum[field]
            }
          })
        }
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

      data.forEach((datum) => {
        if (datum.mutations) {
          let hasMutation = false
          for (const mutation in datum.mutations) {
            if (
              Object.prototype.hasOwnProperty.call(datum.mutations, mutation) &&
              datum.mutations[mutation]
            ) {
              mutationCounts[mutation] = mutationCounts[mutation] ? mutationCounts[mutation] + 1 : 1
              hasMutation = true
            }
          }
          if (!hasMutation) {
            mutationCounts['No Mutation']++
          }
        } else {
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

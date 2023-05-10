<template>
  <div>
    <label for="field-select">Select field:</label>
    <select id="field-select" v-model="selectedField" @change="updateChart">
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
    <div style="width: 800px; height: 300px" v-if="searchType === 'Overview'">
      <canvas ref="data-age"></canvas>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Singular'">
      <canvas ref="mutation-data-age"></canvas>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Comparison'">
      <canvas ref="mutation-data-age-comparison"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { toHandlers } from 'vue'

export default {
  data() {
    return {
      selectedField: '',
      chartInstance: null,
      mutationChartInstance: null,
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
    mutationName: {
      type: String
    },
    mutations: {
      type: Array
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.searchType === 'Overview') {
        this.updateChart()
      } else if (this.searchType === 'Singular') {
        this.updateMutationChart()
      } else if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    })
  },
  watch: {
    mutationName() {
      if (this.searchType === 'Singular') {
        this.updateMutationChart()
      } else if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    },
    selectedField() {
      if (this.searchType === 'Singular') {
        this.updateMutationChart()
      } else if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    },
    mutations() {
      if (this.searchType === 'Comparison') {
        this.updateComparisonChart()
      }
    }
  },
  methods: {
    createChart(ctx, chartData, chartLabel) {
      return new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: chartLabel,
              data: chartData,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)'
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
              title: {
                display: true,
                text: 'Age'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Field value'
              }
            }
          }
        }
      })
    },
    getDataAgeCount(data, field) {
      if (this.searchType === 'Singular') {
        data = data.filter((datum) => datum.mutations && datum.mutations[this.mutationName])
      } else if (this.searchType === 'Comparison') {
        data = data.filter((datum) => {
          return this.mutations.some((mutation) => datum[mutation.toLowerCase()])
        })
      }
      return data
        .filter((datum) => datum.row_num && datum[field])
        .map((datum) => {
          return {
            x: datum.row_num.age_at_mri,
            y: datum[field]
          }
        })
    },
    updateComparisonChart() {
      if (this.comparisonChartInstance) {
        this.comparisonChartInstance.destroy()
      }

      const colors = [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)'
      ]

      const datasets = this.mutations.map((mutation, index) => {
        const mutationData = this.getDataAgeCount(
          this.data.filter((datum) => datum[mutation.toLowerCase()]),
          this.selectedField
        )
        return {
          label: `${mutation}`,
          data: mutationData,
          borderColor: colors[index % colors.length],
          backgroundColor: colors[index % colors.length],
          pointBackgroundColor: colors[index % colors.length],
          pointBorderColor: colors[index % colors.length],
          fill: false
        }
      })

      if (
        this.$refs['mutation-data-age-comparison'] &&
        this.$refs['mutation-data-age-comparison'].getContext
      ) {
        const ctx = this.$refs['mutation-data-age-comparison'].getContext('2d')
        this.comparisonChartInstance = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets
          },
          options: {
            animation: false,
            plugins: {
              title: {
                display: true,
                text: `Age vs ${this.selectedField.toUpperCase()} for mutations: ${this.mutations.join(
                  ', '
                )}`
              }
            },
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Age'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Field value'
                }
              }
            }
          }
        })
      }
      // if (this.$refs['mutation-data-age-comparison']) {
      //   const ctx = this.$refs['mutation-data-age-comparison'].getContext('2d')
      //   this.comparisonChartInstance = new Chart(ctx, {
      //     type: 'scatter',
      //     data: {
      //       datasets
      //     },
      //     options: {
      //       plugins: {
      //         title: {
      //           display: true,
      //           text: `Age vs ${this.selectedField.toUpperCase()} for mutations: ${this.mutations.join(
      //             ', '
      //           )}`
      //         }
      //       },
      //       responsive: true,
      //       scales: {
      //         x: {
      //           title: {
      //             display: true,
      //             text: 'Age'
      //           }
      //         },
      //         y: {
      //           title: {
      //             display: true,
      //             text: 'Field value'
      //           }
      //         }
      //       }
      //     }
      //   })
      // }
    },
    updateChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }
      const newData = this.getDataAgeCount(this.data, this.selectedField)
      if (this.$refs['data-age'] && this.$refs['data-age'].getContext) {
        const ctx = this.$refs['data-age'].getContext('2d')
        this.chartInstance = this.createChart(
          ctx,
          newData,
          `Age vs ${this.selectedField.toUpperCase()}`
        )
      }
    },
    getMutationData(data, field) {
      return data
        .filter((datum) => datum.row_num && datum[field] && datum[this.mutationName.toLowerCase()])
        .map((datum) => {
          return {
            x: datum.row_num.age_at_mri,
            y: datum[field]
          }
        })
    },
    updateMutationChart() {
      if (this.mutationChartInstance) {
        this.mutationChartInstance.destroy()
      }

      const newData = this.getMutationData(this.data, this.selectedField)
      if (this.$refs['mutation-data-age']) {
        const ctx = this.$refs['mutation-data-age'].getContext('2d')
        this.mutationChartInstance = this.createChart(
          ctx,
          newData,
          `Age vs ${this.selectedField.toUpperCase()} for ${this.mutationName}`
        )
      }
    }
  }
}
</script>

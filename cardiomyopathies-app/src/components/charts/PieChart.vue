<template>
  <div id="pie">
    <div id="this" style="width: 800px; height: 300px" v-if="searchType === 'Overview'">
      <canvas ref="scar-count"></canvas>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Singular'">
      <canvas ref="mutation-scar-count"></canvas>
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
      mutationScarChart: null
    }
  },
  mounted() {
    const ctx = this.$refs['scar-count']?.getContext('2d')
    const mutationScarCtx = this.$refs['mutation-scar-count']?.getContext('2d')

    if (this.searchType === 'Overview' && ctx) {
      this.createChart(ctx, this.getScarCounts(this.data), 'Scar Count')
    } else if (this.searchType === 'Singular' && mutationScarCtx) {
      this.mutationScarChart = this.createChart(
        mutationScarCtx,
        this.getMutationScarCounts(this.data),
        'Mutation Scar Count'
      )
    }
  },
  watch: {
    mutationName() {
      if (this.mutationScarChart) {
        this.updateMutationScarChart()
      }
    }
  },
  methods: {
    updateMutationScarChart() {
      if (this.mutationScarChart) {
        this.mutationScarChart.destroy()
      }

      const mutationScarCtx = this.$refs['mutation-scar-count'].getContext('2d')
      this.mutationScarChart = this.createChart(
        mutationScarCtx,
        this.getMutationScarCounts(this.data),
        'Mutation Scar Count'
      )
    },
    createChart(ctx, chartData, chartLabel) {
      return new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['With Scar', 'Without Scar'],
          datasets: [
            {
              label: chartLabel,
              data: [chartData.withScar, chartData.withoutScar],
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
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
          maintainAspectRatio: false
        }
      })
    },
    getScarCounts(data) {
      let withScar = 0
      let withoutScar = 0

      data.forEach((datum) => {
        if (datum.row_num && typeof datum.row_num.scar === 'boolean') {
          if (datum.row_num.scar) {
            withScar += 1
          } else {
            withoutScar += 1
          }
        }
      })

      return { withScar, withoutScar }
    },
    getMutationScarCounts(data) {
      let withScar = 0
      let withoutScar = 0

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
        if (datum.row_num && typeof datum.row_num.scar === 'boolean') {
          if (
            mutationFields.includes(this.mutationName.toLowerCase()) &&
            datum[this.mutationName.toLowerCase()]
          ) {
            if (datum.row_num.scar) {
              withScar += 1
            } else {
              withoutScar += 1
            }
          }
        }
      })

      return { withScar, withoutScar }
    }
  }
}
</script>

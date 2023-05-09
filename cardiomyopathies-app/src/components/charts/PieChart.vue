<template>
  <div id="pie">
    <div id="this" style="width: 800px; height: 300px" v-if="searchType === 'Overview'">
      <canvas id="scar-count-canvas" ref="scar-count"></canvas>
      <canvas id="diabetes-count-canvas" ref="diabetes-count"></canvas>
      <canvas id="hypertension-count-canvas" ref="hypertension-count"></canvas>
      <canvas id="myectomy-count-canvas" ref="myectomy-count"></canvas>
    </div>
    <div style="width: 800px; height: 300px" v-if="searchType === 'Singular'">
      <canvas id="mutation-scar-count-canvas" ref="mutation-scar-count"></canvas>
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
    const scarCountCtx = this.$refs['scar-count']?.getContext('2d')
    const diabetesCountCtx = this.$refs['diabetes-count']?.getContext('2d')
    const hypertensionCountCtx = this.$refs['hypertension-count']?.getContext('2d')
    const myectomyCountCtx = this.$refs['myectomy-count']?.getContext('2d')

    const mutationScarCtx = this.$refs['mutation-scar-count']?.getContext('2d')

    if (this.searchType === 'Overview') {
      if (scarCountCtx) {
        this.createChart(
          scarCountCtx,
          [this.getScarCounts(this.data).withScar, this.getScarCounts(this.data).withoutScar],
          'No. of patients with scarring',
          ['With Scar', 'Without Scar']
        )
      }
      if (diabetesCountCtx) {
        this.createChart(
          diabetesCountCtx,
          [
            this.getDiabetesCounts(this.data).withDiabetes,
            this.getDiabetesCounts(this.data).withoutDiabetes
          ],
          'No. of patients with diabetes',
          ['With Diabetes', 'Without Diabetes']
        )
      }
      if (hypertensionCountCtx) {
        this.createChart(
          hypertensionCountCtx,
          [
            this.getHypertensionCounts(this.data).withHypertension,
            this.getHypertensionCounts(this.data).withoutHypertension
          ],
          'No. of patients with hypertension',
          ['With Hypertension', 'Without Hypertension']
        )
      }
      if (myectomyCountCtx) {
        this.createChart(
          myectomyCountCtx,
          [
            this.getMyectomyCounts(this.data).withMyectomy,
            this.getMyectomyCounts(this.data).withoutMyectomy
          ],
          'No. of patients with myectomy',
          ['With Myectomy', 'Without Myectomy']
        )
      }
    } else if (this.searchType === 'Singular' && mutationScarCtx) {
      this.mutationScarChart = this.createSingularChart(
        mutationScarCtx,
        this.getMutationScarCounts(this.data),
        `No. of patients with scarring and ${this.mutationName}`
      )
    }
  },
  watch: {
    mutationName() {
      if (this.searchType === 'Singular') {
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
      this.mutationScarChart = this.createSingularChart(
        mutationScarCtx,
        this.getMutationScarCounts(this.data),
        `No. of patients with scarring and ${this.mutationName}`
      )
    },
    createChart(ctx, chartData, chartLabel, labels) {
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }
      return new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              label: chartLabel,
              data: chartData,
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
    createSingularChart(ctx, chartData, chartLabel) {
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
    getDiabetesCounts(data) {
      let withDiabetes = 0
      let withoutDiabetes = 0

      data.forEach((datum) => {
        if (datum.row_num && typeof datum.row_num.diabetes === 'boolean') {
          if (datum.row_num.diabetes) {
            withDiabetes += 1
          } else {
            withoutDiabetes += 1
          }
        }
      })

      return { withDiabetes, withoutDiabetes }
    },
    getMyectomyCounts(data) {
      let withMyectomy = 0
      let withoutMyectomy = 0

      data.forEach((datum) => {
        if (datum.row_num && typeof datum.row_num.myectomy === 'boolean') {
          if (datum.row_num.myectomy) {
            withMyectomy += 1
          } else {
            withoutMyectomy += 1
          }
        }
      })

      return { withMyectomy, withoutMyectomy }
    },
    getHypertensionCounts(data) {
      let withHypertension = 0
      let withoutHypertension = 0

      data.forEach((datum) => {
        if (datum.row_num && typeof datum.row_num.hypertension === 'boolean') {
          if (datum.row_num.hypertension) {
            withHypertension += 1
          } else {
            withoutHypertension += 1
          }
        }
      })

      return { withHypertension, withoutHypertension }
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

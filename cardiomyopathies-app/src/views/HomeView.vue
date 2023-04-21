<script setup>
import Chart from 'chart.js/auto'
import { ref, watch } from 'vue'
import { getFirestore, collection, getDocs, app, query, getDoc, limit } from '../firebase/database'

const firestore = getFirestore(app)

const searchType = ref('Singular')
const mutationName = ref('MYBPC3')
const selectedValues = ref([])

const collectionRef = collection(firestore, 'experimental_data')

const cardiomyopathyData = ref([])
const averageData = ref({})

let chartData = null

if (searchType.value === 'Singular') {
  // Get averages
  watch(mutationName, () => {
    cardiomyopathyData.value = []
    getDocs(query(collectionRef, limit(5)))
      .then(async (querySnapshot) => {
        const sumData = {
          ledv: 0,
          redv: 0,
          lvef: 0,
          rvef: 0,
          lvmass: 0,
          rvmass: 0,
          lsv: 0,
          rsv: 0,
          scar: 0,
          gender: '',
          age_at_mri: 0,
          apical_hcm: '',
          sudden_cardiac_death: '',
          hypertension: '',
          diabetes: '',
          myectomy: ''
        }
        let dataLength = 0

        const promises = []
        querySnapshot.forEach((document) => {
          const promise = (async () => {
            const data = document.data()
            const mutationsRef = data.mutations
            const mutationsSnapshot = await getDoc(mutationsRef)
            const mutationData = mutationsSnapshot.data()
            data.mutations = mutationData

            if (data.mutations && data.mutations[mutationName.value] === true) {
              // Accumulate the sum of each field
              sumData.ledv += data.ledv
              sumData.redv += data.redv
              sumData.lvef += data.lvef
              sumData.rvef += data.rvef
              sumData.lvmass += data.lvmass
              sumData.lsv += data.lsv
              sumData.rsv += data.rsv
              dataLength++
            }
          })()
          promises.push(promise)
        })

        Promise.all(promises).then(() => {
          const avgData = {
            ledv: sumData.ledv / dataLength,
            redv: sumData.redv / dataLength,
            lvef: sumData.lvef / dataLength,
            rvef: sumData.rvef / dataLength,
            lvmass: sumData.lvmass / dataLength,
            lsv: sumData.lsv / dataLength,
            rsv: sumData.rsv / dataLength,
            scar: sumData.scar / dataLength,
            gender: sumData.gender,
            age_at_mri: sumData.age_at_mri / dataLength,
            apical_hcm: sumData.apical_hcm,
            sudden_cardiac_death: sumData.sudden_cardiac_death,
            hypertension: sumData.hypertension,
            diabetes: sumData.diabetes,
            myectomy: sumData.myectomy
          }
          averageData.value = [avgData]
          console.log(avgData.ledv)

          if (chartData) {
            chartData.destroy()
          }
          const canvas = document.getElementById('average-values-chart')
          if (canvas) {
            chartData = new Chart(canvas, {
              type: 'bar',
              data: {
                labels: [
                  'Left Ventricular End Diastolic Volume (ledv)',
                  'Right Ventricular End Diastolic Volume (redv)',
                  'Left Ventricular Ejection Fraction (lvef)',
                  'Right Ventricular Ejection Fraction (rvef)',
                  'Left Ventricular Mass (lvmass)',
                  'Right Ventricular Mass (rvmass)',
                  'Left Systolic Volume (lsv)',
                  'Right Systolic Volume (rsv)'
                ],
                datasets: [
                  {
                    label: `Average Data for ${mutationName.value}`,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: [
                      avgData.ledv,
                      avgData.redv,
                      avgData.lvef,
                      avgData.rvef,
                      avgData.lvmass,
                      avgData.lsv,
                      avgData.rsv
                    ]
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
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
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  })
}
</script>

<template>
  <main>
    <h1>Search Type: {{ searchType }}</h1>
    <select id="searchType" v-model="searchType">
      <option value="Singular">Singular</option>
      <option value="Comparison">Comparison</option>
    </select>

    <template v-if="searchType === 'Singular'">
      <h1>Mutation: {{ mutationName }}</h1>
      <select id="mutationName" v-model="mutationName">
        <option value="ACTC">ACTC</option>
        <option value="MYBPC3">MYBPC3</option>
        <option value="MYH7">MYH7</option>
        <option value="MYL2">MYL2</option>
        <option value="TNNCI">TNNCI</option>
        <option value="TNNI3">TNNI3</option>
        <option value="TNNT2">TNNT2</option>
        <option value="TPM1">TPM1</option>
        <option value="TTN">TTN</option>
      </select>
    </template>

    <template v-if="searchType === 'Comparison'">
      <h1>First Mutation: {{ firstMutation }}</h1>
      <select id="firstMutation" v-model="firstMutation">
        <option value="MYH7">MYH7</option>
        <option value="MYBPC3">MYBPC3</option>
      </select>

      <h1>Second Mutation: {{ secondMutation }}</h1>
      <select id="secondMutation" v-model="secondMutation">
        <option value="MYH7">MYH7</option>
        <option value="MYBPC3">MYBPC3</option>
      </select>

      <h1>Select the variables to compare: {{ selectedValues }}</h1>
      <label for="ledv">LEDV</label>
      <input
        type="checkbox"
        id="ledv"
        name="selectedValues"
        value="LEDV"
        v-model="selectedValues"
      />
      <br />

      <label for="redv">REDV</label>
      <input
        type="checkbox"
        id="redv"
        name="selectedValues"
        value="REDV"
        v-model="selectedValues"
      />
      <br />

      <label for="lesv">LESV</label>
      <input
        type="checkbox"
        id="lesv"
        name="selectedValues"
        value="LESV"
        v-model="selectedValues"
      />
      <br />

      <label for="resv">RESV</label>
      <input
        type="checkbox"
        id="resv"
        name="selectedValues"
        value="RESV"
        v-model="selectedValues"
      />
      <br />

      <label for="lvef">LVEF</label>
      <input
        type="checkbox"
        id="lvef"
        name="selectedValues"
        value="LVEF"
        v-model="selectedValues"
      />
      <br />

      <label for="rvef">RVEF</label>
      <input
        type="checkbox"
        id="rvef"
        name="selectedValues"
        value="RVEF"
        v-model="selectedValues"
      />
      <br />

      <label for="lvmass">LVMass</label>
      <input
        type="checkbox"
        id="lvmass"
        name="selectedValues"
        value="LVMass"
        v-model="selectedValues"
      />
      <br />

      <label for="rvmass">RVMass</label>
      <input
        type="checkbox"
        id="rvmass"
        name="selectedValues"
        value="RVMass"
        v-model="selectedValues"
      />
    </template>
    <div>
      <canvas ref="chart"></canvas>
      <div v-if="searchType === 'Singular'">
        <div style="width: 800px; height: 300px"><canvas id="average-values-chart"></canvas></div>
      </div>
      <div v-if="searchType === 'Comparison'">
        <div style="width: 800px; height: 300px"><canvas id="chart"></canvas></div>
      </div>
    </div>
  </main>
</template>

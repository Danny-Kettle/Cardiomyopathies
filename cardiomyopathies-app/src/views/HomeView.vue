<template>
  <main>
    <h1>Search Type: {{ searchType }}</h1>
    <select id="searchType" v-model="searchType">
      <option disabled value="">Please select a field</option>
      <option value="Overview">Overview</option>
      <option value="Singular">Singular</option>
      <option value="Comparison">Comparison</option>
    </select>

    <template v-if="searchType === 'Singular' && dataFetched">
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

    <template v-if="searchType === 'Comparison' && dataFetched">
      <div v-for="mutation in availableMutations" :key="mutation">
        <input type="checkbox" :value="mutation" v-model="mutationArray" />
        <label>{{ mutation }}</label>
      </div>
    </template>

    <template v-if="searchType === 'Overview' && dataFetched">
      <BarChart :data="chartData" :search-type="searchType" />
      <StackedBarChart :data="chartData" :search-type="searchType" />
      <ScatterPlot :data="chartData" :search-type="searchType" />
      <h1>Patient Data</h1>
      <PieChart :data="chartData" :search-type="searchType" />
    </template>

    <template v-if="searchType === 'Singular' && dataFetched">
      <PieChart :data="chartData" :search-type="searchType" :mutation-name="mutationName" />
      <StackedBarChart :data="chartData" :search-type="searchType" :mutation-name="mutationName" />
      <ScatterPlot :data="chartData" :search-type="searchType" :mutation-name="mutationName" />
    </template>

    <template v-if="searchType === 'Comparison' && dataFetched">
      <ScatterPlot :data="chartData" :search-type="searchType" :mutations="mutationArray" />
      <BarChart :data="chartData" :search-type="searchType" :mutations="mutationArray" />
    </template>
  </main>
</template>

<script>
import { getFirestore, collection, query, app, getDocs, getDoc } from '../firebase/database'
import StackedBarChart from '../components/charts/StackedBarChart.vue'
import BarChart from '../components/charts/BarChart.vue'
import ScatterPlot from '../components/charts/ScatterPlot.vue'
import PieChart from '../components/charts/PieChart.vue'

export default {
  components: {
    BarChart,
    StackedBarChart,
    ScatterPlot,
    PieChart
  },
  data() {
    return {
      searchType: 'Overview',
      mutationName: 'ACTC',
      mutationArray: [],
      availableMutations: [
        'ACTC',
        'MYBPC3',
        'MYH7',
        'MYL2',
        'TNNCI',
        'TNNI3',
        'TNNT2',
        'TPM1',
        'TTN'
      ],
      chartData: [],
      dataFetched: false
    }
  },
  async created() {
    if (!this.dataFetched) {
      await this.fetchChartData()
      this.dataFetched = true
    }
  },
  methods: {
    async fetchChartData() {
      const firestore = getFirestore(app)
      const collectionRef = collection(firestore, 'experimental_data_mutations')

      const querySnapshot = await getDocs(query(collectionRef))

      const promises = querySnapshot.docs.map(async (doc) => {
        const data = doc.data()
        if (data.row_num) {
          const patientsRef = data.row_num
          const patientsSnapshot = await getDoc(patientsRef)
          const patientData = patientsSnapshot.data()

          data.row_num = patientData
        }

        return JSON.parse(JSON.stringify(data))
      })

      const results = await Promise.all(promises)
      this.chartData = results
      this.dataFetched = true
    }
  }
}
</script>

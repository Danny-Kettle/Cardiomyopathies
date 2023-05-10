<template>
  <main>
    <h1>Search Type: {{ searchType }}</h1>

    <!-- Dropdown menu to select search type -->
    <select id="searchType" v-model="searchType">
      <option disabled value="">Please select a field</option>
      <option value="Overview">Overview</option>
      <option value="Singular">Singular</option>
      <option value="Comparison">Comparison</option>
    </select>

    <!-- Input to select apicalHCM filter -->
    <label>
      <input type="checkbox" v-model="apicalHcmFilter" />
      Show data for Apical HCM
    </label>

    <!-- Display mutation dropdown when search type is 'Singular' and data is fetched -->
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

    <!-- Display mutation checkboxes when search type is 'Comparison' and data is fetched -->
    <template v-if="searchType === 'Comparison' && dataFetched">
      <div v-for="mutation in availableMutations" :key="mutation">
        <input type="checkbox" :value="mutation" v-model="mutationArray" />
        <label>{{ mutation }}</label>
      </div>
    </template>

    <!-- Display overview charts when search type is 'Overview' and data is fetched -->
    <template v-if="searchType === 'Overview' && dataFetched">
      <BarChart
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :apical-hcm="apicalHcmFilter"
      />
      <StackedBarChart :key="componentKey" :data="chartData" :search-type="searchType" />
      <ScatterPlot :key="componentKey" :data="chartData" :search-type="searchType" />
      <h1>Patient Data</h1>
      <PieChart :key="componentKey" :data="chartData" :search-type="searchType" />
    </template>

    <!-- Display singular charts when search type is 'Singular' and data is fetched -->
    <template v-if="searchType === 'Singular' && dataFetched">
      <StackedBarChart
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutation-name="mutationName"
      />
      <ScatterPlot
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutation-name="mutationName"
      />
      <RadarChart
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutation-name="mutationName"
      />
      <PieChart
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutation-name="mutationName"
      />
    </template>

    <!-- Display comparison charts when search type is 'Comparison' and data is fetched -->
    <template v-if="searchType === 'Comparison' && dataFetched">
      <ScatterPlot
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutations="mutationArray"
      />
      <BarChart
        :key="componentKey"
        :data="chartData"
        :search-type="searchType"
        :mutations="mutationArray"
      />
    </template>
  </main>
</template>

<script>
// Import necessary components and firebase functions
import { getFirestore, collection, query, app, getDocs, getDoc } from '../firebase/database'
import StackedBarChart from '../components/charts/StackedBarChart.vue'
import BarChart from '../components/charts/BarChart.vue'
import ScatterPlot from '../components/charts/ScatterPlot.vue'
import PieChart from '../components/charts/PieChart.vue'
import RadarChart from '../components/charts/RadarChart.vue'

export default {
  components: {
    BarChart,
    StackedBarChart,  
    ScatterPlot,
    PieChart,
    RadarChart
  },
  data() {
    return {
      componentKey: 0,
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
      dataFetched: false,
      apicalHcmFilter: false
    }
  },
  // Fetch chart data upon component creation
  async created() {
    if (!this.dataFetched) {
      await this.fetchChartData()
      this.dataFetched = true
    }
  },
  methods: {
    // Fetch chart data from Firebase
    async fetchChartData() {
      const firestore = getFirestore(app)
      const collectionRef = collection(firestore, 'experimental_data_mutations')

      const querySnapshot = await getDocs(query(collectionRef))

      // Map query results to chart data format
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
      this.chartData = this.apicalHcmFilter
        ? results.filter((data) => data.apical_hcm === true)
        : results
      this.dataFetched = true

      console.log(this.chartData)
    }
  },
  watch: {
    apicalHcmFilter: {
      handler: async function (newValue, oldValue) {
        if (newValue !== oldValue) {
          await this.fetchChartData()
          this.componentKey += 1
        }
      },
      deep: true
    },
    searchType: {
      handler: async function (newValue, oldValue) {
        if (newValue !== oldValue) {
          await this.fetchChartData()
        }
      },
      deep: true
    }
  }
}
</script>

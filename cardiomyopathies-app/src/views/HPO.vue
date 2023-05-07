<template>
  <div class="min-h-full  flex flex-col py-8">
    <div class="flex flex-col gap-10 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
      <div class="flex flex-row w-full gap-10">
        <div class="relative w-full lg:w-3/4 mx-auto">
        <h1 class="text-slate-600 font-bold pb-6 lg:pb-12 text-xl lg:text-5xl">Database Search</h1>
        <label for="default-search" class="mb-2 text-xs lg:text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
          <input type="text" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" v-model="searchTerm" @input="search" placeholder="Search" required>
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <li @click="handlerTerm(item.id)" class="w-full cursor-pointer text-blue-400 hover:text-blue-600 px-4 py-2 border-b border-gray-200 rounded-t-lg" v-for="(item,index) in hpo.terms">
            TERM NAME: {{ item.name }} - TERM ID: {{ item.id }} - TERM CHILDREN COUNT: {{ item.childrenCount }} - DISEASE-ID: {{ item.ontologyId }}
          </li>
          <li @click="handlerDisease(item.diseaseId)" class="w-full cursor-pointer text-blue-400 hover:text-blue-600 px-4 py-2 border-b border-gray-200 rounded-t-lg" v-for="(item,index) in hpo.diseases">
            DISEASE DB: {{ item.db }} - DB NAME: {{ item.dbName }} - DISEASE-ID: {{ item.diseaseId }}
          </li>
          <li @click="handlerGene(item.geneId)" class="w-full cursor-pointer text-blue-400 hover:text-blue-600 px-4 py-2 border-b border-gray-200 rounded-t-lg" v-for="(item,index) in hpo.genes">
            GENE ID: {{ item.geneId }} - GENE SYMBOL: {{ item.geneSymbol }}
          </li>
        </ul>
      </div>
      </div>
      <div v-if="geneDetails.gene.geneId || diseaseDetails.disease.diseaseName || hpoDetails.details.name" class="w-full lg:w-3/4 h-fit bg-white px-10 py-12 rounded-lg">
          <div v-if="hpoDetails.details.name" class="flex flex-col gap-5">
            <h2 class="text-2xl font-bold tracking-wide text-gray-900">{{ hpoDetails.details.name }} <span class="text-sm font-thin italic">{{ hpoDetails.details.id }}</span></h2>
            <hr class=""/>
            <p class="text-gray-600 flex flex-col"><span class="font-bold mb-2">Term Definition </span>{{ hpoDetails.details.definition }}</p>
            <p class="text-gray-600">{{ hpoDetails.details.comment }}</p>
            <p v-if="hpoDetails.details.synonyms.length > 0" class="text-gray-600 flex flex-col gap-5"><span class="font-bold">Otherwise known as</span> <span v-for="(item,index) in hpoDetails.details.synonyms" :key="index"><span class="ml-2 mr-4">-</span>{{ item }}</span></p>
          </div>
          <div v-if="diseaseDetails.disease.diseaseName" class="mt-12 flex flex-col gap-5">
            <h2 class="text-2xl font-bold tracking-wide text-gray-900">{{ diseaseDetails.disease.diseaseName }} <span class="text-sm font-thin italic">{{ diseaseDetails.disease.diseaseId}}</span> </h2>
            <hr class=""/>
            <div v-for="(item,index) in diseaseDetails.catTermsMap" :key="index">
              <p class="text-gray-600 font-bold">{{item.catLabel}}</p>
              <hr/>
              <div class="flex flex-col gap-3 my-5 ml-4" v-for="(term, termIndex) in item.terms" :key="termIndex">         
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">ID - </span>{{term.ontologyId}}</p>
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">Name - </span>{{term.name}}</p>
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">Definition - </span>{{term.definition}}</p>
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">Sources - </span>{{term.sources}}</p>
                <hr/>
              </div>
            </div>
          </div>
          <div v-if="geneDetails.gene.geneId" class="mt-12 flex flex-col gap-5">
            <h2 class="text-2xl font-bold tracking-wide text-gray-900">{{ geneDetails.gene.geneSymbol }} <span class="text-sm font-thin italic">{{ geneDetails.gene.geneId }}</span></h2>
            <hr class=""/>
            <div class="flex flex-col gap-3" v-for="(item,index) in geneDetails.termAssoc" :key="index">
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">ID - </span>{{item.ontologyId}}</p>
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">Name - </span>{{item.name}}</p>
                <p class="text-gray-600"><span class="text-gray-600 font-semibold">Definition - </span>{{item.definition}}</p>
                <hr/>
            </div>
          </div>
        </div>
      <div v-if="!geneDetails.gene.geneId && !diseaseDetails.disease.diseaseName && !hpoDetails.details.name" class="w-full lg:w-3/4 h-fit bg-white px-10 py-12 rounded-lg">
        <div class="animate-pulse flex flex-col gap-8" >
          <div class=" w-1/2 h-3 bg-gray-400 block"></div>
          <hr/>
          <div class="flex flex-col gap-4">
            <div class=" w-full h-2 bg-gray-300"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
          </div>
          <hr/>
          <div class="flex w-2/3 flex-col gap-4">
            <div class=" w-full h-2 bg-gray-300"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
            <div class=" w-full h-2 bg-gray-300 block"></div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios, { all } from 'axios';
export default {
  data() {
  return {
    hpo: { diseases: [], genes: [], terms: [] },
    hpoDetails: {details:[]},
    imageUrls: [],
    geneDetails : {gene:[], termAssoc:[]},
    diseaseDetails : {disease:[], catTermsMap:[], geneAssoc:[]},
    error: false,
    searchTerm: '',
  };
},
  mounted() {
  this.fetchResults();
},



methods: {
  fetchResults() {
    axios
      .get(`https://hpo.jax.org/api/hpo/search?q=${this.searchTerm}`)
      .then((response) => {
        this.hpo = response.data;
        console.log(this.hpo);
      })
      .catch((error) => {
        console.log(error); 
      });
  },

  handlerTerm(hp){
    axios
      .get(`https://hpo.jax.org/api/hpo/term/${hp}`)
      .then((response) => {
        this.diseaseDetails= {disease:[], catTermsMap:[], geneAssoc:[]};
        this.geneDetails = {gene:[], termAssoc:[]};
        this.hpo = { diseases: [], genes: [], terms: [] };

        this.hpoDetails = response.data;
        console.log(this.hpoDetails);
        window.scrollTo({ top: 0, behavior: 'smooth' });

      })
      .catch((error) => {
        console.log(error); 
      });
  },
  
  handlerDisease(id){
    axios
      .get(`https://hpo.jax.org/api/hpo/disease/${id}`)
      .then((response) => {
        console.log(response.data);
        this.hpoDetails = {details:[]},
        this.geneDetails = {gene:[], termAssoc:[]};
        this.hpo = { diseases: [], genes: [], terms: [] };

        this.diseaseDetails = response.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((error) => {
        console.log(error); 
      });
  },

  handlerGene(id){
    console.log(id);
    axios
      .get(`https://hpo.jax.org/api/hpo/gene/${id}`)
      .then((response) => {
        console.log(response.data);
        this.hpo = { diseases: [], genes: [], terms: [] };
        this.hpoDetails = {details:[]},
        this.diseaseDetails= {disease:[], catTermsMap:[], geneAssoc:[]};
        this.geneDetails = response.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch((error) => {
        console.log(error); 
      });
  },

  search() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.fetchResults();
    }, 500);
  },
},
}
</script>
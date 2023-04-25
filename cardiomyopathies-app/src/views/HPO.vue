<template>
  <div class="h-full py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1  class="text-center font-bold pb-20 text-5xl	">HPO Diseases</h1>

      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  v-model="searchTerm" @input="search" placeholder="Search" required>
    </div>
      <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600" v-for="(item,index) in hpo.diseases">{{ index+1 }}.{{ item.dbName }}</li>
 
</ul>

</div>
</div>
    

</template>

<script>
import axios from 'axios';
export default {
  data() {
  return {
    hpo: [],
    imageUrls: [],
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

  search() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.fetchResults();
    }, 500);
  },

  redirectToArticle(url) {
    window.open(url, '_blank');
  },
},
}
</script>
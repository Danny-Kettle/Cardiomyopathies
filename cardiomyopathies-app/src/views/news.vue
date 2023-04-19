<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div v-for="(article, index) in articles" :key="index" class="relative h-96 rounded-lg cursor-pointer hover:opacity-80 transition-opacity text-white shadow-lg overflow-hidden" @click="redirectToArticle(article.url)">
          <img :src="imageUrls[index]" alt="" class="absolute inset-0 h-full w-full  object-cover" />
          <div class="absolute inset-0 bg-gradient-to-tl from-indigo-800 to-black opacity-60 z-10 "></div>
          <div class="absolute flex flex-col items-start inset-0 z-20 p-4">
            <h2 class="text-2xl text-center absolute font-bold mb-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{{ article.title }}</h2>
            <div class="flex flex-row justify-between w-full mt-auto">
              <p>{{ article.author && article.author.slice(0, 20) }}</p>
              <p>{{ article.publishedAt.slice(0, article.publishedAt.indexOf("T")) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],
      imageUrls: []
    }
  },
  mounted() {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Cardiomyopathy disease', 
        apiKey: 'af79177a035f46cc90620c82d23fc10b'
      }
    })
    .then(response => {
      this.articles = response.data.articles
      console.log(this.articles);

      // Map each article to a relevant image from Unsplash
      this.articles.forEach((article, index) => {
        axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: article.title,
            client_id: 'ckqFKuBCgY9FZbRISl0rd8xcUnGVnyRqgpoT6IuiZ2Y'
          }
        })
        .then(response => {
          const imageUrl = response.data.results[0].urls.regular;
          this.imageUrls[index] = imageUrl;
        })
        .catch(error => {
          console.log(error)
        })
      });
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    redirectToArticle(url) {
      window.open(url, '_blank')
    }
  }
}

</script>

<style scoped>
</style>

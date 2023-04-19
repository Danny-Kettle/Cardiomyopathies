<template>
  <div>
    <h1>News Results</h1>
    <ul>
      <li v-for="article in articles" :key="article._id">
        <h2>{{ article.source.Name }}</h2>
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>

        <a :href="article.url">Read More</a>
      </li>
    </ul>
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
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}


li {
  margin-bottom: 20px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}
p {
  margin-bottom: 10px;
}
</style>

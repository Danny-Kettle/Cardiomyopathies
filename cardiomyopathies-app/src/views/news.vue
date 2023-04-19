<template>
  <div>
    <h1>News Results</h1>
    <ul>
      <li v-for="article in articles" :key="article._id">
        <h1>{{ article.source.Name }}</h1>
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
      articles: []
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
    })
    .catch(error => {
      console.log(error)
    })
  }
}

</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color:red;
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


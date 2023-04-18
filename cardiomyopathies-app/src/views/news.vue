
<template>

</template>
<script >
import axios from 'axios';

var options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'Cardiomyopathy', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': 'AObhnnaGOQZUl6IhHGPiw9K--GvlqQTk4_uXJ1P6cdo'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data.articles[0]);
}).catch(function (error) {
    console.error(error);
});

  </script>


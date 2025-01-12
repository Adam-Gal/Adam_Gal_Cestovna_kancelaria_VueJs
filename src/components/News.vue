<template>
  <div>
    <div class="clanok" v-for="(article, index) in articles" :key="index">
      <div>
        <img :src="article.image" style="border-radius: 5px;" class="img-thumbnail img-fluid" :alt="article.title" loading="lazy">
      </div>
      <div class="sprava">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

interface Article {
  image: string;
  title: string;
  content: string;
}

export default {
  data() {
    return {
      articles: [] as Article[], // Explicitly typing the articles array
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        this.articles = data.articles;
      } catch (error) {
        console.error('Chyba pri načítaní článkov:', error);
      }
    },
  },
};
</script>

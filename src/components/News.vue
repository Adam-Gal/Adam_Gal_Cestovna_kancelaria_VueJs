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
import { defineComponent, ref, onMounted } from 'vue';

interface Article {
  image: string;
  title: string;
  content: string;
}

export default defineComponent({
  setup() {
    const articles = ref<Article[]>([]);

    const fetchArticles = async () => {
      try {
        const response = await fetch('/src/data_output.json');
        const data = await response.json();
        articles.value = data.articles;
      } catch (error) {
        console.error('Chyba pri načítaní článkov:', error);
      }
    };

    onMounted(() => {
      fetchArticles();
    });

    return {
      articles,
    };
  },
});
</script>
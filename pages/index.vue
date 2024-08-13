<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">News Search</h1>
    <div class="mb-4">
      <input type="text" v-model="searchQuery" placeholder="Search for news" class="w-full px-4 py-2 border rounded-md">
    </div>
    <div v-if="isLoading">
      <p>Loading news...</p>
    </div>
    <div v-else-if="error">
      <p>Error fetching news. Please try again later.</p>
    </div>
    <div v-else-if="articles.length === 0">
      <p>No news found for your search.</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NewsCard v-for="article in articles" :key="article.url" :article="article" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useFetch } from '#imports';

const searchQuery = ref('');
const isLoading = ref(false);
const error = ref(null);
const articles = ref([]);

const fetchNews = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const { data } = await useFetch('/everything', {
      method: 'GET',
      params: {
        q: searchQuery.value,
        pageSize: 20
      }
    });
    articles.value = data.articles;
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchNews();
});

const debouncedFetchNews = computed(() => {
  return debounce(fetchNews, 500);
});

watch(searchQuery, debouncedFetchNews);
</script>

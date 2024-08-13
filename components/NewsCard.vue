<template>
  <div class="bg-white rounded-md shadow-md p-4">
    <a :href="article.url" target="_blank" class="block">
      <img :src="article.urlToImage || 'https://via.placeholder.com/300x200'" alt="News Image" class="w-full rounded-md mb-2">
      <h2 class="text-xl font-bold mb-1">{{ article.title }}</h2>
      <p class="text-gray-600 mb-2">{{ article.description }}</p>
    </a>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" @click="copyUrl">
      Copy URL
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
});

const copyUrl = () => {
  navigator.clipboard.writeText(props.article.url)
    .then(() => {
      // Optional: Display a success message
      console.log('URL copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy URL:', err);
    });
};
</script>

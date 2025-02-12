<script setup>
import { onMounted, reactive, ref } from 'vue';

// Posts array
const posts = ref([]);

// Load posts from jsonplaceholder
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await response.json();
    console.log('✅ Posts loaded:', posts.value);
  } catch (error) {
    console.error('❌ Error fetching posts:', error);
  }
});
</script>

<template>
    <h1 class="text-4xl font-bold">Posts</h1>

    <div class="grid grid-cols-4 gap-4 mt-4">
        <div 
            v-for="post in posts" :key="post.id" 
            class="border-1 border-gray-200 rounded-md p-4 hover:shadow-lg"
        >
            <RouterLink class="text-2xl font-bold" :to="`/post/${post.id}`">
                {{ post.title }}
            </RouterLink>
            <p class="text-gray-500">{{ post.body }}</p>
        </div>
    </div>
</template>
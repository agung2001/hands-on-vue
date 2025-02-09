<script setup>
import { defineProps, onMounted, ref } from 'vue';

const post = ref({})
const props = defineProps({
  id: String
})

// Load post from jsonplaceholder
onMounted(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    const data = await response.json()
    post.value = data
    console.log('✅ Post loaded:', data)
})
</script>

<template>
    <h1 class="text-4xl font-bold py-4">
        {{ post.title }}
        <span class="text-red-500">
            (#{{ props.id }})
        </span>
    </h1>
    <p class="text-gray-500">{{ post.body }}</p>
</template>
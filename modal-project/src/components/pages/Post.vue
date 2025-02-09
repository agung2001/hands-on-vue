<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: String
})
</script>

<template>
    <h1 class="text-4xl font-bold py-4">
        Portfolio number 
        <span class="text-red-500">
            {{ props.id }}
        </span>
    </h1>
</template>
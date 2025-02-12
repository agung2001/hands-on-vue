<script setup>
import { ref, watch, watchEffect } from "vue";

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`Watch: count is ${newValue} and old value is ${oldValue}`);
});

watchEffect(() => {
  console.log(`WatchEffect: count is ${count.value}`);
});
</script>

<template>
  <h2 class="text-2xl font-bold py-4">Watch</h2>
  <p>Count: {{ count }}</p>
  <button class="bg-blue-500 text-white p-2" @click="count++">Increment</button>
</template>

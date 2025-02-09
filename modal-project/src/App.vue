<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="relative overflow-hidden min-h-screen bg-gray-50">

    <Navbar />
    
    <div class="max-w-7xl mx-auto py-4 px-8 mt-8 z-10 bg-white shadow-xl rounded-md">
      <router-view />
    </div>
  </div>
</template>

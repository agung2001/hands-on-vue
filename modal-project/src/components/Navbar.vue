<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import routes from '../routes';

const route = useRoute();
</script>

<template>
    <nav class="bg-white border-1 border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex-shrink-0">
            <a href="/" class="flex items-center">
              <span class="text-2xl">😎</span>
              <span class="pl-2 self-center whitespace-nowrap text-xl">Agung Sundoro</span>
            </a>
          </div>
  
          <!-- Navbar Menu -->
          <div class="ml-10 flex items-center space-x-4">
            <template v-for="menu in routes" :key="menu.path">
              <RouterLink :to="menu.path" 
                :class="{'bg-yellow-300': route.path === menu.path, 'hover:bg-yellow-400': route.path !== menu.path}" 
                class="px-3 py-2"
              >
                  {{ menu.name }}
              </RouterLink>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </template>
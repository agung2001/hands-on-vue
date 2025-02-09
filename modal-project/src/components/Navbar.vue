<script setup lang="ts">
import { reactive } from 'vue';

const menus = reactive([
  {
    name: 'Home',
    href: '/',
    isActive: true,
  },
  {
    name: 'Reference',
    href: '/reference',
    isActive: false,
  },
  {
    name: 'Modal',
    href: '/modal',
    isActive: false,
  },
])
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
            <template v-for="menu in menus" :key="menu.href">
              <a :href="menu.href" 
                :class="{'bg-yellow-400': menu.isActive, 'hover:bg-gray-700 hover:text-blue-500': !menu.isActive}" 
                class="px-3 py-2">
                  {{ menu.name }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </template>
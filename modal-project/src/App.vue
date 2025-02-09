<script setup lang="ts">
import Modals from './components/pages/Modals.vue';
import Navbar from './components/Navbar.vue';
import Reference from './components/pages/Reference.vue';
</script>

<template>
    <Navbar />

    <h1 class="text-3xl font-bold">Main</h1>

    <h2>Reference</h2>
    <Reference />

    <h2>Modal</h2>
    <Modals />
</template>

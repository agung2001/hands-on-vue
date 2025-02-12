<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';
import { IModal } from '../../types'

const { modal } = defineProps<{ modal: IModal }>()
const emit = defineEmits(['close', 'randomize-image'])
const showModal = ref(false)

// Open modal lifecycle, implement delay
onMounted(() => {
    console.log(`✅ ${modal.title} is mounted, open in ${modal.delay}ms`)
    setTimeout(() => {
        showModal.value = true
    }, modal.delay)
})

// Close modal lifecycle
onUnmounted(() => {
    console.log(`❌ ${modal.title} is unmounted`)
})

// Update modal lifecycle
onUpdated(() => {
    console.log(`🔄 ${modal.title} is updated`)
})
</script>

<template>
    <div 
        class="backdrop" 
        @click.self="() => { emit('close') }"
    >
        <div v-if="showModal" class="modal content-center">
            <h3 class="text-2xl font-bold">{{ modal.title }}</h3>
            <p class="text-gray-500">{{ modal.description }}</p>
            <button @click="() => { emit('randomize-image') }" class="cursor-pointer bg-blue-500 text-white px-6 py-2 my-4 shadow-md rounded-md">
                Randomize Image
            </button>
            <img
                width="200px" 
                class="mx-auto"
                :src="modal.image"
                :alt="modal.title"
            >
            <hr>
            <slot name="footer"></slot>
        </div>
        <div v-else class="loading">
            <img
                width="200px" 
                class="mx-auto"
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXN0d2d2dTBuenpoOG9lbTd0Z2p2aTV5MmF5dnlyODJjdHZ3cGwyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aSzp02xpRLOhy/giphy.gif"
                :alt="modal.title"
            >
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #ff0000;
}
</style>
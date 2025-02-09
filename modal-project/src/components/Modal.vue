<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';
import { IModal } from '../types'

const { modal } = defineProps<{ modal: IModal }>()
const emit = defineEmits(['close', 'randomize-image'])
const showModal = ref(false)

// Open modal lifecycle, implement delay
onMounted(() => {
    console.log(`${modal.title} is mounted, open in ${modal.delay}ms`)
    setTimeout(() => {
        showModal.value = true
    }, modal.delay)
})

// Close modal lifecycle
onUnmounted(() => {
    console.log(`${modal.title} is unmounted`)
})

// Update modal lifecycle
onUpdated(() => {
    console.log(`${modal.title} is updated`)
})
</script>

<template>
    <div 
        class="backdrop" 
        @click.self="() => { emit('close') }"
    >
        <div v-if="showModal" class="modal">
            <h1>{{ modal.title }}</h1>
            <p>{{ modal.description }}</p>
            <div>
                <button @click="() => { emit('randomize-image') }">Randomize Image</button>
            </div>
            <img
                width="200px" 
                :src="modal.image"
                :alt="modal.title"
            >
            <hr>
            <slot name="footer"></slot>
        </div>
        <div v-else class="loading">
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #ff0000;
}
</style>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { IModal } from '../types'

const { modal } = defineProps<{ modal: IModal }>()
const emit = defineEmits(['close'])
const showModal = ref(false)

onMounted(() => {
    console.log(`${modal.title} is mounted, open in ${modal.delay}ms`)
    setTimeout(() => {
        showModal.value = true
    }, modal.delay)
})

onUnmounted(() => {
    console.log(`${modal.title} is unmounted`)
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
            <slot name="content"></slot>
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
<script setup lang="ts">
import { reactive } from 'vue';
import type { IModal } from '../types'
import Modal from './Modal.vue'

// Modals array
const modals: IModal[] = reactive([
    {
        title: 'Modal 1',
        description: 'This is a modal',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXp6MmxnNnhnYml5ZXF0eWJkcWw1NGlma2VkNHRmOWdsY203MndpdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif',
        delay: 1000,
        isOpen: false
    },
    {
        title: 'Modal 2',
        description: 'This is a modal 2',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RpbWtwMTFsYzBycXNsbmdnZDE5MzZpcmUxc3JvOHhkNWhyN2FjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iVddRfGnwPd4TnZFpo/giphy.gif',
        delay: 2000,
        isOpen: false
    }
])

// Get random image from picsum.photos
const getRandomImage = () => {
    const randomId = Math.floor(Math.random() * 300) + 1
    return `https://picsum.photos/id/${randomId}/200/300`
}
</script>

<template>
    <template v-for="(modal, index) in modals" :key="index">  
        <teleport to=".modals">
            <Modal 
                v-if="modal.isOpen"
                :modal="modal" 
                :getRandomImage
                @close="() => { modal.isOpen = false }" 
                @randomize-image="() => { 
                    const randomImage = getRandomImage()
                    console.log('Get random image:', randomImage)
                    modal.image = randomImage
                }"
            >
                <template #footer>
                    Copyright {{ new Date().getFullYear() }} by Agung Sundoro
                </template>
            </Modal>
        </teleport>
        <button @click="() => { modals[index].isOpen = true }">
            Open {{ modal.title }}
        </button>
    </template>
</template>
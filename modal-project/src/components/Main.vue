<script setup lang="ts">
import { reactive } from 'vue';
import Modal from './Modal.vue'
import Reference from './Reference.vue';
import { IModal } from '../types'

const modals: IModal[] = reactive([
    {
        title: 'Modal',
        description: 'This is a modal',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXp6MmxnNnhnYml5ZXF0eWJkcWw1NGlma2VkNHRmOWdsY203MndpdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif',
        isOpen: false
    },
    {
        title: 'Modal 2',
        description: 'This is a modal 2',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RpbWtwMTFsYzBycXNsbmdnZDE5MzZpcmUxc3JvOHhkNWhyN2FjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iVddRfGnwPd4TnZFpo/giphy.gif',
        isOpen: false
    }
])
</script>

<template>
    <div>
        <h1>Main</h1>

        <h2>Reference</h2>
        <Reference />

        <h2>Modal</h2>
        <template v-for="(modal, index) in modals" :key="index">  
            <teleport to=".modals">
                <Modal 
                    :modal="modal" 
                    @open="() => { modal.isOpen = true }"
                    @close="() => { modal.isOpen = false }" 
                >
                    <template #content>
                        <img
                            width="100px" 
                            :src="modal.image"
                            :alt="modal.title"
                        >
                    </template>
                    <template #footer>
                        Copyright {{ new Date().getFullYear() }} by Agung Sundoro
                    </template>
                </Modal>
            </teleport>  
            <button @click="() => { modals[index].isOpen = true }">
                Open {{ modal.title }}
            </button>
        </template>
    </div>
</template>


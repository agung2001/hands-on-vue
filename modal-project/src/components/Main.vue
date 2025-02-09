<script setup lang="ts">
import { reactive } from 'vue';
import Modal from './Modal.vue'
import Reference from './Reference.vue';
import { IModal } from '../types'

const modal: IModal = reactive({
    title: 'Modal',
    description: 'This is a modal',
    isOpen: false
})
</script>

<template>
    <div>
        <h1>Main</h1>

        <h2>Reference</h2>
        <Reference />

        <h2>Modal</h2>
        <Modal 
            :modal="modal" 
            @open="() => { modal.isOpen = true }"
            @close="() => { modal.isOpen = false }" 
        />
    </div>
</template>


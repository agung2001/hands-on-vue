<script setup lang="ts">
import Modal from './Modal.vue'
import Reference from './Reference.vue';
import { IModal } from '../types'

const modal: IModal = {
    title: 'Modal',
    description: 'This is a modal',
    isOpen: true
}
</script>

<template>
    <div>
        <h1>Main</h1>
        <Reference />
        <Modal :modal="modal" />
    </div>
</template>


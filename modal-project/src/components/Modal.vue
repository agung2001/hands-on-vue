<script setup lang="ts">
import { IModal } from '../types'

const { modal } = defineProps<{ modal: IModal }>()
const emit = defineEmits(['open', 'close'])
</script>

<template>
    <div v-if="modal.isOpen">
        <div class="backdrop" @click.self="() => { emit('close') }">
            <div class="modal">
                <h1>{{ modal.title }}</h1>
                <p>{{ modal.description }}</p>
                <slot name="content"></slot>
                <hr>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
h1 {
    color: #ff0000;
}
</style>
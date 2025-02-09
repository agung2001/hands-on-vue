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
h1 {
    color: #ff0000;
}
</style>
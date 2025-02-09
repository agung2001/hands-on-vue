<script setup>
import { useTemplateRef } from 'vue'

// ref is used to reference the input element
const inputRef = useTemplateRef('inputRef')

const handleClick = () => {
    console.log(inputRef.value)
    inputRef.value.classList.add('active')
    inputRef.value.focus()
}
</script>

<template>
    <h2>This is a reference component</h2>

    <input type="text" ref="inputRef">
    <button @click="handleClick">Click me</button>
</template>

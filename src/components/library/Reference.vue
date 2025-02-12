<script setup>
import { useTemplateRef } from "vue";

// ref is used to reference the input element
const inputRef = useTemplateRef("inputRef");

const handleClick = () => {
  console.log(inputRef.value);
  inputRef.value.classList.add("active");
  inputRef.value.focus();
};
</script>

<template>
  <h2 class="text-2xl font-bold py-4">Reference</h2>
  <p>This is a reference component</p>

  <div class="flex items-center mt-4">
    <input
      type="text"
      ref="inputRef"
      class="border-2 border-gray-300 rounded-md p-2 mr-2"
    />
    <button
      @click="handleClick"
      class="cursor-pointer bg-blue-500 text-white p-2"
    >
      Click me
    </button>
  </div>
</template>

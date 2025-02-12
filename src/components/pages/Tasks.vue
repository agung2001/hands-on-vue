<script setup>
import { useTaskStore } from '../../stores/TaskStore';

const taskStore = useTaskStore();
</script>

<template>
  <h1 class="text-4xl font-bold py-4">Tasks</h1>
  <button @click="taskStore.addTask('Task 1')" class="bg-blue-500 text-white px-4 py-2">Add Task</button>

  <div class="flex flex-col gap-4 pt-4">
    <div 
      v-for="task in taskStore.tasks" :key="task.id" 
      class="cursor-pointer bg-gray-100 p-4 rounded-md flex justify-between" 
      :class="{ 'bg-green-500': task.completed, 'bg-yellow-500': !task.completed }"
      @click="taskStore.toggleTask(task.id)"
    >
      <h2>{{ task.title }}</h2>

      <button @click="taskStore.deleteTask(task.id)" class="bg-red-500 text-white px-4 py-2">
          <i class="fa-solid fa-trash"></i>
        </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTaskStore } from "../../stores/TaskStore";
import { ref } from "vue";
const taskStore = useTaskStore();
const { totalTasks, totalCompletedTasks, totalIncompleteTasks } = storeToRefs(taskStore);
const newTask = ref("");

const handleSubmit = () => {
  taskStore.addTask(newTask.value);
  newTask.value = "";
};
</script>

<template>
  <div class="flex gap-2 float-right">
    <button
      class="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded"
      @click="taskStore.loadTasks"
    >
      Load Tasks from REST API
    </button>
    <button
      class="cursor-pointer bg-red-500 text-white px-4 py-2 rounded"
      @click="taskStore.$reset"
    >
      Reset
    </button>
  </div>
  <h1 class="text-4xl font-bold py-4">Tasks</h1>

  <div class="flex gap-2 py-2 justify-between">
    <form @submit.prevent="handleSubmit" class="flex gap-2">
      <input
        v-model="newTask"
        type="text"
        placeholder="Enter task title"
        class="border border-gray-300 px-4 py-2 rounded"
      />
      <button type="submit" class="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  </div>

  <div class="flex gap-2 py-2 justify-between">
    <div class="flex gap-2">
      <p class="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
        Total tasks: {{ totalTasks }}
      </p>
      <p class="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
        Total completed tasks: {{ totalCompletedTasks }}
      </p>
      <p class="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
        Total incomplete tasks: {{ totalIncompleteTasks }}
      </p>
    </div>

    <div class="flex gap-2">
      <button
        @click="taskStore.filter = 'all'"
        class="cursor-pointer bg-gray-100 px-4 py-2 rounded-full text-sm font-bold"
      >
        All
      </button>
      <button
        @click="taskStore.filter = 'completed'"
        class="cursor-pointer bg-gray-100 px-4 py-2 rounded-full text-sm font-bold"
      >
        Completed
      </button>
      <button
        @click="taskStore.filter = 'incomplete'"
        class="cursor-pointer bg-gray-100 px-4 py-2 rounded-full text-sm font-bold"
      >
        Incomplete
      </button>
    </div>
  </div>

  <div class="flex flex-col gap-4">
    <div
      v-for="task in taskStore.filteredTasks"
      :key="task.id"
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

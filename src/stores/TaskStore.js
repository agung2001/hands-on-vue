import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        completed: false,
      },
      {
        id: 2,
        title: 'Task 2',
        completed: false,
      },
      {
        id: 3,
        title: 'Task 3',
        completed: true,
      },
    ],
    filter: 'all',
  }),
  getters: {
    completedTasks: (state) => {
      return state.tasks.filter((task) => task.completed);
    },
    totalTasks: (state) => {
      return state.tasks.length;
    },
    totalCompletedTasks: (state) => {
      return state.tasks.filter((task) => task.completed).length;
    },
    totalIncompleteTasks: (state) => {
      return state.tasks.filter((task) => !task.completed).length;
    },
    filteredTasks: (state) => {
      if (state.filter === 'all') {
        return state.tasks;
      }
      return state.tasks.filter((task) => task.completed === (state.filter === 'completed'));
    },
  },
  actions: {
    async loadTasks() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await response.json();
        this.tasks = data.map((task) => ({
          id: task.id,
          title: task.title,
          completed: task.completed,
        }));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    },
    addTask(title) {
      this.tasks.push({ id: this.tasks.length + 1, title, completed: false });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    },
  },
});

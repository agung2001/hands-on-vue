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
    }),
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
    },
});
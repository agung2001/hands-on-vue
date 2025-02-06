const { createApp, ref } = Vue

// Create and mount the app
const app = createApp({
    // Data binding
    data() {
        return {
            title: 'Learn Vue JS',
            author: 'Agung',
            location: 'Jakarta',
            age: 20,
            options: ['Yes', 'No'],
            pick: 'Yes'
        }
    },

    // Methods
    methods: {
        changeAuthor() {
            this.author = 'Sundoro'
        }
    }
})
app.mount('#app')
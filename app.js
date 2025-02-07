const { createApp, ref } = Vue

// Create and mount the app
const app = createApp({
    // Data binding : data that can be used in the template
    data() {
        return {
            title: 'Learn Vue JS',
            author: 'Agung',
            location: 'Jakarta',
            age: 20,
            isIndonesian: true,
            showDetails: false,
            mouse: {
                x: 0,
                y: 0
            },
            portfolio: [
                {
                    name: 'Portfolio 1',
                    url: 'https://portfolio1.com',
                    isVue: true
                },
                {
                    name: 'Portfolio 2',
                    url: 'https://portfolio2.com',
                    isVue: true
                },
                {
                    name: 'Portfolio 3',
                    url: 'https://portfolio3.com',
                    isVue: true
                }
            ]
        }
    },

    // Methods : function that can be used in the template
    // Re-run every time they are called. Use for logic that needs to execute on demand (e.g., event handlers).
    // https://www.w3schools.com/vue/vue_methods.php
    methods: {
        changeAuthor() {
            this.author = 'Sundoro'
        },
        handleMouseEvent(event) {
            console.log(event.target.textContent)
        },
        handleMouseMoveEvent(event) {
            this.mouse.x = event.clientX
            this.mouse.y = event.clientY
        },
        toggleVuePortfolio(item) {
            console.log(item)
            item.isVue = !item.isVue
        }
    },

    // Computed : a property used to define reactive derived state. It allows you to create a value that is automatically updated when its dependencies change. 
    // Computed properties are cached based on their dependencies, making them efficient for performing calculations or transformations on data.
    // Cached based on dependencies. Use for derived data that doesn't change often.
    computed: {
        filteredPortfolio() {
            return this.portfolio.filter(item => item.isVue)
        }
    }
})
app.mount('#app')
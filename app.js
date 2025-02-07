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
            isIndonesian: true,
            showDetails: false,
            mouse: {
                x: 0,
                y: 0
            },
            portfolio: [
                {
                    name: 'Portfolio 1',
                    url: 'https://portfolio1.com'
                },
                {
                    name: 'Portfolio 2',
                    url: 'https://portfolio2.com'
                },
                {
                    name: 'Portfolio 3',
                    url: 'https://portfolio3.com'
                }
            ]
        }
    },

    // Methods
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
        }
    }
})
app.mount('#app')
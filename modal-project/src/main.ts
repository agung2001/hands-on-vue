import { createMemoryHistory, createRouter } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwindcss.css'
import './assets/global.css'

// const routes = [
//     {
//         path: '/',
//         component: Home,
//     },
//     {
//         path: '/reference',
//         component: Reference,
//     },
//     {
//         path: '/modals',
//         component: Modals,
//     },
// ]

// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// })

const app = createApp(App)
app.mount('#app')

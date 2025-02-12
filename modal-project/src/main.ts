import { createPinia } from 'pinia';
import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import './assets/tailwindcss.css'
import './assets/global.css'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

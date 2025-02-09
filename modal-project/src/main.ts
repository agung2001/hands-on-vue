import { createMemoryHistory, createRouter } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwindcss.css'
import './assets/global.css'
import routes from './routes'

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

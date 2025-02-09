import Home from './components/pages/Home.vue';
import Modals from './components/pages/Modals.vue';
import Reference from './components/pages/Reference.vue';

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/reference',
        component: Reference,
    },
    {
        path: '/modals',
        component: Modals,
    },
]
import Home from './components/pages/Home.vue';
import Modals from './components/pages/Modals.vue';
import Reference from './components/pages/Reference.vue';

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Reference',
        path: '/reference',
        component: Reference,
    },
    {
        name: 'Modals',
        path: '/modals',
        component: Modals,
    },
]
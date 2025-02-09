import Home from './components/pages/Home.vue';
import Modals from './components/pages/Modals.vue';
import NotFound from './components/pages/NotFound.vue';
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
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
]
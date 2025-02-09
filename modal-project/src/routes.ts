import Home from './components/pages/Home.vue';
import Modals from './components/pages/Modals.vue';
import NotFound from './components/pages/NotFound.vue';
import Post from './components/pages/Post.vue';
import Posts from './components/pages/Posts.vue';
import Reference from './components/pages/Reference.vue';

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
        isMenu: true,
    },
    {
        name: 'Reference',
        path: '/reference',
        component: Reference,
        isMenu: true,
    },
    {
        name: 'Posts',
        path: '/posts',
        component: Posts,
        isMenu: true,
    },
    {
        name: 'Post',
        path: '/post/:id',
        component: Post,
        props: true,
        isMenu: false,
    },
    {
        name: 'Modals',
        path: '/modals',
        component: Modals,
        isMenu: true,
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFound,
        isMenu: false,
    },
]
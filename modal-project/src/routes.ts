import Modals from './components/pages/Modals.vue';
import NotFound from './components/pages/NotFound.vue';
import Post from './components/pages/Post.vue';
import Posts from './components/pages/Posts.vue';
import Reference from './components/pages/Reference.vue';

export default [
    {
        name: 'Posts',
        path: '/',
        component: Posts,
        isMenu: true,
    },
    {
        name: 'Reference',
        path: '/reference',
        component: Reference,
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
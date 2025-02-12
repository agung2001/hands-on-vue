import Modals from "./components/pages/Modals.vue";
import NotFound from "./components/pages/NotFound.vue";
import Post from "./components/pages/Post.vue";
import Posts from "./components/pages/Posts.vue";
import Samples from "./components/pages/Samples.vue";

export default [
  {
    name: "Posts",
    path: "/",
    component: Posts,
    isMenu: true,
  },
  {
    name: "Post",
    path: "/post/:id",
    component: Post,
    props: true,
    isMenu: false,
  },
  {
    name: "Modals",
    path: "/modals",
    component: Modals,
    isMenu: true,
  },
  {
    name: "Samples",
    path: "/samples",
    component: Samples,
    isMenu: true,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: NotFound,
    isMenu: false,
  },
];

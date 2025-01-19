import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import Catchall from "../views/Catchall.vue";
import ImprintView from "../views/ImprintView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            component: HomeView
        },
        {
            path:"/impressum",
            component: ImprintView
        },
        {
            path:"/:pathMatch(.*)*",
            component: Catchall
        }
    ]
});

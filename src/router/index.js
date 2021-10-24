import { createRouter, createWebHashHistory } from "vue-router";
import Resume from "@/views/Resume.vue";

const routes = [
  {
    path: "/",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

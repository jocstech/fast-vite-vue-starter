// 建议根据功能的不同来拆分到 modules 文件夹中，好处是方便后期维护
import { createRouter, createWebHistory } from 'vue-router';

import baseRouters from './modules/base';

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;

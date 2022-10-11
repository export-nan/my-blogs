import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import singLayout from '@/layout/sign.vue';
import homeLayout from '@/layout/home.layout.vue';

const routes:RouteRecordRaw[] = [
  {
    path: '/sign',
    component: singLayout,
    redirect: '/sign/email-login',
    children: [
      {
        path: '/sign/email-login',
        name: 'email_login',
        component: () => import('@/view/login/email.vue'),
      },
    ],
  },
  {
    path: '/',
    component: homeLayout,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/login/home/index.vue'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

import singLayout from '@/layout/sign.vue';

const routes = [
  {
    path: '/sign',
    component: singLayout,
    redirevt: '/sign/email-login',
    children: [
      {
        path: '/sign/email-login',
        name: 'email_login',
        component: () => import('@/view/login/email.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@nan/icon'
import './assets/css/index.sass';

createApp(App).use(router).mount('#app');

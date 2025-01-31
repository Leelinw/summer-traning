import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import store from '@/store';

const app = createApp(App);
app.use(Antd);
app.use(store);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});

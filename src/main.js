import { createApp } from 'vue';
// 引入项目基础样式
import './style.css';
import App from './App.vue';
// 第三方插件
import store from './store';
import router from './router';
import TDesign from 'tdesign-vue-next';
// 引入TDesign组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

createApp(App).use(store).use(router).use(TDesign).mount('#app');

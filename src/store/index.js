// 开发中需要将不同功能所对应的状态，拆分到不同的 modules，好处如同路由模块一样。
import { createPinia } from 'pinia';

const store = createPinia();

export default store;

export * from './modules/counter';

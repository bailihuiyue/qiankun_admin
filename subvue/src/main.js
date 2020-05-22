import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

export async function bootstrap() {
  console.log('vue app bootstraped');
}

let instance = null;

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount() {
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  instance.$destroy();
  instance = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  mount();
}

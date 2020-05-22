// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from '@/locales/i18n'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './proComponents/global.less'
import { Dialog } from '@/proComponents'

Vue.config.productionTip = false

Vue.use(Dialog)

// TODO:tip:
// 1.如果子应用使用hash模式,activeRule需要写上完整url,比如:/#/a/b
// 2.entry写成子应用根目录就行了
// 3.activeRule支持数组,对应子应用的多个路由
// 4.经过测试,主/子应用如果路由一致,可以activeRule: ""(目前测试中发现hash下必须路由一致)
registerMicroApps([
  {
    name: 'qiankunsubvue',
    entry: '//localhost:8080/#/',
    container: '#qiankunContainer',
    activeRule: ''
  }
])

start()

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#master')

window.Vue2 = window.Vue
window.Vue = undefined

// TODO: ~~1.主应用无法使用hsah,(主,子应用同时使用hash报错)~~
// ~~2.子应用懒加载~~
// ~~3.同一个子应用的多个入口~~
// 4.普通html页面如何接入
// 5.引入图片的路径
// 6.整理出Vue demo, React Demo, Jq Demo
// 7.写好说明文档
// 8.entry是否可以为./的形式
// 9.webpack解决跨域问题
// 10.不要history,hash混用,主/子应用要用同一种路由模式
// 11.权限测试

// TODO:系统bug:1.menu hidden有问题,2.语言有问题

// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
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

registerMicroApps([
  {
    name: 'qiankunsubvue',
    entry: '//localhost:8080/',
    container: '#qiankunContainer',
    activeRule: ['/#/sub-vue/p1', '/#/sub-vue/p2']
  },
  {
    name: 'qiankunsubreact',
    entry: '//localhost:3000',
    container: '#qiankunContainer',
    activeRule: ['/#/sub-react/p3', '/#/sub-react/p4']
  },
  {
    name: 'qiankunsubjq',
    entry: '//localhost:5500/index.html',
    container: '#qiankunContainer',
    activeRule: '/#/sub-jquery/p5'
  },
  {
    name: 'qiankunsubjq2',
    entry: '//localhost:5500/index2.html',
    container: '#qiankunContainer',
    activeRule: '/#/sub-jquery/p6'
  }
])

// 目前不管用
// setDefaultMountApp('/#/sub-vue/p1')

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

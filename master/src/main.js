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

// TODO:tip:
// 1.如果子应用使用hash模式,activeRule需要写上完整url,比如:/#/a/b
// 2.entry写成子应用根目录就行了
// 3.activeRule支持数组,对应子应用的多个路由
// 4.经过测试,只有一子应用,如果主/子应用如果路由一致,可以activeRule: ""(目前测试中发现hash下必须路由一致)
// 5.activeRule可以写成数组,作为子应用app的多入口
// 6.经测试,react项目使用react-router v5, hash模式下点击左侧菜单子应用页面不跳转(虽然路由有变化),切换到react-router 6.0.0-alpha.5可以了
// 7.经过测试,传统jq项目想要接入的话每一个页面要建立一个单独的子应用,如下所示qiankunsubjq,和qiankunsubjq2
// 8.react,vue devServer配置headers实现跨域,jq只能自己改服务器了(vsCode live server自带跨域)
// 9.主应用build完成后启动url,地址可能会变成http://127.0.0.1:5503/index.html#/sub-react/p4,这样就不能识别子应用了,需要把url改成http://127.0.0.1:5503/#/sub-react/p4,也就是去掉index.html才行
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

// TODO: ~~1.主应用无法使用hsah,(主,子应用同时使用hash报错)~~
// ~~2.子应用懒加载~~
// ~~3.同一个子应用的多个入口~~
// ~~4.普通html页面如何接入~~
// ~~5.引入图片的路径:把webpack的publicPath规定成绝对路径就行了~~
// ~~6.整理出Vue demo, React Demo, Jq Demo~~
// 7.写好说明文档
// ~~8.entry是否可以为./的形式(不可以,必须是绝对路径)~~
// ~~9.webpack解决跨域问题~~
// ~~10.不要history,hash混用,主/子应用要用同一种路由模式~~
// ~~11.权限测试~~
// ~~12.react 懒加载报找不到chunk.js,所以在webpack中把改成 publicPath = isEnvProduction ? paths.servedPath : isEnvDevelopment && '//localhost:3000/'; 文件位置搜索:TODO:为了微前端而把端口写死3000即可~~
// ~~13.react目前路由切换不了(升级router到6)~~

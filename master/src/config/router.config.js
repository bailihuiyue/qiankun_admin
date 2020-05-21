// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
    ]
  },
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.index' },
    redirect: '/dashboard/qiajnkunVue',
    children: [
      // dashboard
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: '/dashboard/qiajnkunVue',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, roles: ['admin'] },
        children: [
          {
            path: 'qiajnkunVue',
            name: 'QiajnkunVue',
            meta: { title: 'menu.analysis', keepAlive: false, roles: ['admin'] }
          },
          {
            path: 'qiajnkunVue2',
            name: 'qiajnkunVue2',
            meta: { title: 'menu.testFun', keepAlive: true, roles: ['admin'] }
          }
        ]
      },
      {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
        hidden: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export const asyncRouterMap = []

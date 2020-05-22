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
    redirect: '/sub-vue/p1',
    children: [
      // dashboard
      {
        path: 'sub-vue',
        name: 'sub-vue',
        redirect: '/sub-vue/p1',
        component: RouteView,
        meta: { title: 'menu.vue', keepAlive: true, icon: bxAnaalyse, roles: ['admin'] },
        children: [
          {
            path: 'p1',
            name: 'p1',
            meta: { title: 'menu.p1', keepAlive: false, roles: ['admin'] }
          },
          {
            path: 'p2',
            name: 'p2',
            meta: { title: 'menu.p2', keepAlive: true, roles: ['admin'] }
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

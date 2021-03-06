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
      // sub-vue
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
      // sub-react
      {
        path: 'sub-react',
        name: 'sub-react',
        redirect: '/sub-react/p3',
        meta: { title: 'menu.react', icon: bxAnaalyse, roles: ['admin'] },
        children: [
          {
            path: 'p3',
            name: 'p3',
            meta: { title: 'menu.p1', roles: ['admin'] }
          },
          {
            path: 'p4',
            name: 'p4',
            meta: { title: 'menu.p2', roles: ['admin'] }
          }
        ]
      },
      // sub-jquery
      {
        path: 'sub-jquery',
        name: 'sub-jquery',
        redirect: '/sub-jquery/p5',
        meta: { title: 'menu.jquery', icon: bxAnaalyse, roles: ['admin'] },
        children: [
          {
            path: 'p5',
            name: 'p5',
            meta: { title: 'menu.p1', roles: ['admin'] }
          },
          {
            path: 'p6',
            name: 'p6',
            meta: { title: 'menu.p2', roles: ['admin'] }
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

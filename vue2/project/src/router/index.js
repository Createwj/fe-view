import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routess from './routes/home'
console.log(1132)
console.log(routess)

const importRoutes = require.context('./routes', false, /\.js$/)
console.log(importRoutes.keys())

const routes = importRoutes
  .keys()
  .reduce((routesArr, path) => routesArr.concat(importRoutes(path).default), [])

  console.log(routes)

// require.context

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: 'Done',
          requireAuth: false,
        },
      },
      ...routes,
    ],
  })

export default router
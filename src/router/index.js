import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/crear_tarea',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editar_tarea',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
      const user = auth.currentUser
      // console.log('user', user)
      if(!user){
        next({path:'/login'})
      }else{
        next()
      }
  }else{
    next()
  }
})

export default router

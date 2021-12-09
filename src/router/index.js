import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/morador',
    name: 'Morador',
    component: () => import('../views/Morador.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    beforeEnter: (to, from, next) => {
      const isAdmin = store.state.usuario && store.state.usuario.perfil == 'ROLE_ADMIN';
      console.log(isAdmin);
      if(!isAdmin) {
        next('/notauthorized');
      } else {
        next();
      }
    }
  },
  {
    path: '/notauthorized',
    name: 'Not Authorized',
    component: () => import('../views/NotAuthorized.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.usuario;  // trying to access a restricted page + not logged in
  
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router

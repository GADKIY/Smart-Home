import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Member',
    component: () => import('../views/member.vue'),
    meta: {
      layout: "default"
    }
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import('../views/rooms.vue'),
    meta: {
      layout: "default"
    }
  },
  {
    path: '/statistics',
    name:'Statistics',
    component:() => import('../views/statistics.vue'),
    meta: {
      layout: "default"
    }
  },
  {
    path: '/billing',
    name: 'Billing',
    component: () => import('../views/utilityBilling.vue'),
    meta: {
      layout: "default"
    }
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('../views/members.vue'),
    meta: {
      layout: "default"
    }
  },
  {
    path: "/login",
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta:{
      layout: 'auth'
    }
  }
]

const router = new VueRouter({
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})

router.beforeEach((to, form, next)=>{
  if(to.path !== "/login"){
    if(localStorage.getItem("user")!==null){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import('../views/rooms.vue')
    ,
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
    path: "/security",
    name: 'Security',
    component: () => import('../views/security.vue'),
    meta:{
      layout: 'auth'
    }
  }
  
]

const router = new VueRouter({
  routes
})

export default router

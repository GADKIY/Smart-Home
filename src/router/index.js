import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Member',
    component: () => import('../views/member.vue')
  },
  {
    path: '/rooms',
    name: 'Rooms',    
    component: () => import('../views/rooms.vue')
  },
  {
    path: '/statistics',
    name:'Statistics',
    component:() => import('../views/statistics.vue')
  },
  {
    path: '/billing',
    name: 'Billing',
    component: () => import('../views/utilityBilling.vue')
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('../views/members.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router

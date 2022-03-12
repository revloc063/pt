import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypeView from '../views/TypeView.vue'
import ChartView from '../views/ChartView.vue'
import AddView from '../views/AddView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/type',
    name: 'type',
    component: TypeView
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import IndexMember from '../views/IndexMember.vue'
import Game from '../views/Game.vue'
import Tanghuay from '../views/Tanghuay.vue'
// import '../assets/flag-icon.css'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    props: true,
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    props: true,
    component: Signin
  },
  {
    path: '/indexmember',
    name: 'IndexMember',
    props: true,
    component: IndexMember
  },
  {
    path: '/game',
    name: 'Game',
    props: true,
    component: Game
  },
  {
    path: '/tanghuay',
    name: 'Tanghuay',
    props: true,
    component: Tanghuay
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

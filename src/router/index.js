import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Post from '../views/Post.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('visitor-id') == null || localStorage.getItem('visitor-id' == "")) {
        next()
      } 
      else{
        router.push('map')
      }
    }
  },
  {
    path: '/map',
    name: 'map',
    component: Map,
  },
  {
    path: '/post/:spice',
    name: 'post',
    component: Post,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

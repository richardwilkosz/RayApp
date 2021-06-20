import Vue from 'vue'
import Router from 'vue-router'
import ResumeApp from '../components/Resume/ResumeApp'
import RayApp from '../components/Ray/RayApp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ResumeApp',
      component: ResumeApp
    },
    {
      path: '/ray',
      name: 'RayApp',
      component: RayApp
    },
  ]
})
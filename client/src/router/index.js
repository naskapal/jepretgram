import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import upload from '@/components/uploadPhoto'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/upload',
      name: 'uploadPhoto',
      component: upload
    }
  ]
})

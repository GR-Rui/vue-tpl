import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/other',
      name: 'hello',
      component: Hello
    }
  ]
})

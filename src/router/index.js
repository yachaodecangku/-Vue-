import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import City from '@/components/City/City'
import Detail from '@/components/Detail/Detail'
import Week from '@/components/Week/Week'



Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      component: City
    },

    {
      path:'/detail/:id',name:'show',
      component:Detail
    },
    {
      path:'/week/:id',
      name:'weeklink',
      component:Week
    }
  ]
})

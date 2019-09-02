import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import stu1 from '@/components/Stu/stu1'
import stu2 from '@/components/Stu/stu2'
import stu3 from '@/components/Stu/stu3'
import stu4 from '@/components/Stu/stu4'
import tea1 from '@/components/Tea/tea1'
import tea1_1 from '@/components/Tea/tea1_1'
import tea2 from '@/components/Tea/tea2'
import tea2_1 from '@/components/Tea/tea2_1'
import tea3 from '@/components/Tea/tea3'
import forgotpw from '@/components/Forgotpw/forgotpw'
import login from '@/components/Login/login'
import register from '@/components/Register/register'
import search from '@/components/Search/search'
import details from '@/components/Tea/Tea_list/BJcot/classdetails'
import more from '@/components/Tea/more'
import supplement from '@/components/Tea/supplement'
import wodebanji from '@/components/Stu/stutoplist/wodebanji'
import gerenziliao1 from '@/components/Stu/stutoplist/gerenziliao'
import wodexuexi from '@/components/Stu/stutoplist/wodexuexi'

import gerenziliao2 from '@/components/Tea/teatoplist/gerenziliao'
import wodekecheng from '@/components/Tea/teatoplist/wodekecheng'


import feedback from '@/components/Danye/feedback'
import rule from '@/components/Danye/rule'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/stu1',
      name: 'stu1',
      component: stu1,
      meta:{
         title:'stu1'
      }
    },
    {
      path: '/stu2',
      name: 'stu2',
      component: stu2,
      meta:{
        title:'stu2'
     }
    },
    {
      path: '/stu3',
      name: 'stu3',
      component: stu3,
      meta:{
        title:'stu3'
     }
    }, 
     {
      path: '/stu4',
      name: 'stu4',
      component: stu4,
      meta:{
        title:'stu4'
     }
    },
    {
      path: '/tea1',
      name: 'tea1',
      component: tea1,
      meta:{
        title:'tea1'
     }
    },
    {
      path: '/tea1_1',
      name: 'tea1_1',
      component: tea1_1
    },
    {
      path: '/tea2',
      name: 'tea2',
      component: tea2
    },
    {
      path: '/tea2_1',
      name: 'tea2_1',
      component: tea2_1
    },
    {
      // path: '/tea3/:activeName',
      path: '/tea3',
      name: 'tea3',
      // props: true,  
      component: tea3
    }, 
    {
      path: '/forgotpw',
      name: 'forgotpw',
      component: forgotpw
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/details',
      name: 'details',   
      // props: true,  
      component: details
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/supplement',
      name: 'supplement',
      component: supplement
    },
    {
      path: '/wodebanji',
      name: 'wodebanji',
      component: wodebanji
    },
    {
      path: '/gerenziliao1',
      name: 'gerenziliao',
      component: gerenziliao1
    },
    {
      path: '/wodexuexi',
      name: 'wodexuexi',
      component: wodexuexi
    },
    {
      path: '/gerenziliao2',
      name: 'gerenziliao',
      component: gerenziliao2
    },
    {
      path: '/wodekecheng',
      name: 'wodekecheng',
      component: wodekecheng
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    
  ]

})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;
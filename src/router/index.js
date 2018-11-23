import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 主页面
const index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
const indexCourse = (resolve) => {
  import('@/components/index/indexCourse').then((module) => {
    resolve(module)
  })
}
const categoryListings  = (resolve) => {
  import('@/components/course/categoryListings').then((module) => {
    resolve(module)
  })
}
const courseList  = (resolve) => {
  import('@/components/course/courseList').then((module) => {
    resolve(module)
  })
}
const courseDetail  = (resolve) => {
  import('@/components/course/courseDetail').then((module) => {
    resolve(module)
  })
}

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect:"/index",
    },
    {
      path: '/index',
      component : index,
      redirect:"/index/indexCourse",
      children : [
        {
          path: '/index/indexCourse',
          component: indexCourse
        },
        {
          path: '/index/categoryListings',
          component: categoryListings 
        },
        {
          path: '/index/courseList',
          component: courseList 
        },
        {
          path: '/index/courseDetail',
          component: courseDetail 
        },
      ]
    },
    {
      path: '*',
      redirect:"/index",
    },
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  next()
})
export default router;
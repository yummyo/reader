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
// 我的课程
const myCourse  = (resolve) => {
  import('@/components/course/myCourse').then((module) => {
    resolve(module)
  })
}
// 班级详情
const classRoomDetail  = (resolve) => {
  import('@/components/classRoom/classRoomDetail').then((module) => {
    resolve(module)
  })
}
// 用户中心
const userCenter  = (resolve) => {
  import('@/components/userInfo/userCenter').then((module) => {
    resolve(module)
  })
}
// 我的课程
const myClass  = (resolve) => {
  import('@/components/userInfo/myClass').then((module) => {
    resolve(module)
  })
}
// 我的学习
const myStudy  = (resolve) => {
  import('@/components/userInfo/myStudy').then((module) => {
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
          // 课程列表
          path: '/index/courseList',
          component: courseList 
        },
        {
          // 课程详情
          path: '/index/courseDetail',
          component: courseDetail 
        },
        {
          // 我的课程
          path: '/index/myCourse',
          component: myCourse
        },
        {
          // 班级详情
          path: '/index/classRoomDetail',
          component: classRoomDetail
        },
        {
          // 用户中心
          path: '/index/userCenter',
          component: userCenter
        },
        {
          // 我的课程
          path: '/index/myClass',
          component: myClass
        },
        {
          // 我的学习
          path: '/index/myStudy',
          component: myStudy
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
import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store/store'

import Index from '@/components/Index'
import Search from '@/components/Search'
import Employment from '@/components/Employment'
import My from '@/components/My'
/* Index */
import Hierarchy from '@/components/Index/Hierarchy'
import MyStudent from '@/components/Index/MyStudent'
import HierarchyChild from '@/components/Index/Hierarchy/HierarchyChild'
import HisStudent from '@/components/Index/Hierarchy/HisStudent'
import StudentChild from '@/components/Index/MyStudent/StudentChild'
import PaymentRecords from '@/components/Index/MyStudent/PaymentRecords'
import AttendanceRecord from '@/components/Index/MyStudent/AttendanceRecord'
import TestRecords from '@/components/Index/MyStudent/TestRecords'
import MemconRecords from '@/components/Index/MyStudent/MemconRecords'


/* My */
import Login from '@/components/My/Login'
import Information from '@/components/My/Information'
import Password from '@/components/My/Password'
import About from '@/components/My/About'
import Changepass from '@/components/My/Changepassword'

/* 就业 */
import Details from '../components/Employment/details/Details.vue'

/* 搜索 */
import Triple from '../components/Search/TripleCorrelation/Triple.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:'',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/employment',
      name: 'employment',
      component: Employment
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    /* Index */
    {
      path: '/index/hierarchy',
      name: 'hierarchy',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Hierarchy
    },
    {
      path: '/index/myStudent',
      name: 'myStudent',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: MyStudent
    },
    {
      path: '/hierarchyChild',
      name: 'hierarchyChild',
      component: HierarchyChild
    },
    {
      path: '/studentChild',
      name: 'studentChild',
      component: StudentChild
    },
    {
      path: '/paymentRecords',
      name: 'paymentRecords',
      component: PaymentRecords
    },
    {
      path: '/attendanceRecord',
      name: 'attendanceRecord',
      component: AttendanceRecord
    },
    {
      path: '/testRecords',
      name: 'testRecords',
      component: TestRecords
    },
    {
      path: '/memconRecords',
      name: 'memconRecords',
      component: MemconRecords
    },
    {
      path: '/hisStudent',
      name: 'hisStudent',
      component: HisStudent
    },
    /* My */
    {
      path: '/my/login',
      name: 'login',
      component: Login
    },
    {
      path: '/my/information',
      name: 'information',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Information
    },
    {
      path: '/my/password',
      name: 'password',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Password
    },
    {
      path: '/my/changepassword',
      name: 'changepassword',
      component: Changepass
    },
    {
      path: '/my/about',
      name: 'about',
      component: About
    },
    /* 就业 */
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    /* 搜索 */
    {
      path: '/triple',
      name: 'triple',
      component: Triple
    },
  ]
})

//路由拦截
router.beforeEach((to, from, next) => {
  console.log(to.fullPath)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (localStorage.getItem('setToken')) {  // 通过localStorage.getItem 获取当前的token是否存在
          next();
      }
      else {
          next({
          path: '/my/login',
          query: {redirect: to.fullPath,}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
  }
  else {
      next();
  }
})

/*
console.log(router.currentRoute.name)
if(router.currentRoute.name == null){

}
*/

export default router;


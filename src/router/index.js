import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    redirect:"/home/index",
    component: ()=>import("@/views/Home"),
    children:[
      {
        path:"index",
        component:()=>import("@/views/chartView")
      },
      {
        path:"article",
        component:()=>import("@/views/ArticleView")
      },
      {
        path:"users",
        component:()=>import("@/views/userView")
      }
    ]
  },
  {
    path:'/login',
    name:"Login",
    component:()=>import("@/views/Login")
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  if(!localStorage.getItem('token')){
    if(to.path !=='/login' && to.path !=='/register'){
      next(
        {
          path:'/login',
          query:{
            redirect:to.path
          }
        }
      )
    }
    else{
      next();
    }
  }
  else{
    if(to.path === "/login"){
      next({path:"/home"})
    }else{
      next()
    }
  }
})

export default router

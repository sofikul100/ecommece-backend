import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

function guest (to,from,next){
    if(Cookies.get('token') && Cookies.get('user')){
      next('/dashboard')
    }else{
      next()
    }
  }
  

function guard (to,from,next){
    if(Cookies.get('token') && Cookies.get('user')){
      next()
    }else{
      next('/')
    }
}


const routes = [

    {
        path:'/',
        beforeEnter: guard,
        children:[
             {
                  path: '/dashboard',
                  name: 'Dashboard',
                  component: () => import('../vue_views/Dashboard.vue'),
             },
             {
                  path:'/logout',
                  name: 'Logout',
                  component: () => import('../vue_views/auth/Logout.vue'),
             },
             {
                path:'/change-password',
                name: 'ChangePassword',
                component: () => import('../vue_views/auth/ChangePassword.vue'),
             },
             {
                path:'/profile',
                name: 'Profile',
                component: () => import('../vue_views/auth/Profile.vue'),
             },
            //====category routes here======//
            {
               path:'/category-list',
               name:'CategoryList',
               component: () => import('../vue_views/category/CategoryList.vue'),
            }
        ]

    },


    {
        path: '/',
        name: 'Login',
        component: () => import('../vue_views/auth/Login.vue'),
        beforeEnter:guest
    },

    {
        path: '/register',
        name: 'Register',
        component: () => import('../vue_views/auth/Register.vue'),
        beforeEnter:guest
    },


]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
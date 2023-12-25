
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:"Home",
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'HelloWorld',
        component:HelloWorld,
        path:'/user'
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
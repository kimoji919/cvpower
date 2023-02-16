import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Cards from "@/views/Cards/index.vue"
import Bills from "@/views/Bills/index.vue"
import Secrets from "@/views/Secrets/index.vue"
import Login from "@/views/Login.vue"
import Home from "@/home/home.vue"
import Documents from "@/views/Documents/index.vue"
import Register from "@/views/Register.vue"
import test from "@/views/test.vue"
const routes: Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'Index',
        redirect:{ name:"Login"}
    },
    {
        path:'/Login',
        name:'Login',
        component:()=>Login
    },
    {
        path:"/Test",
        component:()=>test
    },
    {
        path:"/Register",
        name:"Register",
        component:()=>Register
    },
    {
        path:'/Home',
        name:'Home',
        component:()=>Home,
        children:[
            {
                path: 'Cards',
                name:'Cards',
                component:()=>Cards
            },
            {
                path:'Bills',
                name:'Bills',
                component:()=>Bills
            },
            {
                path:'Secrets',
                name:'Secrets',
                component:()=>Secrets
            },
            {
                path:'Documents',
                name:'Documents',
                component:()=>Documents
            }
        ],
        redirect:{name:'Cards'}
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
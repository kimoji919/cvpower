import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Cards from "@/views/Cards/index.vue"
import Bills from "@/views/Bills/index.vue"
import Secrets from "@/views/Secrets/index.vue"

const routes: Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'Index',
        redirect:{ name:"Cards"}
    },
    {
        path: '/Cards',
        name:'Cards',
        component:()=>Cards
    },
    {
        path:'/Bills',
        name:'Bills',
        component:()=>Bills
    },
    {
        path:'/Secrets',
        name:'Secrets',
        component:()=>Secrets
    }

]

const routers = createRouter({
    history: createWebHashHistory(),
    routes
})

export default routers
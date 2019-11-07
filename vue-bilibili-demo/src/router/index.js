import Vue from 'vue'
import VueRouter from 'vue-router'
import dongtai from "../views/dongtai"
import huiyuan from "../views/huiyuan"
import pindao from "../views/pindao"
import tuijian from "../views/tuijian"
Vue.use(VueRouter)

let router = new VueRouter({

    //路由map集合 path :views component
    routes:[
        {path:"/dongtai",component:dongtai},
        {path:"/huiyuan",component:huiyuan},
        {path:"/pindao",component:pindao},
        {path:"/",component:tuijian},
    ]
})

export default router


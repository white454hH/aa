import Vue from 'vue'
import VueRouter from 'vue-router'
import dongtai from "../views/dongtai"
import huiyuan from "../views/huiyuan"
import pindao from "../views/pindao"
import tuijian from "../views/tuijian"
import yingshi from "../views/yingshi"
import shezhi from "../views/shezhi"
import zhibo from "../views/zhibo"
Vue.use(VueRouter)

let router = new VueRouter({

    //路由map集合 path :views component
    routes:[
        {path:"/",component:tuijian},
        {path:"/dongtai",component:dongtai},
        {path:"/huiyuan",component:huiyuan},
        {path:"/pindao",component:pindao},
        {path:"/yingshi",component:yingshi},
        {path:"/shezhi",component:shezhi},
        {path:"/zhibo",component:zhibo},
    ]
})

export default router


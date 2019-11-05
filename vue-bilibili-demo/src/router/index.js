import Vue from "vue"
import VueRouter from "vue-router"
import dongtai from "../views/dongtai"
import huiyuan from "../views/huiyuan"
Vue.use(VueRouter)

let router = new VueRouter({
    routers:[
        {path:"/",component:dongtai},
        {path:"/huiyuan",component:huiyuan}
    ]
})

export default router
import Vue from "vue";
import VueRouter from "vue-router"
import shouye from "./shouye";
import fenlei from "./fenlei"
import mine from "./mine"
import gouwuche from "./gouwuche"
import details from "./details"
import singin from "./singin"
import singup from "./singup"
import shouhou from "./shouhou"
import search from "./search"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/shouye",
        },
       shouye,
       fenlei,
       mine,
       gouwuche,
       details,
       singin,
       singup,
       shouhou,
       search
    ]
})


export default router;
import Vue from "vue";
import VueRouter from "vue-router"
import shouye from "./shouye";
import fenlei from "./fenlei"
import mine from "./mine"
import gouwuche from "./gouwuche"
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
       gouwuche
    ]
})


export default router;
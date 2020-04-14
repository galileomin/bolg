import Vue from "vue"
import  $ from 'jquery'
import app from "./app.vue"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
Vue.use(VueRouter)
Vue.use(VueResource)
import router from './route.js'
var vm =new Vue({
    el:".app",
    render:c=>c(app),
    router
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to){
    return VueRouterPush.call(this,to).catch(err =>err)
}
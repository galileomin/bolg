import Vue from "vue"
import  jQuery from 'jquery'
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
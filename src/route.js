import VueRouter from 'vue-router'
import home from './components/home.vue'
import info from './components/info.vue'
import video from './components/video.vue'
import infoDetail from './components/infoDetail.vue'
const router = new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/',redirect:'/home'},
        {path:'/info',component:info},
        {path:'/info',component:video},
        {path:'/infoDetail/:id',component:infoDetail},
    ]
})


export default router
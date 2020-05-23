<template>
<div class="container">
<span style="font-size:20px;font-weight:bolder;padding-bottom:5px;display:block">{{title}}</span>
<div class="swiper-container   " style="max-width:1140px">
    <div class="swiper-wrapper ">
        <div class="swiper-slide info" v-for="item in list" :key="item.id">
            <a class="intoInfo" href="#">
            <img :src="item.src" alt="">
            <span class="title">{{item.title}}</span> 
            <div class="sub">
                <span class="date">{{item.date}}</span>
                <span>{{item.like}}喜欢</span>
                <span>{{item.comment}}评论</span>             
            </div>
            </a>
        </div>
    </div>
    <!-- 左右按钮 -->
    <div class="swiper-button-prev swiper-button-black" s style="outline:none!important;display:none"></div>
    <div class="swiper-button-next swiper-button-black"  style="outline:none!important"></div>
</div>
</div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
export default {
data() {
    return {
        list:[]
    }
},
methods: {
    getlist(){
        this.$http.get('https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/infoxs/zixun').then(result =>{
            this.list=result.body.message;
            this.$nextTick(function(){
                this.doSwiper()
            })
        })
    },
    doSwiper(){
        var swiper = new Swiper('.swiper-container',{
            loop:false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on:{
                slideChangeTransitionEnd: function(){
                    if(this.isEnd){
                        this.navigation.$nextEl.css('display','none')
                    }else{
                        this.navigation.$nextEl.css('display','block')
                    }
                },
                slideChangeTransitionStart: function(){
                    if(this.isBeginning){
                        this.navigation.$prevEl.css('display','none')
                    }else{
                        this.navigation.$prevEl.css('display','block')
                    }
                },                         
            },
            breakpoints:{
                1200:{
                    slidesPerView:5,
                    spaceBetween:15          
                },
                992:{
                    slidesPerView:4,
                    spaceBetween:15    
                },
                768:{
                    slidesPerView:3,
                    spaceBetween:15    
                } ,             
                1:{
                    slidesPerView:2,
                    spaceBetween:15    
                }
            }
        })
    }
},
props:['title'],
mounted() {
    this.getlist();
},
}
</script>

<style lang="scss" scoped>
// a标签链接
.intoInfo{
    color: inherit;
    text-decoration: none;
}
.container{
    padding: 0;
    .swiper-container{ 
        --swiper-navigation-size: 40px;
        --swiper-navigation-color: #00ff33;
        .info{
            height: 200px;
            background-color: white;
            position: relative;
            img{
                width: 100%;
                height: 50%;
            }
            .title{
                display: block;
                padding-top: 5px;
                font-weight: bolder;
                font-size: 14px;
                word-break: break-all;
            }
            .sub{
                display: flex;
                width: 100%;
                position: absolute;
                bottom: 0;
                justify-content: space-between;
                span{
                    display: block;
                    color: #777;
                    padding-bottom: 3px;
                }
            }
        .title,.sub{
            padding-left: 5px;
            padding-right: 5px;
        }
     }
    }       
}

</style>

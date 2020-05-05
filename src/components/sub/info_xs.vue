<template>
<div class="container">
<span style="font-size:20px;font-weight:bolder;padding-bottom:5px;display:block">{{title}}</span>
<div class="swiper-container  class swiper-no-swiping" style="max-width:1140px">
    <div class="swiper-wrapper ">
        <div class="swiper-slide info" v-for="item in list" :key="item.id">
            <img src="/src/img/infoxs1.jpg" alt="">
            <span class="title">疑似 Surface Headphone 2 曝光，Surface Earbuds 或将共同发布</span> 
            <div class="sub">
                <span class="date">2020-2-2</span>
                <span>1喜欢</span>
                <span>1评论</span>             
            </div>
        </div>
    </div>
    <div class="swiper-button-prev swiper-button-black" style="outline:none!important"></div>
    <div class="swiper-button-next swiper-button-black" style="outline:none!important"></div>
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
            breakpoints:{
                1200:{
                    slidesPerView:5,
                    spaceBetween:15          
                },
                992:{
                    slidesPerView:4,
                    spaceBetween:15    
                },
                1:{
                    slidesPerView:1,
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
.container{
    padding: 0;
    // 大屏幕
    .swiper-container{ 
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
    // 小屏幕
}

</style>

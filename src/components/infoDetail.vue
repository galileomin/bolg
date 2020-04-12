<template id="top">
    <div class="container">
        <img src="/src/img/new1lg.jpg" alt="">
        <div class="text">
            <p style="text-align:left;color:red">有感而发</p>
            <h1 style="text-align:left;font-weight:bolder">《集异璧之大成》阅读笔记及杂谈 （十三）</h1>
            <h4 style="text-align:left;font-weight:bolder" >心智与思维：“你我”之共性、“你我”之分别</h4>
            <div class="article"><h2>一：前言</h2>
            本章节的主题内容，在前面的篇章里，已经有了铺垫。而且相对来说篇幅要短了很多——毕竟前面说那么多。但是虽说如此，可以说的内容还是特别的多。很多内容并不是直接来自GEB这本书本身，而是一些可以引申到外面的相关资料。所以这一篇笔记的篇幅依旧不敢保证，很可能篇幅并没有什么缩水。<br><br>
            这一章节并没有对话的内容，乌龟和阿基里斯都没有出场。看起来更像是一个间奏曲的章节。主要内容是刘易斯·卡罗尔的诗《Jabberwocky》（“炸勃龙”，不过原文里第三个字是赵元任翻译这首诗为了配合弄了一个生造字——上面一个“卧”下面一个“龙”）。整篇内容就是这个《Jabberwocky》的法文、德文、英文和中文的内容对比，法文和德文是上个世纪的翻译作，而中文版引用的是语言学家赵元任的版本。（现在中译版其实还有别的版本，但是这首诗因为本身的特殊性，所以赵元任的版本很有意思）。<br><br>
            这里在形式上给出了一个很明确的提示，结合之前提出的问题：我们看到了不同语言之间的对比，而我们知道自然语言对于我们的心智和思维有着怎么样的意义。所以甚至可以说不同的语言代表着不同的心智——并不是完全不同。那么彼此之间可以互相“映射”吗？人与人之间，彼此独立的大脑是如何产生交流的？而我们彼此之间又不是完全不同，人类的大脑共性又是什么？这些问题都是围绕这一章节的主题所问的问题。<br><br>
            本章节最重要的问题在于：<b>“大脑能否在某种客观的意义上被局外人所理解呢？”</b><br><br>
            <img src="/src/img/new1-1.jpg" alt="">
            </div>

        </div>
         <button class="toTop" @click="toTop"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button>
         <div class="btncon">
             <button><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</button>
            <button  ><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span></button>
         </div>
         <show class="show"></show>
    </div>
    
</template>
<script>
import show from './sub/show.vue'
export default {
    data() {
        return {
            
        }
    },
    methods:{
        toTop(){
            scrollTo(0,0)
        }
    },
    components:{
        'show':show
    }
}
</script>
<style lang="scss" scoped>
    .container{
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        text-align: center;
        img{
            max-width: 100%;
            max-height: 500px;
            width: auto;
            height: auto;
            margin: auto;
            margin-bottom: 50px;
        }
        .text{
    
            width: 60%;
            margin: auto;
            .article{
                width: 100%;
                max-width: 1080px;
                margin: auto;
                margin-top:50px;
                font-size: 16px;
                text-align: left;
                line-height: 40px;
                img{
                    display: block;
                    margin: auto;
                }
            }
        }
    .toTop{
        position: fixed;
        top: 90%;
        left: 93%;
        border-radius: 25px;
        outline: none;
        border: 0;
        width: 50px;
        height: 50px;
        background-color: rgba(0,0,0,0.4)
    }   
    }
    .btncon{
        display: flex;
        max-width: 1000px;
        width: 70%;
        justify-content:space-between;
        margin: auto;
        margin-bottom: 40px;
        button{
            margin-top: 50px;
            border: 0;
            width: 150px;
            height: 50px;
            outline: none;
            line-height: 50px;
            border-radius: 20px;
            background-color: rgba(0,0,0,0.1)
        
    }
        button:hover{
              background-color: rgba(0,0,0,0.15)
        }
    }
    .show{
        width: 80%;
        margin: auto;
        
    }
</style>
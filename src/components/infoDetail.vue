<template id="top">
    <div class="infoDetail">
        <img :src="infoDetail.src" alt="">
        <div class="text">
            <p style="text-align:left;color:red">{{infoDetail.kind}}</p>
            <h1 style="text-align:left;font-weight:bolder">{{infoDetail.title}}</h1>
            <h4 style="text-align:left;font-weight:bolder" >{{infoDetail.sub}}</h4>
            <div class="article" v-html="infoDetail.article">
            </div>

        </div>
         <div class="btncon">
             <button><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</button>
            <button  ><span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span></button>
         </div>
         <show class="show"></show>
        <toTop></toTop>
    </div>
    
</template>
<script>
import show from './sub/show.vue'
import toTop from './sub/toTop.vue'
import comment from './sub/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            infoDetail:{}
        }
    },
    created(){
        this.getInfoDetail()
    },
    methods:{
        getInfoDetail(){
            this.$http.get('https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/infoDetail/'+this.id).then(result =>{
                this.infoDetail=result.body.message[0]
            })
        }
    },
    components:{
        'show':show,
        'toTop':toTop,
        'comment':comment
    }
}
</script>
<style lang="scss" >
    .infoDetail{
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
            margin-top:25px;
        }
        .text{
            text-align: center;
            margin:  0 auto;
            max-width: 1080px;
            .article{
                width: 100%;
                margin-top:50px;
                font-size: 16px;
                text-align: left;
                line-height: 40px;
                img{
                    display: block;
                    margin: auto;
                    width: auto;
                     height: auto;
                }
            }
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
        width: 100%;
        margin:  0 auto;
        
    }
    @media screen and(min-width: 992px){
        .text{
            width: 60%;
        }
    }
    @media screen and(max-width: 992px){
        .text{
            width: 90%;
        }
    }
</style>
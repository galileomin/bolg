<template>
    <div class="container" >
        <div class="row"  >
            <div class="col-lg-4 col-xs-12 col-sm-12 col-md-4 newsinfo" v-for="item in infoList" :key="item.id">
                    <img :src="item.src" alt="">
                    <span class="kind">{{item.kind}}</span>
                    <span class="title">{{item.title}}</span>
                    <span class="sub">{{item.sub}}</span>
                    <div  class="into">
                    <input type="button" value="进入" @click="intoInfo(item.id)">
                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="padding-right:0">&nbsp;1</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="glyphicon glyphicon-comment" aria-hidden="true" style="padding-right:20px">&nbsp;1</span>
                     </div>

            </div>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
export default {
    data() {
        return {
            infoList:[],
        }
    },
    created() {
        this.getInfo()
    },
    methods: {
      intoInfo(id){
        this.$router.push({path:'/infoDetail/'+id})   
        location.reload()   
      },
    getInfo(){
        this.$http.get('https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/info').then(result =>{
            this.infoList=result.body.message
        })
    },
}
}
</script>

<style lang="scss" scoped>
.container{
   width: 100%;
   padding-bottom: 100px;
   background-color:#eee;
   padding-left: 0;
   padding-right: 0;
}
// 大屏幕
@media screen and (min-width:992px){
 .row{
    max-width: 1200px;
    margin: auto;
    display: flex;
    .newsinfo{
        background-color: white;
        padding: 0 0;
        position: relative;
        text-align: left;
        margin:50px 10px 20px 10px;
        flex: 1;
        text-overflow: ellipsis;
        border-radius: 7px 7px 0 0;
        img{
            width: 100%;
            margin-bottom: 8px;
            margin-top: 0;
            border-radius: 7px 7px 0 0;
        }
        .into{
            background-color:white;
            width: 100%;
            position: absolute;
            bottom: -50px;
            height: 50px;
            display: flex;
            justify-content: space-between;
            border-radius: 0 0 7px 7px;
            input{
                width: 50%;
                height: 100%;
                border: 0;
                outline: none;
                background-color: white;
                font-weight: bolder;
                font-size: 15px;
                border-radius: 0 0 0 7px;
            }
           input:hover{
                background-color: rgba(0, 0, 0, 0.3)
            }
            span{
                line-height: 50px;
            }            
        }
        
    }
}
        .newsinfo:first-child{
            margin-left: 0;
        }
        .newsinfo:last-child{
            margin-right: 0;
        }  
}
// 小屏幕
@media screen and (max-width:992px){
.row{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .newsinfo{
        background-color: white;
        padding: 0 0;
        text-align: left;
        margin: 10px 20px 10px 20px;
        border-radius: 7px ;
        img{
            margin:0 0 0 0;
            width: 100%;
            border-radius: 7px 7px 0 0 ;
        }
        .into{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            input{
                width: 50%;
                height: 100%;
                border: 0;
                outline: none;
                background-color: white;
                font-weight: bolder;
                font-size: 15px;
                border-radius: 0 0 0 7px; 
            }
           input:hover{
                background-color: rgba(0, 0, 0, 0.3)
            }
            span{
                line-height: 50px;
 
            }                 
        }
        
    }
}
}
// 通用样式
.kind{
    display: block;
    color: red;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 8px;
    margin-left: 15px;
}
.title{
    display: block;
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 3px;
    padding: 5px 15px;
}
.sub{
    padding: 5px 15px;
        display: block;
        flex: auto;
        
}



</style>
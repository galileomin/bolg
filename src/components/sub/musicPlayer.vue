<template>
    <div>    
     <el-container class="container">
         <el-header style="width:400px">
             <span>我的播单</span>
         </el-header>
         <el-main style="width:400px">
             <el-container class="music-item" v-for="item in musicList" :key="item.id">
                 <el-aside style="width:50px;padding:4px 0 0 10px">
                    <img src="../../img/3.jpg" alt="">
                 </el-aside>
                 <el-aside>
                    <span>{{item.name}}</span>
                    <span>{{item.artist}}</span>
                 </el-aside>
             </el-container>
         </el-main>
         <el-container class="footer">
            <el-aside style="width:300px" class="musicInfo">
                <span class="icon  el-icon-stopwatch " ></span>
                <span class="name">这里是歌名</span>
            </el-aside>
            <el-aside style="width:100px" class="btnCon">
                <span  class="el-icon-video-play" @click="play"></span>
                <span  class="el-icon-video-pause" @click="pause" style="display:none" ></span>
                <span  class="el-icon-d-arrow-right"></span>
            </el-aside>
         </el-container>
     </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            musicList:[],
        }
    },
    created() {
        this.getmusicList()
    },
    methods: {
        play(){
           $(".el-icon-video-play").css('display','none')
           $(".el-icon-video-pause").css('display','block')
           $(".icon").addClass("playing")
        },
        pause(){
           $(".el-icon-video-pause").css('display','none')
           $(".el-icon-video-play").css('display','block') 
           $(".icon").removeClass("playing")

        },
        getmusicList(){
            this.$http.get("https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/musicList").then(result =>{
                this.musicList=result.body.message;
            })
        }
    },
}
</script>

<style lang="scss" scoped>
div{
    position: relative;
    height: 700px;
    width: 400px;
    .container{
        margin: 0;
        padding: 0;
        // 歌曲列表
        .el-main{
            padding: 0;
                height: 600px;
            .music-item{
                height: 50px;
                img{
                    width: 40px;
                    height: 40px;
                    }
                span{
                    padding: 0 0 0 10px ;
                    text-align: left;
                    display: block;
                }
                span:first-child{
                    font-weight: bold;
                    font-size: 17px;
                    padding-top: 4px;
                }
                span:last-child{
                    font-size: 10px;
                }
            }
            .music-item:hover{
                background-color: #eee;
            }
        }
        // 控制栏
        .footer{
            width: 400px;
            background-color: lightcyan;
            height: 40px;
            position: absolute;
            bottom: 0;
            border-radius: 0 0 5px 5px;
            border-top: 1px solid  #ccc;
            .btnCon{
                font-size: 26px;
                display: flex;
                margin-top: 7px;
                justify-content: space-around;
                span{
                    display: block;
                    width: 26px;
                    height: 26px;
                }
                span:hover{
                    color: lightblue;
                }
            }
        }
            .musicInfo{
                font-size: 34px;
                display: flex;
                overflow: hidden;
                span{
                    display: block;
                }
                .icon{
                    width: 34px;
                    height: 34px;
                    margin: 3px 20px 3px 10px;
                }
                .playing{
                    animation: circle 2s infinite linear;
                }
                @keyframes circle {
                  from {transform: rotate(0deg);}
                  to{transform: rotate(360deg);}
                }
                span:last-child{
                    font-size: 16px;
                    line-height: 40px;
                }

            }
    }
}
</style>


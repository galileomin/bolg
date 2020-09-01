<template>
    <div>    
     <el-container class="container">
         <el-header style="width:400px">
             <span>我的播单</span>
         </el-header>
         <el-main style="width:400px">
             <el-container class="music-item" @dblclick.native="clicktoPlay($event)" v-for="item in musicList" :key="item.id" :data-key="item.id">
                 <el-aside style="width:50px;padding:4px 0 0 10px">
                    <img :src="item.img" alt="">
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
                <span class="name"></span>
            </el-aside>
            <el-aside style="width:100px" class="btnCon">
                <span  class="el-icon-video-play" @click="play" id="controller"></span>
                <span  class="el-icon-d-arrow-right" @click="next"></span>
                <audio  id="audio"></audio>
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
            musics:[],
            playing:false,
            selecting:0,
            names:[]
        }
    },
    created() {
        this.getmusicList()
    },
    methods: {
        // 暂停or播放
        play(){
            if($("#audio").attr('src') == undefined){
                $("#audio").attr('src',this.musics[this.selecting])
                $(".name").text(this.names[this.selecting])
                
            }
            let audio = document.getElementById("audio")
            this.judgePlaying()
        },
        // 下一首
        next(){
            // 
            if($("#audio").attr('src') == undefined){
                $("#audio").attr('src',this.musics[this.selecting])
                $(".name").text(this.names[this.selecting])
                this.playing =false
                this.judgePlaying()
            }else{
                if(this.selecting == (this.musics.length-1)){
                    this.selecting = 0
                }else{
                    this.selecting+=1
                }
            $("#audio").attr('src',this.musics[this.selecting])
            $(".name").text(this.names[this.selecting])
            this.playing =false
            this.judgePlaying()
            }
        },
        // 取得数据
        getmusicList(){
            this.$http.get("https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/musicList").then(result =>{
                this.musicList=result.body.message;
                this.musicList.forEach(item => {
                    this.musics.push(item.src)
                    this.names.push(item.name)
                });
            })
        },
        // 双击自定播放
        clicktoPlay(e){
           var key = e.currentTarget.dataset.key-1
           console.log(key)
            this.selecting = key
             $("#audio").attr('src',this.musics[this.selecting])
            $(".name").text(this.names[this.selecting])
            this.playing =false
            this.judgePlaying()
        },
        // 开始暂停按钮状态的判断
        judgePlaying(){
            if(this.playing == false){
                $("#controller").removeClass("el-icon-video-play")
                $("#controller").addClass("el-icon-video-pause")
                this.playing = true
                audio.play()
            }else{
                $("#controller").removeClass("el-icon-video-pause")
                $("#controller").addClass("el-icon-video-play")
                this.playing = false
                audio.pause()
            }
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
            // 播放中样式
            .playing{
                background-color: #ccc;
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
                justify-content: space-around;
                span{
                    display: block;
                    width: 80px;
                    
                }
                .icon{
                    width: 34px;
                    height: 34px;
                    margin: 3px 5px 3px 5px;
                }
                .name{
                    font-size: 13px;
                    line-height: 40px;
                }

            }
    }
}
</style>


<template>
    <div class="comment">
        <div class="commentMana">
            <span >留言板</span>
            <div class="commentCon"> 
                <img src="/src/img/icon.png" alt="">
                <input type="text" placeholder="输入你的留言吧！" v-model="msg">
                <button type="button" class="btn btn-info .btn-block" @click="post">发送</button>
            </div>
            <span style="margin-top:40px" >共{{sum}}条留言</span>
            <hr>
            <div style="margin-top:40px" v-for="item in comment" :key="item.id">
                <div class="board">
                    <img src="/src/img/icon.png" alt="">
                    <span >{{item.comment}}</span>
                </div>
                <span class="time">{{item.date}}</span>
            </div>
            <div class="pagenation">
                <button class="prev" @click="prevPage"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
                <button class="jump" :data-page="item" @click="jump($event)" v-for="item in pages" :key="item" style="line-height:20px">{{item}}</button>
                <button class="next" @click="nextPage"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
            </div>     
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allComment:[],
            comment:[],
            sum:0,
            pages:0,
            currentPages:1,
            msg:''

        }
    },
    props: ['id'],
    created() {
        this.getcomment()
    },
    methods: {
        getcomment(){
            this.$http.get('https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/infoDetail/'+this.id+'/comment').then(result =>{
                this.allComment=result.body.message
                this.comment=this.allComment[this.currentPages-1];
                this.pages=this.allComment.length
                this.allComment.forEach(item =>{
                    this.sum=this.sum+item.length
                })
            })
        },
        nextPage(){
            if((this.currentPages) < (this.pages)){
                this.comment=this.allComment[this.currentPages]
                this.currentPages+=1
            }else{
                this.$message({
                    message:"已经是最后一页啦",
                    center:true
                })
            }
        },
        prevPage(){
            if((this.currentPages)<=(this.pages)&&(this.currentPages)>1){
                this.currentPages-=1
                this.comment=this.allComment[this.currentPages-1]                                   
            }else{
                this.$message({
                    message:"已经是第一页啦",
                    center:true                    
                })
            }
        },
        jump(e){
            this.comment=this.allComment[e.target.getAttribute('data-page')-1]
            e.target.setAttribute('border-bottom','2px soild black')
        },
        post(){
            this.$http.post('',{content:this.msg}).then(result =>{
                    var cmt = {add_time:Date.now(),content:this.msg.trim()};
                    this.comment.unshift(cmt)
                    this.msg=' '
            })

        }

    },
}
</script>
<style lang="scss" scoped>
// 大屏幕
@media screen and (min-width: 992px){
.comment{
    width: 60%;
    max-width: 1200px;
}
}
//小屏幕
@media screen and (max-width: 992px){
.comment{
    width: 100%;

}        
}
// 通用样式
.comment{
    margin: auto;
    background-color: white;
    .commentMana{
        padding-top: 60px;
        background-color: #fff;
        span{
            display: block;
            text-align: left;
            font-size: 20px;
            font-weight: bolder;
            margin-left: 20px;
        }
        .commentCon >img,.board>img{
                width: 50px;
                margin:0  20px 0 20px;            
        }
        .commentCon{
            margin-top: 30px;
            width: 100%;
            display: flex;
            
            input{
                width: 80%;
                border-radius: 25px;
                outline: none;
                border: 0;
                background-color: #eee;
                padding: 0 10px 0 10px;
                font-size: 18px;
            }
            button{
                width: 100px;
                border-radius: 25px;
                margin:0  20px 0 20px;
                outline: none;
                
            }
        }
        .time{
            font-weight: 400;
            font-size: 16px;
            margin-left: 90px;
            color: #aaa;
            
}
    }
    .board{
        display: flex;
        word-break: break-all;
        align-items: flex-start;
        span{
            font-weight: 400;
            line-height: 50px;
            margin:0 20px 0 0 ;
            display: block;
        }
    }
}
// 分页器
.pagenation{
    display: flex;
    justify-content: center;
    button{
        background-color: white;
        border: 0;
        outline: none;
        margin-top: 20px;
        span{
            margin-left: 0 !important;
        }
    }
    .jump{
    font-size: 18px;
    }
    button:hover{
        color:lightblue;
        span{
            color: lightblue;
        }
    }
}
</style>

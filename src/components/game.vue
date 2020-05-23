<template>
<div class="container" >
    <div class="board " v-if="!failFlag" >
    <el-button type="success" round class="start" @click="start" v-if="!pauseButton">开始游戏</el-button>
    <el-button type="success" round class="stop" @click="pause" v-if="pauseButton">暂停</el-button>
    <span id="score">分数：{{score}}</span>        
        <div v-for="(i,index) in 20" :key="index">
            <div class="commonGrid" v-for="(j,index) in 20" ref="grid" :key="index"></div>
        </div>
    </div>
    <div v-else class="failBox">
        <img src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2872222233,2453972241&fm=26&gp=0.jpg'/>
        <el-button type="info" round class="again" @click="again">再来一遍</el-button>       
    </div>
    <div class="controlBox hidden-lg hidden-md">
        <el-button type="primary" icon="el-icon-caret-left" @click="toLeft" id="left"></el-button>
        <el-button type="primary" icon="el-icon-caret-top" @click="toUp" id="top"></el-button>
        <el-button type="primary" icon="el-icon-caret-right" @click="toRight" id="right"></el-button>
        <el-button type="primary" icon="el-icon-caret-bottom" @click="toBottom"  id="bottom"></el-button>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            snake:[],
            ball:{},
            pauseButton:false,
            dir:'right',
            moveTimer:null,
            dirTimer:null,
            score:0,
            failFlag:false
        }
    },
    created() {
        // 初始化
        for(var i = 4 ; i>0 ; i--)
            this.snake=[
                ...this.snake,
                {
                    row:2,
                    column:i+1
                }
            ]
    },
    mounted() {
        this.mountSnake()
        this.createBall()
    },
    methods: {
        mountSnake:function(){
            this.snake.forEach(item =>{
                this.$refs.grid[item.row * 20 + item.column].setAttribute(
                    "class",
                    "commonGrid snakeGrid"
                )
            })
        },
        createBall:function(){
            let randrow = null;
            let randcolumn = null;
            while(true){
                randrow = Math.floor(Math.random()*20)
                randcolumn = Math.floor(Math.random()*20)
                // 点不能在蛇上面
                if(this.notInSnake(randrow,randcolumn))
                    break
            }
            this.ball={row:randrow,column:randcolumn}
            this.$refs.grid[randrow * 20 + randcolumn].setAttribute("class","commonGrid eggGrid")
        },
        notInSnake(row,column){
            let flag = false;
            this.snake.forEach(item=>{
                if(item.row !=row && item.column != column){
                    flag =true
                }
            })
            return flag
        },
        start:function(){
            this.pauseButton = true;
            this.moveTimer = this.setTimer()
            this.dirTimer = this.changeDir()
            
        },

        setTimer:function(){
            return setInterval(()=>{
                let newRow = null;
                let newColumn = null;
                switch(this.dir){
                    case "right":
                        newRow = this.snake[0].row;
                        newColumn = this.snake[0].column + 1;
                        this.snake.unshift({
                            row: newRow,
                            column: newColumn
                        });
                        break;
                    case "up":
                        newRow = this.snake[0].row - 1;
                        newColumn = this.snake[0].column;
                        this.snake.unshift({
                            row:newRow,
                            column:newColumn
                        });
                        break; 
                    case "left":
                        newRow = this.snake[0].row;
                        newColumn = this.snake[0].column - 1;
                        this.snake.unshift({
                            row:newRow,
                            column:newColumn
                        });
                        break; 
                    case "down":
                        newRow = this.snake[0].row + 1;
                        newColumn = this.snake[0].column;
                        this.snake.unshift({
                            row:newRow,
                            column:newColumn
                        });
                        break;                                                                            
                }
                if(!this.judgeBall()){
                    const delItem = this.snake.pop();
                    this.$refs.grid[delItem.row * 20 + delItem.column].setAttribute("class","commonGrid")
                    this.judgeFail()
                    this.mountSnake()
                }
            },200)
        },
        changeDir:function(){
            return setInterval(() => {
                document.onkeydown = event => {
                  const e = event || window.event || arguments.callee.caller.arguments[0];
                  if(e && e.keyCode == 37 && this.dir != "right"){
                      this.dir="left"
                  }else if(e && e.keyCode == 38 && this.dir != "down"){
                      this.dir="up"
                  }else if(e && e.keyCode == 39 && this.dir != "left"){
                      this.dir="right"
                  }else if(e && e.keyCode == 40 && this.dir != "up"){
                      this.dir="down"
                  }
                  this.mountSnake()   
                };
            },10)
        },
        //吃球
        judgeBall:function(){
            let flag = false
            this.snake.forEach(item =>{
                if(item.row ===this.ball.row && item.column === this.ball.column){
                    flag =true
                    this.createBall()
                    this.score ++
                }
            })
            return flag
        },
        //游戏失败
        judgeFail:function(){
            for(let i = 1;i<this.snake.length;i++){
                if(this.snake[0].row ===this.snake[i].row && this.snake[0].column ===this.snake[i].column){
                    this.fail()
                    return
                }
            }
            if(this.snake[0].row > 19 ||this.snake[0].row < 0
            ||this.snake[0].column > 19 || this.snake[0].column < 0)
                this.fail()
        },
        // 失败
        fail:function(){
            this.pauseButton = false
            clearInterval(this.moveTimer)
            clearInterval(this.dirTimer)
            this.failFlag = true
        },
        // 暂停
        pause:function(){
            this.pauseButton=false
            clearInterval(this.moveTimer)
            clearInterval(this.dirTimer)
            this.moveTimer = null;
            this.dirTimer = null;
        },
        // 重试
        again:function(){
            location.reload()
        },
        // 模拟按钮的方向转换
        toBottom:function(){
            if(this.dir != "top"){
                this.dir = "down";
                this.mountSnake();  
            }               
        },
        toUp:function(){
            if(this.dir != "down"){
                this.dir = "up";
                this.mountSnake();  
            }               
        },
        toLeft:function(){
            if(this.dir != "right"){
                this.dir = "left";
                this.mountSnake();  
            }               
        },
        toRight:function(){
            if(this.dir != "left"){
                this.dir = "right";
                this.mountSnake();  
            }               
            }
        }

}
</script>



<style lang="scss" scoped>
.snakeGrid {
  background-color: red;
}
.eggGrid {
  background-color: yellow;
}
.failBox{
    text-align: center;
    img{
        width: 500px;
        margin-top: 20px;
    }
    .again{
        display: block;
        margin: 0 auto;
    }
}
@media screen and(min-width: 992px){
.board{
    margin: 20px auto;
    width: 582px;
    height: 582px;
    flex-flow: row;
    border: 1px solid black;
    position: relative;
    .commonGrid{
        float: left;
        width: 29px;
        height: 29px;
        border: 0.5px solid rgb(214, 125, 125);
    }
}
.start,.stop{
    display: block;
    width: 104px;
    position: absolute;
    left: -20%;
    margin-top: 20px;
}
#score{
    position: absolute;
    left: -15%;
    top:20%
}  
}
@media screen and(max-width: 992px){
.board{
    margin: 20px auto;
    width: 282px;
    height: 280px;
    flex-flow: row;
    border: 1px solid black;
    position: relative; 
    .commonGrid{
        float: left;
        width: 14px;
        height: 14px;
        border: 0.5px solid rgb(214, 125, 125);
    }
}
.start,.stop{
    display: block;
    position: absolute;
    bottom: -50px;
    width: 104px;
}
#score{
    position: absolute;
    bottom:-50px;
    right: 0;
}
.failBox{
    img{
        width: 100%;
    }
}
// 小屏幕或手机出现控制按钮
.controlBox{
    margin: 80px auto;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    position: relative;
    button{
        padding: 0;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        position: absolute;
        transform: rotate(-45deg);
        margin: 0;
    }
    #bottom{
        right: 0;
        bottom: 0;
    }
    #right{
        right: 0;
    }
    #left{
        bottom: 0;
    }

}
}
</style>
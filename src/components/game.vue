<template>
<div class="container">
    <el-button type="success" round class="start" @click="start">开始游戏</el-button>
    <div class="board">
        <div v-for="(i,index) in 20" :key="index">
            <div class="commonGrid" v-for="(j,index) in 20" ref="grid" :key="index"></div>
        </div>
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
            score:0
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
        }

    },
}
</script>



<style lang="scss" scoped>
.board{
    margin: 0 auto;
    width: 582px;
    height: 582px;
    flex-flow: row;
    border: 1px solid black;
    .commonGrid{
        float: left;
        width: 29px;
        height: 29px;
        border: 0.5px solid rgb(214, 125, 125);

    }
}
.snakeGrid {
  background-color: red;
}
.eggGrid {
  background-color: yellow;
}
.start{
    display: block;
    margin: 20px auto;
}
</style>
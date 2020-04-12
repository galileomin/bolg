<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-xs-12 col-sm-12 col-md-4">
                <div class="newsinfo">
                    <img src="/src/img/new1.jpg" alt="">
                    <span class="kind">有感而发</span>
                    <span class="title">题目</span>
                    <span class="sub">副标题</span>
                    <div  class="into">
                    <input type="button" value="进入" @click="intoInfo(item.id)">
                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="padding-right:0">&nbsp;1</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="glyphicon glyphicon-comment" aria-hidden="true">&nbsp;1</span>
                     </div>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12 col-sm-12 col-md-4">
                <div class="newsinfo">
                    <img src="/src/img/new1.jpg" alt="">
                    <span class="kind">有感而发</span>
                    <span class="title">题目</span>
                    <span class="sub">副标题</span>
                    <div  class="into">
                    <input type="button" value="进入" @click="intoInfo(item.id)">
                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="padding-right:0">&nbsp;1</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="glyphicon glyphicon-comment" aria-hidden="true">&nbsp;1</span>
                     </div>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12 col-sm-12 col-md-4">
                <div class="newsinfo">
                    <img src="/src/img/new1.jpg" alt="">
                    <span class="kind">有感而发</span>
                    <span class="title">题目</span>
                    <span class="sub">副标题</span>
                    <div  class="into">
                    <input type="button" value="进入" @click="intoInfo(item.id)">
                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="padding-right:0">&nbsp;1</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="glyphicon glyphicon-comment" aria-hidden="true">&nbsp;1</span>
                     </div>
                </div>
            </div>
 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.container{
   width: 80%;
   margin: 0;
   padding: 0;
}
.row{
    max-width: 1200px;
    margin: auto;
}
.newsinfo{
    background-color: white;
    text-align: left;
    img{
        width: 100%;
    }
    .kind{
        margin-top: 5px;
        color: red;
        margin-left: 14px;
        font-size: 10px;
        display: block;
        margin-bottom: 10px;
    }
    .title{
        font-weight: bolder;
        margin-left: 14px;
        font-size: 16px;
        display: block;
        margin-bottom: 10px;
    }
    .sub{
        margin-left: 14px;
        display: block;
        margin-bottom: 30px;
    }
    .into{
        background-color: brown;
        border-radius: 7px;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        input{
          padding: 10px 0;
          height: 100%;
          width: 50%;
          border-radius: 7px;
          border: 0;
          background-color: rgba(0,0,0,0.1);
          outline: none;
          color: white;
          font-size: 18px;
          margin-right: 20px;
        }
        span{
          color: white;
          line-height: 40px;
          display: block;
          padding-right: 20px;
        }
    }
    
}

</style>
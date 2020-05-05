<template>
<div style="padding-top:30px;padding-bottom:30px;background-color: #eee;">
 <!-- 轮播图 ，推荐-->
  <div class="container">
    <div class="row">
      <div class="col-md-8 ">
        <div id="carousel-example-generic" class="carousel slide lunbo" data-ride="carousel">
          <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active p1" >
            <img src="" alt="">
            <div class="carousel-caption">
            </div>
            </div>
            <div class="item p2">
            <img src="" alt=""> 
            <div class="carousel-caption">
            </div>
            </div>
            <div class="item p3">
            <img src="" alt="">
            <div class="carousel-caption">
            </div>
            </div>
        </div>
        </div>
      </div>
      <div class="col-md-4 hidden-xs hidden-sm ">
        <!-- 推荐 -->
        <div class="tuijian">
          <div class="intoCollection">
            <span>推荐播单</span>
            <a href=""><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
          </div>
          <span class="RadioPro">RadioPro</span>
          <br>
          <img src="/src/img/radio.png" alt="">
          <br>
          <input type="button" value="进入播单" >
        </div>
      </div>
    </div>
      <show></show>
      <infoxs style="width:100%" :title="infoName"></infoxs>
  </div>

  <toTop></toTop>
  <!-- 资讯 -->


    </div>
</template>


<script>
import show from './sub/show.vue'
import toTop from './sub/toTop.vue'
import infoxs  from './sub/info_xs.vue'
$(function(){ 
  $('.carousel').carousel({
		interval: 4000
	})
})
export default {
    data() {
      return {
        newInfoList:[],
        infoName:'资讯',
      }
    },
    methods:{
      getnewInfoList(){
        this.$http.get('https://www.fastmock.site/mock/c7310ac15218c0d05ff986939de48d38/blog/info').then(result=>{
          this.newInfoList=result.body.message;
        })
      },
      intoInfo(id){
        this.$router.push({path:'/infoDetail/'+id})
        console.log(id);      
      }
    },
    created() {
      this.getnewInfoList()
    },
    components:{
      'show':show,
      'toTop':toTop,
      'infoxs':infoxs
    }
}
</script>

<style lang="scss" scoped>
    // l轮播
    .tuijian{
      background-color: brown;
      border-radius: 7px;
      height: 400px;
      img{
        width: 200px;
      }
    }
    .lunbo{
      .carousel-inner{
        border-radius: 7px;
      }
      .p1{ 
        height: 400px;
        background-image: url("../img/1.jpg");   
         
      }
      .p2{
        height: 400px;
        background-image: url("../img/2.jpg");    
      }
      .p3{
        height: 400px;
        background-image: url("../img/3.jpg");    
      }

    }
    // 推荐
    .tuijian{
      text-align: center;
      color: white;
      .RadioPro{
        font-weight: bolder;
        font-size: 23px
      }
      input{    
        margin-top:0;
        height: 35px;
        width: 170px;
        border-radius: 15px;
        font-size: 18px;
        background-color: rgba(0,0,0,0.1);
        border: 0;
        outline: none;     
      }
      input:hover{
         background-color: rgba(0,0,0,0.3);
      }
      .intoCollection{
        display: flex;
        justify-content: space-between;
        span{
          margin: 15px 35px;
          font-size: 16px;
          color: white;
        }
      }
    }
</style>
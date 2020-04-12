<template>
<div>     
  <!-- 导航条 -->
  <nav class="navbar navbar-default" style="margin-bottom:0">
    <div class="container-fluid">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/home" tag="li" role="presentation"><a>首页</a></router-link>
        <router-link to="/info" tag="li" role="presentation"><a>资讯</a></router-link>
        <router-link to="/video" tag="li" role="presentation"><a>视频</a></router-link>
        <li><a href="#">文章</a></li>
      </ul>
      <form class="navbar-form navbar-right ">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <a href=""><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
      </form>
      </div>
    </div>
    
  </nav>
  <router-view></router-view>




</div>
</template>

<script>

export default {
  
}

</script>


<style lang="scss">
// 导航条
  .navbar-brand{
    display: block;
    height: 100px !important;
    line-height: 60px !important;
    }
  .nav{
    li{
      a{
        line-height: 60px !important;
        font-size: 18px;
        height: 100px;
        display: block;
      }
    }
    li:hover{
      background-color: #eee;
    }
  }
  .navbar-form{
      line-height: 70px !important;
    }
  .navbar-toggle{
    margin-top: 28px !important;
  }

  
</style>
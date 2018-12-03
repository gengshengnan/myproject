<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="content"/>
    <div class="nav bgcolorG" v-if="$store.state.showNavFlag">
      <router-link to="/" active-class="ftcolorR"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
      <router-link to="/kinds" active-class="ftcolorR"><i class="iconfont icon-leimupinleifenleileibie"></i><span>分类</span></router-link>
      <router-link to="/sales"><img src="https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png"/></router-link>
      <router-link to="/cart" active-class="ftcolorR"><i class="iconfont icon-gouwuche"></i><span class="shopC">购物车</span></router-link>
      <router-link to="/mine" active-class="ftcolorR"><i class="iconfont icon-character"></i><span class="mineS">我的酒仙</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  height:100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content{
  flex:1;
  overflow: scroll;
}
.nav{
  display: flex;
  height:.7rem;
  flex-direction: row;
  line-height: .5rem;
  border-top:1px solid #ccc;
}
.nav a{
  text-decoration: none;
  flex:1;
  text-align: center;
  color:#3e3e3e;
  position: relative;
}
.nav a span{
    top: .3rem;
    left: .43rem;
    position: absolute;
}
.nav a span.shopC{
   left: .35rem;
}
.nav a span.mineS{
  left:.25rem;
}
.nav a img{
  width:.7rem;
  height:.7rem;
}
</style>

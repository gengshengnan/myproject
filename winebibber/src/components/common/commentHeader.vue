<template>
  <div class="common_header">
      <div class="common_header_con">
          <div class="common_header_show pdS_com4 clearfix">
              <i class="iconfont icon-xiazai6 l"></i>
              <span>{{title}}</span>
              <i class="iconfont icon-fenlei r" @click="changeShow()"></i>
          </div>

          <div class="C_nav bgcolorG" v-if="showFlag">
              <router-link to="/" active-class="ftcolorR"><i class="iconfontF icon_home"></i><span class="ftcolorGL">首页</span></router-link>
              <router-link to="/kinds" active-class="ftcolorR"><i class="iconfontF icon_search"></i><span class="ftcolorGL">搜索</span></router-link>
              <router-link to="/cart" active-class="ftcolorR"><i class="iconfontF icon_car"></i><span class="shopC ftcolorGL">购物车</span></router-link>
              <router-link to="/mine" active-class="ftcolorR"><i class="iconfontF icon_persion"></i><span class="mineS ftcolorGL">我的酒仙</span></router-link>
          </div>

      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'ComponentHeader',
  props:{
    title:String,
    isCar:Boolean
  },
  data () {
    return {
       showFlag:false,
       isCarFlag:this.isCar
    }
  },
  mounted(){
    this.isCarOrign()
  },
  methods:{
    changeShow:function(){
       this.showFlag = !this.showFlag
    },
    isCarOrign:function(){
      if(this.isCarFlag){
         $('.common_header_con').addClass('bgcolorGL')
      }else{
         $('.common_header_con').removeClass('bgcolorW').addClass('bgcolorR')
         $('.common_header_show').addClass('ftcolorW')
      }
    }
  }
}
</script>

<style scoped>
 .common_header_con{
   height:.7rem;
 }
 .common_header_show{
   line-height: .7rem;
   text-align: center;
   font-size: .26rem;
 }
 .common_header_show i{
  font-size:.34rem;
 }

 .C_nav{
  display: flex;
  height:.8rem;
  flex-direction: row;
  line-height: .5rem;
  border-bottom:1px solid #ccc;
}
.C_nav a{
  text-decoration: none;
  flex:1;
  text-align: center;
  color:#3e3e3e;
  position: relative;
}
.C_nav a span{
    top: .36rem;
    left: .43rem;
    position: absolute;
}
.C_nav a span.shopC{
   left: .44rem;
}
.C_nav a span.mineS{
  left:.25rem;
}
.C_nav a img{
  width:.7rem;
  height:.7rem;
}
.C_nav i{
  width:.42rem;
  height:.42rem;
  display: block;
  margin-left:.47rem;
  margin-top:.06rem;
}
.C_nav .iconfontF{
  background:url('../../assets/img/headIcon.png') no-repeat;
}
.C_nav .icon_home{
   background-position: -.09rem -.07rem;
}
.C_nav .icon_search{
   background-position:-.68rem -.07rem;
}
.C_nav .icon_car{
  background-position:-1.2rem -.07rem;
  width:.48rem;
  height:.48rem;
}
.C_nav .icon_persion{
  background-position:-1.96rem -.07rem;
}
</style>

<template>
  <div class="com_list">
      <div class="com_list_title bgcolorW"><span class="ftcolorG">爆款推荐</span></div>
      <div class="clearfix">
            <div class="com_list_items bgcolorW l">
                <div class="com_list_item">
                      <div class="tagList">
                         <span class="bgcolorTagO ftcolorW">冰点价</span><span class="bgcolorTagP ftcolorW">满减</span>
                      </div>
                      <div class="com_list_desc">
                          <img src="https://img07.jiuxian.com/2018/1120/f5676abf2ed04d89b5b895f4381f99ea4.jpg"/>
                          <p class="name ftcolorGD">【下单立减120】53°贵州茅台酒厂（集团）技术开发公司国隆酱酒500ml（2016-2017）</p>
                          <p class="price ftcolorR">￥123</p>
                      </div>
                </div>
            </div>
           <div class="com_list_items bgcolorW l">
                <div class="com_list_item">
                      <div class="tagList">
                         <span class="bgcolorTagO ftcolorW">冰点价</span><span class="bgcolorTagP ftcolorW">满减</span>
                      </div>
                      <div class="com_list_desc">
                          <img src="https://img07.jiuxian.com/2018/0224/ffef0e6533c745a290983c1d8fe2f69a4.jpg"/>
                          <p class="name ftcolorGD">法国(原瓶进口)法圣古堡圣威骑士干红葡萄酒750ml(6瓶装)</p>
                          <p class="price ftcolorR">￥123</p>
                      </div>
                </div>
            </div>
            <div class="com_list_items bgcolorW l">
                <div class="com_list_item">
                      <div class="tagList">
                         <span class="bgcolorTagO ftcolorW">冰点价</span><span class="bgcolorTagP ftcolorW">满减</span>
                      </div>
                      <div class="com_list_desc">
                          <img src="https://img08.jiuxian.com/2018/1122/74e79624f58e4195ac217def2886a60e4.jpg"/>
                          <p class="name ftcolorGD">【新品首发】52度泸州老窖2019农历己亥年新春礼酒/惟尊1.199L</p>
                          <p class="price ftcolorR">￥123</p>
                      </div>
                </div>
            </div>
            <div class="com_list_items bgcolorW l">
                <div class="com_list_item">
                      <div class="tagList">
                         <span class="bgcolorTagO ftcolorW">冰点价</span><span class="bgcolorTagP ftcolorW">满减</span>
                      </div>
                      <div class="com_list_desc">
                          <img src="https://img09.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a814.jpg"/>
                          <p class="name ftcolorGD">52°酒鬼原浆酒500ml</p>
                          <p class="price ftcolorR">￥123</p>
                      </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'componentList',
  data () {
    return {
     /* msg: 'Welcome to Your Vue.js App'*/
    }
  },
   mounted(){

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.com_list{
  margin-top:.12rem;
}
.com_list_title{
  text-align: center;
  padding:.16rem 0;
  border-bottom:1px solid #ededed;
}
.com_list_items{
  width:49.5%;
  margin-right:.06rem;
  margin-bottom:.06rem;
}
.com_list_item{
  padding:.1rem;
}
.com_list_items:nth-child(even){
  margin-right:0;
}
.com_list_items .tagList span{
  display: inline-block;
  padding:.01rem .08rem;
  border-radius: .06rem;
  margin-right: .1rem;
}
.com_list_desc img{
  width:100%;
  display: block;
}
.price{
  font-size: .22rem
}
.name{
  height:.8rem;
  overflow: hidden;
  line-height: 1.8;
}
</style>

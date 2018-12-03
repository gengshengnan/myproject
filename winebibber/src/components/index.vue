<template>
  <div class="index">
      <!-- 广告位 -->
      <div class="in_ad bgcolorM clearfix" v-if="showAdFlag">
          <div class="in_close l" @click="closeOpt()"><i></i></div>
          <div class="app_logo l"></div>
          <div class="in_ad_text ftcolorW l">
              <p>打开酒仙网APP</p>
              <p>新人领198元礼包</p>
          </div>
          <div class="in_ad_btn r bgcolorR ftcolorW">立即打开</div>
      </div>
      <!-- 首页搜索框 -->
      <div class="in_search">
           <div class="web_logo l"></div>
           <div class="in_search_mian bgcolorW l">
              <div class="in_search_logo"></div>
              <span class="ftcolorG">【古井贡/黄鹤楼特卖 】：全场低至39元！</span>
           </div>
      </div>

      <!-- swiper -->
      <transition name="fade">
          <div class="swiper-container" id="in_swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://img09.jiuxian.com/bill/2018/1122/f194728fd1ce413ca649fcfc4ef0bc7a.jpg"/></div>
              <div class="swiper-slide"><img src="https://img10.jiuxian.com/bill/2018/1127/fd33ce31cd044708934e25c2c79901fa.jpg"/></div>
              <div class="swiper-slide"><img src="https://img08.jiuxian.com/bill/2018/1116/2bb02f799f914541ba5aff6fb3597c2d.jpg"/></div>
              <div class="swiper-slide"><img src="https://img07.jiuxian.com/bill/2018/1121/187b37cac886464496c0a11552159541.jpg"/></div>
              <div class="swiper-slide"><img src="https://img07.jiuxian.com/bill/2018/1129/68430477c0f34526adf45957e7c9527d.jpg"/></div>
              <div class="swiper-slide"><img src="https://img07.jiuxian.com/bill/2018/1122/76dae05801b7478293d86b344b8a2de9.jpg"/></div>
              <div class="swiper-slide"><img src="https://img09.jiuxian.com/bill/2018/1124/47f5097209cc47ebb5903a9a2561eeec.jpg"/></div>
              <div class="swiper-slide"><img src="https://img09.jiuxian.com/bill/2018/1116/5044b2ce40724bd4a436c1bc1903ae10.jpg"/></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
      </transition>

      <!-- 菜单 -->
      <div class="in_menu bgcolorW">
          <ul class="clearfix">
             <li class="l" v-for="item in menuList"><img :src="item"/></li>
          </ul>
      </div>

      <div class="in_intro">
          <div class="first_one"><img src="https://img06.jiuxian.com/bill/2018/1129/cc1db17b9b46450f823e15cfd038a987.jpg"/></div>
          <div class="clearfix">
              <img class="l" src="https://img08.jiuxian.com/bill/2018/1129/9e80f8971b154811899573a7c986400e.jpg"/>
              <img class="l" src="https://img08.jiuxian.com/bill/2018/1129/9916108361c64831a76b8ca955cfb2b5.jpg"/>
          </div>
      </div>

      <!-- 头条 -->
      <div class="in_news_hot pdS_com2 clearfix bgcolorW">
            <div class="in_news_sign l"><img src="https://img06.jiuxian.com/bill/2017/0112/4549cce5037c42e9af5392bcbe4e0981.jpg"/></div>
            <div class="news_swiper l">
                <div class="swiper-container" id="in_news_swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"><a>APP首单满100送100活动规则 点击查看!</a></div>
                    <div class="swiper-slide"><a>酒仙网线下实体火爆招商中</a></div>
                  </div>
                </div>
            </div>
      </div>


      <!-- 掌上秒拍 -->
      <div class="in_seckill pdS_com bgcolorW">
           <div class="in_seckill_title ftcolorG clearfix">
              <div class="l">
                  <span class="sec_title">掌上秒拍</span>
                  <span>距结束</span>
                  <span class="times hours bgcolorDG ftcolorW">03</span> :
                  <span class="times miunt bgcolorDG ftcolorW">04</span> :
                  <span class="times seconds bgcolorDG ftcolorW">50</span>
              </div>
              <div class="goto_seckill r">
                 <span class="ftcolorGL">更多商品的你来抢！</span>
                 <div class="goto_seckill_sign"></div>
              </div>
           </div>
          <div class="swiper-container" id="in_seckill_swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a>
                   <img src="https://img08.jiuxian.com/2017/0110/902babce85394325b90be604fd0963854.jpg"/>
                   <p class="secskill_name ftcolorGD">40°英国芝华士威士忌500ml+50ml品酒礼包</p>
                   <p class="seckill_price ftcolorR">￥120</p>
                   <p class="seckill_kill_price ftcolorGL">￥110</p>
                </a>
              </div>
              <div class="swiper-slide">
                <a>
                   <img src="https://img08.jiuxian.com/2017/0110/902babce85394325b90be604fd0963854.jpg"/>
                   <p class="secskill_name ftcolorGD">40°英国芝华士威士忌500ml+50ml品酒礼包</p>
                   <p class="seckill_price ftcolorR">￥120</p>
                   <p class="seckill_kill_price ftcolorGL">￥110</p>
                </a>
              </div> 
              <div class="swiper-slide">
                <a>
                   <img src="https://img08.jiuxian.com/2017/0110/902babce85394325b90be604fd0963854.jpg"/>
                   <p class="secskill_name ftcolorGD">40°英国芝华士威士忌500ml+50ml品酒礼包</p>
                   <p class="seckill_price ftcolorR">￥120</p>
                   <p class="seckill_kill_price ftcolorGL">￥110</p>
                </a>
              </div>
               <div class="swiper-slide">
                <a>
                   <img src="https://img08.jiuxian.com/2017/0110/902babce85394325b90be604fd0963854.jpg"/>
                   <p class="secskill_name ftcolorGD">40°英国芝华士威士忌500ml+50ml品酒礼包</p>
                   <p class="seckill_price ftcolorR">￥120</p>
                   <p class="seckill_kill_price ftcolorGL">￥110</p>
                </a>
              </div>
               <div class="swiper-slide">
                <a>
                   <img src="https://img08.jiuxian.com/2017/0110/902babce85394325b90be604fd0963854.jpg"/>
                   <p class="secskill_name ftcolorGD">40°英国芝华士威士忌500ml+50ml品酒礼包</p>
                   <p class="seckill_price ftcolorR">￥120</p>
                   <p class="seckill_kill_price ftcolorGL">￥110</p>
                </a>
              </div>
            </div>
          </div>
      </div>
      <!--广告一 -->
      <div class="in_bigAD">
          <a v-for="pic in bigADList">
            <img :src="pic"/>
          </a>
      </div>
      <!-- 广告二 -->
      <div class="in_bigAD_block pdS_com3 clearfix bgcolorW">
         <div class="l ad_one">
            <a><img src="https://img08.jiuxian.com/bill/2018/1126/c3e975357a6742da8d93e9a34f5f9389.jpg"/></a>
         </div>
         <div class="l ad_two">
            <a><img src="https://img09.jiuxian.com/bill/2018/1116/d2ec345287c9449b8b5bef849c44a812.jpg"/></a>
            <a class="ad_two_line"><img src="https://img06.jiuxian.com/bill/2018/1116/655190c67b2a4cc29346f019e108da09.jpg"/></a>
         </div>
      </div>
      <div class="in_bigAD_block_swiper">
          <div class="swiper-container" id="in_bigAD_block_swiper1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="block1 in bigADbkList">
                <a>
                   <img :src="block1"/>
                </a>
              </div>
            </div>
          </div>
      </div>
      <!-- 广告三 -->
      <div class="in_bigAD_block1">
        <a class="ad_one">
          <img src="https://img08.jiuxian.com/bill/2018/1129/fef55864caff495f9f254c81ba3a4429.jpg"/>
        </a>
      </div>
      <div class="in_bigAD_block1">
        <a class="ad_one">
          <img src="https://img08.jiuxian.com/bill/2018/0504/3b79febef26042daacd65629b8d4cecf.jpg"/>
        </a>
      </div>
      <div class="in_bigAD_block clearfix">
          <div class="l ad_one">
            <a><img style="height:1.848rem" src="https://img06.jiuxian.com/bill/2018/1116/e6f8a6a838b345fdb2a24db4bb5a19f2.jpg"/></a>
          </div>
          <div class="l ad_two">
            <a><img src="https://img06.jiuxian.com/bill/2018/1116/44ea9eb1afc24e108ee34169d5bca895.jpg"/></a>
          </div>
          <div class="ad_three">
            <a class="pic_three"><img src="https://img06.jiuxian.com/bill/2018/1116/eda5f20bea97425fa2c4da6130101d0d.jpg"/></a>
            <a class="pic_three"><img src="https://img07.jiuxian.com/bill/2018/1116/8274709d56c0460e986be7411227e9b2.jpg"/></a>
            <a class="pic_three"><img src="https://img06.jiuxian.com/bill/2018/1116/d30b66d140f64f80ace7584bfd306d34.jpg"/></a>
          </div>
      </div>

      <!-- 广告四 -->
      <component-block></component-block>

      <div class="in_bigAD_block1">
        <a class="ad_one">
          <img src="https://img10.jiuxian.com/bill/2018/0504/6dba580b72164560b8fd47fc81f396b5.jpg"/>
        </a>
      </div>
      <div class="in_bigAD_block clearfix">
          <div class="l ad_one">
             <a><img src="https://img07.jiuxian.com/bill/2018/0504/657126212d0540c8bbac602c77d5955c.jpg"/></a>
          </div>
          <div class="l ad_one">
             <a><img src="https://img06.jiuxian.com/bill/2018/0504/aced73aca3854aeea7aa14e53d641dcb.jpg"/></a>
          </div>
      </div>
      <component-list></component-list>
  </div>
</template>
<script>
import Swiper from 'swiper'
import  ComponentBlock from './ComponentBlock.vue'
import  ComponentList from './ComponentList.vue'
export default {
    name: 'Index',
    components:{
      'component-block':ComponentBlock,
      'component-list':ComponentList
    },
    data () {
      return {
        showAdFlag:true,
        menuList:[
          "https://img08.jiuxian.com/bill/2018/1129/15cd4ce2f84d4ec19501bde6dc38534c.jpg",
          "https://img08.jiuxian.com/bill/2018/1129/830c98fa95ef4e4c8e02fb8a1ca9e1f5.jpg",
          "https://img10.jiuxian.com/bill/2018/1129/ac2493ec73a94611933618c94903669f.jpg",
          "https://img10.jiuxian.com/bill/2018/1129/beb890fc8e634f928819097e563d95ce.jpg",
          "https://img10.jiuxian.com/bill/2018/1129/102537eb2aa2465389894de21a94aa32.jpg",
          "https://img08.jiuxian.com/bill/2018/1129/3b5ec83dc86740fb99df56c8d67637ec.jpg",
          "https://img09.jiuxian.com/bill/2018/1129/ca3c65d00f964fddaf63a7bcc7ad3a08.jpg",
          "https://img07.jiuxian.com/bill/2018/1129/f2fc39e39f384b368d8a78ef2b28cdba.jpg",
          "https://img07.jiuxian.com/bill/2018/1129/5df061bf521242908375605426b8e0de.jpg",
          "https://img06.jiuxian.com/bill/2018/1129/a8d73d247d124c63be263541b66da84c.jpg"
        ],
        bigADList:[
          "https://img06.jiuxian.com/bill/2018/1119/053f88aba27a4b9eb8751ad6ffa30bf9.jpg",
          "https://img08.jiuxian.com/bill/2018/1116/1dcb3e28079242178699d3c01a7e99f1.jpg",
          "https://img08.jiuxian.com/bill/2018/1129/0b961de77d2f467ebff41250a814704f.jpg",
          "https://img10.jiuxian.com/bill/2018/1116/ff11a8dfd63746b0b73e46ad6fcf1f5a.jpg",
          "https://img07.jiuxian.com/bill/2018/1120/85de8d41b8834fba86f4f69abc106a3b.jpg"
        ],
        bigADbkList:[
          "https://img07.jiuxian.com/bill/2018/1114/553a355d7230431dbd88ce00b3ce6ce1.jpg",
          "https://img10.jiuxian.com/bill/2018/1127/0e1ee4f7c0c1417499c5eef2ef9501a2.jpg",
          "https://img08.jiuxian.com/bill/2018/1130/0b2e9c96a5274707a672de0d20c3d5bd.jpg",
          "https://img10.jiuxian.com/bill/2018/1123/11fd8aea51b2437a87ecb2b686fc4856.jpg",
          "https://img09.jiuxian.com/bill/2018/1127/f459bff04ea946489c3e280b79abbcaf.jpg",
          "https://img08.jiuxian.com/bill/2018/1130/07159cfeac334b739c116dacc315e249.jpg",
          "https://img10.jiuxian.com/bill/2018/1121/72d01ac95129403b8420e0b396af829b.jpg",
          "https://img10.jiuxian.com/bill/2018/1130/f568479589db42e68637f65159892932.jpg",
          "https://img10.jiuxian.com/bill/2018/1126/801bc886a7c94b02afa429cabc33fb9d.jpg",

        ]
      }
    },
    mounted(){
      this.$store.state.showNavFlag = true
      // 头部banner
      var in_swiper = new Swiper('#in_swiper', {
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    
     //头条轮播
      var in_news_swiper = new Swiper('#in_news_swiper', {
        direction: 'vertical',
        autoplay:true,
        loop:true,
      });
      
      // 秒杀更多
      var in_seckill_swiper =  new Swiper('#in_seckill_swiper', {
        slidesPerView:3,
        spaceBetween:30
      });

      // 板块一
      var in_bigAD_block_swiper1 = new Swiper('#in_bigAD_block_swiper1', {
        slidesPerView:3,
        spaceBetween:30
      });

    },

    methods:{
      closeOpt:function(){
        this.showAdFlag = false
      },
    }
}
</script>
<style>
   .in_ad{
    width:100%;
    position: relative;
    z-index:999;
  }
  .in_ad .in_close{
      display: block;
      margin:0 .2rem;
      margin-top:.2rem;
  }
  .in_ad .in_close i,.in_ad .app_logo{
    background: url('../assets/img/topApp.png') no-repeat;
   
  }
  .in_ad .in_close i{
    background-position:0 0;
    width: .32rem;
    height: .32rem;
    display: block;
    background-size: .68rem 1rem;

  }
  .in_ad .app_logo{
     background-position: 0 -.3rem;
     width: .6rem;
     background-size: .6rem .9rem;
     height:.6rem;
     margin-top:.08rem;
  }
  .in_ad .in_ad_text{
      margin-left:.8rem;
      margin-top:.07rem;
      text-align: center;
  }
  .in_ad .in_ad_btn{
    width:1.8rem;
    height:100%;
    font-size:.22rem;
    text-align: center;
    line-height: .7rem;
  }

  #in_swiper {
    width: 100%;
    height: 3rem;
  }
/*  .swiper-slide {
     width:100%;
     height:100%;
  }*/
  .swiper-slide img{
     width:100%;
     height:100%;
  }

  .in_search{
    width:100%;
    height:.5rem;
    position: absolute;
    z-index:9999;
    margin-top:.1rem;
  }
  .web_logo{
     background: url('../assets/img/jx-sprite.png') no-repeat;
     background-size: 3.5rem 1.3rem;
     background-position: 0 0;
     width: 1rem;
     height: .5rem;
     margin-left:.2rem;
     margin-right:.1rem;
  }
  .in_search_mian{
    width:5rem;
    height:.46rem;
    border-radius:.05rem;
    line-height: .46rem;
    text-align: center;
    position: relative;
  }
  .in_search_logo{
    position: absolute;
    background: url('../assets/img/jx-sprite.png') no-repeat;
    background-position: -1.13rem 0;
    background-size: 3.5rem 1.3rem;
    width:.3rem;
    height:.3rem;
    left: .15rem;
    top: .1rem;
  }

  /*菜单样式开始*/
  .in_menu{
    width:100%;
  }
  .in_menu ul{
    width:100%;
    height:100%;
    box-sizing: border-box;
  }

  .in_menu li{
    width:20%;
  }
  .in_menu li img{
    width:100%;
    height:100%;
    display: block;
  }
  .in_intro,.in_intro .clearfix{
    width:100%;
    height:auto;
  }
  .in_intro .first_one{
    width:100%;
  }
  .in_intro .first_one img{
    width:100%;
    display: block;
    height:100%;
  }
  .in_intro .clearfix img{
    width:50%;
  }
   /*菜单样式结束*/

   /*头条样式开始*/
   .in_news_hot{
     height:.3rem;
   }
  .in_news_sign{
    border-right:1px solid #ededed;
  }
  .in_news_sign img{
    width:1.4rem;
    padding-right:.15rem;
    display: block;
  }
  #in_news_swiper{
    padding-left:.15rem;
    height:100%;
  }
  #in_news_swiper a{
    display: block;
    width:100%;
  }

  .news_swiper{
    height:.3rem;
  }

  /*掌上秒拍*/
  .in_seckill{

  }
  .in_seckill_title{
    border-bottom:1px solid #ededed;
    padding-bottom: .1rem;
  }
  .sec_title{
    font-family: "黑体";
    font-weight: bold;
    font-size: .22rem;
    margin-right:.15rem;
  }
  .times{
    padding:.01rem .04rem;
    text-align: center;
    border-radius: .03rem;
  }
  .goto_seckill{
    position: relative;
  }
  .goto_seckill span{
    margin-right:.3rem;
  }
  .goto_seckill_sign{
    background: url(/static/img/jx-sprite.1971b42.png) no-repeat;
    background-size: 3.3rem 1.2rem;
    background-position: -1.4rem 0;
    width: .3rem;
    height: .3rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  

  #in_seckill_swiper a{
    display: block;
  }
  .secskill_name{
     height:.6rem;
     overflow: hidden;
  }
  .seckill_kill_price{
    text-decoration: line-through;
  }

  .in_bigAD{
    width:100%;
    height:auto;
  }
  .in_bigAD a{
    display: block;
  }
  .in_bigAD a img{
    width: 100%;
    display: block;
  }
  .in_bigAD_block .ad_three{
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
  }
  .in_bigAD_block .ad_three a.pic_three{
    flex: 1;
    display: block;
    position: relative;
  }
  .in_bigAD_block .ad_one{
    width:49.1%;
    position: relative;
  }
  .in_bigAD_block .ad_two{
    width:50.9%;
  }
  .in_bigAD_block .ad_one img,.in_bigAD_block .ad_two img,.in_bigAD_block .ad_three img,.in_bigAD_block1 img{
    width:100%;
    display: block;
  }
  .in_bigAD_block .ad_one::after,.in_bigAD_block .ad_three a.pic_three::after{
    border-right: 1px solid #f0f0f0;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    width: 1px;
    z-index: 10;
  }
  .in_bigAD_block .ad_two_line{
     position: relative;
  }
  .in_bigAD_block .ad_two_line::before{
    border-top: 1px solid #f0f0f0;
    content: "";
    position: absolute;
    width: 3.2rem;
    z-index: 10;
  }
  .in_bigAD_block_swiper{
    height:auto;
  }
  #in_bigAD_block_swiper1 a{
     display: block;

  }
  #in_bigAD_block_swiper1 a img{
    display: block;
  }
</style>


<template>
  <div class="in_comp">
        <div class="block_item bgcolorW">
          <div class="block_item_title">
              <a><img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg"/></a>
          </div>
          <div class="clearfix">
              <div class="l block_left_pic">
                  <a><img src="https://img09.jiuxian.com/bill/2018/1116/fbb76061aeb94891be1cea959fa6bdd5.jpg"/></a>
              </div>
              <div class="l block_right_pic">
                  <a><img src="https://img07.jiuxian.com/bill/2018/1116/3411cbb80cf444578ea8f4c8e5ff9406.jpg"/></a>
                  <div class="clearfix">
                     <a class="block_bottom_pic l"><img src="https://img10.jiuxian.com/bill/2018/1116/d5ac428dcf9b42fcb3f7a0b0bef71354.jpg"/></a>
                     <a class="block_bottom_pic l"><img src="https://img08.jiuxian.com/bill/2018/1116/5b04e456e2614a618fcf8e281b8cac5d.jpg"/></a>
                  </div>
              </div>
          </div>
        </div>
        <div class="swiper-container bgcolorW" id="block_swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="block1 in blockList">
                <a>
                   <img :src="block1"/>
                </a>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'ComponentBlock',
    data () {
	    return {
	      blockList:[
           "https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg",
           "https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg",
           "https://img09.jiuxian.com/bill/2016/1118/9831224523a6477a8b6f9661e5daa64b.jpg",
           "https://img10.jiuxian.com/bill/2016/1118/8f58d3feba1145ae960e0644a284ea8f.jpg",
           "https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg",
           "https://img10.jiuxian.com/bill/2016/1118/d2fadf05b223423e972e6b6ca629320c.jpg",
           "https://img10.jiuxian.com/bill/2018/1102/79f0383b1c18496cb3efd28206aa0ab5.jpg",
           "https://img08.jiuxian.com/bill/2018/1102/212562ac1f834ff2b2748c2c514a91ea.jpg",
           "https://img08.jiuxian.com/bill/2016/1118/cda95e60066044a295fb3a810575ada3.jpg",
           "https://img09.jiuxian.com/bill/2016/1118/3078db947b654fcc9b190f8261a2c5a7.jpg",
           "https://img07.jiuxian.com/bill/2016/1118/ad1d2dc3a06d40c28a3a05ee23a266cc.jpg"
        ]
	    }
    },
    mounted(){
      	var block_swiper = new Swiper('#block_swiper', {
          slidesPerView:3,
          spaceBetween:30
        });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block_item{
  width:100%;
  height:auto;
}
.block_item a{
  display: block;
}
.block_item a img{
  width:100%;
  display: block;
}
.block_item_title{
  width:100%;
}
.block_left_pic{
  width:40%;
}
.block_right_pic{
  width:60%;
}
.block_bottom_pic{
  width:50%;
}
#block_swiper a{
  display: block;
  width:.8rem;
}
#block_swiper a img{
  display: block;
}
</style>
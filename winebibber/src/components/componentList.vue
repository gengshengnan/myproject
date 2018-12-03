<template>
  <div class="com_list">
      <div class="com_list_title bgcolorW"><span class="ftcolorG">爆款推荐</span></div>
      <div class="clearfix">
            <div class="com_list_items bgcolorW l" v-for="item in recommentList">
                <div class="com_list_item">
                      <div class="tagList">
                         <span v-for="val in item.promo" class="ftcolorW" :style="{backgroundColor: val.backColor}" v-text="val.name"></span>
                      </div>
                      <div class="com_list_desc">
                          <img :src="item.commonProductInfo.imgPath"/>
                          <p class="name ftcolorGD" v-text="item.commonProductInfo.pname"></p>
                          <p class="price ftcolorR">￥<span v-text="item.commonProductInfo.jxPrice"></span></p>
                      </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'componentList',
  data () {
    return {
      recommentList:[]
    }
  },
  mounted(){
    this.getRecomList()
  },
  methods:{
    getRecomList:function(){
      var that = this
      axios.get('/m_v1/statics/getzx.htm?topicId=1165&pageNum=1')
        .then(function (response) {
          console.log(response)
          that.recommentList =response.data.promoList
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
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

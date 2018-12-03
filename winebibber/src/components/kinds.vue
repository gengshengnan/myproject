<template>
  <div class="kinds_con bgcolorW">
      <common-header title="选酒" :isCar=false></common-header>
      <header class="C_kinds_search pdS_com4 bgcolorGL">
         <div class="C_kinds_search_main bgcolorSearch">
            <div class="C_kinds_search_con">
               <div class="C_kinds_search_sign"></div>
               <span class="ftcolorG">100000瓶美酒免费送，1元抢品质名酒</span>
            </div>
         </div>
      </header>

      <div class="menu_main">
         <ul class="clearfix">
            <li class="bj l">
               <a>
                  <i></i>
                  <span>白酒</span>
               </a>
            </li>
         </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Kinds',
  data () {
    return {
     /* msg: 'Welcome to Your Vue.js App'*/
    }
  },
   mounted(){
      this.$store.state.showNavFlag = false
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.C_kinds_search{
  height:.6rem;
  line-height: .7rem;
  text-align: left;
  border-bottom:1px solid #e4e4e4;
}
.C_kinds_search_main{
  width:100%;
  height:.5rem;
  line-height: .5rem;
  border-radius: .06rem;
  position: relative;
}
.C_kinds_search_sign{
  position: absolute;
  background: url(/static/img/jx-sprite.1971b42.png) no-repeat;
  background-position: -1.13rem 0;
  background-size: 3.5rem 1.3rem;
  width: .3rem;
  height: .3rem;
  left: .15rem;
  top: .1rem;
}
.C_kinds_search_con{
  margin-top:.1rem;
}
.C_kinds_search_con span{
  margin-left:.6rem;
}
.menu_main{

}

.menu_main a{
  width:100%;
  height:100%;
  display: block;
}
.menu_main a i{
  width:1rem;
  height:1rem;
  background:url('../assets/img/selectIcon.png') no-repeat;
}
.menu_main .bj i{
  background-position: 0 0;
}
</style>

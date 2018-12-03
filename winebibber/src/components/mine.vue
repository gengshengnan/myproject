<template>
  <div class="mine">
       <common-header title="用户登录" :isCar=false></common-header>
  </div>
</template>

<script>
export default {
    name: 'Mine',
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

</style>

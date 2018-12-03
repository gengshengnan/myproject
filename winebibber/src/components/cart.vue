<template>
  <div class="mine">
      <common-header title="购物车" :isCar=true></common-header>
  </div>
</template>

<script>
export default {
	name: 'Cart',
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

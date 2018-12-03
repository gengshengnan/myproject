<template>
  <div class="mine">
      <h1>这是我的页面</h1>
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
       console.log(this.$store.state.showNavFlag)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

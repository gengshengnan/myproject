import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
	showNavFlag:true
}


const mutations = {
    changeShowNavFlag:function(state,showNavFlag){
      state.showNavFlag = showNavFlag
   },
}


const action = {
    changeShowNavFlag:function({commit},showNavFlag){
       commit("changeShowNavFlag",showNavFlag)
    },
}

export default new Vuex.Store({
	state,
	mutations,
	action
})
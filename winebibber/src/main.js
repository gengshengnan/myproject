// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import ComponentHeader from './components/common/CommentHeader'
import 'swiper/dist/css/swiper.css';
import './assets/css/base.css'
import './assets/font/iconfont.css'


Vue.component('common-header',ComponentHeader)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueLazyload from 'vue-lazyload'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/index.js'
import axios from 'axios'
import 'animate.css/animate.min.css'
import { Swipe, SwipeItem } from 'vue-swipe'  // 引入swipe swipeItem
import Vuex from 'vuex'
import store from './router/store.js'

Vue.use(VueLazyload)
Vue.use(VueLazyload,{
	error:'../static/images/cuowu.jpg',
	loading:'../static/images/jiazai.jpg'
})
Vue.use(Vuex)
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'; 
//require('vue-swipe/dist/vue-swipe.css');//全局引入
// Vue.use(Mint);
// import Mint from 'mint-ui';
// 
// Vue.use(Mint);
Vue.component('swipe', Swipe)  // 注册
Vue.component('swipe-item', SwipeItem) // 注册
Vue.use(VueRouter);

Vue.prototype.$http=axios



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

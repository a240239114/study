//导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入VueResource
import VueResource from 'vue-resource'
//手动安装VueResource
Vue.use(VueResource)

//Mint UI按需导入header
import { Header,Swipe, SwipeItem  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//引入mui样式
import './lib/mui/css/mui.min.css'
//引入mui额外样式
import './lib/mui/css/icons-extra.css'

//导入私有路由router.js
import router from './router.js'

//导入App
import app from './App.vue'

//创建vue实例,   
var vm=new Vue({
   el:'#app',
   data:{},
   render:c=>c(app),
   //实例中自定义router
   router
});
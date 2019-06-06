//先导入Vue
import Vue from 'vue'
//导入Vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入bootstrap,在node_modules文件下,一般情况省略node_modules
import 'bootstrap/dist/css/bootstrap.css'
//导入私有css样式
import './css/app.css'
//导入MUI样式
import './lib/mui/css/mui.min.css'//以上的样式都是具体的路径,只不过有时候可以省略node_modules

//导入所有MintUI组件
//导入 MintUI
// import MintUI from 'mint-ui'
// //导入样式
// import 'mint-ui/lib/style.css'
// //将MintUI 安装到 Vue中去
// Vue.use(MintUI) 

//按需要导入Mint-UI
import {Button} from 'mint-ui'
//使用Vue.component 注册 按钮组件
Vue.component(Button.name,Button)

//导入 app 组件
import app from './App.vue'

//导入自定义路由模块
import router from './router.js'


var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router //将路由挂载在vue上
});
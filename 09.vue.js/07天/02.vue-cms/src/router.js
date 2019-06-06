//导入VueRouter
import VueRouter from 'vue-router'

//导入tabbar下的组件
import homecontainer from './components/tabbar/HomeContainer.vue'
import membercontainer from './components/tabbar/MemberContainer.vue'
import searchcontainer from './components/tabbar/SearchContainer.vue'
import shopcarcontainer from './components/tabbar/ShopcarContainer.vue'

//创建路由对象
var router=new VueRouter({
     routes:[
         {path:'/home',component:homecontainer},
         {path:'/member',component:membercontainer},
         {path:'/search',component:searchcontainer},
         {path:'/shopcar',component:shopcarcontainer}
     ],
     linkActiveClass:'mui-active'
});

export default router
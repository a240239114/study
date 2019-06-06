//导入VueRouter
import VueRouter from 'vue-router'

// 导入main下的组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入subcom下的组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//创建路由对象
var router=new VueRouter({
    routes:[
        {  path:'/account',
           component:account,
           children:[
               {path:'login',component:login},
               {path:'register',component:register}
           ]
        },
        {path:'/goodslist',component:goodslist}
    ]
});

//把router暴露出去
export default router
<template>
    <div>
        <h1>这是App组件</h1>
        <!-- 这些都是MINT-UI -->
        <mt-button type="danger" icon="more" @click="show">default</mt-button>
        <mt-button type="danger" size="large" plain>default</mt-button>
        <mt-button type="danger" size="small" disabled>default</mt-button>
        
        <!-- 这些都是MUI -->
        <button type="button" class="mui-btn mui-btn-royal">紫色</button> 

        <router-link to='/account'>Account</router-link>
        <router-link to='/goodslist'>goodslist</router-link>
     
        <router-view></router-view>
    </div>
</template>


<script>
    //按需导入toast组件
    import { Toast } from 'mint-ui';
    
    export default {
        data(){
            return{
                toastInstanse:null
            }
        },
        created(){
            this.getList();
        },
        methods:{
           getList(){
              this.show();
              setTimeout(()=>{
                  this.toastInstanse.close();
              },3000)    
           },
           show(){
             this.toastInstanse=Toast({
               message:"这是信息",
               duration:-1,
               position:"top",
               iconClass:"mui-icon mui-icon-weixin",
               className:"mytoast"
              })
           }
        }
    }
</script>

<style>

</style>

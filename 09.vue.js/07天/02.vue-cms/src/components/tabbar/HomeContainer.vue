<template>
   <div>
       <!-- 轮播图区域 -->
       <mt-swipe :auto="4000">
         <mt-swipe-item v-for="item in Lunbotulist" :key="item.url">
             <img :src="item.img">
         </mt-swipe-item>
      </mt-swipe>

       <!-- 九宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png">
		                    <div class="mui-media-body">练习我们</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">图片分享</div></a></li>		               
	    </ul> 
   </div>
</template>

<script>
   //按需要导入toast
   import { Toast } from 'mint-ui';

   export default{
       data(){
           return{
               Lunbotulist:[]
           };
       },
       created(){
          this.getLunbotu();
       },
       methods:{
          getLunbotu(){
              this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
                  if(result.body.status===0){
                      this.Lunbotulist=result.body.message;
                  }else{
                      Toast('导入失败');
                  } 
              })
          }
       }
   }
</script>

<style lang="less" scoped>
//  轮播图区域
   .mint-swipe{
       height: 180px;
       .mint-swipe-item{
           &:nth-child(1){
              background-color: red;
           }
           &:nth-child(2){
               background-color:blue;
           }
           &:nth-child(3){
               background-color:yellowgreen;
           }
           img{
               width:100%;
               height: 100%;
           }
       }
   }
   
//九宫格区域
.mui-table-view.mui-grid-view.mui-grid-9{
   background-color: white;
   border:none;
   img{
       width: 60px;
       height: 60px;
   }
   .mui-media-body{
       font-size: 10px;
   }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}
</style>




  //小蛇对象
  (function(){
     //创建一个数组用来储存小方块
     var elements=[]; 
     //获取map对象
     var map=document.querySelector(".map");
     //创建小蛇对象
    function Snake(width,height,direction) {
  	 // 小蛇的每个部分的宽
  	this.width=width||20;
        this.height=height||20;
        //小蛇的身体
        this.body=[
           {x:3,y:2,color:"red"},//头部0
           {x:2,y:2,color:"orange"},//身体1
           {x:1,y:2,color:"orange"}//身体2
        ];
        this.direction=direction||"right";
     }

     //初始化蛇的对象并且添加到map中
     Snake.prototype.init=function () {
          remove();
          //循环遍历创建div
          for(var i=0;i<this.body.length;i++){
          //数组的每个元素都是对象
          var obj=this.body[i];
          //创建div
          var div=document.createElement("div");
          //把div放在map中去
          map.appendChild(div);
          //设置div的样式
          div.style.position="absolute";
          div.style.width=this.width+"px";
          div.style.height=this.height+"px";
          div.style.left=obj.x*this.width+"px";
          div.style.top=obj.y*this.height+"px";
          div.style.backgroundColor=obj.color;
          //方向暂时不定义
          //把div加入到element中是为了删除
          elements.push(div);
        }
     };

     //删除小蛇的私有化函数,从数组中删除.
     function remove(){
      for(var i=0;i<elements.length;i++){
           var ele=elements[i];
           //找到这个子元素的父级元素然后在删除
           ele.parentNode.removeChild(ele);
           //再次把elements中的这个子元素也要删除
           elements.splice(i,1);
      }
     }

     //给小蛇添加移动的方法move
     Snake.prototype.move=function(food,map) {
       //改变小蛇的身体部位 
       var i=this.body.length-1;//2 
       for(;i>0;i--){
          this.body[i].x=this.body[i-1].x;
          this.body[i].y=this.body[i-1].y;
       }
      //判断方向---改变小蛇的头的坐标位置
      switch(this.direction){
        case "right":
          this.body[0].x+=1;
          break;
        case "left":
          this.body[0].x-=1;
          break;
        case "top":
          this.body[0].y-=1;
          break;
        case "bottom":
          this.body[0].y+=1;
          break; 
      }

      //判断有没有吃到食物
      //小蛇的头部的X坐标和Y坐标是否与食物的一样
      //小蛇头部的横坐标
      var headX=this.body[0].x*this.width;
      //小蛇头部的纵坐标
      var headY=this.body[0].y*this.height;
      if(headX==food.x&&headY==food.y){
          //获取小蛇身体尾部的DIV
          var last=this.body[this.body.length-1];
          //把最后的蛇尾复制到小蛇中
          this.body.push({
             x:last.x,
             y:last.y,
             color:last.color            
            });
        //初始化食物
        food.init(map);
      }
     };
     //把Snake暴露给window,外部可以直接使用测试
      window.Snake=Snake;
}());

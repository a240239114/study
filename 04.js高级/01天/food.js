 //Food对象
  (function(window){
   	     //创建一个数组用来储存小方块
         var elements=[]; 
         //选择器的方式来获取map对象
         var map=document.querySelector(".map");
         //食物的构造函数
         function Food(width,height,color) {
             this.width=width||20;
             this.height=height||20;
             //横纵坐标是随机的
             this.x=0;
             this.y=0;
             this.color=color||"green";
             //创建一个小方块
             this.element=document.createElement("div");
         }

    //初始化小方块显示的效果和位子,显示在地图上
    Food.prototype.init=function() {
         remove();
     	   var div=this.element;
     	   //把小方块放到map中去
     	   map.appendChild(div);
     	   //脱离文档流
     	   div.style.position="absolute";
     	   div.style.width=this.width+"px";
     	   div.style.height=this.height+"px";
     	   div.style.backgroundColor=this.color;
     	   //把小方块放到数组中去
     	   elements.push(div);
     	   this.render();
         }; 

     //删除细小方块的函数,从数组中删除.
    function remove() {
     	for(var i=0;i<elements.length;i++){
           var ele=elements[i];
           //找到这个子元素的父级元素然后在删除
           ele.parentNode.removeChild(ele);
           //再次把elements中的这个子元素也要删除
           elements.splice(i,1);
     	}
    }
     //产生随机位子的
    Food.prototype.render=function() {
     	var x=random.getRandom(0,map.offsetWidth/this.width)*this.width;
     	var y=random.getRandom(0,map.offsetHeight/this.height)*this.height;
     	this.x=x;
     	this.y=y;
     	var div=this.element;
     	div.style.left=this.x+"px";
     	div.style.top=this.y+"px";
       };
      //把Food暴露给window,外部可以直接使用
      window.Food=Food;
  })(window);
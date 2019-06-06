   //01利用函数的自调用产生随机数对象
   (function (window) {
      //自定义函数创建对象
      function Random(){
        
      }
      Random.prototype.getRandom=function(min,max) {
          return Math.floor(Math.random()*(max-min)+min);
      };
      // var random=new Random();
      // var num=random.getRandom();
      // console.log(num);
      window.random=new Random();
      // console.log(typeof random);
   })(window);




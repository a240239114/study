//创建一个游戏对象
(function() {
  var that = null;
  //游戏的构造函数
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  //初始化游戏对象
  Game.prototype.init = function() {
    this.food.init(this.map); //食物的初始化
    this.snake.init(this.map); //小蛇的初始化
    this.runSnake(this.food, this.map); //调用游戏的移动函数
    this.bindKey();
  };

  //增添原型方法蛇动起来
  Game.prototype.runSnake = function(food) {
    var map = document.querySelector(".map");
    //调用定时器
    var timeId = setInterval(
      function() {
        //调用小蛇移动函数
        this.snake.move(food);
        //初始化小蛇
        this.snake.init();
        //限制小蛇活动的范围
        //横坐标的最大值
        var maxX = map.offsetWidth / this.snake.width;
        //纵坐标的最大值
        var maxY = map.offsetHeight / this.snake.height;
        //小蛇头部的X坐标
        var headX = this.snake.body[0].x;
        //小蛇头部的Y坐标
        var headY = this.snake.body[0].y;
        //判断蛇的头部的X和Y值是否超出范围,如果超出就弹出就撞墙了
        if (headX < 0 || headX > maxX) {
          //结束定时器
          clearInterval(timeId);
          alert("游戏结束了");
        }
        if (headY < 0 || headY > maxY) {
          clearInterval(timeId);
          alert("游戏结束了");
        }
      }.bind(that),
      1000
    );
  };

  //增添原型方法bindkey
  Game.prototype.bindKey = function() {
    document.addEventListener(
      "keydown",
      function(e) {
        switch (e.keyCode) {
          case 37:
            this.snake.direction = "left";
            break;
          case 38:
            this.snake.direction = "top";
            break;
          case 39:
            this.snake.direction = "right";
            break;
          case 40:
            this.snake.direction = "bottom";
            break;
        }
      }.bind(that),
      false
    );
  };

  window.Game = Game;
})();

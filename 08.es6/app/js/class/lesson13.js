{
  // 基本定义
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}

{
  let ajax=function() {
      console.log(' 执行2');
      return new Promise(function(resolve,reject) {
         setTimeout(function() {
           resolve()
         },1000);
      })
  };

  ajax().then(function() {
     console.log('promise','timeout2');
  })
}

{
  let ajax=function(){
    console.log('执行3');
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax()
    .then(function(){
    return new Promise(function(resolve,reject){
      setTimeout(function () {
        resolve()
      }, 2000);
    });
  })
    .then(function(){
    console.log('timeout3');
  })
}

{
  let ajax=function(num){
    console.log('执行4');
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve()
      }else{
        throw new Error('哈哈,出错了吧!')
      }
    })
  }

  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  });

  ajax(4).then(function(){
    console.log('log',4);
  }).catch(function(err){
    console.log('catch',err);
  });
}

{
  let ajax=function() {
     console.log('执行5');
     return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve()
        },4000)
     })
  };

  ajax().then(function() {
     console.log('promise','timeout3');
  })
}

{
  function loadImg(src) {
     return new Promise((resolve,reject)=>{
       let img=document.creatElement('img');
       img.src=src;
       img.onload=function() {
          resolve(img);
       }

       img.onerror=function(err) {
          reject(err);
       }
     })
  }

  function showImgs(imgs) {
    imgs.forEach(function(img) {
       document.body.appendChild(img);
    })
  }

  promise.all({
    loadImg('网页地址')
  })
}

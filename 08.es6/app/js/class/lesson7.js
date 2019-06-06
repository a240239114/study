{
  function test(x,y="world") {
     console.log("默认值",x,y);
  }
  test('hello');
  test('hello',"kill");
}

{
  let x="woaini";
  function test(a,y=x) {
      console.log("作用域",a,y);
  }
   test("aaa");
}

{//这是将传入的参数作为一个数组保存在arg中
  function test(...arg) {
      for(let v of arg){
        console.log('rest',v);
      }
  }
  test(1,2,4,5,6);
}

{//与前者相反
  console.log(...[1,2,3,4]);
  console.log('a',...[1,2,3,4]);
}

{
  let arrow=v=>v*2;
  console.log('arrow',arrow(3));
  let arrow2=()=>5;
  console.log('arrow2',arrow2());
}

{//尾调用
  function tail(x) {
    console.log("tail",x);
  }
  function fx(x) {
     return tail(x);
  }
  fx(123);
}
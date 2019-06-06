// {
//   let list = new Set();
//   list.add(5);
//   list.add(7);

//   console.log('size',list.size);
// }

{
  let list=new Set();
  list.add(5);
  list.add(7);
  console.log('size',list.size);
}

// {
//   let arr = [1,2,3,4,5];
//   let list = new Set(arr);

//   console.log('size',list.size);
// }

{
  let arr=[1,2,3,4,5];
  let list=new Set(arr);
  console.log('size',list.size);
}

// {
//   let list = new Set();
//   list.add(1);
//   list.add(2);
//   list.add(1);

//   console.log('list',list);

//   let arr=[1,2,3,1,'2'];
//   let list2=new Set(arr);

//   console.log('unique',list2);
// }

{//set可以添加任何数据类型
  let list=new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);

  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2);
}

// {
//   let arr=['add','delete','clear','has'];
//   let list=new Set(arr);

//   console.log('has',list.has('add'));
//   console.log('delete',list.delete('add'),list);
//   list.clear();
//   console.log('list',list);
// }


{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  list.clear();
  console.log('list',list);
}

// {
//   let arr=['add','delete','clear','has'];
//   let list=new Set(arr);

//   for(let key of list.keys()){
//     console.log('keys',key);
//   }
//   for(let value of list.values()){
//     console.log('value',value);
//   }
//   for(let [key,value] of list.entries()){
//     console.log('entries',key,value);
//   }

//   list.forEach(function(item){console.log(item);})
// }

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);
 
  for(let key of list.keys()){
     console.log('key',key);
  }

  for(let value of list.values()){
    console.log('value',value);
  }

  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item) {
      console.log(item);
  })
}


// {
//   let weakList=new WeakSet();

//   let arg={};

//   weakList.add(arg);

//   // weakList.add(2);

//   console.log('weakList',weakList);
// }

{
 let weakList=new WeakSet();

 let arg={};

 weakList.add(arg);

 console.log('weakList',weakList);
}

// {
//   let map = new Map();
//   let arr=['123'];

//   map.set(arr,456);

//   console.log('map',map,map.get(arr));
// }

{
  let map=new Map();
  let arr=['123'];
  //set是添加元素
  map.set(arr,456);
  //get是获取值
  console.log('map',map,map.get(arr));
}

// {
//   let map = new Map([['a',123],['b',456]]);
//   console.log('map args',map);
//   console.log('size',map.size);
//   console.log('delete',map.delete('a'),map);
//   console.log('clear',map.clear(),map);
// }

{
  let map=new Map([['a',123],['b',465]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}

{
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}



//map和set 与数组的对比:增,查,改,删
{//map和array的对比
  let map=new Map();
  let array=[];

  //增
  map.set('t',1);
  array.push({t:1});
  
  //查  此处的item是数组本身,可以查参数
  let map_exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  
  //改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  
  //删
  map.delete('t');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);//splice删除元素需要index
}

{//set和array的对比
  let set=new Set();
  let array=[];

  //增
  set.add({t:1});
  array.push({t:1});

  //查
  let set_exist=set.has({t:1});
  let array_exist=array.find(item=>item.t);

  //改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item,t?item.t=2:'');

  //删
  set.forEach(item=>item.t?set.delete(item):'');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
}

{//map.set和Object的对比
   let item={t:1};
   let map=new Map();
   let set=new Set();
   let obj={};

   //增
   map.set('t',1);
   set.add(item);
   obj['t']=1;

   //查
   map_exist=map.has('t');
   set_exist=set.has('t');
   obj_exist='t' in obj;

   //改
   map.set('t',2);
   item.t=2;
   obj['t']=2;

   //删除
   map.delete('t');
   set.delete(item);
   delete obj['t'];
}

1.map只能添加对象,set可以添加任何数据类型;
2.优先使用map,考虑唯一性使用set,放弃传统的数组和object
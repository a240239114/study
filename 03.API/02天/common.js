function My$(id) {
	return document.getElementById(id);
}
//封装设置任意标签的任意文本内容
function setInnerText(element,text) {
 	  if(typeof element.textContent=="undefined"){//不支持
        element.innerText=text;
	  }else{
	  	   element.textContent=text;
	  }
}

//获取标签的文本内容
function getInnerText(element){
   if(typeof element.textContent=="undefined"){
   	  return element.innerText;
   }else{
   	  return element.textContent;
   }
}

 
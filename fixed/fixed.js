

var goTop=document.getElementById("fixed")


window.onscroll=function(){

  var jhlheight=document.documentElement.scrollTop

  console.log(jhlheight)

  if(jhlheight>=1000){
  
  goTop.style.display="block"	 

  }else{

    
  goTop.style.display="none"	 
}

}

 //点击按钮事件
 goTop.onclick=function(){
		
    window.scrollTo({     //设置滚动条位置
        top:0,            //回到顶部
        behavior:"smooth"   //平滑过渡
    })
    
}  

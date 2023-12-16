var json, json2;
json = {"total":10,"rows":[{
    "id": 1,
    "title":"京喜推荐",
  },
  {
    "id": 2,
    "title":"女装",
  },
  {
    "id": 3,
    "title":"男装",
  },
  {
    "id": 4,
    "title":"清洁纸品",
  },
  {
    "id": 5,
    "title":"食品酒水",
  },
  {
    "id": 6,
    "title":"百货",
  },
  {
    "id": 7,
    "title":"厨具",
  },
  {
    "id": 8,
    "title":"手机数码",
  },
  {
    "id": 9,
    "title":"家电",
  },
  {
    "id": 10,
    "title":"美妆个护",
  },
  {
    "id": 11,
    "title":"鞋靴箱包",
  },
  {
    "id": 12,
    "title":"生鲜",
  },
  {
    "id": 13,
    "title":"母婴",
  },
  {
    "id": 14,
    "title":"车品",
  },
  {
    "id": 15,
    "title":"电脑办公",
  },
  {
    "id": 10,
    "title":"家具建材",
  },
  {
    "id": 10,
    "title":"珠宝钟表",
  },
  {
    "id": 10,
    "title":"运动",
  },

],"code":200,"msg":"查询成功"};
var list_title=document.getElementById("list");
//循环添加所有的li
for(i=0;i<json.rows.length;i++){
    var list_li=document.createElement("li");
    list_li.innerHTML=json.rows[i].title;
    list_li.index=i;
    list_title.appendChild(list_li);
   }
   //获取ul下的所有li数量
   var d = list_title.getElementsByTagName('li'); 
   //将第一个初始化为红色，第二个初始化为圆角
   d[0].style.color="red";
   d[1].setAttribute("class","top-right-radius");
   
   //将除第一个li以外所有的li背景颜色设置为灰色
   for(var i=1; i<d.length; i++) {
      d[i].style.backgroundColor="rgba(238, 238, 238, 0.662)";
    }  
   for(let i=0; i<d.length; i++){
        d[i].index = i; // 为第i个li元素添加一个index属性，赋值为i
        d[i].addEventListener('click',function() {//添加点击响应方法
        var list_ul=document.getElementById("list_ul");
        list_ul.innerHTML="";
        list();
        for(var i=0; i<d.length; i++) {
            d[i].style.color="black";//先把所有字体颜色变成黑色
            d[i].setAttribute("class","");//所有样式设为空
            if(i!=this.index){
               //将除点击以外的所有li背景颜色设置为灰色
                d[i].style.backgroundColor="rgba(238, 238, 238, 0.662)";
            }
        }   
        //将点击的li字体颜色设置为红色
        d[this.index].style.color="red";
        //将点击的li背景颜色设置为白色
        d[this.index].style.backgroundColor="white";
        //判断是否为第一个li，是就只把下面的li右上角设置为圆角，否则将上面的li右下角设置为圆角
        if(this.index!=0){
            d[this.index-1].setAttribute("class","bottom-right-radius");
        }
        d[this.index+1].setAttribute("class","top-right-radius");
    })
}



json2 = {"total":10,"title":"京喜热销","rows":[{
    "imgUrl": "../img/d1.webp",
    "name":"空调",
  },
  {
    "imgUrl":"../img/d2.webp",
    "name":"电风扇",
  },
  {
    "imgUrl":"../img/d3.webp",
    "name":"电饭煲",
  },
  {
    "imgUrl": "../img/d4.webp",
    "name":"冰箱",
  },
  {
    "imgUrl": "../img/d5.webp",
    "name":"平板电视",
  },
  {
    "imgUrl": "../img/d6.webp",
    "name":"针织衫",
  },
  {
    "imgUrl": "../img/d7.webp",
    "name":"连衣裙",
  },
  {
    "imgUrl": "../img/d8.webp",
    "name":"卫衣",
  },
  {
    "imgUrl": "../img/d9.webp",
    "name":"阔腿裤",
  },
  {
    "imgUrl": "../img/d10.webp",
    "name":"休闲裤",
  },
  {
    "imgUrl": "../img/d11.webp",
    "name":"衬衫",
  },
  {
    "imgUrl": "../img/d12.webp",
    "name":"夹克",
  },
  {
    "imgUrl": "../img/d13.webp",
    "name":"牛仔裤",
  },
  {
    "imgUrl": "../img/d14.webp",
    "name":"男士内裤",
  },
  {
    "imgUrl": "../img/d15.webp",
    "name":"休闲棉袜",
  },  {
    "imgUrl": "../img/d16.webp",
    "name":"抽纸",
  },  {
    "imgUrl": "../img/d17.webp",
    "name":"洗衣液",
  },  {
    "imgUrl": "../img/d18.webp",
    "name":"卷纸",
  },{
    "imgUrl": "../img/d19.webp",
    "name":"零食大礼包",
  },{
    "imgUrl": "../img/d20.webp",
    "name":"饼干蛋糕",
  },{
    "imgUrl": "../img/d21.webp",
    "name":"休闲零食",
  },
],"code":200,"msg":"查询成功"};


for(i=0;i<json.rows.length;i++){
    var list_li=document.createElement("li");
    

    list_li.innerHTML=`<i class="list_img" style="background: url(${json2.rows[i].imgUrl});  background-size: 1.5rem;"></i>
    <span class="list_name">${json2.rows[i].name}</span>`;
    

    list_ul.appendChild(list_li);
   
   
   }


   var j;
   var list=function () {
        for(i=0;i<50;i++){
            j=parseInt(Math.ceil(Math.random()*20));
           
            var list_li=document.createElement("li");
            
        
            
            list_li.innerHTML=`<i class="list_img" style="background: url(${json2.rows[j].imgUrl});  background-size: 1.5rem;"></i>
            <span class="list_name">${json2.rows[j].name}</span>`;
            
        
            list_ul.appendChild(list_li);
       
       
       }

     }

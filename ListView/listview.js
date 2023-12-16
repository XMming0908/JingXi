var json, json2;
json = {"total":5,"rows":[{
    "id": 1,
    "jd":"1",
    "imgUrl": "../img/list1.webp",
    "title": "舒可乐卫生纸无芯卷纸小提装加厚家用批发纸巾妇婴木浆厕纸手纸卷筒纸 1卷(请拍12的倍数)粉色",
    "price": 0.42,
    "tag":"破损包退换",
    "count": "已售200+件"},
{"id": 2,
"jd":"1",
    "imgUrl": "../img/list2.webp",
    "title": "威露士（Walch）la有氧洗衣液机洗 除菌除螨深层洁净天然植物萃取家庭装 柠檬袋装500ml",
    "price": 9.9,
    "tag":"",
    "count": "已售2000+件"},
{"id": 3,
"jd":"0",
    "imgUrl": "../img/list4.webp",
    "title": "乐事（Lay's）薯片袋装小包装小吃零食好吃的居家追剧休闲百事食品年货零食 薯片原味12g/袋",
    "price": 1.06,
    "tag":"运费险",
    "count": "已售2万+件"},
{"id": 4,
"jd":"0",
    "imgUrl": "../img/list5.webp",
    "title": "板牙妹妹 蓝莓岩烧乳酪夹心吐司面包整箱早餐健康零食小吃休闲食品速食 蓝莓岩烧吐司250g",
    "price": 6.9,
    "tag":"",
    "count": "已售1000+件"},
    {"id": 5,
    "jd":"1",
    "imgUrl": "../img/list6.webp",
    "title": "刺猬阿甘 花椒锅巴休闲零食下午茶追剧怀旧小吃花椒味15g*15袋",
    "price": 9.9,
    "tag":"免费退货",
    "count": "已售2000+件"}
],"code":200,"msg":"查询成功"};



json2 =  {"total":5,"rows":[{
    "id": "",
    "jd":"0",
    "imgUrl": "../img/spli1.webp",
    "title": "高乐高巧克力味卷卷心蛋糕25g*24枚营养早餐瑞士卷下午茶办公室点心600g",
    "price": 34.9,
    "tag":"免费退货",
    "count": "已售5万+件"},
{"id": 2,
"jd":"1",
    "imgUrl": "../img/spli2.webp",
    "title": "刺猬阿甘【人气推荐】花椒锅巴网红解馋追剧零食小吃15g*30包一整箱 花椒味15g*30包",
    "price": 39.8,
    "tag":"免费退货",
    "count": "已售2万+件"},
{"id": 3,
"jd":"0",
    "imgUrl": "../img/spli3.webp",
    "title": "金大州 金针菇零食小袋装四川特产香辣下饭菜金大洲金针磨零食下饭菜 简装混合5口味（简装）",
    "price": 28.8,
    "tag":"运费险",
    "count": "已售2万+件"},
{"id": 4,
"jd":"0",
    "imgUrl": "../img/spli4.webp",
    "title": "果然派 芒果干水果干大礼包蜜饯果干果脯一件整箱装泰国风味零食一箱 黄色 芒果干500g*1包 超好吃",
    "price": 26.8,
    "tag":"免费退货",
    "count": "已售5万+件"},
    {"id": 5,
    "jd":"1",
    "imgUrl": "../img/spli5.webp",
    "title": "金尊三层糕点心礼盒1350g休闲零食早餐礼澳门特产手信礼包大吉大利",
    "price": 79.9,
    "tag":"破损包退货",
    "count": "已售5万+件"}
],"code":200,"msg":"查询成功"};


//在页面刚加载进来就执行代码

var list_ul=document.getElementById("list_ul1");
var list_ul2=document.getElementById("list_ul2");

json.rows.forEach((v,i)=>{
    var list_li=document.createElement("li");
    list_li.setAttribute("class","list_li");

    

    var s=  json.rows[i].jd=="1"?`<div class="list_title"><img class="list_jd"><a>${v.title}</a></div>`:`<div class="list_title"><a>${v.title}</a></div>`;

    list_li.innerHTML=`<img class="list_img" src="${v.imgUrl}">${s}
    <div class="list_tag">${v.tag}</div>
    <a class="list_price">￥${v.price}</a>
    <a class="list_count">${v.count}</a>`
    
    list_ul.appendChild(list_li);



})



json2.rows.forEach((v,i)=>{
    var list_li=document.createElement("li");
    list_li.setAttribute("class","list_li");

    var s=  json.rows[i].jd=="1"?`<div class="list_title"><img class="list_jd"><a>${v.title}</a></div>`:`<div class="list_title"><a>${v.title}</a></div>`;

    list_li.innerHTML=`<img class="list_img" src="${v.imgUrl}">${s}
    <div class="list_tag">${v.tag}</div>
    <a class="list_price">￥${v.price}</a>
    <a class="list_count">${v.count}</a>`
    
    list_ul2.appendChild(list_li);



})



// for(i=json2.total-1;i>=0;i--){
//     var list_li=document.createElement("li");
//     list_li.setAttribute("class","list_li");

//     var s=  json2.rows[i].jd=="1"?' <div class="list_title"><img class="list_jd"><a>'+json2.rows[i].title+'</a></div>':'<div class="list_title"><a>'+json2.rows[i].title+'</a></div>';

//     list_li.innerHTML=" <img class="+"list_img "+"src="+json2.rows[i].imgUrl+">"+s+
//     "<div class="+"list_tag>"+json2.rows[i].tag+"</div>"+
//     " <a class="+"list_price>￥"+json2.rows[i].price+"</a>"+
//     "<a class="+"list_count>"+json2.rows[i].count+"</a>"
    
//     list_ul2.appendChild(list_li);
   
//    }



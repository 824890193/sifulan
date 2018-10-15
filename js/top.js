//顶部吸盘
var oTop = document.getElementById("xipan");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 702){
    	oTop.style.top = 0 + "px";
    }else{
    	oTop.style.top = -60 + "px";
    } 
}
//右侧导航栏
var oRightaside = document.getElementById("rightaside");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 772){
    	oRightaside.style.opacity = 1;
    }else{
    	oRightaside.style.opacity = 0;
    } 
}
//左侧导航栏
var oLeftaside = document.getElementById("rightaside");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 1132){
    	oLeftaside.style.opacity = 1;
    }else{
    	oLeftaside.style.opacity = 0;
    } 
}
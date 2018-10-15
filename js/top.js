//顶部吸盘
var xp = document.getElementById("xipan");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 702){
    	xp.style.top = 0 + "px";
    }else{
    	xp.style.top = -60 + "px";
    } 
}
//左侧导航栏
var oLeftaside = document.getElementById("rightaside");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 1132){
    	oLeftaside.style.display ="block";
    }else{
    	oLeftaside.style.display = "none";
    } 
}
//右侧导航栏
var oRightaside = document.getElementById("right-ul");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 772){
    	oRightaside.style.display ="block";
    }else{
    	oRightaside.style.display = "none";
    } 
}
$(".right-ul1-1 li").hover(function(){
    $(this).children().show()
},function(){
    $(this).children().hide()
})

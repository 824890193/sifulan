//左侧导航栏
var oLeftaside = document.getElementById("left-ul");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 1555){
    	oLeftaside.style.display ="block";
    }else{
    	oLeftaside.style.display = "none";
    } 
}
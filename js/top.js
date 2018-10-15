//顶部吸盘
var xp = document.getElementById("xipan");
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop >= 702){
    	xp.style.top = 0 + "px";
    }else{
    	xp.style.top = -65 + "px";
    } 
}



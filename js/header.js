// header轮播条
var aItem = document.querySelectorAll("#centerheader li");
var oUl = document.getElementById("centerheader").children[0];
var nowIndex = 0;
timer= function(){
    if(nowIndex == aItem.length - 1){
        // 到了最后一行;
        oUl.className = "";
        oUl.style.top = 0;
        nowIndex = 1;
        setTimeout(function(){
            oUl.className = "move";
            oUl.style.top = -30 * nowIndex + "px";
        },50)
        return 0;
    }else{
        nowIndex ++;           
        oUl.className = "move";
        oUl.style.top = -30 * nowIndex + "px";
    } 
    console.log(nowIndex);  
}
oUl.onmouseenter = function(){
    clearInterval(autoPlayTimer);
}
oUl.onmouseleave = function(){
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(timer, 3000);
}
var autoPlayTimer = setInterval(timer, 3000);


// banner轮播图
var a = document.querySelectorAll("#banner1 a");
var oLeft = document.getElementById("leftbtn");
var oRight = document.getElementById("rightbtn");
var aSpan = document.querySelectorAll("#button span");
var oBanner = document.getElementById("banner1");
var index = 0; 
        
oRight.onclick = function(){
    if(index == a.length - 1){
        index = 0;
    }else{
        index ++;
    }
    animate()          
}
oBanner.onmouseover = function(){
    oLeft.style.opacity = 0.3;
    oRight.style.opacity = 0.3;
}
oRight.onmouseenter = function(){
    oRight.style.opacity = 0.6;
}
oLeft.onmouseenter = function(){
    oLeft.style.opacity = 0.6;
}
oLeft.onclick = function(){
    if(index == 0){
        index = a.length - 1;
    }else{
        index --;
    }
    animate()
}
for(let i = 0 ; i < aSpan.length ; i ++){
    aSpan[i].onclick = function(){
        index = i;
        animate();
        this.className = "active";
    }
}        
function animate(){
    for(var i = 0 ; i < a.length ; i ++){
        a[i].className = "";
        aSpan[i].className = "";
    }
    a[index].className = "active";
    aSpan[index].className = "active";
}

oBanner.onmouseenter = function(){
    clearInterval(autoPlayTimer);
}
oBanner.onmouseleave = function(){
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(oRight.onclick, 4000);
}
var autoPlayTimer = setInterval(oRight.onclick, 4000);
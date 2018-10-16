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
        },500)
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
// 搜索框轮播条
var content = document.getElementById("search");
var letter = document.querySelectorAll("#innersearch a");
var p = 0;
function innerauto(){
    if(p>=letter.length-1){
        p = 0;
    }else{
        p++;
    }
    auto();
}

function auto(){
    content.setAttribute("placeholder",letter[p].innerHTML);    
}
content.onfocus = function(){
    clearInterval(autoTimer);
    content.setAttribute("placeholder","");
}
content.onblur = function(){
    clearInterval(autoTimer);
    content.setAttribute("placeholder","请输入您要搜索的关键词");
    autoTimer = setInterval(innerauto,2500);
}
var autoTimer = setInterval(innerauto,2500) 
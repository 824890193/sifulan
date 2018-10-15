// box1轮播图
var b = document.querySelectorAll("#banner3 a");
var oLeft1 = document.getElementById("leftbtn1");
var oRight1 = document.getElementById("rightbtn1");
var aSpan1 = document.querySelectorAll("#button1 span");
var oBanner1 = document.getElementById("banner3");
var index1 = 0; 
        
oRight1.onclick = function(){
    if(index1 == b.length - 1){
        index1 = 0;
    }else{
        index1 ++;
    }
    push()          
}
oBanner1.onmouseover = function(){
    oLeft1.style.opacity = 0.3;
    oRight1.style.opacity = 0.3;
}
oBanner1.onmouseout = function(){
    oLeft1.style.opacity = 0;
    oRight1.style.opacity = 0;
}
oRight1.onmouseenter = function(){
    oLeft1.style.opacity = 0.3;
    oRight1.style.opacity = 0.6;
}
oLeft1.onmouseenter = function(){
    oRight1.style.opacity = 0.3;
    oLeft1.style.opacity = 0.6;
}
oLeft1.onclick = function(){
    if(index1 == 0){
        index1 = b.length - 1;
    }else{
        index1 --;
    }
    push()
}
for(let i = 0 ; i < aSpan1.length ; i ++){
    aSpan[i].onclick = function(){
        index1 = i;
        animate();
        this.className = "active";
    }
}        
function push(){
    for(var i = 0 ; i < b.length ; i ++){
        b[i].className = "";
        aSpan1[i].className = "";
    }
    b[index1].className = "active";
    aSpan1[index1].className = "active";
}

oBanner1.onmouseenter = function(){
    clearInterval(autoPlayTimer);
}
oBanner1.onmouseleave = function(){
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(oRight1.onclick, 4000);
}
var autoPlayTimer = setInterval(oRight1.onclick, 4000);
//box右侧大框切换
var xiabiao = document.querySelectorAll("#remen span");
var box = document.querySelectorAll(".rightbox1 ul");
for(var q = 0 ; q < xiabiao.length ; q++){
    xiabiao[q].index = q;
    xiabiao[q].onclick = function(){
        for(var w =0 ; w < box.length; w++){
            box[w].style.display = "none";  
        }
        var index = this.index;
        box[index].style.display = "block";
    }
}
//box1右侧鼠标悬浮特效
$("#remen span").click(function(){
    $(this).addClass("active")
    .siblings().removeClass("active").addClass("pinpai");
})
$(".innerrightbox1 li").hover(function(){
    $(this).find(".more").show();
},function(){
    $(this).find(".more").hide();
})









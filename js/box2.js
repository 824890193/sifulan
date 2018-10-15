//鼠标移入图片滑动
$(".box2-ul li").hover(function(){
    $(this).find(".little").css("right","10px")
},function(){
    $(this).find(".little").css("right","0")
})
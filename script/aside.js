//左侧导航栏  跳转
var flag = true;
$("#left-ul1 li").click(function(){
    flag = false;
    // $(this).find("a").addClass("active")
    // .parents().siblings().children().removeClass("active");
    var index = $(this).index();
    var t = $(".box3").eq(index).offset().top;
    $("body,html").animate({scrollTop : t},1000,function(){
        flag = true;
    });
})
//操作滚动条
$(window).scroll(function(){
    if( flag ){
        var sTop = $(document).scrollTop();
        $floor = $(".box3").filter( function(){
            return Math.abs( $(this).offset().top-sTop ) < $(this).height()/2;
        } )
        var index = $floor.index();
        if( index!=-1 ){
            $("#left-ul1 li").eq(index).find("a").addClass("active")
            .parents().siblings().children().removeClass("active");
        }
        if( sTop > 6600 ){
            $("#left-ul1 li").find("a").removeClass("active");
        }
    }
})

//左侧导航栏 锚点跳转
// $("#left-ul1 a").click(function(){
//     $(this).addClass("active")
//     .parents().siblings().children().removeClass("active")
// })
// $(document).ready(function() {
//     $("#box_1Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_1").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_2Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_2").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_3Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_3").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_4Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_4").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_5Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_5").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_6Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_6").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
//     $("#box_7Link").click(function() {
//         $("html, body").animate({
//             scrollTop: $("#box_7").offset().top }, {duration: 500,easing: "swing"});
//         return false;
//     });
// });

//右侧导航栏
$(".right-ul1-1 li").hover(function(){
    $(this).children().show()
},function(){
    $(this).children().hide()
})
//点击回到顶部  回到顶部
$("#zuihou").click(function(){
    $("body,html").animate({scrollTop : 0},1000);
})
//点击购物车  回到顶部
$("#shoppingcar").click(function(){
    $("body,html").animate({scrollTop : 0},1000);
})
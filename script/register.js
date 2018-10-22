//一些点击特效
$("#jump").click(function(){
    $(".topbox1").css("display","none");
    $(".topbox2").css("display","block");
})
$("#jump-1").click(function(){
    $(".topbox2").css("display","none");
    $(".topbox1").css("display","block");
})
$("input").click(function(){
    $(this).css("border-bottom","1px solid #000");
    $(this).next().css("display","block");
})
$("input").blur(function(){
    $("input").css("border-bottom","1px solid #ccc");
    $("input").next().css("display","none");    
}) 

// 手机号注册

//图形验证码
var random = document.getElementById("pic");
var false1 = document.getElementById("first1");
var oGet = document.getElementById("get1-1");
var right1 = document.getElementById("box1").children;
var reg1 = /^[0-9a-zA-Z]{4}$/;
random.onblur = function(){
    //只能四位数字+字母                           
    var oRandom = random.value;
    if(reg1.test(oRandom)){
        oGet.style.display = "block"; 
        right1[4].style.display = "block"; 
        right1[3].style.display = "none"; 
        false1.style.display = "none";
        random.style.borderBottomColor = "green";      
    }else{
        right1[4].style.display = "none"; 
        right1[3].style.display = "block";
        false1.style.display = "block"; 
        random.style.borderBottomColor = "red";      
    }
}
//手机号
var oNum = document.getElementById("num");  
var false2 = document.getElementById("first2");
var right2 = document.getElementById("box2").children;
oNum.onblur = function(){
    //只能纯数字11位;
    var reg2 = /^[0-9]{11}$/;
    var sNum = oNum.value;    
    if(reg2.test(sNum)){
        right2[4].style.display = "block"; 
        right2[3].style.display = "none";        
        false2.style.display = "none"; 
        oNum.style.borderBottomColor = "green";
    }else{
        right2[4].style.display = "none"; 
        right2[3].style.display = "block";
        false2.style.display = "block";      
        oNum.style.borderBottomColor = "red";  
    }
};
//密码
var oPwd = document.getElementById("pwd");
var false4 = document.getElementById("first4");
var right4 = document.getElementById("box4").children;
oPwd.onblur = function(){
    var sPwd = oPwd.value;
    var reg3 = /^[0-9a-zA-Z\!\@\#\$\%\^\&\*\)\_]{6,16}$/;
    if(reg3.test(sPwd)){
        right4[4].style.display = "block"; 
        right4[3].style.display = "none"; 
        false4.style.display = "none"; 
        oPwd.style.borderBottomColor = "green";
        //再次确认密码
        var oPwd2 = document.getElementById("pwd2");
        var false5 = document.getElementById("first5");
        var right5 = document.getElementById("box5").children;
        oPwd2.onblur = function(){   
            var sPwd2 = oPwd2.value;
            //手机号成功注册点击按钮
            var finish = document.getElementById("ok");
            if(sPwd2==sPwd){
                right5[4].style.display = "block"; 
                right5[3].style.display = "none";
                false5.style.display = "none"; 
                oPwd2.style.borderBottomColor = "green";
                finish.style.display = "block";
            }else{
                right5[4].style.display = "none"; 
                right5[3].style.display = "block";
                false5.style.display = "block"; 
                oPwd2.style.borderBottomColor = "red";
            }
        }
    }else{
        right4[4].style.display = "none"; 
        right4[3].style.display = "block";
        false4.style.display = "block"; 
        oPwd.style.borderBottomColor = "red";
    }    
}


//邮箱注册

//邮箱
var oEml = document.getElementById("eml");   
var false6 = document.getElementById("first1-1");
var right6 = document.getElementById("box1-1").children;    
oEml.onblur = function(){
    //只能以数字字母开头 数字字母下划线 6 ~ 20位;
    var reg4 = /^[0-9a-z][0-9a-z_]{5,19}@[0-9a-z]{2,6}\.[a-z]{2,5}$/;
    var sEml = oEml.value;
    if(reg4.test(sEml)){
        oEml.style.borderBottomColor = "green";
        right6[4].style.display = "block"; 
        right6[3].style.display = "none";
        false6.style.display = "none"; 
    }else{
        oEml.style.borderBottomColor = "red";
        right6[4].style.display = "none"; 
        right6[3].style.display = "block";
        false6.style.display = "block"; 
    }
};
//验证码
var random2 = document.getElementById("pic2");
var false7 = document.getElementById("first2-1");
var right7 = document.getElementById("box2-1").children;
var reg5 = /^[0-9a-zA-Z]{4}$/;
random2.onblur = function(){
    //只能四位数字+字母                           
    var oRandom2 = random2.value;
    if(reg5.test(oRandom2)){
        random2.style.borderBottomColor = "green";
        right7[4].style.display = "block"; 
        right7[3].style.display = "none"; 
        false7.style.display = "none";      
    }else{
        random2.style.borderBottomColor = "red";
        right7[4].style.display = "none"; 
        right7[3].style.display = "block";
        false7.style.display = "block";       
    }
}
//密码
var aPwd = document.getElementById("pwd-1");
var false8 = document.getElementById("first3-1");
var right8 = document.getElementById("box4-1").children;
aPwd.onblur = function(){
    var bPwd = aPwd.value;
    var reg6 = /^[0-9a-zA-Z\!\@\#\$\%\^\&\*\)\_]{6,16}$/;
    if(reg6.test(bPwd)){
        right8[4].style.display = "block"; 
        right8[3].style.display = "none"; 
        false8.style.display = "none"; 
        aPwd.style.borderBottomColor = "green";
        //再次确认密码
        var aPwd2 = document.getElementById("pwd2-1");
        var false9 = document.getElementById("first4-1");
        var right9 = document.getElementById("box5-1").children;
        aPwd2.onblur = function(){   
            var bPwd2 = aPwd2.value;
            //邮箱成功注册点击按钮
            var finish1 = document.getElementById("ok1");
            if(bPwd2==bPwd){
                right9[4].style.display = "block"; 
                right9[3].style.display = "none";
                false9.style.display = "none"; 
                aPwd2.style.borderBottomColor = "green";
                finish1.style.display = "block";
            }else{
                right9[4].style.display = "none"; 
                right9[3].style.display = "block";
                false9.style.display = "block"; 
                aPwd2.style.borderBottomColor = "red";
            }
        }
    }else{
        right8[4].style.display = "none"; 
        right8[3].style.display = "block";
        false8.style.display = "block"; 
        aPwd.style.borderBottomColor = "red";
    }    
}
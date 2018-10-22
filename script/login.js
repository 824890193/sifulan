//点击特效
$("input").click(function(){
    $(this).parent().css("border-bottom","1px solid #000");
    $(this).next().css("display","block");
})
$("input").blur(function(){
    $("input").parent().css("border-bottom","1px solid #ccc");
    $("input").next().css("display","none");    
}) 
//hover特效
$(".p1").hover(function(){
    $(this).children(".img1").css("display","none");
    $(this).children(".img2").css("display","block");
},function(){
    $(this).children(".img1").css("display","block");
    $(this).children(".img2").css("display","none");
})

//表单验证
//1. 用户名;
//验证手机号码
var oMbp = document.getElementById("mbp");  
var oBorder1 = document.getElementById("name");
var pass_1 = document.getElementById("pass1");
var not1 = document.getElementById("name").children;     
oMbp.onblur = function(){
    //只能纯数字11位;
    var reg_1 = /^[0-9]{11}$/;
    var sMbp = oMbp.value;
    if(reg_1.test(sMbp)){
        not1[3].style.display = "none"; 
        pass_1.style.display = "none"; 
        oMbp.style.borderBottomColor = "green";

        //验证密码
        var oPsw = document.getElementById("psw");
        var oBorder2 = document.getElementById("secret");
        var pass_2 = document.getElementById("pass2");
        var not2 = document.getElementById("secret").children;
        oPsw.onblur = function(){
            var sPsw = oPsw.value;
            var reg_3 = /^[0-9a-zA-Z\!\@\#\$\%\^\&\*\)\_]{6,16}$/;
            if(reg_3.test(sPsw)){ 
                not2[3].style.display = "none"; 
                pass_2.style.display = "none"; 
                oBorder2.style.borderBottomColor = "green";        
                //填写成功点击按钮
                var btn_1 = document.getElementById("btn1");            
                btn_1.style.display = "block";           
            }else{ 
                not2[3].style.display = "block";
                pass_2.style.display = "block"; 
                oBorder2.style.borderBottomColor = "red";
            }    
        }
    }else{
        //验证邮箱       
        //只能以数字字母开头 数字字母下划线 6 ~ 20位;
        var reg_2 = /^[0-9a-z][0-9a-z_]{5,19}@[0-9a-z]{2,6}\.[a-z]{2,5}$/;
        if(reg_2.test(sMbp)){
            not1[3].style.display = "none"; 
            pass_1.style.display = "none";
            oBorder1.style.borderBottomColor = "green"; 
            //验证密码
            var oPsw = document.getElementById("psw");
            var oBorder2 = document.getElementById("secret");
            var pass_2 = document.getElementById("pass2");
            var not2 = document.getElementById("secret").children;
            oPsw.onblur = function(){
                var sPsw = oPsw.value;
                var reg_3 = /^[0-9a-zA-Z\!\@\#\$\%\^\&\*\)\_]{6,16}$/;
                if(reg_3.test(sPsw)){ 
                    not2[3].style.display = "none"; 
                    pass_2.style.display = "none"; 
                    oBorder2.style.borderBottomColor = "green";        
                    //填写成功点击按钮
                    var btn_1 = document.getElementById("btn1");            
                    btn_1.style.display = "block";           
                }else{ 
                    not2[3].style.display = "block";
                    pass_2.style.display = "block"; 
                    oBorder2.style.borderBottomColor = "red";
                }    
            }              
        }else{
            not1[3].style.display = "block";
            pass_1.style.display = "block"; 
            oBorder1.style.borderBottomColor = "red";
        }       
    }
};


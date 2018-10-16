//表单验证
//1. 用户名;
//验证手机号码
var oMbp = document.getElementById("mbp");       
oMbp.onblur = function(){
    //只能纯数字11位;
    var reg4 = /^[0-9]{11}$/;
    var sMbp = oMbp.value;
    if(reg4.test(sMbp)){
        oMbp.style.borderColor = "green";

    }else{
        oMbp.style.borderColor = "red";
    }
};
//验证邮箱
var oEml = document.getElementById("eml");       
oEml.onblur = function(){
    //只能以数字字母开头 数字字母下划线 6 ~ 20位;
    var reg3 = /^[0-9a-z][0-9a-z_]{5,19}@[0-9a-z]{2,6}\.[a-z]{2,5}$/;
    var sEml = oEml.value;
    if(reg3.test(sEml)){
        oEml.style.borderColor = "green";

    }else{
        oEml.style.borderColor = "red";
    }
};
//验证密码
var oPwd = document.getElementById("pwd");
oPwd.onblur = function(){
    var sPwd = oPwd.value;
    var rate = 0;
    var regNumber = /\d/;
    var regWord = /[a-zA-Z]/;
    var regSymbol = /[\!\@\#\$\%\^\&\*\)\_]/;
    //密码安全级别评定
    if(regNumber.test(sPwd)){
        rate++
    }
    if(regWord.test(sPwd)){
        rate++
    }
    if(regSymbol.test(sPwd)){
        rate++
    }
    switch(rate){
        case 1 : 
        oPwd.style.borderColor = "red";
        break;
        case 2 : 
        oPwd.style.borderColor = "yellow";
        break;
        case 3 : 
        oPwd.style.borderColor = "green";
        break;
    }
}
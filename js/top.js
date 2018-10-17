//顶部吸盘 左侧导航栏 右侧导航栏 显示与隐藏
var xp = document.getElementById("xipan");
var oRightaside = document.getElementById("right-ul");
var oLeftaside = document.getElementById("left-ul");
var list = document.getElementById("left-ul1").children;
onscroll = function(){  
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; 
    //顶部吸盘
    if(scrollTop >= 702){
        xp.style.top = 0 + "px";
        //右侧导航栏
        if(scrollTop >= 772){
            oRightaside.style.display ="block";
            //左侧导航栏
            if(scrollTop >= 1555){
                oLeftaside.style.display ="block";
                //瀑布流
                if(scrollTop >= 7290){
                    function Pagination(){
                    }
                    Pagination.prototype.init = function(){
                        this.wrap = document.querySelector("#wrap ul");
                        this.clientHeight = document.documentElement.clientHeight;
                        this.loading = false;
                        this.now_page = 0;
                        this.loadJson()
                        .then(function(json){
                            this.data = json;
                            this.total = Math.ceil(json.count / 4);
                            this.renderPage();
                        }.bind(this))
            
                        this.handleEvent() 
                    }
                    Pagination.prototype.loadJson = function(){
                        return new Promise(function(success,error){
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET","data.json");
                            xhr.send(null);
                            xhr.onload = function(){
                                if(xhr.status == 200){
                                    var json = typeof xhr.response == "string" ?JSON.parse(xhr.response) : xhr.response;
                                    success(json)
                                }else{
                                    error("请求出错");
                                }
                            }
                        })
                    }
                    Pagination.prototype.renderPage = function(){
                        var list =  this.data.subjects;
                        var html = "";
                        for(var i = 4 * this.now_page ; i <= 4* this.now_page + 3; i ++){
                            html += `
                                    <li>
                                        <img src="${list[i].images.small}" alt="">
                                        <p>${list[i].title}</p>
                                        <button>加入购物车</button>
                                    </li>`
                        }
                        this.wrap.innerHTML += html;
                        this.loading = false;   
                    }
                    Pagination.prototype.handleEvent = function(){
                        onscroll = this.load.bind(this)
                    }
                    Pagination.prototype.load = function(event){
                        if(this.loading) return 0 ;
                        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                        var showHeight = scrollTop + this.clientHeight;
                        var eleChildren = this.wrap.getElementsByTagName("li");
                        var lastChildren = eleChildren[eleChildren.length - 1];
                        var lastTop = lastChildren.offsetTop;
                        if(lastTop <= showHeight){
                            this.loading = true;
                            this.now_page ++; 
                            if(this.now_page > this.total){
                                return 0;
                            }
                            this.renderPage();
                        }
            
                    }   
                    var pagination = new Pagination();
                    pagination.init();
                }
            }else{
                oLeftaside.style.display = "none";
            } 
        }else{
            oRightaside.style.display = "none";
        } 
    }else{
        xp.style.top = -65 + "px";
        oRightaside.style.display ="none";
        oLeftaside.style.display ="none";
    } 



    
}

//顶部吸盘搜索框轮播条
var content_1 = document.getElementById("search_1");
var letter_1 = document.querySelectorAll("#innersearch a");
var z = 0;
function innerauto_1(){
    if(z>=letter_1.length-1){
        z = 0;
    }else{
        z++;
    }
    auto_1();
}

function auto_1(){
    content_1.setAttribute("placeholder",letter_1[p].innerHTML);    
}
content_1.onfocus = function(){
    clearInterval(autoTimer_1);
    content_1.setAttribute("placeholder","");
}
content_1.onblur = function(){
    clearInterval(autoTimer_1);
    content_1.setAttribute("placeholder","请输入您要搜索的关键词");
    autoTimer_1 = setInterval(innerauto_1,2500);
}
var autoTimer_1 = setInterval(innerauto_1,2500) 
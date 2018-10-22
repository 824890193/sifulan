function ShopCar(){}
var timer11 = null;
$.extend(ShopCar.prototype,{
    init:function(){
        this.main = $("#wrap ul")
        this.loadJson()
        
        .then(function(res){
            this.json = res.subjects;
            this.renderPage()
        })
        this.bindEvent();                                                                                                                                                                                                               
        this.listSum();
    },
    loadJson:function(){
        var opt = {
            url:"data.json",
            data:{start:0,count:100},
            type:"GET",
            context : this
        }
        return $.ajax(opt);
    },
    renderPage:function(){
       console.log(this.json)
        var html = "";
        for(var i = 0 ; i < this.json.length ; i ++){
            html += `<li goodsId=${this.json[i].id}>
                        <img src="${this.json[i].images.small}" alt="">
                        <p>${this.json[i].title}</p>
                        <span>${this.json[i].money}</span>
                        <button data-id=${this.json[i].id}>加入购物车</button>
                    </li>`
        }
        this.main.html(html);
    },
    bindEvent:function(){
        $("#wrap ul").on("click","button",this.addCar.bind(this));
        
        
        $(".qingkong").on("click",function(event){
            var target = event.target ;
            console.log($(".innerrighttitle>.qingkong")[0]);
            if(target != $(".innerrighttitle>.qingkong")[0]) return 0;

            $.removeCookie("shopCar");
            $(".qingkong").triggerHandler("mouseleave");
            this.listSum();
        }.bind(this));
    },
    addCar:function(event){
      
        var target = event.target ;
        var goodsId = $(target).attr("data-id");
        var cookie;
        if((cookie = $.cookie("shopCar"))){
            var cookieArray = JSON.parse(cookie);
            var hasGoods = false;
            for(var i = 0 ; i < cookieArray.length ; i ++){
                if(cookieArray[i].id == goodsId ) {
                    hasGoods = true;
                    cookieArray[i].num ++;
                    break;
                }
            }
            if(hasGoods == false){
                var goods = {
                    id : goodsId,
                    num : "1"
                }
                cookieArray.push(goods);
            }
            // console.log(JSON.stringify(cookieArray));
            $.cookie("shopCar",JSON.stringify(cookieArray));
        }else{
            $.cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
        }
        console.log($.cookie("shopCar"));
        this.listSum();
    },
    showList:function(event){
        console.log(event);
        // console.log($(".shopCar>div")[0]);
        // if(event != $(".shopCar>div")[0]) return 0;
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ return 0; };
        var cookieArray = JSON.parse(cookie);
        var html = "";
        for(var i = 0 ; i < cookieArray.length ; i ++){
            for(var j = 0 ; j < this.json.length ; j ++){
                if(cookieArray[i].id == this.json[j].id){
                    html += `<li data-id="${cookieArray[i].id}">
                                <img src="${this.json[j].images.small}" alt="">
                                <h3>${this.json[j].title}</h3>
                                <strong>${cookieArray[i].num}</strong>
                            </li>`;
                    break;
                }
            }
        }        
        $(".goods-list").html(html);
    },
    listSum:function(){
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ 
            $(".bags").html(0);
            return 0;
        };
        var cookieArray = JSON.parse(cookie);
        var sum = 0;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            sum += Number(cookieArray[i].num);
        }
        $(".bags").html(sum);
    }
})
var car = new ShopCar();
car.init();
$(".righttitle").on("mouseenter",function(){
    clearTimeout(timer11);
    console.log(this);
    car.showList(this)
});
$(".righttitle").on("mouseleave",function(){
    // clearTimeout(timer11);
    console.log(timer11);
    timer11 = setTimeout(function(){
        console.log($(".goods-list"));
        $(".goods-list").children().remove();
    },50)
    
});
$(".righttitle>.shopCar").on("mouseenter",function(){
    clearTimeout(timer11);
    car.showList(this);
});

//详情页跳转
$("#wrap ul").on("click", "li", function(event) {
    var target = event.target;
    var li = $(target).parents("li")[0];
    console.log(li);
    var aLi = Array.from($("#wrap ul li"));
    if (aLi.indexOf(li) != -1) {
        console.log($.cookie("goodsId", li.getAttribute("goodsId")));
        $.cookie("goodsId", li.getAttribute("goodsId"));
        location.href = "detail.html";
    }
})

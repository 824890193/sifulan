var oSmall = document.getElementById("small");
var oSmallImg = oSmall.children[2];
var oFrame = document.getElementById("frame");
var oBig = document.getElementById("big");
var oBigImg = oBig.children[0];
oSmall.onmouseenter = function(){
	oBig.style.display = "block";
	oFrame.style.display = "block";
	oSmallImg.style.opacity = 0.3;
}
oSmall.onmouseleave = function(){
	oBig.style.display = "none";
	oFrame.style.display = "none";
	oSmallImg.style.opacity = 1;
}
oSmall.onmousemove = function(event){
	var e = event || window.event;
	var offsetX = e.offsetX;
	var offsetY = e.offsetY;
	var nLeft = offsetX  - 50;
	var nTop = offsetY - 50;
	// 边界检测
	nLeft = nLeft < 0 ? 0 : nLeft;
	nTop = nTop < 0 ? 0 : nTop;
	var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
	var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;
	nLeft = nLeft > maxLeft ? maxLeft : nLeft;
	nTop = nTop > maxTop ? maxTop : nTop;

	oFrame.style.left = nLeft +"px";
	oFrame.style.top = nTop +  "px";
	// 边界检测
	var propX = oBig.offsetWidth / oFrame.offsetWidth;
	var propY = oBig.offsetHeight / oFrame.offsetHeight;
	oBigImg.style.left = -nLeft * propX + "px";
	oBigImg.style.top = -nTop * propY + "px";
	oFrame.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
}

//详情页跳转信息获取	
function json() {
	var opt = {
		url: "data.json",
		type: "GET",
		context: this
	}
	return $.ajax(opt);
}
var data = '';
console.log($.cookie("goodsId"))
if (data = $.cookie("goodsId")){
	json()
	.then(function(res) {
		console.log(res.subjects);
		res = res.subjects;
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].id)
			if (data == res[i].id) {
				console.log()
				$("#small img").attr("src",res[i].images.small);
				$("#big img").attr("src",res[i]. images.small);
				$("#makeup").html(res[i].title);
				$("#money").html(res[i].money);
				return;
			}
		}
	})
}


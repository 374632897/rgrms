function getByClass(oParent,sClass){
		var oEle=oParent.getElementsByTagName("*");
		var aResult=[];
		for(var i=0;i<oEle.length;i++)
		{
			if(oEle[i].className==sClass)
				aResult.push(oEle)
		}
		return aResult;
	}
var oPic=document.getElementById("picBox");
var sDiv=document.getElementById("small_div");
var oSimg=sDiv.getElementsByTagName("img");
var arr=[];
var clur=0;
var timer=null;
arr[0]="1.jpg";
arr[1]="2.jpg";
arr[2]="3.jpg";
arr[3]="4.jpg";

//还有一些bug 。比如移动到小图上清除定时器，移出后开启定时器；鼠标移动的时候显示多个小三角
/*var oSpan=document.createElement("span");
	oSpan.className="sanjiao";
	oSimg[clur].parentNode.appendChild(oSpan);
timer=setInterval(function(){
	for(var i=0;i<oSimg.length;i++)
	{
		if(oSimg[i].parentNode.childNodes.length!=5)
		{
			var delSpan=sDiv.getElementsByTagName("span");
			// alert(delSpan);
			// debugger;
			oSimg[i].parentNode.removeChild(oSimg[i].parentNode.lastChild);
		}
	}
	if(clur==arr.length-1)
		{clur=0;}
	else 
		{clur+=1;}

	var oSpan=document.createElement("span");
	oSpan.className="sanjiao";
	oSimg[clur].parentNode.appendChild(oSpan);

	oPic.src="image/"+arr[clur];


},3000);
// 绘制三角形并使其跟随鼠标移动
	for(var i=0;i<oSimg.length;i++)
	{
		oSimg[i].i=i;
		oSimg[i].onmouseover=function(){
			// clearInterval(timer);
			var oSpan=document.createElement("span");
			oSpan.className="sanjiao";
			oSimg[this.i].parentNode.appendChild(oSpan);

			oPic.src="image/"+(this.i+1)+".jpg";
		};
		oSimg[i].onmouseout=function(){
			oSimg[this.i].parentNode.removeChild(oSimg[this.i].nextSibling.nextSibling.nextSibling.nextSibling);	
		};
	}*/

// var oSpan=document.createElement("span");
// 	oSpan.className="sanjiao";
// 	oSimg[clur].parentNode.appendChild(oSpan);



//这里是用JS配合hover事件来实现的
var aSpan=sDiv.getElementsByTagName('span');
aSpan[0].style.opacity="1";
aSpan[0].style.filter="alpha(opacity:100);";

timer=setInterval(function(){
	// alert(clur);
	if(clur<arr.length)
	{
		aSpan[clur].style.opacity="0";

		
		aSpan[clur].style.filter="alpha(opacity:0);";

	}
	else if(clur=0)
	{
		aSpan[3].style.opacity="0";
		aSpan[3].style.filter="alpha(opacity:0);";
	}

	if(clur==arr.length-1)
		{clur=0;}
	else 
		{clur+=1;}

	oPic.src="image/"+arr[clur];

	aSpan[clur].style.opacity="1";
	aSpan[clur].style.filter="alpha(opacity:100);";
},3000);
// 绘制三角形并使其跟随鼠标移动
	for(var i=0;i<oSimg.length;i++)
	{
		oSimg[i].i=i;
		oSimg[i].onmouseover=function(){
			clearInterval(timer);
			for(var j=0;j<oSimg.length;j++)
			{
				aSpan[j].style.opacity="0";
				aSpan[j].style.filter="alpha(opacity:0);";

				aSpan[this.i].style.opacity="1";
				aSpan[this.i].style.filter="alpha(opacity:100);";
			}

			oPic.src="image/"+(this.i+1)+".jpg";
		};
		oSimg[i].onmouseout=function(){
			for(var j=0;j<oSimg.length;j++)
			{
				aSpan[j].style.opacity="0";
				aSpan[j].style.filter="alpha(opacity:0);";
			}
			timer=setInterval(function(){
	// alert(clur);
	if(clur<arr.length)
	{
		aSpan[clur].style.opacity="0";

		
		aSpan[clur].style.filter="alpha(opacity:0);";

	}
	else if(clur=0)
	{
		aSpan[3].style.opacity="0";
		aSpan[3].style.filter="alpha(opacity:0);";
	}

	if(clur==arr.length-1)
		{clur=0;}
	else 
		{clur+=1;}

	oPic.src="image/"+arr[clur];

	aSpan[clur].style.opacity="1";
	aSpan[clur].style.filter="alpha(opacity:100);";
},3000);
		};
	}



var oCtr=document.getElementById("ctrl");
	var aCtr=getByClass(oCtr,"ctrl-i");
	window.onload=function(){
		startMove();
	};
	var arr=[];
	arr[0]="1.gif";
	arr[1]="2.gif";
	arr[2]="3.gif";
	arr[3]="4.gif";
	var clur=0;
	var timer=null;
	var oImg=document.getElementById("img");
	function startMove(){
		timer=setInterval(function(){
		
		if(clur==arr.length-1)
			{clur=0}
		else
			{clur+=1;}
		//当图片滚动的时候，为当前对应的控制元素改变背景
		if(aCtr[clur-1])
		{
			aCtr[clur-1].className="ctrl-i";
		}
		else if(clur==0)
		{
			aCtr[3].className="ctrl-i";
		}
		oImg.src="image/news/"+arr[clur];
		aCtr[clur].className+=" active" ;
		},3000);
	}
	
	// 鼠标点击控制按钮切换图片
	for(var i=0;i<aCtr.length;i++)
	{
		(function(arg){
			aCtr[i].onmouseover=function(){
				clearInterval(timer);
				for(var j=0;j<aCtr.length;j++)
				{
					//鼠标移上去的时候清除控制元素的active状态
					aCtr[j].className="ctrl-i";
				}
				oImg.src="image/news/"+(arg+1)+".gif";
				};
			aCtr[i].onmouseout=function(){

				startMove();
			};

		})(i);
/*		aCtr[i].onmouseover=function(){
			clearInterval(timer);
			oImg[i].num=i;
			oImg.src="image/news/"+(this.num+1)+".gif";
			alert(oImg.src);
		};
		(function(arg){        
       pAry[i].onclick = function() {        
          alert(arg);    
       };    
      })(i);*/
	}
	function getByClass(oParent,sClass){
		var oEle=oParent.getElementsByTagName("*");
		var aResult=[];
		for(var i=0;i<oEle.length;i++)
		{
			if(oEle[i].className==sClass)
				aResult.push(oEle[i])

		}
		return aResult;
	}
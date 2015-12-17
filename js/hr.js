	var oFabu=document.getElementById("fabu");
	var oMask=document.getElementById("mask");
	var oCancel=document.getElementById("cancel");

	oFabu.onclick=function(){
		oMask.style.display="block";
	};
	var oFf=document.getElementById("off");
	oFf.onclick=function(){
		oMask.style.display="none";
	};

	var oZ=document.getElementById("zhiwei");
	var oX=document.getElementById("xinzi");
	var oR=document.getElementById("renshu");
	var oD=document.getElementById("didian");
	var tB=document.getElementById("tbody");
	var oTR=tB.getElementsByTagName("tr");
	var oBtn=document.getElementById("btn");
		var today=new Date();
	var tY=today.getFullYear();
	var tM=today.getMonth();
	if(tM+1<10){
		tM= "0"+(tM+1);
	}
	else{
		tM=(tM+1);
	}
	var tD=today.getDate();
	var oDate=tY+"-"+tM+"-"+tD;
	
	oCancel.onclick=function(){
		oMask.style.display="none";
	};

	oBtn.onclick=function(){
		if(oZ.value&&oX.value&&oR.value&&oD.value)
		{
			var oTr=document.createElement("tr");
			var oZhiwei=document.createElement("td");
			var oXinzi=document.createElement("td");
			var oRenshu=document.createElement("td");
			var oDidian=document.createElement("td");
			var oDay=document.createElement("td");
			var oDel=document.createElement("td");
			var oA=document.createElement("a");
			
			oA.className="del";
			oA.href="javascript:;"
			oDel.className="parent_";
			oA.innerHTML="删除";
			oDel.appendChild(oA);

			oZhiwei.innerHTML=oZ.value;
			oXinzi.innerHTML=oX.value;
			oRenshu.innerHTML=oR.value;
			oDidian.innerHTML=oD.value;
			oDay.innerHTML=oDate;

			oTr.appendChild(oZhiwei);
			oTr.appendChild(oXinzi);
			oTr.appendChild(oRenshu);
			oTr.appendChild(oDidian);
			oTr.appendChild(oDay);
			oTr.appendChild(oDel);
			oTr.className="tr";

			if(oTR.length>0){
				tB.insertBefore(oTr,oTR[0]);}
			else{
				tB.appendChild(oTr);
			}

			oMask.style.display="none";
		}
		else
		{
			var arr=[oZ.value,oX.value,oR.value,oD.value];
			var arM=["招聘职位","薪资","人数","工作地点"];

			var ms=[];
			//让未填写信息格式化显示，把未填写的信息存进一个数组，并使用数组的join 方法格式化
			for(var i=0;i<arr.length;i++)
			{
				
				if(!arr[i])
				{
					ms.push(arM[i]);
				}	
			}
			// console.log(ms.length);
			ms=ms.join.call(ms,"、");
			//怎样对字符串进行分割，并使最后一个字符串末尾无符号。如薪资、人数等。。
			alert("请准确填写您的"+ms+"等相关信息");	
		}
	};
	var oTa=tB.getElementsByTagName("a");

	//在这里删除到最后一个元素的时候不能再删除，并且在此之后添加的元素也不能删除，为什么？另外，新添加的元素需要一段时间的响应才能再次删除
	/*for(var i=0;i<oTa.length;i++)
	{
		oTa[i].onmouseover=function(){
			var oTa_=tB.getElementsByTagName("a");
			for(var j=0;j<oTa_.length-1;j++)
			{
				oTa_[j].j=j;
				oTa_[j].onclick=function(){
				var oTr_=tB.getElementsByTagName("tr");
				tB.removeChild(oTr_[this.j]);
				}
			}
		};
	}*/


	/*删除元素*/
	/*
	 *之前并没有给tB加上onmouseover事件，所以在新的元素创建之后，不能够立即删除元素，这是因为下面的for循环并没有被触发，
	 *所以需要给tB加上个事件来触发下面的for循环，从而使得删除元素的事件能够立即得到响应
	 */
	tB.onmouseover=function(){
		for(var i=0;i<oTa.length;i++)
		{
			oTa[i].onmouseover=function(){
				var oTa_=tB.getElementsByTagName("a");
				for(var j=0;j<oTa_.length;j++)//这里不能够为length-1啊
				{
					oTa_[j].j=j;

					oTa_[j].onclick=function(){
						// alert("i="+i+","+"this.j="+this.j);
						var a=confirm("确认删除信息？");
						if(a==true)
						{
							var oTr_=tB.getElementsByTagName("tr");
							tB.removeChild(oTr_[this.j]);
						}
					}
				}
			};
		}
	};
	
	
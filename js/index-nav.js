$(document).ready(function(){
		/*导航ajax*/
		$(".nav_1").click(function(){
			$("#container").load("index.html #container");
			// return false;
		})
		/*nav_2*/
		$(".nav_2").click(function(){
			$("#container").load("product.html #container");
			// return false;
		})
		/*nav_3*/
		$(".nav_3").click(function(){
			$("#container").load("skill_spt.html #container");
			// return false;
		})
		/*nav_4*/
		$(".nav_4").click(function(){
			$("#container").load("sale.html #container");
			// return false;
		})
		/*nav_5 因为hr页面有单独的CSS和SCRIPT，所以直接使用链接*/
/*		$(".nav_5").click(function(){
			$("#container").load("hr.html #container");
			return false;
		})*/
		/*nav_6*/
		$(".nav_6").click(function(){
			$("#container").load("news.html #container");
			// return false;
		})
		/*nav_7*/
		$(".nav_7").click(function(){
			$("#container").load("contact_us.html #container");
			// return false;
		})
	
	

		/*left_more按钮单击跳转*/
		
		$(".more_1").click(function(){
			$("#content").load("contact_us.html #container");
			// return false;
		})
		/*right_more按钮单击跳转*/
		$(".more_2").click(function(){
			$("#content").load("product.html #content");
			// return false;

		})

	})
$(document).ready(function(){
	$(".vip_fred01 a").hover(function(){
		$(this).stop();
		console.log("heihei");
        $(this).animate({left: '-120px'}, 200);
	},function(){
		$(this).stop();
		$(this).animate({left: '0px'}, 200);
	});
	$(".vip_fred02 a").click(function(){
			$("html,body").animate({"scrollTop":0},1000);
	});





	/*---------------------------------------会员模板头部------------------------------------------------*/
	// function word(){
	// 	var Length=$('.mem_in02_search .mem_sort_show a').text().length;
	// 	if(Length==2){
	// 		$('.mem_in02_search input').css('width',388);
	// 	}else if(Length==4){
	// 		$('.mem_in02_search input').css('width',360);
	// 	}
	// }
	// word();

	// function stopPropagation(e) { 
	// 	if (e.stopPropagation){ e.stopPropagation(); }
	// 	else{ e.cancelBubble = true; }	
	// } 
	// $(document).bind('click',function(){ 
	// 	$('.mem_in02_search .mem_in02_sort .mem_sort_pos').css('display','none');
	// });
	// $('.mem_in02_search .mem_in02_sort').click(function(e){
	// 	stopPropagation(e);
	// 	var pos=$(this).children('.mem_sort_pos');
	// 	if(pos.css('display')=="none"){
	// 		pos.css('display','block');
	// 		$('.mem_in02_search .mem_sort_pos li').click(function(e){
	// 			$(this).addClass('sele_mem_cur').siblings('li').removeClass('sele_mem_cur');
	// 			var txt=$(this).children('a').text();
	// 			$('.mem_in02_search .mem_sort_show a').text(txt);
	// 			word();
	// 		});
	// 	}else if(pos.css('display')=="block"){
	// 		pos.css('display','none');
	// 	}
	// });


	

	
})
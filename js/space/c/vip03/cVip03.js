$(document).ready(function(){
	 
	function scrollnumber(element,offset,call_back){
		var a,b,c,d,ele,eHeight;
		if($('div').is(element)){
			ele=$(element);
		    d=ele.offset().top;  
		    a=eval(d + offset);  
		    b=$(window).scrollTop();   
		    c=$(window).height();
		    eHeight=ele.height(); 
		    if(b+c>a && d+eHeight-100>b){
		    	call_back(); 
		    }
		}
	} 

	if($(window).scrollTop() == 0){
		//banner
		$(".vip03Banner").animate({'opacity':1},1000);
		//商品展示
		scrollnumber('.v3_ListWrap.no .v3ProList',100,function(){
			$(".v3_ListWrap.no .v3ProList dl").each(function(){
				var index = $(this).index();
				$(this).delay(index*200).animate({'opacity':1,'marginTop':0},600);
			});
		});
	}

	$(window).scroll(function(event){
		//banner
		scrollnumber('.vip03Banner',100,function(){
			$('.vip03Banner').animate({'opacity':1},1000);
		});
		//商品展示
		scrollnumber('.v3_ListWrap.no .v3ProList',100,function(){
			$(".v3_ListWrap.no .v3ProList dl").each(function(){
				var index = $(this).index();
				$(this).delay(index*200).animate({'opacity':1,'marginTop':0},600);
			});
		});
		//公司简介
		scrollnumber('.jianJie',100,function(){
			$('.jianJie img').animate({'opacity':1,'marginTop':0},600);
			$('.jianJie .text').delay(200).animate({'opacity':1,'marginTop':0},600);
		});
		//新闻
		scrollnumber('.index_news.no .v3NewList',100,function(){
			$(".index_news.no .v3NewList ul").each(function(){
				var index = $(this).index();
				$(this).delay(index*200).animate({'opacity':1,'marginTop':10},600);
			});
		});
		//联系
		scrollnumber('.lianxi.no',100,function(){
			$(".lianxi.no .lianxi_left").animate({'opacity':1,'marginTop':0},600);
			$(".lianxi.no .lianxi_right").delay(200).animate({'opacity':1,'marginTop':0},600);
				
		});
	})

	//新闻列表页
	scrollnumber('.v3_ListWrap.no .v3NewList',100,function(){
		$(".v3_ListWrap.no .v3NewList ul").each(function(){
			var index = $(this).index();
			$(this).delay(index*200).animate({'opacity':1,'marginTop':10},600);
		});
	});

	//产品列表页
	scrollnumber('.v3_ListWrap.no .v3ProList',100,function(){
		$(".v3_ListWrap.no .v3ProList dl").each(function(){
			var index = $(this).index();
			$(this).delay(index*200).animate({'opacity':1,'marginTop':0},600);
		});
	});
	
	
});
function slide01(a){
        var mytime = 0;
        var nowing = 0;
        var _left = -$("."+a+" .bd li:first").width();
        $("."+a+" .bd li:first").clone().appendTo("."+a+' .bd');
        slide();
        function slide(){
        	window.clearInterval(mytime);
        	mytime = window.setInterval(function(){
                slide_chu();
        	}, 2000);
        }
        function slide_chu(){
            if(nowing<$("."+a+" .bd li").length-2){
                nowing++;
                $("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
                $("."+a+" .bd").stop().animate({"left":_left*($("."+a+" .bd li").length-1)},600,function(){$("."+a+" .bd").css("left",0);});
                nowing = 0;
            }
    
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        }
    
        $("."+a).mouseenter(function() {
        	window.clearInterval(mytime);
        	$("."+a+" .next").css("display","block");
        	$("."+a+" .pre").css("display","block");
        });
        $("."+a).mouseleave(function(){
            //$(".bd").stop();
        	slide();
        	$("."+a+" .next").css("display","none");
        	$("."+a+" .pre").css("display","none");
        });
    
        $("."+a+" .next").click(function(){
            if(nowing<$("."+a+" .bd li").length-2){
            	nowing++;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
            	$("."+a+" .bd").stop().animate({"left":_left*($("."+a+" .bd li").length-1)},600,function(){$("."+a+" .bd").css("left",0);});
            	nowing = 0;
            }
    
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        });
        $("."+a+" .pre").click(function(){
            if(nowing>0){
            	nowing--;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
            	$("."+a+" .bd").css("left",_left * ($("."+a+" .bd li").length-1));
            	nowing = $("."+a+" .bd li").length-2;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        });

        $("."+a+" .hd li").click(function(){
            $(this).addClass('cur').siblings().removeClass('cur');
            nowing = $(this).index();
            $("."+a+" .bd").stop().animate({"left":_left*nowing},600);
        });
    }
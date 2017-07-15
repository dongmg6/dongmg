$(document).ready(function () {

  //返回顶部
  $(window).scroll(function() {
    if($(window).scrollTop()>1500){
      $("#ScrollTop").css("display",'block');
    }
  });

  $("#ScrollTop a").click(function(){
      if($(window).scrollTop()!=0){
        $("html,body").animate({"scrollTop":0},1000);
      }
  });



  // 页头搜索
  $('body').on('click','.in02_search .up span',function (a) {
    $('#flSsInputVal').attr('t',$(this).attr('id'));
    $(this).addClass('current').siblings().removeClass('current');
  });


  // 微信
  $('.wap').hover(function () {
    $('.wap_img').css('display', 'block')
  }, function () {
    $('.wap_img').css('display', 'none')
  });

  //移动端二维码
  $('.phone').mouseover(function() {
      $('.phone_img').css('display', 'block');
  });
  $('.phone').mouseout(function() {
      $('.phone_img').css('display', 'none');
  });
  
// 消息的定位left
var landed_in2_w=$(".landed p span:first").width()+20;
$(".landed_in2").css("left",landed_in2_w);

$(document).on('click','.landed',function(){
    console.log('landed');
  });
  // 吊顶登陆
  $(document).on('mouseover','.landed span',function () {
    var a = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.landed_in').eq(a).css('display', 'block').siblings('.landed_in').css('display', 'none');
    var landed_in2_w=$(".landed p span:first").width()+20;
    $(".landed_in2").css("left",landed_in2_w);
    });
  $(document).on('mouseout','.landed span',function () {
    var a = $(this).index();
    $('.landed_in').eq(a).css('display', 'none');
    $(this).removeClass('cur')
  });
    $(document).on('mouseenter','.landed_in',function () {
    var a = $(this).index();
    $(this).css('display', 'block');
    $('.landed span').eq(a).addClass('cur').siblings().removeClass('cur')
  });
    $(document).on('mouseleave','.landed_in',function () {
    var a = $(this).index();
    $(this).css('display', 'none');
    $('.landed span').eq(a).removeClass('cur')
  });


 if (typeof console !== "undefined") { 
     console.log('%c科技创新，改变未来！','color:blue');
     console.log('企业科技创新服务平台开发团队： %c欢迎您的加入',"color:red");
 }


  // 页头地区
   $('body').on("mouseenter",'.in02_City',function(){
      $(this).addClass('in02_City_kai');
      $(".More_City").css('display', 'block');
  });
    $('body').on("mouseleave",'.in02_City',function(){
      $(this).removeClass('in02_City_kai');
      $(".More_City").css('display', 'none');
  });
      $('body').on("mouseenter",'.More_City',function(){
      $('.in02_City').addClass('in02_City_kai');
      $(".More_City").css('display', 'block');
  });
    $('body').on("mouseleave",'.More_City',function(){
      $('.in02_City').removeClass('in02_City_kai');
      $(".More_City").css('display', 'none')
  });


  // 延缓加载
  if ($.isFunction($.fn.lazyload)) {
    $('img.lazy').lazyload({
      placeholder: '../../images/index/grey.gif',
      effect: 'fadeIn',
      failurelimit: 50,
      threshold: 200
    });
  }
  $('#xuqiuFaBu').click(function(){
   window.open('/redirect/xqfb.html');
});
});



// 弹窗登陆
var dynamicLoading = {
    css: function(path){
    if(!path || path.length === 0){
      console.log('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
         link.onload = function () {
             return true;
        }
        head.appendChild(link);
    },
    js: function(path){
    if(!path || path.length === 0){
      console.log('argument "path" is required !');
    }
    var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}
function lbSrcLoad(){ //加载登陆弹窗函数
if (typeof(LBfsPlug)!=="undefined") {
    LBfsPlug.showBox();
    return true;
}
setTimeout('lbSrcLoad()',300);
dynamicLoading.js('/js/member/LBfsPlug.min.js');
dynamicLoading.css('/css/member/rl.css');
return;
}
var xNLBCode = -101011;//需要显示登录弹窗的状态码


$(function(){
   /*---------------------------------------会员模板通用头部------------------------------------------------*/
    function word(){
      var Length=$('.mem_in02_search .mem_sort_show a').text().length;
      if(Length==2){
        $('.mem_in02_search input').css('width',388);
      }else if(Length==4){
        $('.mem_in02_search input').css('width',360);
      }
    }
    word();

    function stopPropagation(e) { 
      if (e.stopPropagation){ e.stopPropagation(); }
      else{ e.cancelBubble = true; }  
    } 
    $(document).bind('click',function(){ 
      $('.mem_in02_search .mem_in02_sort .mem_sort_pos').css('display','none');
    });
    $('.mem_in02_search .mem_in02_sort').click(function(e){
      stopPropagation(e);
      var pos=$(this).children('.mem_sort_pos');
      if(pos.css('display')=="none"){
        pos.css('display','block');
        $('.mem_in02_search .mem_sort_pos li').click(function(e){
          $(this).addClass('sele_mem_cur').siblings('li').removeClass('sele_mem_cur');
          var a = $(this).children('a');txt=a.text();
          $('#kjcxpt-search-form').attr('action',a.attr('url'));
          $('#kjcxpt-search-w').attr('placeholder','在平台中搜索'+txt);
          $('.mem_in02_search .mem_sort_show a').text(txt);
          word();
        });
      }else if(pos.css('display')=="block"){
        pos.css('display','none');
      }
    }); 
})


$(function(){
  /*---------------------------------------会员模板vip改版通用头部------------------------------------------------*/
  if($('div').is('#mem_vip02_globalTop')){
      /*通用头部搜索*/
      $('.mem_vip02_search input.vip02_search').click(function(){
            $(this).siblings('.mem_vip02_sort').css('display','block');
            $('.v2meng').css('display','block');
      });

      $('.v2meng').click(function(){
            $('.mem_vip02_sort').css('display','none');
            $(this).css('display','none');
      });

      /*头部右侧卡片*/
      $('.mem_vip02_right').mouseenter(function(){
            $(this).children('.infoCard').css('display','block');
      }).mouseleave(function() {
            $(this).children('.infoCard').css('display', 'none');
      });

    }
})
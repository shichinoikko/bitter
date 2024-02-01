// JavaScript Document
$(function(){
  $('.frame').scroll(function (){
    $('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
    });
  });
  $('.frame').on('load scroll', function (){
  var box = $('.fadeIn');
  var animated = 'animated';
   box.each(function(){
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if(scrollPos > boxOffset - wh + 300 ){
      $(this).addClass(animated);
    }
  });
});
	$(function() {  
	var btn = $('.header');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $('.frame').on('load scroll', function(){
    if($(this).scrollTop() > 700) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }

});
	});
	});


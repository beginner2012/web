$(function() {
  //导航
  var off = true;
  $(".navTrigger").click(function() {
    if (off == true) {
      $(this).addClass("navTrigger-on");
      $('.wapNav').addClass("nav_on");
      off = false;
    } else {
      $(this).removeClass("navTrigger-on");
      $(".wapNav").removeClass("nav_on");
      off = true;
    }
  });

  //广告轮播图
  var banner = new Swiper('.banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'fade',
    parallax: true,
    loop: true,
    speed: 600,
    autoplay: 3000,
  });
  $('.banner').mouseover(function() {
    banner.stopAutoplay();
  });
  $('.banner').mouseout(function() {
    banner.startAutoplay();
  });

});



$(window).resize(function() {
  responsive();
});
responsive();

function responsive() {
  var w_width = $(window).width();
  var w_height = $(window).height();
  if (w_width < 920) {
    $('.wapNav .m').click(function() {
      $(this).children('.navSub').slideToggle().end().siblings('.m').children('.navSub').slideUp();
      $(this).addClass('on').siblings('li').removeClass('on');
    });
    //wap视频弹出
    $(' .product li .more').on('click', function() {
      var hre = $(this).attr('mylink');
      layer.open({
        type: 2,
        area: ['95%', '50%'],
        title: false,
        shade: 0.8,
        closeBtn: 1,
        shadeClose: true,
        content: hre
      });
    });
  } else {
    $('.banner').css({
      height: w_height - 150
    });
    //PC视频弹出
    $(' .product li .more').on('click', function() {
      var hre = $(this).attr('mylink');
      layer.open({
        type: 2,
        area: ['1200px', '600px'],
        title: false,
        shade: 0.8,
        closeBtn: 1,
        shadeClose: true,
        content: hre
      });
    });
  }
}
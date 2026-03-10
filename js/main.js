$(function(){
  var $body = $("body");
  var $hamburger = $(".p-hamburger");
  var $mask = $(".p-nav-mask");
  var $navLinks = $("#navi a");
  var $toTop = $("#to-top");
  var openClass = "is-nav-open";

  function openNav(){
    $body.addClass(openClass);
    $hamburger.attr("aria-expanded", "true");
  }

  function closeNav(){
    $body.removeClass(openClass);
    $hamburger.attr("aria-expanded", "false");
  }

  $hamburger.on("click", function(){
    if($body.hasClass(openClass)){
      closeNav();
      return;
    }
    openNav();
  });

  $mask.on("click",function(){
    closeNav();
  });

  $navLinks.on("click", function(){
    if(window.matchMedia("(max-width: 960px)").matches){
      closeNav();
    }
  });

  $(window).on("resize", function(){
    if(window.matchMedia("(min-width: 961px)").matches){
      closeNav();
    }
  });

  if($toTop.length){
    $toTop.hide();

    $(window).on("scroll", function(){
      if($(this).scrollTop() > 700){
        $toTop.fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });

    $toTop.on("click", function(e){
      e.preventDefault();
      $("body,html").animate({ scrollTop: 0 }, 500);
    });
  }
});
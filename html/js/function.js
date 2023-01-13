function headerOpenStyle(){
  $("header.on .mainlogo img").attr("src","html/img/header/burtsbeeslogoW.png");
  $("header.on .mhl>li:nth-of-type(1) img").attr("src","html/img/header/search.png");
  $("header.on .mhl>li:nth-of-type(2) img").attr("src","html/img/header/mypage.png");
  $("header.on .mhl>li:nth-of-type(3) img").attr("src","html/img/header/bag.png");
}
function headerCloseStyle(){
  $(".mainall .mainlogo img,.Brandstory .mainlogo img,.ourpromise .mainlogo img").attr("src","html/img/headerW/burtsbeeslogoW.png")
  $(".INGREDIENTS .mainlogo img,.best_4 .mainlogo img,.contents5 .mainlogo img,.mainall .top1.on .mainlogo img").on("mousewheel DOMMouseScroll").attr("src","html/img/header/logo.png")
  $(".mainall .mhl>li:nth-of-type(1) img,.Brandstory .mhl>li:nth-of-type(1) img,.ourpromise .mhl>li:nth-of-type(1) img").attr("src","html/img/headerW/search.png")
  $(".mainall .mhl>li:nth-of-type(2) img,.Brandstory .mhl>li:nth-of-type(2) img,.ourpromise .mhl>li:nth-of-type(2) img").attr("src","html/img/headerW/mypage.png");
  $(".mainall .mhl>li:nth-of-type(3) img,.Brandstory .mhl>li:nth-of-type(3) img,.ourpromise .mhl>li:nth-of-type(3) img").attr("src","html/img/headerW/bag.png")
  $(".mainall .top1.on .mhl>li:nth-of-type(1) img").attr("src","html/img/header/search.png")
  $(".mainall .top1.on .mhl>li:nth-of-type(2) img").attr("src","html/img/header/mypage.png");
  $(".mainall .top1.on .mhl>li:nth-of-type(3) img").attr("src","html/img/header/bag.png")
}
function top1OpenStyle(){
  $(".top1.on .mainlogo img").attr("src","html/img/header/logo.png");
  $(".top1.on .mhl>li:nth-of-type(1) img").attr("src","html/img/header/search.png");
  $(".top1.on .mhl>li:nth-of-type(2) img").attr("src","html/img/header/mypage.png");
  $(".top1.on .mhl>li:nth-of-type(3) img").attr("src","html/img/header/bag.png");
}
function top1CloseStyle(){
  $(".mainlogo img").attr("src","html/img/headerW/burtsbeeslogoW.png")
  $(".mhl>li:nth-of-type(1) img").attr("src","html/img/headerW/search.png")
  $(".mhl>li:nth-of-type(2) img").attr("src","html/img/headerW/mypage.png");
  $(".mhl>li:nth-of-type(3) img").attr("src","html/img/headerW/bag.png")
}

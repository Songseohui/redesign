$(document).ready(function(){
  $(".INGREDIENTS,.best_4,.mainall,.contents5").on("mousewheel DOMMouseScroll",function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.detail){
      delta = E.detail * -40
    }else{
      delta = E.wheelDelta
    }

    if(delta>0){
      $(".top1").removeClass("up")
    }else{
      $(".top1").addClass("up")
    }
  });

  //메뉴
  let headerState = false;
  $(".mbw").click(function(){
    if(headerState==false){
      $("header").addClass("on");
      headerOpenStyle();
      headerState=true;
    }else{
      $("header").removeClass("on");
      headerCloseStyle();
      headerState=false;
    }
  });

  //모바일 슬라이드
  var swiper = new Swiper(".mo_main", {
        loop:true,
        on:{
          slideChange:function(){
            let num = this.realIndex
            $(".navi>li").removeClass("on")
            $(".navi>li").eq(num).addClass("on")
          }
        }
      });

  //베스트리스트


  let count1 = 0;
  let slides = 10;
  let views = 5;
  let move = 5;
  if(window.innerWidth<=768){
    views = 1;
    move = 1;
    $(".bestP").css("width",100*slides/views+"%");
    $(".bestP>li").css("width",100/slides+"%");
    $(".bar1").css("width",100/slides*views+"%");
  }else{
    views = 5;
    move = 5;
    $(".bestP").css("width","calc("+100*slides/views+"% - 80px)");
    $(".bestP>li").css("width",100/slides+"%");
    $(".bar1").css("width",100/slides*views+"%");
  }
  $(window).resize(function(){
    console.log(window.innerWidth)
    if(window.innerWidth<=768){
      views = 1;
      move = 1;
      $(".bestP").css("width",100*slides/views+"%");
      $(".bestP>li").css("width",100/slides+"%");
      $(".bar1").css("width",100/slides*views+"%");
    }else{
      views = 5;
      move = 5;
      $(".bestP").css("width","calc("+100*slides/views+"% - 80px)");
      $(".bestP>li").css("width",100/slides+"%");
      $(".bar1").css("width",100/slides*views+"%");
    }
  })
  $(".bestP").css("width","calc("+100*slides/views+"% - 80px)");
  $(".bestP>li").css("width",100/slides+"%");
  $(".bar1").css("width",100/slides*views+"%");
  // let bestPWidth = $(".bestP>li").width()+40
  $(".best>.button>.next").click(function(){
    count1++;
    if(count1>(slides-views)/move){count1=0}
    $(".bestP").css("transform","translateX("+-(100/slides)*count1*move+"%)")
    $(".bar1").css("left",count1*(100/slides)*move+"%");
  })
  $(".best>.button>.prev").click(function(){
    count1--
    if(count1<0){count1=(slides-views)/move}
    $(".bestP").css("transform","translateX("+-(100/slides)*count1*move+"%)")
    $(".bar1").css("left",count1*(100/slides)*move+"%");
  })

  //신상품리스트
  let swiper1 = new Swiper('.newPA',{
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    breakpoints: {
    // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    }
  });

  // 헤더
  $(window).scroll(function(){
    let height = $(".mainV").height()-100;
    let scrollTop = $(window).scrollTop();
    let headerState = false;
    $(".mainall .top1").each(function(){
      if(scrollTop>height){
        $(".mainall .top1").addClass("on");
        top1OpenStyle();
      }else{
        $(".mainall .top1").removeClass("on");
        top1CloseStyle();
      }
    })
  })

  //brandstody
  var swiper2 = new Swiper(".bs", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        on:{
          slideChange:function(){
            let num = this.realIndex
            $(".bsnavi>li").removeClass("on")
            $(".bsnavi>li").eq(num).addClass("on");
          }
        },
        mousewheel:{
          releaseOnEdges:true
        }
      });

  //ourpromise
  $(window).scroll(function(){
    let upheight = $(window).height()*0.1;
    let barheight = $(window).height()*0.6;
    let downheight = $(window).height()*0.9;
    let scrollTop = $(window).scrollTop();

    $(`.contents2 .beelogo>img,.contents2 h1,.contents2 p,.contents2>div>div>div>h2,.op4>div,.contents2>div>div>div>p,.contents2 .op3_2_1>div`).each(function(){
      if(scrollTop+upheight>$(this).offset().top){
        $(this).addClass("on")
      }
      else{
        $(this).removeClass("on")
      }
    })
    $(`.contents2 .Wb1>div`).each(function(){
      if(scrollTop+barheight>$(this).offset().top){
        $(this).addClass("on")
      }
      else{
        $(this).removeClass("on")
      }
    })
  })

  //offers
  $(window).scroll(function(){
    let height = $(window).height();
    let scrollTop = $(window).scrollTop();

    $(".offers>.con>.one>.R>.text,.offers>.con>.one>.L,.offers .two>.text,.offers .two>img,.offers .three>div>.text,.offers .three>div>figure>img,.offers>.con>.one>.R>img").each(function(){
      if(scrollTop+height>$(this).offset().top){
        $(this).addClass("on")
      }
      else{
        $(this).removeClass("on")
      }
    })
  })



});

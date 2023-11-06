$(function(){

    const slideList = document.querySelector('.slide_list');  // Slide parent dom
    const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
    const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
    const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
    const pagination = document.querySelector('.slide_pagination');
    const slideLen = slideContents.length;  // slide length
    const slideWidth = 842; // slide width
    const slideSpeed = 475; // slide speed
    const startNum = 0; // initial slide index (0 ~ 4)
    
    slideList.style.width = slideWidth * (slideLen + 2) + "px";
    
    // Copy first and last slide
    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);

    // Add copied Slides
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    // Add pagination dynamically
    let pageChild = '';
    for (var i = 0; i < slideLen; i++) {
      pageChild += '<li class="dot';
      pageChild += (i === startNum) ? ' dot_active' : '';
      pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
    }
    pagination.innerHTML = pageChild;
    const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

    slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

    let curIndex = startNum; // current slide index (except copied slide)
    let curSlide = slideContents[curIndex]; // current slide dom
    curSlide.classList.add('slide_active');

    /** Next Button Event */
    slideBtnNext.addEventListener('click', function() {
      if (curIndex <= slideLen - 1) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
      }
      if (curIndex === slideLen - 1) {
        setTimeout(function() {
          slideList.style.transition = "0ms";
          slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = -1;
      }
      curSlide.classList.remove('slide_active');
      pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
      curSlide = slideContents[++curIndex];
      curSlide.classList.add('slide_active');
      pageDots[curIndex].classList.add('dot_active');
    });

    /** Prev Button Event */
    slideBtnPrev.addEventListener('click', function() {
      if (curIndex >= 0) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
      }
      if (curIndex === 0) {
        setTimeout(function() {
          slideList.style.transition = "0ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = slideLen;
      }
      curSlide.classList.remove('slide_active');
      pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
      curSlide = slideContents[--curIndex];
      curSlide.classList.add('slide_active');
      pageDots[curIndex].classList.add('dot_active');
    });


    //btn_top

    $(window).scroll(function () {
      if ($(this).scrollTop() > 3240) {
          $(".btn_top").fadeIn();
          // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
      } else {
          $(".btn_top").fadeOut(); // 500px 이하일 경우 사라짐
      }
  });

  // .logo와 .btn_top 클릭시 최상단으로 가게 하기
  // 로고와 화살표를 클릭했을때 최상단(TOP:0)으로 위치 
  $(".btn_top").on("click", function () {
      $("html,body").animate({
          scrollTop: 0
      }, 400); //0.4초
  });

// 팝업1
$('.btn_layerpopup1 ').on('click', function(e) {
  e.preventDefault();
  var el = $($(this).attr('href'));
  if (!el.hasClass('open')) {
    el.addClass('open'); // 'open' 클래스 추가하여 팝업을 보이도록 함
    $('.popupbg').show(); // .popupbg를 보이도록 함
  }

  //바디 스크롤 해제
 $('body').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;});

});

$('.btn_close_layer').on('click', function(e) {
  $(this).closest('.layer-popup1').removeClass('open');

  //배경 숨김
  $('.popupbg').hide(); //=====

  //바디 스크롤 작동
  $('.layer-popup1').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');

});

$('.popupbg').on('click', function () {
  // '.popupbg' 클래스를 가진 요소가 클릭되었을 때 실행되는 이벤트 핸들러
  $('.layer-popup1.open').removeClass(
  'open'); // 'open' 클래스가 적용된 'layer-popup' 요소에서 'open' 클래스를 제거하여 팝업을 닫음
  $(this).hide(); // 클릭한 '.popupbg' 요소를 숨김
  $('.layer-popup1').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');
});

// 팝업2
$('.btn_layerpopup2 ').on('click', function(e) {
  e.preventDefault();
  var el = $($(this).attr('href'));
  if (!el.hasClass('open')) {
    el.addClass('open'); // 'open' 클래스 추가하여 팝업을 보이도록 함
    $('.popupbg').show(); // .popupbg를 보이도록 함
  }

  //바디 스크롤 해제
 $('body').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;});

});

$('.btn_close_layer').on('click', function(e) {
  $(this).closest('.layer-popup2').removeClass('open');

  //배경 숨김
  $('.popupbg').hide(); //=====

  //바디 스크롤 작동
  $('.layer-popup2').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');

});

$('.popupbg').on('click', function () {
  // '.popupbg' 클래스를 가진 요소가 클릭되었을 때 실행되는 이벤트 핸들러
  $('.layer-popup2.open').removeClass(
  'open'); // 'open' 클래스가 적용된 'layer-popup' 요소에서 'open' 클래스를 제거하여 팝업을 닫음
  $(this).hide(); // 클릭한 '.popupbg' 요소를 숨김
  $('.layer-popup2').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');

});


// 팝업3
$('.btn_layerpopup3').on('click', function(e) {
  e.preventDefault();
  var el = $($(this).attr('href'));
  if (!el.hasClass('open')) {
    el.addClass('open'); // 'open' 클래스 추가하여 팝업을 보이도록 함
    $('.popupbg').show(); // .popupbg를 보이도록 함
  }

  //바디 스크롤 해제
 $('body').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;});

});

$('.btn_close_layer').on('click', function(e) {
  $(this).closest('.layer-popup3').removeClass('open');

  //배경 숨김
  $('.popupbg').hide(); //=====

  //바디 스크롤 작동
  $('.layer-popup3').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');

});

$('.popupbg').on('click', function () {
  // '.popupbg' 클래스를 가진 요소가 클릭되었을 때 실행되는 이벤트 핸들러
  $('.layer-popup3.open').removeClass(
  'open'); // 'open' 클래스가 적용된 'layer-popup' 요소에서 'open' 클래스를 제거하여 팝업을 닫음
  $(this).hide(); // 클릭한 '.popupbg' 요소를 숨김
  $('.layer-popup3').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');
});

// 팝업4
$('.btn_layerpopup4').on('click', function(e) {
  e.preventDefault();
  var el = $($(this).attr('href'));
  if (!el.hasClass('open')) {
    el.addClass('open'); // 'open' 클래스 추가하여 팝업을 보이도록 함
    $('.popupbg').show(); // .popupbg를 보이도록 함
  }

  //바디 스크롤 해제
 $('body').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;});

});

$('.btn_close_layer').on('click', function(e) {
  $(this).closest('.layer-popup3').removeClass('open');

  //배경 숨김
  $('.popupbg').hide(); //=====

  //바디 스크롤 작동
  $('.layer-popup4').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');

});

$('.popupbg').on('click', function () {
  // '.popupbg' 클래스를 가진 요소가 클릭되었을 때 실행되는 이벤트 핸들러
  $('.layer-popup4.open').removeClass(
  'open'); // 'open' 클래스가 적용된 'layer-popup' 요소에서 'open' 클래스를 제거하여 팝업을 닫음
  $(this).hide(); // 클릭한 '.popupbg' 요소를 숨김
  $('.layer-popup4').stop().fadeOut();
  // $('body').removeClass('fixed');
  $('body').off('scroll touchmove mousewheel');
});


});
// 탭 전환 시 h1 텍스트 변경 및 탭 내용 전환
$(function () {
  $('.tab').click(function () {
      $('.tab').removeClass('active').attr('aria-selected', 'false');
      $('.content').removeClass('active');

      $(this).addClass('active').attr('aria-selected', 'true');
      $('#' + $(this).attr('aria-controls')).addClass('active');

      // h1 텍스트 변경
      const bannerHeading = $('#banner-heading');
      if ($(this).attr('id') === 'tab-protect') {
          bannerHeading.text('보호동물');
      } else if ($(this).attr('id') === 'tab-review') {
          bannerHeading.text('입양후기');
      }
  });

});

//팝업창
// $('[id^="dogpopup1", id^="dogpopup2"]').css('display', 'none');

// $('#protect .protect-page > ul:nth-of-type(1)').click(function () {
//     $('#dogpopup1').css('display', 'block');
// }); //첫번째 ul(박스 누르면) 첫번째 팝업창 block
// $('#protect .protect-page > ul:nth-of-type(2)').click(function () {
//     $('#dogpopup2').css('display', 'block');
// }); //두번째 ul(박스 누르면) 두번째 팝업창 block


// $('[id^="dogpopup"]').on('click', function(event) {
//     // 클릭한 곳이 popup-content 영역이 아니면 팝업 닫기
//     if (!$(event.target).closest('.popup-content').length) {
//         $('[id^="dogpopup"]').css('display', 'none');
//     }
// });


// $('[id^="dogpopup"] .close-btn').click(function () {
//     $('[id^="dogpopup"]').css('display', 'none');
// });//close-btn(X 누르면) 팝업창 none


// $('[id^="dogpopup"]').on('click', function(event) {
//     if (!$(event.target).closest('.popup-content').length) { // popup-content 영역 이외를 클릭한 경우
//         closePopup();
//     }
// });

$(function () {
  // 팝업창 초기 상태 설정
  $('[id^="dogpopup"]').css('display', 'none');

  // 첫 번째 ul 클릭 시 첫 번째 팝업창 열기
  $('#protect .protect-page > ul:nth-of-type(1)').click(function () {
      $('#dogpopup1').css('display', 'block');
  });

  // 두 번째 ul 클릭 시 두 번째 팝업창 열기
  $('#protect .protect-page > ul:nth-of-type(2)').click(function () {
      $('#dogpopup2').css('display', 'block');
  });

  // 팝업 외부 클릭 시 팝업창 닫기
  $('[id^="dogpopup"]').on('click', function(event) {
      if (!$(event.target).closest('.popup-content').length) {
          $(this).css('display', 'none');
      }
  });

  // X 버튼 클릭 시 팝업창 닫기
  $('[id^="dogpopup"] .close-btn').click(function () {
      $(this).closest('[id^="dogpopup"]').css('display', 'none');
  });
});

  


// 아코디언 클릭 시 화살표 변경 및 답변박스 여닫을 수 있음
$('.accordion-title').click(function () {
    $(this).next().slideToggle().siblings('.accordion-content').hide();
    
    var srcVal = $(this).find('i').attr('class');
    console.log(srcVal);

    if (srcVal == "fa-solid fa-chevron-down") {
        $(this).find('i').attr({'class': srcVal.replace('down','up')})
        
    } else {
        $(this).find('i').attr({'class': srcVal.replace('up','down')})
    }

    // $(this).siblings().find('i').attr({'class': srcVal.replace('up', 'down')});
});
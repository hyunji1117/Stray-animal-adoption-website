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


// document.addEventListener('DOMContentLoaded', () => {
//   const closeButton = document.querySelector('.popup .close-btn');
//   const checkbox = document.querySelector('#layer_popup');
//   const popup = document.querySelector('.popup');
//   const popupContent = document.querySelector('.popup .popup-content');

//   closeButton.addEventListener('click', () => {
//     checkbox.checked = false;
//   });

//   popup.addEventListener('click', (event) => {
//     if (event.target === popup) {
//       popupContent.style.display = 'none';
//       checkbox.checked = false; // 체크박스 상태 변경
//     }
//   });

//   // .protect-page 클릭 시 다시 팝업을 초기화
//   const protectPage = document.querySelector('.protect-page');
//   protectPage.addEventListener('click', () => {
//     popupContent.style.display = 'flex'; // 원래 display 속성으로 복원
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const profiles = document.querySelectorAll('.protect-page ul');
  const closeButton = document.querySelectorAll('.popup .close-btn');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  profiles.forEach(profile => {
    profile.addEventListener('click', () => {
      const profileNumber = profile.classList[0].split('-')[1];
      document.getElementById(`profile-${profileNumber}`).style.display = 'block';
      checkboxes.forEach(checkbox => checkbox.checked = true);
    });
  });

  closeButton.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.popup').style.display = 'none';
      checkboxes.forEach(checkbox => checkbox.checked = false);
    });
  });

  document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
        checkboxes.forEach(checkbox => checkbox.checked = false);
      }
    });
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
// 가입시 이메일 영어만 입력
function onlyAlphaNum(input) {
  const regex = /^[A-Za-z0-9_]*$/; // 영문, 숫자, 언더바만 허용하는 정규 표현식
  if (!regex.test(input.value)) {
      // 입력된 값이 정규 표현식과 맞지 않으면 값을 수정
      input.value = input.value.replace(/[^A-Za-z0-9_]/g, '');
  }
}

// // 전체 동의 체크박스 처리
$('#check5').change(function () {
  const isChecked = $(this).is(':checked');
  $('input[type="checkbox"]').not(this).prop('checked', isChecked);
});

// 취소 버튼 클릭 시 모든 체크박스 해제
$('.btn-cancel').click(function () {
  $('input[type="checkbox"]').prop('checked', false);
});



//챗지피티 참고함 (필요시 사용)
// 개별 체크박스 변경 감지
$('input[type="checkbox"]').not('#check5').change(function () {
  // 모든 필수 체크박스가 체크되었는지 확인
  const allChecked = $('input[type="checkbox"]').not('#check5, #check4').length ===
      $('input[type="checkbox"]:checked').not('#check5, #check4').length;

  // 전체 동의 체크박스를 적절히 설정
  $('#check5').prop('checked', allChecked && $('#check4').is(':checked'));

  toggleAgreeButton(); // 동의 버튼 활성화 여부 확인
});

// 동의 버튼 활성화 여부 결정
function toggleAgreeButton() {
  // 필수 항목이 모두 체크되었는지 확인
  const requiredChecked = $('input[type="checkbox"]').not('#check5, #check4').length ===
      $('input[type="checkbox"]:checked').not('#check5, #check4').length;

  // 모든 체크박스가 체크되었는지 확인
  const allChecked = $('input[type="checkbox"]').length === $('input[type="checkbox"]:checked').length;

  // 필수 항목만 모두 체크되었거나 모든 항목이 체크되었을 때 버튼 활성화
  $('.btn-confirm').prop('disabled', !(requiredChecked || allChecked));
}

// 동의 버튼 클릭 시 구글로 이동
$('.btn-confirm').click(function () {
  // 버튼이 활성화된 경우에만 register-userinfo로 이동
  if (!$(this).is(':disabled')) {
      window.location.href = 'index-register-userinfo.html';
  }
});
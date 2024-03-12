// 폼 submit 일어나면 submit 중지 후
// required
// input value 가 들어 있는지 확인

// value 가 어떤 특정 조건을 만족하는지 확인

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = document.querySelector("#userid");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  const regId = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
  const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{6,15}$/;

  // true 자료 : 0 제외 숫자, '문자', []. {}
  // false 자료 : 0, '', null, undefinded, NaN

  // if (userId.value == '')
  // if (userId.value.length == 0)
  if (!userId.value || !regId.test(userId.value)) {
    userId.nextElementSibling.classList.add("show");
  } else {
    userId.nextElementSibling.classList.remove("show");
  }

  if (!password.value || !regPwd.test(password.value)) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPassword.value || !regPwd.test(confirmPassword.value)) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }

  // password == confirm-password
  // 이전 비밀번호와 다릅니다
  if (password.value != confirmPassword.value) {
    confirmPassword.nextElementSibling.classList.add("show");
    confirmPassword.nextElementSibling.textContent = "이전 비밀번호와 다릅니다";
  } else {
    // password, confirm 둘 다 입력 안 된 경우 값이 동일하기 때문에 remove가 실행됨
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }
});

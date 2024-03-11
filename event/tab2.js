// tab.js 수정

// 세 개의 li, div 찾기 : querySelectorAll()
const allLi = document.querySelectorAll(".tab.button");
const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach(li, (idx) => {
  li.addEventListener("click", (e) => {
    // 모든 li 에 orange 클래스명 제거
    allLi.forEach((item) => {
      item.classList.remove("orange");
    });

    // 현재 이벤트가 일어난 li orange 클래스명 추가
    e.target.classList.add("orange");

    // 다른 div 의 show 제거
    allDiv.forEach((item) => {
      item.classList.remove("show");
    });
    // 현재 이벤트가 일어난 li 와 순서가 일치하는 div show 추가
    allDiv[idx].classList.add("show");
  });
});

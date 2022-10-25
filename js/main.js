//header 검색창을 클릭했을 때 width값 늘리기
const headerSearch = document.querySelector(".search");
headerSearch.addEventListener("click", () => {
  headerSearch.style.width = "542px";
  headerSearch.style.backgroundColor = "white";
});

//header submenu plus button 더보기
const addMore = document.querySelector(".add-more");
const addBtn = document.querySelectorAll(".add-btn");

addBtn[0].addEventListener("click", () => {
  addMore.classList.toggle("show");
});
addBtn[1].addEventListener("click", () => {
  addMore.classList.toggle("show");
});

//멘토님 피드백 반영하여 수정한 부분

//전체 영역을 클릭할 경우 창이 닫히도록 구현하고 싶어서 window.addEventListener를 사용했는데 구현이 안됐습니다 .. 대신 body 영역이 header와 main으로만 구성되어 있어 이 둘을 따로따로 불러왔습니다.
const header = document.querySelector("header");
const main = document.querySelector("main");

/* 버블링현상 때문인지 header에서는 addMore.classList.remove이 먼저 적용되어 토글효과까지 사라집니다. e.stopPropagation();를 적용했는데도 문제가 해결되지 않아 주석처리 했습니다

header.addEventListener("click", (e) => {
  e.stopPropagation();
  if (addMore.classList.contains("show")) {
    addMore.classList.remove("show");
  }
}); */

main.addEventListener("click", (e) => {
  if (addMore.classList.contains("show")) {
    addMore.classList.remove("show");
  }
});

//header submenu profile image 더보기
const profileMore = document.querySelector(".profile-more");
addBtn[2].addEventListener("click", () => {
  profileMore.classList.toggle("show");
});

//멘토님 피드백 반영하여 수정한 부분

/* add-more와 마찬가지로 header에서는 적용이 안되어 주석처리 했습니다.
  header.addEventListener("click", (e) => {
  if (profileMore.classList.contains("show")) {
    profileMore.classList.remove("show");
  }
}); */

main.addEventListener("click", (e) => {
  if (profileMore.classList.contains("show")) {
    profileMore.classList.remove("show");
  }
});

//main-side section user 더보기
const userMoreClick = document.querySelector(".user");
const userMore = document.querySelector(".user-more");
const closeBtn = document.querySelector(".close-btn");

userMoreClick.addEventListener("click", () => {
  userMore.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  userMore.style.display = "none";
});

//멘토님 피드백 반영하여 수정한 부분
header.addEventListener("click", () => {
  if (userMore.classList.contains("show")) {
    userMore.classList.remove("show");
  }
});
/* 위의 경우와 유사하게 main에 영역에서는 실행되지 않아 주석처리하였습니다
  main.addEventListener("click", () => {
  if (userMore.classList.contains("show")) {
    userMore.classList.remove("show");
  }
}); */

//main-center section에서 이미지 영역 클릭시 유투브 페이지 이동
const imgContainer = document.querySelector(".img-container");
imgContainer.onclick = () => {
  window.open("https://www.youtube.com/watch?v=w3jLJU7DT5E");
};

//main-center section following/for you tab
const tabList = document.querySelectorAll(".select-list");
tabList.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    const tabContent = document.querySelectorAll(".tab-content");
    let tabNum = e.currentTarget.getAttribute("data-tabnum");
    tabContent.forEach((contentele, index) => {
      contentele.style.display = "none";
      tabList[index].className = "tab-list";
    });
    tabContent[tabNum].style.display = "block";
    if (list.className.indexOf("tab-active") == -1) {
      list.className = "tab-list tab-active";
    }
  });
  tabList[0].className = "tab-list tab-active";
  tabList[1].addEventListener("click", () => {
    const feedback = document.querySelector(".feedback-filter");
    feedback.style.display = "block";
  });
});

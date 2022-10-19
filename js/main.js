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

//header submenu profile image 더보기
const profileMore = document.querySelector(".profile-more");
addBtn[2].addEventListener("click", () => {
  profileMore.classList.toggle("show");
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

//main-center section에서 이미지 영역 클릭시 유투브 페이지 이동
const imgContainer = document.querySelector(".img-container");
imgContainer.onclick = () => {
  window.open("https://www.youtube.com/watch?v=w3jLJU7DT5E");
};

//main-center section following/for you tab
const tabList = document.querySelectorAll(".select-list");
tabList.forEach((list) => {
  list.addEventListener("click", (e) => {
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

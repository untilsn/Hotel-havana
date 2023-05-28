const navigationBtn = document.querySelector(".navigation-btn");
const navigationClose = document.querySelector(".navigation-close i");
const menuSidebar = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

navigationBtn.addEventListener("click", () => {
  menuSidebar.classList.add("active");
  overlay.style.display = "block";
});
navigationClose.addEventListener("click", () => {
  menuSidebar.classList.remove("active");
  overlay.style.display = "none";
});
document.addEventListener("click", (e) => {
  if (e.target === overlay || e.target.matches(".navigation-close i")) {
    menuSidebar.classList.remove("active");
    overlay.style.display = "none";
  }
});

// tabs change //

const tabsBtn = document.querySelectorAll(".item-tab");
const cardChange = document.querySelectorAll(".card-tab");

tabsBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabsBtn.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");

    cardChange.forEach((content) => {
      content.classList.remove("active");
    });
    cardChange[index].classList.add("active");
  });
});

// accordion //

const openBtn = document.querySelectorAll(".accordion h2");
const contentAccordion = document.querySelectorAll(".content");

openBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");

    const content = e.target.nextElementSibling;
    content.classList.toggle("active");
    content.style.height = content.scrollHeight + "px";

    if (!content.classList.contains("active")) {
      content.style.height = "0px";
    }
  });
});

const scrolltopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrolltopBtn.classList.add("active");
  } else {
    scrolltopBtn.classList.remove("active");
  }
});

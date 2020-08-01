const nav = document.querySelector("header");
const main = document.querySelector("main");

let options = {
  root: null,
  rootMargin: "-200px",
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.remove("change");
    } else {
      nav.classList.add("change");
    }
  });
}, options);

observer.observe(main);

const burger = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__menu"),
  menuLinks = document.getElementsByClassName("header__link");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
});

for (let link of menuLinks) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      document.body.classList.toggle("lock");
    }
  });
}

let worksLinks = document.querySelectorAll("li.works__link");
for (let li of worksLinks) {
  li.addEventListener("click", function () {
    for (let i of worksLinks) {
      i.classList.remove("active");
    }
    li.classList.add("active");
  });
}

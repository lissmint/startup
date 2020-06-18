window.onscroll = function () {
  let html = document.documentElement,
    body = document.body,
    nav = document.querySelector("header");

  if (html.scrollTop > 250 || body.scrollTop > 250) {
    nav.classList.add("change");
  } else {
    nav.classList.remove("change");
  }
};

let burger = document.querySelector(".header__burger"),
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

// SLIDER 2
function toNext(next) {
  let current = nextSlide - 1;

  if (next > slides.length - 1) {
    nextSlide = 0;
    next = 0;
    // current = slides.length - 1;
  } else nextSlide = next;

  slides[current].classList.toggle("active");
  controls[current].classList.toggle("active");
  slides[next].classList.toggle("active");
  controls[next].classList.toggle("active");

  nextSlide++;
}

function changeSlide(next) {
  if (sliderInterval) clearInterval(sliderInterval);
  toNext(next);
  sliderInterval = setInterval(function () {
    toNext(nextSlide);
  }, 3000);
}

var nextSlide = 1;
let sliderInterval;
let slides = document.querySelectorAll(".slider__content");
let controls = document.querySelectorAll(".control");
controls[0].classList.add("active");
slides[0].classList.add("active");
setTimeout(changeSlide, 3000, nextSlide);
controls.forEach((i, idx, arr) =>
  arr[idx].addEventListener("click", function () {
    changeSlide(idx);
  })
);

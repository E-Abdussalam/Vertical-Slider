const sliderContainer = document.querySelector(".slider-container");
const sliderRight = document.querySelector(".right-slide");
const sliderLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const slideLength = sliderRight.querySelectorAll("div").length;

console.log(slideLength);

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }
  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}

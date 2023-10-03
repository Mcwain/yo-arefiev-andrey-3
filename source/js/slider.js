const wrapper = document.querySelector('.main__slider-wrapper');
const innerWrapper = document.querySelector('.main__slider-inner');
const slides = document.querySelectorAll('.main__slider-slide');
const buttonBack = document.querySelector('.main__slider_btnPref-js');
const buttonNext = document.querySelector('.main__slider_btnNext-js');
const pagination = document.querySelector('.main__slider_pagination-js');

let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.childElementCount - 1;

let activeSlide = 0;
let timerID;

const timerLogic = () => {
  if (timerID) clearTimeout(timerID);
  timerID = setTimeout(() => {
    innerWrapper.style.transition = "";
  }, 700);
};
const addWidthSlides = () => {
  for (slide of slides) {
    slide.style.width = `${shearWidth}px`;
  }
};
const changeActivePoint = (index) => {
  const activePoint = document.querySelector(".main__slider-dot_check");
  activePoint.classList.remove("main__slider-dot_check");
  pagination.children[index].classList.add("main__slider-dot_check");
  
  index === 0
    ? buttonBack.setAttribute("disabled", "disabled")
    : buttonBack.removeAttribute("disabled");
  
  index === numberSlides
    ? buttonNext.setAttribute("disabled", "disabled")
    : buttonNext.removeAttribute("disabled");
};
const changeActiveSlide = (whereTo) => {
  const indentML = +innerWrapper.style.marginLeft.split("px")[0];
  innerWrapper.style.transition = "margin-left .2s";
  switch (whereTo) {
    case "next":
      if (activeSlide < numberSlides) {
        innerWrapper.style.marginLeft = `${indentML - shearWidth}px`;
        activeSlide = activeSlide + 1;
        buttonBack.removeAttribute("disabled");
      }
      if (activeSlide === numberSlides) {
        buttonNext.setAttribute("disabled", "disabled");
      }
      break;
    case "back":
      if (activeSlide !== 0) {
        innerWrapper.style.marginLeft = `${indentML + shearWidth}px`;
        activeSlide = activeSlide - 1;
        buttonNext.removeAttribute("disabled");
      }
      if (activeSlide === 0) {
        buttonBack.setAttribute("disabled", "disabled");
      }
      break;
  }
  changeActivePoint(activeSlide);
  timerLogic();
};

buttonBack.setAttribute("disabled", "disabled");
addWidthSlides();
for (i = 0; i < innerWrapper.children.length; i++) {
  let newElem = document.createElement("button");
  i === activeSlide
    ? newElem.classList.add("main__slider-dot", "main__slider-dot_check")
    : newElem.classList.add("main__slider-dot");
  const activeIndex = i;
  newElem.addEventListener("click", () => {
    innerWrapper.style.transition = "margin-left .5s";
    innerWrapper.style.marginLeft = `-${activeIndex * shearWidth}px`;
    activeSlide = activeIndex;
    changeActivePoint(activeIndex);
    timerLogic();
  });
  pagination.append(newElem);
}
buttonBack.addEventListener("click", () => changeActiveSlide("back"));
buttonNext.addEventListener("click", () => changeActiveSlide("next"));
window.addEventListener("resize", () => {
  shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
  addWidthSlides();
  if (activeSlide > 0) {
    innerWrapper.style.marginLeft = `-${activeSlide * shearWidth}px`;
  }
});





// const wrap = slider.querySelector(".main__slider-inner"); 
//   let slideWidth = wrap.offsetWidth; 

//   initWidth();   
  
//   window.addEventListener("resize", () => {
//     initWidth();  

//     setActiveSlide(activeSlideIndex);
//   })

//   function initWidth() {   
//     slideWidth = wrap.offsetWidth;

//     slides.forEach(slide => {
//       slide.style.width = `${slideWidth}px`;  
//     })
//   }
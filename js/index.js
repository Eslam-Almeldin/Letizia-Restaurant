const slides = document.querySelectorAll(".slide");
const auto = true; //to turn off the automatic slide make if false
const intervalTime = 3000; // 5s for every image slide
let slideInterval;

const nextSlide = () => {
  //Get current class
  const current = document.querySelector(".current");
  //Remove current class
  current.classList.remove("current");
  //Check for next slide
  if (current.nextElementSibling) {
    //Add current to Next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //Add current to Start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Auto Slide
if (auto) {
  //Run next Slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

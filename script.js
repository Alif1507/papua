window.onscroll = function () {
  let movingDiv = document.getElementById ("papua")
  let stopPosition = 1190;
  let scrollPosition = window.scrollY;

  if (scrollPosition < stopPosition) {
    movingDiv.style.top = (scrollPosition + 50) + "px";
  } else {movingDiv.style.top = stopPosition + "px"}
}

let slideindex = 0;
showSlides()

function showSlides() {
  let slide = document.querySelectorAll(".Slide")
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none"
  }
  slideindex++
  if (slideindex > slide.length) {
    slideindex = 1}
  slide[slideindex - 1].style.display = "block"
  setTimeout(showSlides, 4000) 

}

function showSideBar () {
  
   const sideBar = document.querySelector('.sidebar');
   sideBar.style.display = 'flex';

}

function closeSideBar() {
  const sideBar = document.querySelector('.sidebar')
  sideBar.style.display = "none";
  
}








var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//PRESS-------------------
var slideIndexx = 1;
showSlidess(slideIndexx);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

// Thumbnail image controls
function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesss");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexx = 1
  }
  if (n < 1) {
    slideIndexx = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexx - 1].style.display = "block";
  dots[slideIndexx - 1].className += " active";
}
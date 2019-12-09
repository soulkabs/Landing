var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("team");
  var slides_2 = document.getElementsByClassName("wrap");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < slides_2.length; i++) {
      slides_2[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  slides_2[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
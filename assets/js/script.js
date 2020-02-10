'use strict';

document.querySelector(".hamburger").addEventListener("click", show);

function show() {

  var active = document.querySelector(".hamburger").classList.contains("active");
  if (!active) {
    document.querySelector(".hamburger").classList.add("active");
  }
  else {
    document.querySelector(".hamburger").classList.remove("active");
  }

  var present = document.querySelector("#nav-bar").classList.contains("block");

  if (!present) {
    document.querySelector("#nav-bar").classList.add("block");
  } else {
    document.querySelector("#nav-bar").classList.remove("block");
  }
}




var elements = document.querySelectorAll("#nav-bar > li > a");

for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {

    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove("active-nav");

      document.querySelector(".dropdown ul").classList.remove("block")
    }
    this.classList.add("active-nav")
  }
}

document.querySelector(".dropdown").addEventListener("click", showDropdown);

function showDropdown() {

  var present = document.querySelector(".dropdown ul").classList.contains("block");

  if (!present) {
    document.querySelector(".dropdown ul").classList.add("block");
  }
  else {
    document.querySelector(".dropdown ul").classList.remove("block");
  }
}





document.querySelector(".slider-right-button").addEventListener("click", plusSlides);

var slideIndex = 1;

function plusSlides() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  var i = null;
  var slides = document.querySelectorAll(".slides > div")

  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.lengthl;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

'use strict';

window.onload = function(){

document.querySelector(".hamburger").addEventListener("click", show);
document.querySelector("body").addEventListener("click", close);

function close(){
  debugger;

    document.querySelector(".dropdown ul").classList.remove("block");
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector("#nav-bar").classList.remove("block");
}

function show(e) {

  e.stopPropagation();
  var active = document.querySelector(".hamburger").classList.contains("active");
  var present = document.querySelector("#nav-bar").classList.contains("block");
  if (!active && !present) {
    document.querySelector(".hamburger").classList.add("active");
    document.querySelector("#nav-bar").classList.add("block");
  }
  else {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector("#nav-bar").classList.remove("block");
  }
}


var elements = document.querySelectorAll("#nav-bar > li > a");

for (var i = 0; i < elements.length; i++) {

  elements[i].onclick = function (e) {
    debugger;

    e.stopPropagation();
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove("active-nav");
    }

    if(this.innerHTML !== "dropdown"){
      document.querySelector(".dropdown ul").classList.remove("block");
    }

    this.classList.add("active-nav");
  }
}

document.querySelector(".dropdown a").addEventListener("click", showDropdown);

function showDropdown(e) {
  debugger;

  e.stopPropagation();
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
  var i;
  var slides = document.querySelectorAll(".slides > div")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}



}
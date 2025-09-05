"use strict";

var w = 0;
var h = 0;
var isForwardDirection = true;
document.addEventListener("DOMContentLoaded", function () {
  var bgDiv = document.querySelector(".background"); // Function that moves the gradient background,
  // by changing the translation values after a period of time

  function moveBgGradient() {
    if (!bgDiv) return;

    if (isForwardDirection) {
      if (w < 50) {
        w += 5;
      } else if (h < 50) {
        h += 5;
      } else {
        isForwardDirection = false;
      }
    } else {
      if (w > 0) {
        w -= 5;
      } else if (h > 50) {
        h -= 5;
      } else {
        isForwardDirection = true;
      }
    }

    bgDiv.style.transform = "translate(".concat(-w, "%, ").concat(-h, "%)");
    setTimeout(moveBgGradient, 500);
  }

  moveBgGradient();
}); // Event listener for fixed(sticky) header

document.addEventListener("scroll", function (e) {
  var hero = document.querySelector(".hero-section");
  var header = document.querySelector("header");
  var headerBg = document.querySelector(".header-background");
  var windowScroll = window.scrollY;
  var heroHeight = hero.clientHeight;
  var whatWeDoHeight = document.querySelector(".what-we-do").clientHeight + heroHeight;
  var latestNewsHeight = document.querySelector(".latest-news").clientHeight + whatWeDoHeight;
  var galleryHeight = document.querySelector(".gallery").clientHeight + latestNewsHeight;
  var contactHeight = document.querySelector(".contact").clientHeight + galleryHeight; // Move header proportional to scroll up to 0y

  if (windowScroll <= 41) header.style.top = "".concat(41 - windowScroll, "px");else header.style.top = "0px"; // Blur header if scroll is proportionaly close to the hero section content

  if (windowScroll > heroHeight * 0.1) {
    header.classList.add("blur");
    document.querySelector(".pager").classList.add("pager-bg");
  } else {
    header.classList.remove("blur");
    document.querySelector(".pager").classList.remove("pager-bg");
  }

  if (windowScroll > heroHeight - header.clientHeight) headerBg.style.opacity = 0.7;else document.querySelector(".header-background").style.opacity = 0;

  switch (true) {
    case windowScroll < heroHeight:
      togglePagerClass(document.getElementById("hero-pager"));
      break;

    case windowScroll > heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      break;

    case windowScroll > whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      break;

    case windowScroll > latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      break;

    case windowScroll > galleryHeight && windowScroll < contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      break;

    default:
      togglePagerClass(document.getElementById("hero-pager"));
      break;
  }
});
var toggle = -1;
var isHover = false; // function to point out an arrow

function jumpingArrow() {
  var arrow = document.getElementById("arrow"); // pause on hover

  arrow.addEventListener("mouseover", function () {
    isHover = true;
  });
  arrow.addEventListener("mouseleave", function () {
    isHover = false;
  });

  if (toggle < 2 && !isHover) {
    if (arrow.style.bottom == "49px") {
      arrow.style.bottom = "10px";
    } else {
      arrow.style.bottom = "49px";
    }

    toggle++;
    setTimeout(jumpingArrow, 75);
  } else {
    toggle = 0;
    setTimeout(jumpingArrow, 3000);
  }
}

jumpingArrow();
var dots = document.querySelectorAll(".pager a");
dots.forEach(function (element) {
  element.addEventListener("click", function (e) {
    togglePagerClass(e.target);
  });
});

function togglePagerClass(element) {
  var parent = element.parentElement;
  document.querySelector(".active").classList.remove("active");
  parent.classList.add("active");
}
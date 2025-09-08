"use strict";

// Event listener for fixed(sticky) header
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

    case windowScroll >= heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      break;

    case windowScroll >= whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      break;

    case windowScroll >= latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      break;

    case windowScroll >= galleryHeight && windowScroll < contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      break;

    default:
      togglePagerClass(document.getElementById("contact-pager"));
      break;
  }
});
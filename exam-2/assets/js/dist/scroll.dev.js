"use strict";

// Event listener for fixed(sticky) header
document.addEventListener("scroll", function (e) {
  var hero = document.querySelector(".hero-section");
  var header = document.querySelector("header");
  var mobilePanel = document.querySelector(".mobile-menu-panel");
  var headerBg = document.querySelector(".header-background");
  var windowScroll = window.scrollY;
  var heroHeight = hero.clientHeight;
  var whatWeDoHeight = document.querySelector(".what-we-do").clientHeight + heroHeight;
  var latestNewsHeight = document.querySelector(".latest-news").clientHeight + whatWeDoHeight;
  var galleryHeight = document.querySelector(".gallery").clientHeight + latestNewsHeight;
  var contactHeight = document.querySelector(".contact").clientHeight + galleryHeight; // Move header proportional to scroll up to 0y

  if (windowScroll <= 41) {
    header.style.top = "".concat(41 - windowScroll, "px");
    mobilePanel.style.top = "".concat(121 - windowScroll, "px"); // 121 is initial top value for the mobile panel
  } else {
    header.style.top = "0px";
    mobilePanel.style.top = "".concat(121 - 41, "px"); // 121 is initial top value for the mobile panel
  } // Blur header if scroll is proportionaly close to the hero section content


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
      togglePagerClass(document.getElementById("hero-section-link"));
      break;

    case windowScroll >= heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      togglePagerClass(document.getElementById("what-we-do-link"));
      break;

    case windowScroll >= whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      togglePagerClass(document.getElementById("latest-news-link"));
      break;

    case windowScroll >= latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      togglePagerClass(document.getElementById("gallery-link"));
      break;

    case windowScroll >= galleryHeight && windowScroll < contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      togglePagerClass(document.getElementById("contact-link"));
      break;

    default:
      togglePagerClass(document.getElementById("contact-pager"));
      togglePagerClass(document.getElementById("contact-link"));
      break;
  }
});

function togglePagerClass(element) {
  var parent = element.parentElement;
  parent.parentElement.querySelector(".active").classList.remove("active");
  parent.classList.add("active");
}
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
      togglePagerClass(document.getElementById("contact-pager"));
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

function getLatestNews() {
  var response, data;
  return regeneratorRuntime.async(function getLatestNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://127.0.0.1:5500/exam-2/assets/json/news.json"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          showLatestNews(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showLatestNews(news) {
  var markup = "";
  news.forEach(function (element) {
    markup += "<li class=\"card-news\">\n        <div class=\"img-wrap\">\n           <img src=\"".concat(element.img, "\" alt=\"News image\">\n        </div>\n        <div class=\"content\">\n            <h4>").concat(element.topic, "</h4>\n            <p>").concat(element.detailed, "</p>\n        </div>\n        <div class=\"author-profile\">\n            <div class=\"img-wrap\">\n              <img src=\"").concat(element.author.photo, "\" alt=\"Author image\">\n            </div>\n            <div class=\"info\">\n              <span class=\"author-name\">").concat(element.author.name, "</span>\n              <span class=\"news-date\">").concat(element.author.date, "</span>\n            </div>\n        </div>\n    </li>");
  });
  document.getElementById("news-slider").innerHTML = markup; // LightSlider

  $(document).ready(function () {
    var slider = $("#news-slider").lightSlider({
      item: 3,
      loop: true,
      slideMove: 1,
      controls: false,
      auto: true,
      pause: 4000,
      slideMargin: 30,
      freeMove: true,
      pauseOnHover: true
    });
    $("#prev-arrow").click(function (e) {
      e.preventDefault();
      slider.goToPrevSlide();
    });
    $("#next-arrow").click(function (e) {
      e.preventDefault();
      slider.goToNextSlide();
    });
  });
}

document.addEventListener("load", getLatestNews());
lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "0000-0000-000-0000",
  speed: 500,
  height: "500px",
  width: "500px"
});
var mapLink = document.getElementById("load-map-link");

mapLink.onclick = function (e) {
  e.preventDefault();
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "assets/js/map-master/leaflet.css");
  document.head.append(link);
  var script = document.createElement("script");
  script.src = "assets/js/map-master/leaflet.js";
  script.onload = initMap;
  document.body.append(script);
};

function initMap() {
  mapLink.remove(); // https://tile.openstreetmap.org/{z}/{x}/{y}.png

  var map = L.map("map").setView([40.657398972846416, -73.89017185450878], 13);
  var myIcon = L.icon({
    iconUrl: "http://127.0.0.1:5500/exam-2/assets/img/marker.svg",
    iconSize: [106, 106]
  });
  L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);
  L.marker([40.67959842315331, -73.90396068726848], {
    icon: myIcon
  }).addTo(map).bindPopup("<b>Monticello</b> -<br> Our trade center.");
}
"use strict";

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
    markup += "<li class=\"card-news\">\n    <a href=\"#\" target=\"_blank\">\n        <div class=\"img-wrap\">\n           <img src=\"".concat(element.img, "\" alt=\"News image\">\n        </div>\n        <div class=\"content\">\n            <h4>").concat(element.topic, "</h4>\n            <p>").concat(element.detailed, "</p>\n        </div>\n        <div class=\"author-profile\">\n            <div class=\"img-wrap\">\n              <img src=\"").concat(element.author.photo, "\" alt=\"Author image\">\n            </div>\n            <div class=\"info\">\n              <span class=\"author-name\">").concat(element.author.name, "</span>\n              <span class=\"news-date\">").concat(element.author.date, "</span>\n            </div>\n        </div>\n    </a>\n    </li>");
  });
  document.getElementById("news-slider").innerHTML = markup; // LightSlider
}

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
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        item: 1
      }
    }]
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
document.addEventListener("load", getLatestNews());
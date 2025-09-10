"use strict";

function getLatestNews() {
  var response, data;
  return regeneratorRuntime.async(function getLatestNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://noname-lf.github.io/HW-repo/exam-2/assets/json/news.json"));

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
    markup += "<li class=\"card-news\">\n    <a href=\"#\" target=\"_blank\">\n        <div class=\"img-wrap\">\n           <img class=\"lazy\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" data-src=\"".concat(element.img, "\" alt=\"News image\">\n        </div>\n        <div class=\"content\">\n            <h4>").concat(element.topic, "</h4>\n            <p>").concat(element.detailed, "</p>\n        </div>\n        <div class=\"author-profile\">\n            <div class=\"img-wrap\">\n              <img class=\"lazy\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" data-src=\"").concat(element.author.photo, "\" alt=\"Author image\">\n            </div>\n            <div class=\"info\">\n              <span class=\"author-name\">").concat(element.author.name, "</span>\n              <span class=\"news-date\">").concat(element.author.date, "</span>\n            </div>\n        </div>\n    </a>\n    </li>");
  });
  document.getElementById("news-slider").innerHTML = markup;
} // LightSlider


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
    }],
    // prevent lightslider of not showing next images due to lazy loading interfering
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  $("#prev-arrow").click(function (e) {
    e.preventDefault();
    slider.goToPrevSlide();
  });
  $("#next-arrow").click(function (e) {
    e.preventDefault();
    slider.goToNextSlide();
  });
  var lazyLoadInstance = new LazyLoad();
});
document.addEventListener("load", getLatestNews());
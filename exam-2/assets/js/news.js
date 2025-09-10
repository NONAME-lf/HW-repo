async function getLatestNews() {
  const response = await fetch(
    "http://127.0.0.1:5500/exam-2/assets/json/news.json"
  );
  const data = await response.json();

  showLatestNews(data);
}

function showLatestNews(news) {
  let markup = "";
  news.forEach((element) => {
    markup += `<li class="card-news">
    <a href="#" target="_blank">
        <div class="img-wrap">
           <img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-src="${element.img}" alt="News image">
        </div>
        <div class="content">
            <h4>${element.topic}</h4>
            <p>${element.detailed}</p>
        </div>
        <div class="author-profile">
            <div class="img-wrap">
              <img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-src="${element.author.photo}" alt="Author image">
            </div>
            <div class="info">
              <span class="author-name">${element.author.name}</span>
              <span class="news-date">${element.author.date}</span>
            </div>
        </div>
    </a>
    </li>`;
  });
  document.getElementById("news-slider").innerHTML = markup;
}

// LightSlider
$(document).ready(function () {
  const slider = $("#news-slider").lightSlider({
    item: 3,
    loop: true,
    slideMove: 1,
    controls: false,
    auto: true,
    pause: 4000,
    slideMargin: 30,
    freeMove: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          item: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          item: 1,
        },
      },
    ],
    // prevent lightslider of not showing next images due to lazy loading interfering
    onSliderLoad: function (el) {
      var showActiveSlides = function (entries) {
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
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth,
      });

      el.find("li img").each(function () {
        observer.observe(this);
      });
    },
  });

  $("#prev-arrow").click(function (e) {
    e.preventDefault();
    slider.goToPrevSlide();
  });
  $("#next-arrow").click(function (e) {
    e.preventDefault();
    slider.goToNextSlide();
  });
  const lazyLoadInstance = new LazyLoad();
});
document.addEventListener("load", getLatestNews());

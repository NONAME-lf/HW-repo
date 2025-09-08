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
        <div class="img-wrap">
           <img src="${element.img}" alt="News image">
        </div>
        <div class="content">
            <h4>${element.topic}</h4>
            <p>${element.detailed}</p>
        </div>
        <div class="author-profile">
            <div class="img-wrap">
              <img src="${element.author.photo}" alt="Author image">
            </div>
            <div class="info">
              <span class="author-name">${element.author.name}</span>
              <span class="news-date">${element.author.date}</span>
            </div>
        </div>
    </li>`;
  });
  document.getElementById("news-slider").innerHTML = markup;
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

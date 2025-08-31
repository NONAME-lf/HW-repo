const API_KEY = "fe91a24c";

async function searchMovies(search, type = "", year = "") {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&y= ${year}`
  );
  const data = await response.json();
  if (data.Response === "False") {
    toast.error(data.Error);
    return;
  }

  showMoviesList(data.Search);
}

function showMoviesList(movies) {
  let list = "";

  movies.forEach((movie) => {
    list += `
    <div class="card">
  <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" onerror="this.src='assets/img/no-img.png'">
  <div class="card-body">
    <h5 class="card-title">${movie.Title}</h5>
    <p class="card-text"><b>Year: </b>${movie.Year}</p>
    <button class="btn btn-primary">Details</a>
  </div>
</div>
    `;
  });
  document.getElementById("movies-list").innerHTML = list;
}

const form = document.getElementById("search-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = document.getElementById("search-input").value.trim();
  const type = document.getElementById("type").value;
  const year = document.getElementById("year").value;
  if (!search) {
    return toast.info("Enter movie name before searching!");
  }

  searchMovies(search, type, year);
});

document.getElementById("year").setAttribute("max", new Date().getFullYear());

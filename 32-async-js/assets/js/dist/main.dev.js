"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var API_KEY = "fe91a24c";

function searchMovies(search) {
  var type,
      year,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function searchMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";
          year = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&s=").concat(search, "&type=").concat(type, "&y= ").concat(year)));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;

          if (!(data.Response === "False")) {
            _context.next = 11;
            break;
          }

          toast.error(data.Error);
          return _context.abrupt("return");

        case 11:
          showMoviesList(data.Search);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showMoviesList(movies) {
  var list = "";
  movies.forEach(function (movie) {
    list += "\n    <div class=\"card movie-card\">\n  <img src=\"".concat(movie.Poster, "\" class=\"card-img-top\" alt=\"").concat(movie.Title, "\" onerror=\"this.src='assets/img/no-img.png'\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(movie.Title, "</h5>\n    <p class=\"card-text\"><b>Year: </b>").concat(movie.Year, "</p>\n    <button data-movieid=\"").concat(movie.imdbID, "\" data-bs-toggle=\"modal\" data-bs-target=\"#movieModal\" class=\"btn btn-primary\">Details</a>\n  </div>\n</div>\n    ");
  });
  document.getElementById("movies-list").innerHTML = list;
  document.querySelectorAll(".movie-card").forEach(function (movie) {
    var button = movie.querySelector(".btn");
    button.addEventListener("click", function (e) {
      getMovieDetails(button.dataset.movieid);
    });
  });
}

function getMovieDetails(movie) {
  var response, data;
  return regeneratorRuntime.async(function getMovieDetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.omdbapi.com/?apikey=".concat(API_KEY, "&i=").concat(movie)));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context2.sent;
          showMovieDetails(data);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function showMovieDetails(movie) {
  var details = "";
  console.log(movie);

  for (var _i = 0, _Object$entries = Object.entries(movie); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (key === "imdbID") {
      continue;
    }

    if (key === "Poster") {
      details += "<b>".concat(key, ":</b> <a href=").concat(value, " target=\"_blank\">link</a><br>");
      continue;
    }

    if (_typeof(value) === "object") {
      details += "<b>".concat(key, ":</b><br>");
      value.forEach(function (rating) {
        details += "<b style=\"margin-left: 14%;\">".concat(Object.values(rating)[0], "</b>: ").concat(Object.values(rating)[1], "<br>");
      });
      continue;
    }

    details += "<b>".concat(key, ":</b> ").concat(value, "<br>");
  }

  document.querySelector(".modal-body").innerHTML = details;
}

var form = document.getElementById("search-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = document.getElementById("search-input").value.trim();
  var type = document.getElementById("type").value;
  var year = document.getElementById("year").value;

  if (!search) {
    return toast.info("Enter movie name before searching!");
  }

  searchMovies(search, type, year);
});
document.getElementById("year").setAttribute("max", new Date().getFullYear());
"use strict";

function loadPage(page) {
  var response, html, donut;
  return regeneratorRuntime.async(function loadPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(page));

        case 2:
          response = _context.sent;

          if (!response.ok) {
            document.getElementById("main-content").innerHTML = console.log(response.status);
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(response.text());

        case 6:
          html = _context.sent;
          document.getElementById("main-content").innerHTML = html;

          if (page === "pages/main.html") {
            donut = $("#donutty").donutty({
              radius: 400,
              value: 8.7,
              min: 0,
              max: 10,
              color: "url(#grad)",
              dir: "rtl",
              anchor: "top",
              padding: 4,
              thickness: 40,
              round: "false",
              bg: "#B7BACD"
            });
            createMyDonut();
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

var menu = document.querySelector(".main-menu");
menu.addEventListener("click", function (e) {
  if (e.target.nodeName === "A") {
    e.preventDefault();
    loadPage(e.target.getAttribute("href"));
  }
});

function createMyDonut() {
  /* As our donut is already initialized in html through the data atributes, 
      here we'll have to manually create and insert the value of our chart into html */
  var elem = document.getElementById("donutty");
  elem.querySelector("svg circle:nth-child(3)").attributes["stroke-width"].value = 20; //   Create and prepend custom gradient for stroke color

  var defs = document.createElement("defs");
  var lGradient = document.createElement("linearGradient");
  lGradient.setAttribute("id", "grad");
  lGradient.setAttribute("x1", "36.25%");
  lGradient.setAttribute("y1", "98.05%");
  lGradient.setAttribute("x2", "63.75%");
  lGradient.setAttribute("y2", "1.95%");
  lGradient.setAttribute("gradientUnits", "userSpaceOnUse");
  lGradient.innerHTML = "<stop stop-color=\"#1AE780\" offset=\"0\"></stop>\n        <stop offset=\"0.1875\" stop-color=\"#00D4BE\"></stop>\n        <stop offset=\"0.833333\" stop-color=\"#00D4BE\"></stop>\n        <stop offset=\"1\" stop-color=\"#1AE780\"></stop>";
  defs.append(lGradient);
  var svg = document.querySelector("svg.donut").prepend(defs);
  var chart = elem.donutty; // get alredy existant instance of our donut

  chart.options.text = function (state) {
    return state.value;
  };

  chart.createText(); // create span text

  /* Because any initialization happens upon creation the only function that does it inserts all fragments,
      so we must call it with given parameter */

  chart.insertFragments(chart.getDashValues());
}

loadPage("pages/main.html");
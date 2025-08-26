"use strict";

$(document).ready(function () {
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
  lGradient.innerHTML = "<stop stop-color=\"#1AE780\" offset=\"\"></stop>\n    <stop offset=\"0.1875\" stop-color=\"#00D4BE\"></stop>\n    <stop offset=\"0.833333\" stop-color=\"#00D4BE\"></stop>\n    <stop offset=\"1\" stop-color=\"#1AE780\"></stop>";
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
});
"use strict";

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

var toggleMenu = function toggleMenu() {
  return document.body.classList.toggle("is-active");
};

var toggleBurger = function toggleBurger() {
  document.querySelectorAll(".hamburger").forEach(function (btn) {
    return btn.classList.toggle("is-active");
  });
  toggleMenu();
};

window.addEventListener("resize", function (event) {
  if (event.target.outerWidth > 1122 && document.body.classList.contains("is-active")) {
    document.body.classList.remove("is-active");
    document.querySelectorAll(".hamburger").forEach(function (btn) {
      return btn.classList.remove("is-active");
    });
  }
});
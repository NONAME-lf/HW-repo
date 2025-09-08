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
});
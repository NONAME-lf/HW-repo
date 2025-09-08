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
lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "0000-0000-000-0000",
  speed: 500,
  height: "500px",
  width: "500px"
});
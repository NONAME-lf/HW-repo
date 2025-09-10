"use strict";

lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "0000-0000-000-0000",
  speed: 500,
  height: "500px",
  width: "500px"
}); // Add lazy load to lightgallery previews once clicking an image

var dataSrc = [];
document.getElementById("lightgallery").querySelectorAll(".lazy").forEach(function (element) {
  dataSrc.push(element.dataset.src);
});
var i = 0;
document.querySelectorAll(".lg-thumb-item").forEach(function (element) {
  console.log([element.children[0]]);
  element.children[0].dataset.src = dataSrc[i++];
  element.children[0].classList.add("lazy");
});
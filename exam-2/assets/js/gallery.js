lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "0000-0000-000-0000",
  speed: 500,
  height: "500px",
  width: "500px",
});

// Add lazy load to lightgallery previews once clicking an image
const dataSrc = [];
document
  .getElementById("lightgallery")
  .querySelectorAll(".lazy")
  .forEach((element) => {
    dataSrc.push(element.dataset.src);
  });
let i = 0;
document.querySelectorAll(".lg-thumb-item").forEach((element) => {
  element.children[0].dataset.src = dataSrc[i++];
  element.children[0].classList.add("lazy");
});

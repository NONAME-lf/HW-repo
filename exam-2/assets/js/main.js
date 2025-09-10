let toggle = -1;
let isHover = false;
// function to point out an arrow
function jumpingArrow() {
  const arrow = document.getElementById("arrow");
  // pause on hover
  arrow.addEventListener("mouseover", () => {
    isHover = true;
  });
  arrow.addEventListener("mouseleave", () => {
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

const toggleMenu = () => document.body.classList.toggle("is-active");
const toggleBurger = () => {
  document
    .querySelectorAll(".hamburger")
    .forEach((btn) => btn.classList.toggle("is-active"));
  toggleMenu();
};

window.addEventListener("resize", function (event) {
  if (
    event.target.outerWidth > 1122 &&
    document.body.classList.contains("is-active")
  ) {
    document.body.classList.remove("is-active");
    document
      .querySelectorAll(".hamburger")
      .forEach((btn) => btn.classList.remove("is-active"));
  }
});

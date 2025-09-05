let w = 0;
let h = 0;
let isForwardDirection = true;
document.addEventListener("DOMContentLoaded", function () {
  const bgDiv = document.querySelector(".background");
  // Function that moves the gradient background,
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
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 500);
  }
  moveBgGradient();
});

// Event listener for fixed(sticky) header
document.addEventListener("scroll", (e) => {
  const hero = document.querySelector(".hero-section");
  const header = document.querySelector("header");
  const headerBg = document.querySelector(".header-background");
  const windowScroll = window.scrollY;
  const heroHeight = hero.clientHeight;
  const whatWeDoHeight =
    document.querySelector(".what-we-do").clientHeight + heroHeight;
  const latestNewsHeight =
    document.querySelector(".latest-news").clientHeight + whatWeDoHeight;
  const galleryHeight =
    document.querySelector(".gallery").clientHeight + latestNewsHeight;
  const contactHeight =
    document.querySelector(".contact").clientHeight + galleryHeight;

  // Move header proportional to scroll up to 0y
  if (windowScroll <= 41) header.style.top = `${41 - windowScroll}px`;
  else header.style.top = `0px`;

  // Blur header if scroll is proportionaly close to the hero section content
  if (windowScroll > heroHeight * 0.1) {
    header.classList.add("blur");
    document.querySelector(".pager").classList.add("pager-bg");
  } else {
    header.classList.remove("blur");
    document.querySelector(".pager").classList.remove("pager-bg");
  }

  if (windowScroll > heroHeight - header.clientHeight)
    headerBg.style.opacity = 0.7;
  else document.querySelector(".header-background").style.opacity = 0;

  switch (true) {
    case windowScroll < heroHeight:
      togglePagerClass(document.getElementById("hero-pager"));
      break;
    case windowScroll > heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      break;
    case windowScroll > whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      break;
    case windowScroll > latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      break;
    case windowScroll > galleryHeight && windowScroll < contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      break;
    default:
      togglePagerClass(document.getElementById("hero-pager"));
      break;
  }
});

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

const dots = document.querySelectorAll(".pager a");
dots.forEach((element) => {
  element.addEventListener("click", function (e) {
    togglePagerClass(e.target);
  });
});

function togglePagerClass(element) {
  const parent = element.parentElement;
  document.querySelector(".active").classList.remove("active");
  parent.classList.add("active");
}

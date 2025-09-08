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
    case windowScroll >= heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      break;
    case windowScroll >= whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      break;
    case windowScroll >= latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      break;
    case windowScroll >= galleryHeight && windowScroll < contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      break;
    default:
      togglePagerClass(document.getElementById("contact-pager"));
      break;
  }
});

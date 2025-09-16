// Event listener for fixed(sticky) header
document.addEventListener("scroll", (e) => {
  const mobilePanel = document.querySelector(".mobile-menu-panel");
  const windowScroll = window.scrollY;
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero-section");
  const headerBg = document.querySelector(".header-background");
  const heroHeight = hero.clientHeight;
  const whatWeDoHeight =
    document.querySelector(".what-we-do").clientHeight + heroHeight;
  const latestNewsHeight =
    document.querySelector(".latest-news").clientHeight + whatWeDoHeight - 0.5; // For some reason anchor scroll scrolls 0.5px less than supposed to
  const galleryHeight =
    document.querySelector(".gallery").clientHeight + latestNewsHeight - 0.5; // So we need to retract them from height for it to work properly
  const contactHeight =
    document.querySelector(".contact").clientHeight + galleryHeight - 0.5;

  // Move header proportional to scroll up to 0y
  headerTop(windowScroll, header, mobilePanel);

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
      togglePagerClass(document.getElementById("hero-section-link"));
      break;
    case windowScroll >= heroHeight && windowScroll < whatWeDoHeight:
      togglePagerClass(document.getElementById("what-we-do-pager"));
      togglePagerClass(document.getElementById("what-we-do-link"));
      break;
    case windowScroll >= whatWeDoHeight && windowScroll < latestNewsHeight:
      togglePagerClass(document.getElementById("news-pager"));
      togglePagerClass(document.getElementById("latest-news-link"));
      break;
    case windowScroll >= latestNewsHeight && windowScroll < galleryHeight:
      togglePagerClass(document.getElementById("gallery-pager"));
      togglePagerClass(document.getElementById("gallery-link"));
      break;
    case windowScroll >= galleryHeight && windowScroll <= contactHeight:
      togglePagerClass(document.getElementById("contact-pager"));
      togglePagerClass(document.getElementById("contact-link"));
      break;
    default:
      togglePagerClass(document.getElementById("contact-pager"));
      togglePagerClass(document.getElementById("contact-link"));
      break;
  }
});

// Change the top position if user resized <= 768px @media breakpoint
window.addEventListener("resize", () => {
  const mobilePanel = document.querySelector(".mobile-menu-panel");
  const windowScroll = window.scrollY;
  const header = document.querySelector("header");
  headerTop(windowScroll, header, mobilePanel);
});

function headerTop(windowScroll, header, mobilePanel) {
  if (windowScroll <= 41 && windowScroll >= 0) {
    header.style.top = `${41 - windowScroll}px`;
    mobilePanel.style.top =
      window.innerWidth > 768
        ? `${121 - windowScroll}px`
        : `${101 - windowScroll}px`; // 121 is initial top value for the mobile panel
  } else {
    header.style.top = `0px`;
    mobilePanel.style.top = window.innerWidth > 768 ? `80px` : `60px`; // 121px - 41px
  }
}

function togglePagerClass(element) {
  const parent = element.parentElement;
  parent.parentElement.querySelector(".active").classList.remove("active");
  parent.classList.add("active");
}

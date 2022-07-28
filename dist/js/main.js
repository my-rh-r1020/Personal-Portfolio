// ================================= Scroll Fixed ====================================

window.onscroll = function () {
  // Get coordinat scroll window
  const scrollY = window.pageYOffset,
    // Get all section id
    header = document.querySelector("header"),
    fixedNavbar = header.offsetTop;

  if (scrollY > fixedNavbar) return header.classList.add("scroll-fixed");
  else return header.classList.remove("scroll-fixed");
};

// ======================== Scroll Section Active Link ===============================

// Get all section id
const sectionID = document.querySelectorAll("section[id]");

// Add event scroll
window.addEventListener("scroll", function () {
  // Get coordinat scroll window
  const scrollY = window.pageYOffset;

  sectionID.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) return document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    else return document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
  });
});

// Backup JS

// const header = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   // Get coordinat scroll window
//   const scrollY = window.pageYOffset;

//   if (scrollY >= 50) return header.classList.add("scroll-fixed");
//   else return header.classList.remove("scroll-fixed");
// });

// ======================== Dark Mode ===============================

const darkToggle = document.getElementById("dark-toggle"),
  iconNow = document.getElementById("iconNow"),
  htmlMode = document.querySelector("html"),
  iconTheme = "bxs-moon";

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    htmlMode.classList.add("dark");
    iconNow.classList.remove("bxs-sun");
    iconNow.classList.add(iconTheme);

    localStorage.theme = "dark";
    localStorage.selectedIcon = "bx bxs-moon";
  } else {
    htmlMode.classList.remove("dark");
    iconNow.classList.remove(iconTheme);
    iconNow.classList.add("bxs-sun");

    localStorage.theme = "light";
    localStorage.selectedIcon = "bx bxs-sun";
  }
});

// ========================= Toggle Move According Mode ===============================

// Cek Theme in LocalStorage
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Cek Icon in LocalStorage
if (localStorage.selectedIcon === "bx bxs-moon") {
  iconNow.classList.remove("bxs-sun");
  iconNow.classList.add(iconTheme);
}

// ================================= Scroll Reveal ====================================

// Configuration for Scroll Reveal
const sreveal = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 400,
  // reset: true,
});

// DOM Selection
const homeGreets = document.querySelector(".home-greets"),
  homeImage = document.querySelector(".home-image"),
  titleMain = document.querySelectorAll(".title-main"),
  aboutData = document.querySelector(".about-data"),
  skillData = document.querySelector(".skill-data"),
  portfolioData = document.querySelector(".portfolio-list"),
  contactData = document.querySelector(".contact-data");

sreveal.reveal(homeGreets, { origin: "left" });
sreveal.reveal(homeImage, { origin: "right", delay: 700 });
sreveal.reveal(titleMain, { origin: "top" });
sreveal.reveal(aboutData, { origin: "bottom", delay: 700 });
sreveal.reveal(skillData, { origin: "bottom", delay: 700 });
sreveal.reveal(portfolioData, { scale: 0.85, delay: 700 });
sreveal.reveal(contactData, {
  rotate: {
    x: 20,
    z: 20,
  },
  delay: 700,
});

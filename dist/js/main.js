// import "boxicons";
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
  htmlMode = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    htmlMode.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    htmlMode.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// ========================= Toggle Move According Mode ===============================

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

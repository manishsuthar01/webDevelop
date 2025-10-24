// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    navMenu.classList.remove("active");
  });
});

// Scroll indicator
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollIndicator").style.width = scrollPercent + "%";
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(250, 247, 242, 0.98)";
  } else {
    navbar.style.background = "rgba(250, 247, 242, 0.95)";
  }
});

// Cursor effect

let work = document.querySelector("#work");
console.log(work);
const cursor = document.querySelector(".cursor");

work.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
   display:"block",
    opacity: 1,
    duration:0.7,
    ease:"back.out(1.7)", 
    x: dets.clientX,
    y: dets.clientY, 
  });
});

work.addEventListener("mouseleave", (dets) => {
  gsap.to(".cursor", {
    opacity: 0,
    display,
  })
});

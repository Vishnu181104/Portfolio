const loader = document.getElementById("loader");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const typingText = document.getElementById("typingText");
const scrollTopButton = document.getElementById("scrollTop");

const phrases = [
  "Data Analytics",
  "Business Intelligence",
  "Power BI Dashboards",
  "SQL & Python",
  "GIS-based insights"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  themeIcon.textContent = mode === "light" ? "L" : "D";
  localStorage.setItem("theme", mode);
}

function typeLoop() {
  const current = phrases[phraseIndex];
  typingText.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex += 1;
    setTimeout(typeLoop, 80);
    return;
  }

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeLoop, 1200);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeLoop, 42);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  setTimeout(typeLoop, 260);
}

function handleScroll() {
  scrollTopButton.classList.toggle("visible", window.scrollY > 520);
}

window.addEventListener("load", () => {
  loader.classList.add("hidden");
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(nextTheme);
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
setTheme("light");
typeLoop();
handleScroll();
window.addEventListener("scroll", handleScroll, { passive: true });



document.addEventListener("DOMContentLoaded", () => {
  console.log('Portfolio loaded successfully');

  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (toggleBtn) {
    if (savedTheme) {
      root.setAttribute("data-theme", savedTheme);
      toggleBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
    } else if (prefersLight) {
      root.setAttribute("data-theme", "light");
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      const currentTheme =
        root.getAttribute("data-theme") === "light" ? "dark" : "light";

      root.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
      toggleBtn.textContent = currentTheme === "light" ? "🌙" : "☀️";
    });
  }

  // EXPERIENCE TOGGLE 
  document.querySelectorAll(".experience-toggle").forEach((block) => {
    const btn = block.querySelector(".toggle-btn");
    const details = block.querySelector(".details");
    const summary = block.querySelector(".summary");

    if (!btn || !details || !summary) return;

    btn.addEventListener("click", () => {
      const isHidden = details.classList.contains("hidden");

      if (isHidden) {
        details.classList.remove("hidden");
        summary.style.display = "none";
        btn.textContent = "Hide Details ↑";
      } else {
        details.classList.add("hidden");
        summary.style.display = "block";
        btn.textContent = "Show Details ↓";
      }
    });
  });

  // EDUCATION TOGGLE 
  document.querySelectorAll(".toggle-section").forEach((block) => {
    const btn = block.querySelector(".toggle-section-btn");
    const content = block.querySelector(".toggle-section-content");

    if (!btn || !content) return;

    btn.addEventListener("click", () => {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        btn.textContent = "Hide Details ↑";
      } else {
        content.classList.add("hidden");
        btn.textContent = "Show Details ↓";
      }
    });
  });
// NAVBAR LOGIC

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});
});
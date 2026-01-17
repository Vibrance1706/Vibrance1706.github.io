

console.log('Portfolio loaded successfully');

const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
} else if (prefersLight) {
  root.setAttribute("data-theme", "light");
  toggleBtn.textContent = "🌙";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  toggleBtn.textContent = currentTheme === "light" ? "🌙" : "☀️";
});


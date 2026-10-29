const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

year.textContent = new Date().getFullYear();

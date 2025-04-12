const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        document
            .querySelector("body")
            .setAttribute("data-theme", e.target.dataset.theme);
        localStorage.setItem("theme", e.target.dataset.theme);
    });
});

function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");

    if (theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }
    else {
        document.querySelector("body").setAttribute("data-theme","dark");
    }
}

getThemeOnLoad();
// Scroll-based fade-in
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

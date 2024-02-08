let nav = document.querySelector("#navbar");
let toggler = document.querySelector(".navbar-toggler");

let navState = false;

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.backgroundColor = "white";
    nav.style.color = "rgb(0, 0, 0)";
    nav.style.borderBottom = "1px solid gray";
  }
  if (!navState && !(window.scrollY > 100)) {
    nav.style.backgroundColor = "transparent";
    nav.style.color = "white";
    nav.style.borderBottom = "0";
  }
});

function togglerHandle() {
  navState = !navState;
  if (navState) {
    nav.style.backgroundColor = "white";
    nav.style.color = "rgb(0, 0, 0)";
    nav.style.borderBottom = "1px solid gray";
  }
  if (!navState && !(window.scrollY > 100)) {
    nav.style.backgroundColor = "transparent";
    nav.style.color = "white";
    nav.style.borderBottom = "0";
  }
}

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger Button
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// CLick to dismiss outside hamburger menu
window.addEventListener("click", (e) => {
  if (e.target.id != "hamburger" && e.target.id != "nav-menu") {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Move toggle position when theme is changed
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Send Message
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzpyNgpW8iI8ThiPT6TZnAlw5ZrU7VRHQEwC3vg2CPxgl3g3y81CGeZKpH9WJBMz7sBsA/exec";
const form = document.forms["ridhaaf-contact-form"];
const btnSend = document.getElementById("btn-send");
const btnSending = document.getElementById("btn-sending");
const myAlert = document.getElementById("my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // when submit button clicked, hide the button and show the sending button
  btnSend.classList.add("hidden");
  btnSending.classList.remove("hidden");
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // when success, show the alert & hide the sending button
      btnSend.classList.remove("hidden");
      btnSending.classList.add("hidden");
      myAlert.classList.remove("hidden");
      myAlert.classList.add("flex");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Close Alert
const $targetEl = document.getElementById("my-alert");

$targetEl.addEventListener("click", (e) => {
  $targetEl.classList.add("hidden");
});

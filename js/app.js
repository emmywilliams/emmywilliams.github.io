$(document).ready(function () {
  // Hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // Project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // Hero slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});

function closeNavbar() {
  if (window.innerWidth <= 992) {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
}

// Function to start the animation when the section is in the viewport
function startMilestoneAnimation() {
  const milestoneSection = document.getElementById("milestone");
  const valueDisplays = milestoneSection.querySelectorAll(".display-4");
  const interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    const endValue = parseInt(valueDisplay.getAttribute("data-val"));
    const duration = interval / endValue;
    let startValue = 0;

    const counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });

  // Remove scroll event listener once animation is triggered
  window.removeEventListener("scroll", startMilestoneAnimation);
}

// Add a scroll event listener to start the animation when the section is in view
window.addEventListener("scroll", () => {
  const milestoneSection = document.getElementById("milestone");
  const sectionRect = milestoneSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (sectionRect.top <= windowHeight * 0.75 && sectionRect.bottom >= 0) {
    startMilestoneAnimation();
  }
});

// initialize library
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["ug"],
  separateDialCode: true,
});

//typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Researcher",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// JavaScript to add shadow when scrolling
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("shadow"); // Add the shadow class
  } else {
    navbar.classList.remove("shadow"); // Remove the shadow class
  }
});

// To automatically update the year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Back to top button
window.addEventListener("scroll", function () {
  // Calculate the scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Get the height of the viewport
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Get the height of the page content
  var pageHeight = document.documentElement.scrollHeight;

  // Calculate how far from the bottom the user is (buffer is set to 20 pixels)
  var fromBottom = pageHeight - scrollPosition - windowHeight;

  // If the user is near the bottom of the page, show the footer icon
  if (fromBottom <= 20) {
    document.querySelector(".footer-iconTop").style.right = "20px";
  } else {
    document.querySelector(".footer-iconTop").style.right = "-50px";
  }
});

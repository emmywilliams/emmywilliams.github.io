// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section activate link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

//typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Graphics Designer",
    "Machine Learning Engineer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//download button
function downloadPDF() {
  var pdfURL = "image/Kayanja_emmy_william.pdf";
  var downloadLink = document.createElement("a");
  downloadLink.href = pdfURL;
  downloadLink.download = "file.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// gallery
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

// To automatically update the year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

//email
const nodemailer = require("nodemailer");

function sendEmail(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "emmywilliams74@gmail.com", // Replace with your email address
      pass: "William@1618", // Replace with your email password
    },
  });

  const mailOptions = {
    from: email,
    to: "emmywilliams74@gmail.com", // Replace with the recipient's email address
    subject: subject,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully.");
    }
  });
}

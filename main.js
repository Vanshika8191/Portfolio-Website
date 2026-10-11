const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});

const roleElement = document.getElementById("typedRole");
const roles = [
    "Frontend Developer",
    "Web Designer",
    "Full Stack Developer"
];
let roleIndex = 0;
let letterIndex = roles[0].length;
let deleting = true;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        letterIndex--;
        roleElement.textContent = currentRole.slice(0, letterIndex);

        if (letterIndex <= 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 350);
            return;
        }

        setTimeout(typeRole, 55);
    } else {
        const nextRole = roles[roleIndex];
        letterIndex++;
        roleElement.textContent = nextRole.slice(0, letterIndex);

        if (letterIndex >= nextRole.length) {
            deleting = true;
            setTimeout(typeRole, 1400);
            return;
        }

        setTimeout(typeRole, 80);
    }
}
setTimeout(typeRole, 1800);
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent ="Thank you! This demo form is not connected to email yet.";
    contactForm.reset();
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

if (localStorage.getItem("portfolioTheme") === "light") {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("portfolioTheme", "light");
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("portfolioTheme", "dark");
    }
});


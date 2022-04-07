// navbar links 
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains("fixed-nav");

// set date for footer

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
    // console.log(linksHeight);
    // console.log(containerHeight);
})

// fixed navbar 
window.addEventListener("scroll", () => {
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    // console.log("scrollHeight",scrollHeight);
    // console.log("navHeight",navHeight);
    // console.log(navbar);
    // setup back to top link
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

// smooth scroll 
// select links 
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navHeight;
        // console.log("navheight",navHeight);
        // console.log("element",element.offsetTop);
        // console.log("position",position);
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});



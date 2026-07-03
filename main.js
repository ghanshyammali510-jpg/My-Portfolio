var typed= new Typed(".text", {
    strings: ["Front-End Developer", "Editor", "web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const technicalSkills = document.querySelector("#skills");
const professionalSkills = document.querySelector("#professional-skills");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            technicalSkills.classList.remove("animate");
            professionalSkills.classList.remove("animate");

            void technicalSkills.offsetWidth;
            void professionalSkills.offsetWidth;

            technicalSkills.classList.add("animate");
            professionalSkills.classList.add("animate");

        }

    });

},{
    threshold:0.4
});

observer.observe(technicalSkills);

emailjs.init("NBUl3U-xE5y53UGkS");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_w917e2i",
"template_75lb2ja",
this
)

.then(function(){

alert("Message Sent Successfully!");

form.reset();

})

.catch(function(error){

alert("Failed : " + JSON.stringify(error));

});

});


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector('.navbar a[href="#' + id + '"]');

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

};

// Click karte hi active
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");

});

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

    });

});













/* =========================
   TYPING ANIMATION
========================= */

const typing = document.getElementById("typing");

const words = [
    "IT Student",
    "Web Developer",
    "Problem Solver",
    "AI Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();



/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    nav.classList.toggle("active");

}



/* Close mobile menu
   when clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });



/* =========================
   CERTIFICATE MODAL
========================= */

const modal =
    document.getElementById("certificateModal");

const certificateImage =
    document.getElementById("certificateImage");


function openCertificate(image) {

    certificateImage.src = image;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}



/* Close modal
   when clicking outside image */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeCertificate();

    }

});



/* Close modal with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});



/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
/* ======================================================
   MOBILE MENU
====================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        const opened =
            nav.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            opened
        );

        menuBtn.innerHTML = opened

            ? `<i class="fas fa-times"></i>`

            : `<i class="fas fa-bars"></i>`;

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");

                    menuBtn.innerHTML =
                        `<i class="fas fa-bars"></i>`;

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}



/* ======================================================
   TYPING EFFECT
====================================================== */

const typingText =
    document.getElementById("typingText");


if (typingText) {

    const words = [

        "Software Engineer",

        "Full-Stack Developer",

        "IT Engineer",

    ];


    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        const current =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                current.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (charIndex === current.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;

            }

        } else {

            typingText.textContent =
                current.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1)
                    % words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );

    }


    typeEffect();

}



/* ======================================================
   PROJECT FILTERS
====================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projectCards.forEach(card => {

                const categories =
                    card.dataset.category
                        .split(" ");


                if (
                    filter === "all" ||
                    categories.includes(filter)
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            });

        }
    );

});



/* ======================================================
   HEADER SCROLL
====================================================== */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ======================================================
   ACTIVE NAV LINK
====================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current =
            "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* ======================================================
   CONTACT FORM
====================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const message =
                document.getElementById(
                    "formMessage"
                );


            message.textContent =
                "Thanks! Your message has been received.";


            contactForm.reset();

        }
    );

}



/* ======================================================
   FOOTER YEAR
====================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* ======================================================
   SCROLL REVEAL
====================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .service-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(
    element =>
        observer.observe(element)
);
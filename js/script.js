let btn=document.querySelector(".header #btn");

let nav=document.querySelector(".header #nav")

btn.onclick=function(){
     btn.classList.toggle("fa-times");
     nav.classList.toggle("active");
    
    if(nav.className=="nav active"){
        nav.style.display="block";
        
    }
    else{
        nav.style.display="none";
        
    }

};

// Update nav-link active class on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


function updateActiveLink() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    

    if (scrollY >= sectionTop && scrollY <sectionTop+sectionHeight ) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }


  });


  

}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);





     const roles = ["Front-End Developer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing-text");
let isDeleting = false;

function typeEffect() {
  const currentText = roles[index];
  const displayed = currentText.substring(0, charIndex);

  typingElement.textContent = displayed;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % roles.length;
    }
    setTimeout(typeEffect, 500);
  }
}

typeEffect();


 const any_section = document.querySelectorAll(".section-reveal");

function revealOnScroll() {
  any_section.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("revealed");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

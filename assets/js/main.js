/* SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== DARK LIGHT THEME ===============*/
// get current theme of browser
const isDarkTheme = window?.matchMedia("(prefers-color-scheme: line)");
const themeButton = document?.getElementById("theme-button");

const darkTheme = () => {
  // Add or remove the dark / icon theme
  document?.body?.classList?.add("dark-theme");
  themeButton?.classList?.add("ri-moon-line");
  themeButton?.classList?.remove("ri-sun-line");

  // Change the image for dark theme
  const image = document.querySelector('.home__img');
  image.src = "assets/img/home-perfil-dark.jpg";
};

const lightTheme = () => {
  // Add or remove the dark / icon theme
  document?.body?.classList?.remove("dark-theme");
  themeButton?.classList?.remove("ri-moon-line");
  themeButton?.classList?.add("ri-sun-line");

  // Change the image for light theme
  const image = document.querySelector('.home__img');
  image.src = "assets/img/home-perfil.jpg";
};

isDarkTheme?.matches ? darkTheme() : lightTheme();

// Detect the dark mode
isDarkTheme?.addEventListener("change", () => {
  isDarkTheme.matches ? darkTheme() : lightTheme();
});

// Activate / deactivate the theme manually with the button
themeButton?.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document?.body?.classList?.toggle("dark-theme");
  themeButton?.classList?.toggle("ri-moon-line");
  themeButton?.classList?.toggle("ri-sun-line");

  // Toggle the image for dark/light theme
  const image = document.querySelector('.home__img');
  if (document.body.classList.contains('dark-theme')) {
    image.src = "assets/img/home-perfil-dark.jpg";
  } else {
    image.src = "assets/img/home-perfil.jpg";
  }
});
/*  REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SHADOW HEADER  */
const shadowHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/* EMAIL JS  */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_3jxeyip",
      "template_2yh3zke",
      "#contact-form",
      "jwo8euxo6qnjj8n1U"
    )
    .then(
      () => {
        contactMessage.textContent = "Mensagem enviada com sucesso ✅";

        // Remove the message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //clear input fields
        contactForm.reset();
      },
      () => {
        //show error message
        contactMessage.textContent =
          "Mensagem não foi enviada (erro no servidor) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* SCROLL SECTIONS ACTIVE LINK  */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* SCROLL REVEAL ANIMATION  */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 350,
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: "right" });
sr.reveal(
  `.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.docs__card, .testimonial__card`, { interval: 100 });

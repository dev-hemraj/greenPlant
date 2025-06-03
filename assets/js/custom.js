// ~~~~~~~~~~~~~~~~~~~ Home menu css
const navLink = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// ~~~~~~~~~~~~~~~~~~~  For review
var swiper = new Swiper(".reviewSlide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ~~~~~~~~~~~~~~~~~~~  Scroll up

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// ~~~~~~~~~~~~~~~~~~~  Change background color header

const scrollHeader = () => {
  const header = document.getElementById("navbar");
  if (this.scrollY >= 250) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

window.addEventListener("scroll", scrollHeader);

// ~~~~~~~~~~~~~~~~~~~  Scroll Sections active link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollY >= sectionTop - 60 &&
      scrollY < sectionTop + sectionHeight - 60
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);

// ~~~~~~~~~~~~~~~~~ Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 300,
  reset: true,
});

sr.reveal(
  ".home__data, .about__Top, .popular__top, .review__top, .review__anim, .footer_icon,.footer__content, .copy__right"
);
sr.reveal(".home__image", { delay: 500, scale: 0.7 });
sr.reveal(".services__card, .popular__card", { interval: 100 });
sr.reveal(".about__leaf", { delay: 1000, origin: "right" });
sr.reveal(".about__item__1-content, .about__item__2-img ", {
  origin: "right",
});
sr.reveal(".about__item__2-content, .about__item__1-img ", {
  origin: "left",
});
sr.reveal(".reviewFAncy", {
  delay: 1000,
  origin: "left",
});

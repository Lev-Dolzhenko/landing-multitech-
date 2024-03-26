import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

tl.fromTo(".header__wrapper", { opacity: 0 }, { opacity: 1, duration: 0.8 })
  .fromTo(
    ".header__nav",
    {
      y: "-30%",
      opacity: 0,
    },
    {
      y: "-5.5%",
      opacity: 1,
      duration: 0.8,
    }
  )
  .fromTo(".header__cell", { scale: 0 }, { scale: 1, duration: 0.8 })
  .fromTo(
    ".header__multi",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(
    ".header__tech",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
  .fromTo(
    ".header__person",
    { translateY: "-200%", translateX: "-50%", opacity: 0 },
    { translateY: "-50%", translateX: "-50%", opacity: 1, duration: 0.8 }
  )
  .fromTo(".header__particles", { opacity: 0 }, { opacity: 1, duration: 0.8 });

gsap.fromTo(
  ".about__title",
  { x: -300 },
  {
    x: 0,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
      start: "top center",
      end: "30% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".about__subtitle",
  { x: -300 },
  {
    x: 0,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".graphSvgAbout",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".about",
      scrub: true,
      start: "10% center",
      end: "50% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".circle",
  { rotate: 0 },
  {
    rotate: 360,
    scrollTrigger: {
      trigger: ".main",
      scrub: true,
      start: "top center",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".header__multi_development",
  { x: "-30%" },
  {
    x: "0%",
    scrollTrigger: {
      trigger: ".development",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".header__tech_development",
  { x: "30%" },
  {
    x: "0",
    scrollTrigger: {
      trigger: ".development",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".development__title",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".development",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".development__subtitle",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".development",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".developmet__images",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".development",
      scrub: true,
      start: "top center",
      end: "center center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".marketing__title",
  { x: -700 },
  {
    x: 0,
    scrollTrigger: {
      trigger: ".marketing",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".marketing__types",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".marketing",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".portfolio__title",
  { y: 200, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".portfolio",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

const cardItems = document.querySelectorAll(".card__item");

cardItems.forEach((cardItem) => {
  gsap.fromTo(
    cardItem,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: cardItem,
        scrub: true,
        start: "start center",
        end: "center center",
        once: true,
      },
    }
  );
});

gsap.fromTo(
  ".form_form",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".form",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

gsap.fromTo(
  ".form__particles",
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: ".form",
      scrub: true,
      start: "top center",
      end: "50% center",
      once: true,
    },
  }
);

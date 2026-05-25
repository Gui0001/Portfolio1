document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".navbar .menu");
  const burger = document.querySelector(".navbar .max-width > .menu-btn");
  const burgerIcon = burger ? burger.querySelector("i") : null;
  const scrollButton = document.querySelector(".scroll-up-btn");

  const updateScrollState = () => {
    const isScrolled = window.scrollY > 80;
    navbar?.classList.toggle("sticky", isScrolled);
    scrollButton?.classList.toggle("show", isScrolled);
  };

  burger?.addEventListener("click", () => {
    menu?.classList.toggle("active");
    burgerIcon?.classList.toggle("active");
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      burgerIcon?.classList.remove("active");
    });
  });

  scrollButton?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();
});

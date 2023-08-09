let hamburger = document.querySelector("#hamburger");
let hamikonka = document.querySelector("#hamburger i");
let mobileNav = document.querySelector("#mobileNav");
let menuItems = document.querySelectorAll(".menu-item");

closeMobileMenu = (e) => {
  mobileNav.classList.toggle("active");
  hamikonka.classList.toggle(
    "fa-bars",
    !mobileNav.classList.contains("active")
  );
  hamikonka.classList.toggle(
    "fa-xmark",
    mobileNav.classList.contains("active")
  );
};

hamburger.addEventListener("click", closeMobileMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", closeMobileMenu);
});

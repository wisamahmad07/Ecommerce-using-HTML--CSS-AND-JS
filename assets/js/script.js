/* MOBILE NAVBAR TOGGLE */
function toggleNavbar() {
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

/* HEADER ACTIVE */
function scrollHeader() {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 50);
}

// Attach scrollHeader function to scroll event of window
window.addEventListener("scroll", scrollHeader);

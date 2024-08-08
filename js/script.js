const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function orderdone() {
    // Show alert message
    alert("Order submitted successfully! Your order will be delivered within 5 days!");
  
    // Clear all data from local storage
    localStorage.clear();
  
    // Navigate to the home page (index.html)
    window.location.href = './index.html';
  }
  
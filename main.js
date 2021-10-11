/*Variables */

const menuHamburger = document.querySelector(".hamburger-menu");
const iconMenu = document.querySelector(".header-right > a");

/*Elements*/

iconMenu.addEventListener("click", function () {
    menuHamburger.classList.add("active");
})

const iconCross = document.querySelector(".close");

iconCross.addEventListener("click", function () {
    menuHamburger.classList.remove("active");
})



/*const menuHamburger = document.querySelector(".hamburger-menu")
const iconMenu = document.querySelector(".fa-bars")

iconMenu.addEventListener('click', function () {
    menuHamburger.style.display = 'block';
})

const iconCross = document.querySelector(".close")

iconCross.addEventListener('click', function () {
    menuHamburger.style.display = 'none';
})*/

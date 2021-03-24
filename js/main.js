const menuList = document.querySelector('.menu__list');
const menuIcon = document.querySelector('.menu__icon');

menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("active");
});

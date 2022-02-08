const navBtn = document.querySelector('.header__nav-btn');
const mobileNav = document.querySelector('.header__mobile-nav');
const iconNav = document.querySelector('.header__nav-btn-icon');

//клик по кнопке
navBtn.addEventListener('click', function (event){
    event.stopPropagation();
    toggleMobileNav();
})
//клик мимо навигации



function toggleMobileNav() {
    mobileNav.classList.toggle('header__mobile-nav_active');
    iconNav.classList.toggle('header__nav-btn-icon_close');
}
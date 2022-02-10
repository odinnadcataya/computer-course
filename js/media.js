const navBtn = document.querySelector('.header__nav-btn');
const mobileNav = document.querySelector('.header__mobile-nav');
const iconNav = document.querySelector('.header__nav-btn-icon');
const body = document.body;

//клик по кнопке
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMobileNav();
})

//клик по окну за пределами навигации
window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

//Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
})




function toggleMobileNav() {
    mobileNav.classList.toggle('header__mobile-nav_active');
    iconNav.classList.toggle('header__nav-btn-icon_close');
    body.classList.toggle('no-scroll');
    
    
}

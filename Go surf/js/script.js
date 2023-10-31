// Закрепляем меню при скроле
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 390 || document.documentElement.scrollTop > 390) {
        document.getElementById("header__fix").classList.add("fix");
        document.getElementById("menu").classList.add("menu__fix");
    } else {
        document.getElementById("header__fix").classList.remove("fix");
        document.getElementById("menu").classList.remove("menu__fix");
    }
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__fix');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_menu__open');

    });
}

const menuLinks = document.querySelectorAll('.menu__list-link');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });

}

function onMenuClick(e) {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    document.body.classList.remove('_menu__open');

}

// Поуказываем блок View Surf в слайдере
const surfSliderItems = document.querySelectorAll('.SurfSlider__item');

for (let i = 0; i < surfSliderItems.length; i++) {
    const cerrentSlide = surfSliderItems[i];
    let currentSlideButton = cerrentSlide.querySelector('.SurfSlider__button');
    cerrentSlide.addEventListener("mouseover", function () {

        currentSlideButton.classList.toggle('__show')
        console.log(currentSlideButton)
    });
    cerrentSlide.addEventListener("mouseout", function () {
        currentSlideButton.classList.remove('__show')
    });

}

// Увеличение количества гостей




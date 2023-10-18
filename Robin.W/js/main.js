//Подстветка активных пунктов меню при скроле

const observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('Элемент пересёк границу области ' + entry.target.id)
            document.querySelectorAll('.menu__list-link').forEach((link) => {

                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});

const options = {

    threshold: 0.7
  }
document.querySelectorAll('.section').forEach(section => { observer.observe(section) });

// Установка фона у меню при прокрутке

let navbar = document.getElementById('header').classList
let active_class = "header--background"


window.addEventListener('scroll', e => {
    if (scrollY > 80) navbar.add(active_class)
    else navbar.remove(active_class)
});

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

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

// Переключение разделов галлереи
const tabsBtn = document.querySelectorAll('.gallery__chapter');
const tabsItems = document.querySelectorAll('.gallery__block');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('tabs__non-active')) {
            if (!currentBtn.classList.contains('active-purple')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active-purple');
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove('__active');
                });

                currentBtn.classList.add('active-purple');
                currentTab.classList.add('__active');
            }
        }
    });
}
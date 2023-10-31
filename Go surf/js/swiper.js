new Swiper('.slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev',
    },

    pagination: {
        el: '.pagination__wrapper',
        type: 'bullets',
        bulletClass: 'pagination__item',
        bulletActiveClass: '__active',
        clickable: 'true',
        renderBullet:
            function (index, className) {
                let title = ['North Shore', 'South Shore', 'West Shore ', 'East Shore'];
                return ' <div class="' + className + '"> <div class="pagination__content flex"><div class="pagination__number"> 0' + (index + 1) + '</div><div class="pagination__title">' + title[index] + '</div></div></div>';
            }
    },

    slidesPerView: 1,



});

new Swiper('.surf__slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.surf__arrow-next',
        prevEl: '.surf__arrow-prev',
    },
    // loop: true,
    // pagination: {
    //     el: '.pagination__wrapper',
    //     type: 'bullets',
    //     bulletClass: 'pagination__item',
    //     bulletActiveClass: '__active',
    //     clickable: 'true',
    //     renderBullet:
    //         function (index, className) {
    //             let title = ['North Shore', 'South Shore', 'West Shore ', 'East Shore'];
    //             return ' <div class="' + className + '"> <div class="pagination__content flex"><div class="pagination__number"> 0' + (index + 1) + '</div><div class="pagination__title">' + title[index] + '</div></div></div>';
    //         }
    // },

    slidesPerView: 4,



});


new Swiper('.travel__slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.travel.slider2__next',
        prevEl: '.travel.slider2__prev',
    },

    slidesPerView: 1,



});
new Swiper('.sleep__slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.sleep.slider2__next',
        prevEl: '.sleep.slider2__prev',
    },

    slidesPerView: 1,



});

new Swiper('.shop__slider', {
    // Navigation arrows
    navigation: {
        nextEl: '.shop.slider2__next',
        prevEl: '.shop.slider2__prev',
    },

    slidesPerView: 1,



});

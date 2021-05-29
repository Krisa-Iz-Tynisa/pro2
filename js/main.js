new Swiper ('.swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // slidesPerView: 2,
    spaceBetween: 30,
    loop: true,



    breakpoints: {
        767: {
            slidesPerView: 1,
            allowTouchMove: true,
            scrollbar: {
                el: '.scroll-swiper-scrollbar',
                hide: true,
            },
        },
        1260: {
            
            spaceBetween: 30,
            slidesPerView: 2,
            
        }
    }

});
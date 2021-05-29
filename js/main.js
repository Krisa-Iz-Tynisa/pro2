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
            freeMode: true,
            slidesPerView: 1,
            allowTouchMove: true,
            scrollbar: {
                el: '.scroll-swiper-scrollbar',
                hide: true,
            },
        },
        1024: { 
            allowTouchMove: true,
        },
        1260: {
            allowTouchMove: true,
            spaceBetween: 30,
            slidesPerView: 2,
            
        }
    }


});
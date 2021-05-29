new Swiper ('.swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
<<<<<<< HEAD
    breakpoints: {
        767: {
=======
    // breakpoints: {
 
    //     780: {
    //         slidesPerView: 1,
    //     },
    //     1200: {
    //         slidesPerView:2,
    //     }
    // }
    
    breakpoints: {
        620: {
>>>>>>> 007415844e1b195f7bc69dabcbe239e98cc4fe7f
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
<<<<<<< HEAD
            
        }
    }
=======
        }
    }

>>>>>>> 007415844e1b195f7bc69dabcbe239e98cc4fe7f


});
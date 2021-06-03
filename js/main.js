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
        900: {
            
            spaceBetween: 30,
            slidesPerView: 2,
            
        }
    }

});



// let burger = document.querySelector('.burger-btn');
// let menu = document.querySelector('.menu-list')

// burger.addEventListener('click', function(){
//     let menu = document.querySelector('.wr-preview');
//     let btn = document.querySelector('.burger-btn');
//     let body = document.querySelector('body');

//     menu.classList.toggle('active');
//     btn.classList.toggle('active');
//     body.classList.toggle('lock');
// })



// burger.addEventListener('click', function () {
//     let modalWr = document.querySelector('.modal-wrapper')

//     console.log('click')


//     menu.classList.toggle('active')
// })
// // let menuList = document.querySelector('.menu-list')
// // let listArr = menuList.children

// // for (let i = 0; i < listArr.length; i++) {
// //     listArr[i].addEventListener('click', function () {
// //         let menu = document.querySelector('.wr-preview');
// //         let body = document.querySelector('body');
// //         body.classList.remove('lock');
// //         menu.classList.remove('active')
// //     })
// // }
let burger = document.querySelector('.burger-btn');
let menu = document.querySelector('.nav')



burger.addEventListener('click', function () {
    let modalWr = document.querySelector('.modal-wrapper')

    console.log('click')


    menu.classList.toggle('active')
})
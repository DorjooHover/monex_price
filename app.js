var body = document.querySelector('body')
var graphic = document.querySelector('.btn_graphics')
var graphic_view = document.querySelector('.graphic_pop')
var graphic_hide = document.querySelector('.graphic_popup')
// var logo = document.querySelector('.btn_logos')
// var logo_view = document.querySelector('.logo_pop')
// var logo_hide = document.querySelector('.logo_popup')
var photo = document.querySelector('.btn_photos')
var photo_view = document.querySelector('.photo_pop')
var photo_hide = document.querySelector('.photo_popup')
var g_photo = document.querySelector('.btn_g_photos')
var g_photo_view = document.querySelector('.g_photo_pop')
var g_photo_hide = document.querySelector('.g_photo_popup')
var main = document.querySelector('.btn_mains')
var main_view = document.querySelector('.main_pop')
var main_hide = document.querySelector('.main_popup')
// var video = document.querySelector('.btn_videos')
// var video_view = document.querySelector('.video_pop')
// var video_hide = document.querySelector('.video_popup')


graphic.addEventListener('click', () => {
     graphic_view.style.display = 'flex'
     body.style.overflowY = 'hidden'

     graphic_view.style.top = `${window.pageYOffset}px`
})
graphic_hide.addEventListener('click', () => {
     graphic_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
main.addEventListener('click', () => {
     main_view.style.display = 'flex'
     body.style.overflowY = 'hidden'

     main_view.style.top = `${window.pageYOffset}px`
})
main_hide.addEventListener('click', () => {
     main_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
g_photo.addEventListener('click', () => {
     g_photo_view.style.display = 'flex'
     body.style.overflowY = 'hidden'

     g_photo_view.style.top = `${window.pageYOffset}px`
})
g_photo_hide.addEventListener('click', () => {
     g_photo_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
// logo.addEventListener('click', () => {
//      logo_view.style.display = 'flex'
//      body.style.overflowY = 'hidden'
//      logo_view.style.top = `${window.pageYOffset}px`
// })
// logo_hide.addEventListener('click', () => {
//      logo_view.style.display = 'none'
//      body.style.overflowY = 'auto'
// })
photo.addEventListener('click', () => {
     photo_view.style.display = 'flex'
     body.style.overflowY = 'hidden'
     photo_view.style.top = `${window.pageYOffset}px`
})
photo_hide.addEventListener('click', () => {
     photo_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
// video.addEventListener('click', () => {
//      video_view.style.display = 'flex'
//      body.style.overflowY = 'hidden'
//      video_view.style.top = `${window.pageYOffset}px`
// })
// video_hide.addEventListener('click', () => {
//      video_view.style.display = 'none'
//      body.style.overflowY = 'auto'
// })
const swiper = new Swiper('.swiper', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     effect: "cards",
     grabCursor: true,
     autoplay: {
          delay:3000
     },
   });
   const swiper1 = new Swiper('.swiper_main', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
   
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   
     // And if we need scrollbar
     scrollbar: {
       el: '.swiper-scrollbar',
     },
   });
   

   

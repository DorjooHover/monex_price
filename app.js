var body = document.querySelector('body')
var graphic = document.querySelector('.btn_graphics')
var graphic_view = document.querySelector('.graphic_pop')
var graphic_hide = document.querySelector('.graphic_popup')
var logo = document.querySelector('.btn_logos')
var logo_view = document.querySelector('.logo_pop')
var logo_hide = document.querySelector('.logo_popup')
var photo = document.querySelector('.btn_photos')
var photo_view = document.querySelector('.photo_pop')
var photo_hide = document.querySelector('.photo_popup')
var video = document.querySelector('.btn_videos')
var video_view = document.querySelector('.video_pop')
var video_hide = document.querySelector('.video_popup')


graphic.addEventListener('click', () => {
     graphic_view.style.display = 'flex'
     body.style.overflowY = 'hidden'

     graphic_view.style.top = `${window.pageYOffset}px`
})
graphic_hide.addEventListener('click', () => {
     graphic_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
logo.addEventListener('click', () => {
     logo_view.style.display = 'flex'
     body.style.overflowY = 'hidden'
     logo_view.style.top = `${window.pageYOffset}px`
})
logo_hide.addEventListener('click', () => {
     logo_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
photo.addEventListener('click', () => {
     photo_view.style.display = 'flex'
     body.style.overflowY = 'hidden'
     photo_view.style.top = `${window.pageYOffset}px`
})
photo_hide.addEventListener('click', () => {
     photo_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
video.addEventListener('click', () => {
     video_view.style.display = 'flex'
     body.style.overflowY = 'hidden'
     video_view.style.top = `${window.pageYOffset}px`
})
video_hide.addEventListener('click', () => {
     video_view.style.display = 'none'
     body.style.overflowY = 'auto'
})
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
   

   

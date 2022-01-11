var graphic = document.querySelector('.btn_graphics')
var graphic_view = document.querySelector('.graphic_price')
var photo = document.querySelector('.btn_photos')
var photo_view = document.querySelector('.photo_price')
var video = document.querySelector('.btn_videos')
var video_view = document.querySelector('.video_price')
graphic.addEventListener('click', () => {
     graphic_view.style.display = 'block'
})
photo.addEventListener('click', () => {
     photo_view.style.display = 'block'
})
video.addEventListener('click', () => {
     video_view.style.display = 'block'
})
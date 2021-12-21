const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cursor = $('.cursor')
const image = $('.image')

// console.log(cursor)

const imageArr = ('food_img1.jpg', 'food_img2.jpg', 'food_img3.jpg', 'food_img4.jpg', 'food_img5.jpg')

setInterval(imageArr.forEach(imageUrl => {
    image.style.background.url = imageUrl
}), 2500)

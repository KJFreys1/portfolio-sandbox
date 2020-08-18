const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const pages = document.querySelectorAll('.page')
console.log(pages)
let pageIndex = 0

rightBtn.addEventListener('click', () => {
    if (pageIndex == 3) return
    pageIndex++
    pages[pageIndex].style.transform = 'translateX(0)'
    if (pageIndex === 3) {
        rightBtn.style.opacity = .1
    } else if (pageIndex === 1) {
        leftBtn.style.opacity = 1
    }
})

leftBtn.addEventListener('click', () => {
    if (pageIndex == 0) return
    pages[pageIndex].style.transform = 'translateX(100vw)'
    pageIndex--
    if (pageIndex === 0) {
        leftBtn.style.opacity = .1
    } else if (pageIndex === 2) {
        rightBtn.style.opacity = 1
    }
})
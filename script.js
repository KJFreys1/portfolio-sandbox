const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const pages = document.querySelectorAll('.page')
const links = document.querySelectorAll('li')
let pageIndex = 0

function checkBtn(idx=pageIndex) {
    rightBtn.style.opacity = idx < 3 ? 1 : .1
    leftBtn.style.opacity = idx > 0 ? 1 : .1
}

links.forEach((li, idx) => {
    li.addEventListener('click', () => {
        let newPage = idx
        checkBtn(newPage)
        if (newPage > pageIndex) {
            for (i = 0; i < newPage - pageIndex; i++) {
                setTimeout(() => {
                    pageIndex++
                    pages[pageIndex].style.transform = 'translateX(0)'
                }, i * 200)
            }
        } else if (newPage < pageIndex) {
            for (i = 0; i < pageIndex - newPage; i++) {
                setTimeout(() => {
                    pages[pageIndex].style.transform = 'translateX(100vw)'
                    pageIndex--
                }, i * 200)
            }
        }
    })
})

rightBtn.addEventListener('click', () => {
    if (pageIndex == 3) return
    pageIndex++
    pages[pageIndex].style.transform = 'translateX(0)'
    checkBtn()
})

leftBtn.addEventListener('click', () => {
    if (pageIndex == 0) return
    pages[pageIndex].style.transform = 'translateX(100vw)'
    pageIndex--
    checkBtn()
})
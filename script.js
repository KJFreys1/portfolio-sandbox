const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const pages = document.querySelectorAll('.page')
const links = document.querySelectorAll('li')
let pageIndex = 0

const job = document.querySelector('.job')
const jobTitles = ["Front End Developer", "Full Stack Engineer", "UI/UX Designer", "Driven Tech Head"]
let jobIndex = 0

const aboutElems = document.querySelectorAll('.blue-t')

function checkBtn(idx = pageIndex) {
    rightBtn.style.opacity = idx < 3 ? 1 : .1
    leftBtn.style.opacity = idx > 0 ? 1 : .1
    links.forEach((li, i) => {
        if (i !== idx) {
            li.classList.remove('highlight')
        } else {
            li.classList.add('highlight')
        }
    })
    if (idx === 1) {
        setTimeout(() => {
            showAboutPage()
        }, 1500)
    }
}

function showAboutPage() {
    aboutElems.forEach((ele, i) => {
        setTimeout(() => {
            ele.style.transform = 'translateY(0)'
            ele.style.opacity = 1
        }, 300 * i)
    })
}

function changeJob() {
    jobIndex = jobIndex < 3 ? jobIndex + 1 : 0
    job.style.transform = 'translateY(10vh)'
    setTimeout(() => {
        job.textContent = jobTitles[jobIndex]
    }, 800)
    setTimeout(() => {
        job.style.transform = 'translateY(0)'
    }, 1200)
}

setInterval(changeJob, 4000)

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
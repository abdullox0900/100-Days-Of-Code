const elProgress = document.getElementById('progress');
const elPrev = document.getElementById('prev');
const elNext = document.getElementById('next');
const elCircles = document.querySelectorAll('.circle');

let currentActive = 1;

elNext.addEventListener('click', () => {
    currentActive++

    if(currentActive > elCircles.length) {
        currentActive = elCircles.length
    }

    update()
})

elPrev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    elCircles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const elActives = document.querySelectorAll('.active')

    elProgress.style.width = ((elActives.length - 1) / (elCircles.length -1)) * 100 + '%'

    if(currentActive === 1) {
        elPrev.disabled = true
    } else if (currentActive === elCircles.length) {
        elNext.disabled = true
    } else {
        elPrev.disabled = false
        elNext.disabled = false
    }
}
const hours = document.querySelector('.times__item--hours')
const minutes = document.querySelector('.times__item--minutes')
const seconds = document.querySelector('.times__item--seconds')
const mail = document.querySelector('.body')

const btnPrevs = document.querySelector('.app_container-control--left')
const btnNext = document.querySelector('.app_container-control--right')
const btnMail = document.querySelector('.button-item')
const container = document.querySelector('.app__container')
const timer = document.querySelector('.app__timer')

const img = document.querySelector('#img')
const arrayImg = ['1.JPG', '2.JPG', '3.JPG', '4.JPG',
    '5.JPG', '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.jpg'
]

const countDownDate = new Date("Sep 2, 2021 17:17:00").getTime();

formatTime = (number) => {
        return number < 10 ? `0${number}` : number;
    }
    // Timer
const x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    hours.innerText = formatTime(hour);
    minutes.innerText = formatTime(minute);
    seconds.innerText = formatTime(second);

    if (distance < 0) {
        clearInterval(x);
        container.classList.remove('close')
        timer.classList.add('close')
    }
}, 1000);


// Silde
let indexSlide = 0;

showImg = (index) => {
    img.src = `./app/img/${index}`
    console.log(`./app/img/${index}`)
}


btnPrevs.onclick = function() {

    if (indexSlide == 0) {
        indexSlide = arrayImg.length - 1;
    } else {
        indexSlide = indexSlide - 1
    }
    showImg(arrayImg[indexSlide])
}
btnNext.onclick = function() {
    if (indexSlide >= arrayImg.length - 1) {
        indexSlide = 0;
    } else {
        indexSlide = indexSlide + 1
    }
    showImg(arrayImg[indexSlide])
}

// Mail
let stateMail = false;
btnMail.onclick = () => {
    if (stateMail === false) {
        mail.classList.remove('close');
        stateMail = true;
    } else {
        mail.classList.add('close');
        stateMail = false;
    }
}
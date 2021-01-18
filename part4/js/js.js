let show_btn = document.querySelector('#myBtn');
let modal = document.querySelector('.modal');
let close_btn = document.querySelector('.close');
show_btn.onclick = function () {
    modal.style.display = 'block';
}

close_btn.onclick = function () {
    modal.style.display = 'none';
    clearInterval(timer);
    clearInterval(timer2);
}



let timer2;
let timer;
let x = 5;
let y = 59;
let btn_timer = document.querySelector('.call-btn-click');
let textBtn = document.querySelector('.modal__button')
let done = document.querySelector('.done_icon');
let timerClose = document.querySelector('.modal__timer');

function countdown() {

    if (x <= 0) {
        clearInterval(timer);
        timerClose.style.display = "none";
        done.style.display = "block";
    }
    document.getElementById('timer').innerHTML = x + ":";
    x--;
}


function countdownMs() {
    document.getElementById('ms').innerHTML = y;
    y--;
    if (x == 0) {
        setInterval(countdownMs);
        y = 0;
    }
    if (y == 0) {
        clearInterval(countdownMs);
        y = 100;
    }
    if (x <= 0) {
        clearInterval(timer2);
        y = 0;
    }
}


btn_timer.onclick = function () {
    let modalInput = document.querySelector('#modalInput');
    let modaly = document.querySelector('.modal__input');
    
    let body = document.querySelector('.modal-content');
    let p = document.createElement('p');
    let enterText = document.querySelectorAll('.enter_text');
    for (let i = 0; i < enterText.length; i++) {
        enterText[i].remove();
    }
    if (modalInput.value === '') {
        p.className = 'enter_text';
        p.innerHTML = "Введите номер";
        done.parentElement.insertBefore(p, done);
    } 
    else {
        timer = setInterval(countdown, 1000);
        timer2 = setInterval(countdownMs, 10);
        
    }
    }





$(document).ready(function () {

    $('.accord').click(function(){
    if ($(this).next(".inner").attr('style') == 'display: block;'){
        $(this).next(".inner").slideUp();
        $(this).find('.btn_rotate').css({
            'transform': 'rotate(' + 0 + 'deg)'
        })
    }
    else{
        $(this).next(".inner").slideDown();
        $(this).find('.btn_rotate').css({
            'transform': 'rotate(' + 180 + 'deg)',
            'height': + 35 + 'px',
            'padding-left': + 10 + 'px',
            'background': 'rgba(236, 4, 4, 0.849)'
        })
    }
    })

    // $('.toggle').click(function () {
    //     $(this).next('.btn_rotate').css({
    //         'transform': 'rotate(' + 180 + 'deg)'
    //     })
    // })


});
let show_btn = document.querySelector('#myBtn');
let modal = document.querySelector('.modal');
let close_btn = document.querySelector('.close');
show_btn.onclick = function () {
    modal.style.display = 'block';
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
let hidSection = document.querySelector('.hidden_section');
let form = document.querySelector(".form");
let fields = document.querySelectorAll('.fields');
    
function validate() {
        let errors = document.querySelectorAll('.text-danger');
        for (let i = 0; i < errors.length; i++) {
            errors[i].remove();
        }

        for (let i = 0; i < fields.length; i++) {
            // console.log(fields[i].value);
            if (!fields[i].value) {
                let p = document.createElement('p');
                p.className = 'text-danger';
                p.innerHTML = "Заполните поле";
                form[i].parentElement.insertBefore(p, fields[i]);
            }
        }

            if (errors > 0) {
                return false;
            }
            return true;
        }


function showMsg(className, textMsg) {
    let elem = document.createElement('h2');
    elem.className = className;
    elem.innerHTML = textMsg;
    document.querySelector('#msg').append(elem);
}



form.onsubmit = function () {
    let obj = {};

    if (validate()) {
        for (let i = 0; i < fields.length; i++) {
            obj[fields[i].name] = fields[i].value;
        }
        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    if (data.surname && data.name && data.secondName && data.email && data.phone) {
                        hidSection.style.display = 'block';

                    } else {
                        showMsg('text-danger', 'Операция не выполнена');
                    };
                }
            });
    }
}
let body = document.querySelector('.hidden_section');
body.onclick = function () {
    hidSection.style.display = 'none';
}




close_btn.onclick = function () {
    modal.style.display = 'none';
    clearInterval(timer);
    clearInterval(timer2);
    
}




let summa = document.querySelector('#summa');
let sroka = document.querySelector('#sroka');
let voz = document.querySelector('#voz');

let xx = localStorage.getItem("sum1");
summa.innerHTML = xx;
let yy = localStorage.getItem('srok');
sroka.innerHTML = yy;
let zz = localStorage.getItem('sum2');
voz.innerHTML = zz;

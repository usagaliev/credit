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

close_btn.onclick = function () {
    modal.style.display = 'none';
    clearInterval(timer);
    clearInterval(timer2);
}




let btn_contact = document.querySelector('#btn_contact');
let form = document.querySelector(".form");
let fields = document.querySelectorAll('.fields');
let close_btn1 = document.querySelector('.close1');
let hidSection = document.querySelector('.hidden_section');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');

let inputNone1 = document.querySelector('#input_none1');
let inputNone2 = document.querySelector('#input_none2');
let inputNone3 = document.querySelector('#input_none3');
let inputNone4 = document.querySelector('#input_none4');
let contact_margin = document.querySelectorAll('.contact_margin');
let p1 = document.querySelectorAll('.p');

function validate() {
    let error = 0;
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
            p.style.padding = 0;
            form[i].parentElement.insertBefore(p, fields[i]);
            error++;
        }
        // if (fields[i].value) {
        //     contact_margin[i].style.padding = '5px 0px 0px 0px';
        // }
    }
    if (error > 0) {
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
                    if (data.name && data.email && data.theme && data.textarea) {
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

// function validate() {
//     if(input1.value === ""){
//         input1.style.border = '1px solid red';
//         inputNone1.style.display = 'block';
//         return false;
//     }
//     if (input2.value === "") {
//         input2.style.border = '1px solid red';
//         inputNone2.style.display = 'block';
//         return false;
//     }
//     if (input3.value === "") {
//         input3.style.border = '1px solid red';
//         inputNone3.style.display = 'block';
//         return false;
//     }
//     if (input4.value === "") {
//         input4.style.border = '1px solid red';
//         inputNone4.style.display = 'block';
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// // 

// btn_contact.onclick = function() {
//     if (validate()) {

//         let obj = {};
//         for (let i = 0; i < fields.length; i++) {
//             obj[fields[i].name] = fields[i].value;
//         }
        
//         const url = "https://reqres.in/api/users";
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(obj)

//         };

//         fetch(url, options)
//             .then(response => response.json())
//             .then(data => showMsg());
            
//     }
// }




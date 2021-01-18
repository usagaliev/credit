
let vozvrat = document.querySelector('#three');
let fun1 = document.querySelector('.fun1');
let fun2 = document.querySelector('.fun2');
let addBtn = document.querySelector('.add');

document.querySelector('#one').innerHTML = fun1.value;
document.querySelector('#two').innerHTML = fun2.value;

fun1.oninput = function() {
	let summ = this.value
	document.getElementById("one").innerHTML=summ;
	let payment = platezh(summ, fun2.value);
	addStorage(summ, fun2.value, payment);
	vozvrat.innerHTML = payment;
}
fun2.oninput = function() {
	let srok = this.value;
	document.getElementById("two").innerHTML = srok;
	let payment = platezh(fun1.value, srok);
	addStorage(fun1.value, srok, payment);
	vozvrat.innerHTML = payment;
}

addBtn.onclick = function () {
	window.location.replace('page2.html');
}

// вычисление суммы возврата
// summa - сумма кредита
// stavka - ежемес ставка кредита, по умолчанию 3%
// srok - срок погашения

function platezh(summa, srok, stavka = 3) {
	stavka /= 100;
	let a = Math.pow(1 + stavka, srok);
	let b = summa * stavka * a / (a - 1);
	let result = parseFloat(b.toFixed(0)) * srok;
	return result;
}


function addStorage(sum1, srok, sum2) {

	localStorage.setItem('sum1', sum1);
	localStorage.setItem('srok', srok);
	localStorage.setItem('sum2', sum2);
}




let show_btn = document.querySelector('#myBtn');
let modal = document.querySelector('.modal');
let close_btn = document.querySelector('.close');
show_btn.onclick = function(){
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
function countdown(){
	
	if (x <= 0) {
		clearInterval(timer);
		timerClose.style.display = "none";
		done.style.display = "block";
	}
	document.getElementById('timer').innerHTML = x+":";
	x--;
}


function countdownMs(){
		document.getElementById('ms').innerHTML = y;
	y--;
	if(x==0){
		setInterval(countdownMs);
		y=0;
	}
	if(y==0){
		clearInterval(countdownMs);
		y=100;
	}
	if(x <= 0){
		clearInterval(timer2);
		y=0;
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




// modalInput.onsubmit = function () {
// 	let errors = document.querySelectorAll('.text-danger');
// 	for (let i = 0; i < errors.length; i++) {
// 		errors[i].remove();
// 	}

// 	for (let i = 0; i < modalInput.length; i++) {
// 		// console.log(fields[i].value);
// 		if (!modalInput[i].value) {
// 			let p = document.createElement('p');
// 			p.className = 'text-danger';
// 			p.innerHTML = "Заполните поле";
// 			form[i].parentElement.insertBefore(p, fields[i]);

// 		}
// 	}
// }






let txtShow = document.querySelector('.text-show');
let txtBtn = document.querySelector('.btn_active');
let btnRotate = document.querySelector("#btn_rotate");
txtBtn.onclick = function () {
	if (txtShow.style.display == "block"){
		txtShow.style.display = "none";
		btnRotate.style.transform = "rotateX(0deg)"
	}
	else{
		txtShow.style.display = "block";
		btnRotate.style.transform = "rotateX(180deg)"
		}
}







let bodyCopy = document.querySelector('body');

document.oncopy = function CopySource() {
	let text = window.getSelection();
	let source = "Подробнее:";
	let thisLink = document.location.href;
	let link = "<br/>" + source + ' ' + "<a href='" + thisLink + "'>" + thisLink + "</a>";
	let div = document.createElement('div');
	div.style.position = "absolute";
	div.style.left = "-99999px";
	div.innerHTML = text + link;
	bodyCopy.appendChild(div);
	text.selectAllChildren(div);
	window.setTimeout(function () {
		document.body.removeChild(div);
	}, 100);
}

$(document).ready(function () {
	let owl = $(".advert__blocks")
	owl.owlCarousel({
		items: 1,
		autoWidth: true,
		autoplay:true,
		autoplayTimeout: 4000,
		margin: 50,
		loop: true,
	});
	$('.owl-next').click(function () {
		owl.trigger('next.owl.carousel');
	});
	$('.owl-prev').click(function () {
	owl.trigger('prev.owl.carousel');
	})
});

$(document).ready(function () {
	let rv = $(".rv_blocks")
	rv.owlCarousel({
		items: 3,
		margin: 20,
		loop: true,
		video: true,
		responsive: {
			720: {
				items: 3
			},
			600: {
				items: 4
			}
		}

	});
	$('.owl-next2').click(function () {
		rv.trigger('next.owl.carousel');
	});
	$('.owl-prev2').click(function () {
		rv.trigger('prev.owl.carousel');
	});

	

});


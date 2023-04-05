
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let body = document.querySelector('body');
let cubs = +prompt('введите колличество кубиков');
let min = +prompt('введите минуты');
let sec = 0;
let ml = 0;



for (let i = 0; i < cubs; i++) {
    let div = document.createElement('div');
    // div.style.width = 100 + 'px';
    // div.style.width = 100 + 'px';
    div.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
    div.className = 'box';
    div.innerText = i + 1;
    div.style.left = `${random(0,window.innerWidth-101)}px`;
    div.style.top = `${random(100,window.innerHeight-101)}px`;
    body.appendChild(div);

}
let boxes = document.querySelectorAll('.box');
let left = document.querySelector('h1');
let game = setInterval(() => {
    left.innerText = "Left : " + cubs;
    for (const box of boxes) {
        box.style.cursor = 'pointer';
        // box.style.setProperty ('left'`${random(0,window.innerWidth-101)}px`);
        // box.style.setProperty ('top'`${random(0,window.innerHeight-101)}px`);
        box.style.left = `${random(0,window.innerWidth-101)}px`;
        box.style.top = `${random(100,window.innerHeight-101)}px`;
    }
 

}, 1000);

if (!min) {
    alert('необходимо ввести время');
    clearInterval(id);
}
function deleteBox() {
    event.target.remove();
    cubs--;
    console.log(cubs);
}
for (const box of boxes) {
    box.addEventListener('click', deleteBox);
}

let time = document.querySelector('.time');
function checkTime() {

    ml--;
    if (ml <= 0) {
        if( cubs == 0) {
            clearInterval(id);
            alert("Вы выиграли!")
        } 
        if (sec > 0) {
            sec--;
            ml += 60;
        } else {
            if (ml == 0 && sec == 0 && min == 0) {

                clearInterval(id);
                 alert("Время вышло")
            }         
         else {
                min--;
                sec += 60;
            }

        }
    }
}
 

let id = setInterval(() => {
    checkTime();
    let minStr = (min > 9) ? min : `0${min}`;
    let secStr = (sec > 9) ? sec : `0${sec}`;
    let mlstr = (ml > 9) ? ml : `0${ml}`;
    time.innerText = minStr + ":" + secStr + ":" + mlstr;
}, 10);



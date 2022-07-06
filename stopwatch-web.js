const counterElement = document.querySelector('#counter');

let counter = 0;
let timeID;

const buttonStart = document.querySelector('#start');
const buttonPause = document.querySelector('#pause');
const buttonReset = document.querySelector('#reset')
buttonStart.onclick = function() {
    timeID = setInterval(function () {
        counter++;
        counterElement.innerText = counter;
    }, 1000)
};
    buttonPause.onclick = function() {
        clearInterval(timeID);
};
    buttonReset.onclick = function() {
        clearInterval(timeID);
        counter = 0
        counterElement.innerText = counter;    
};
// Теперь создадим переменную results которая будет сохранять результат
// и будет выводить этот результат ниже кнопок
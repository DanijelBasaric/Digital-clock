'use strict'

let hour = document.querySelector('.hours');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds')

console.log(`dobro vece`);

const displayTime = () => {

    let currTime = new Date();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    let seconds = currTime.getSeconds();

    if (hours<10) hours = '0'+hours;
    if (minutes<10) minutes = '0'+minutes;
    if (seconds<10) seconds = '0'+seconds;


    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    
    
}

displayTime();
setInterval(displayTime, 1000);
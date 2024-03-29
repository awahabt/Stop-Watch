const displayTime = document.querySelector('#display-time');
let startbtn = document.getElementById('start-btn');
let pausebtn = document.getElementById('pause-btn');
let resetbtn = document.getElementById('reset-btn');

let msec = 0;
let sec = 0;
let min = 0;


let timeID = null;

startbtn.addEventListener('click', ()=>{
    if(timeID !== null){
        clearInterval(timeID)
    }
    timeID = setInterval(starttime, 10)
});

pausebtn.addEventListener('click', ()=>{
    clearInterval(timeID);
});

resetbtn.addEventListener('click', ()=>{
    clearInterval(timeID);
    displayTime.innerHTML = `00 : 00 : 00`;
    msec = sec = min = 0;
});


function starttime(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }

let msecString = msec < 10 ? `0${msec}` : msec;
let secString = sec < 10 ? `0${sec}` : sec;
let minString = min < 10 ? `0${min}` : min;

    displayTime.innerHTML = `${minString} : ${secString} : ${msecString}`;
}
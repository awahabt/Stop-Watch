const displayTime = document.querySelector('#display-time');
let startbtn = document.getElementById('start-btn');
let pausebtn = document.getElementById('pause-btn');
let resetbtn = document.getElementById('reset-btn');

let msec = 0;
let sec = 0;
let min = 0;


let timeID = null;

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
}
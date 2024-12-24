let hrs;
let min;
let sec;
let mls;
let timer;
let temp;
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");

function initialize(){
    hrs=0;
    min=0;
    sec=0;
    mls=0;
    document.getElementById("time").textContent=`00:00:00:00`;
}

function display(){
    stop.onclick=() => clearInterval(timer);
    reset.onclick=initialize;
    mls++;
    if(mls==65){
        mls=0;
        sec++;
    }
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hrs++;
    }
    document.getElementById("time").textContent=`${hrs<10?`0${hrs}`:hrs}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}:${mls}`;
    timer=setTimeout(display,1);
}

initialize();
start.onclick=display;
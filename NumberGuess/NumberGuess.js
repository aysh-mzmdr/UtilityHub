const play=document.getElementById("play");
let game=false;
play.onclick=function() {
    const min=Number(document.getElementById("min").value);
    const max=Number(document.getElementById("max").value);
    let lives=5;
    let num;
    const goal=Math.ceil(Math.random()*(max-min))+min;
    while(game==false && lives>0){
        num=Number(window.prompt(`You have ${lives} remaining\nEnter a number between ${min} and ${max}`));
        if(num===goal){
            game=true;
            document.getElementById("correct").textContent=`Correct!! The number was ${goal}`;
        }
        else{
            lives--;
        }
    }
    if(!(lives>0)){
        document.getElementById("correct").textContent=`You Loose!! The number was ${goal}`;
    }
}
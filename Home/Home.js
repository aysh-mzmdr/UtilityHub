const TempConvertor=document.getElementById("TempConvertor");
const Stopwatch=document.getElementById("Stopwatch");
const NumberGuess=document.getElementById("NumberGuess");

const arrApp=[TempConvertor,Stopwatch,NumberGuess];

document.body.style.backgroundColor="black";
document.body.style.color="white";

arrApp.forEach(function(id){
    id.style.backgroundColor="black";
    id.style.color="white";
    id.onmouseenter=function(){id.style.backgroundColor="white";id.style.color="black";}
    id.onmouseleave=function(){id.style.backgroundColor="black";id.style.color="white";}
});


function lighttheme(){
    arrApp.forEach(function(id){
        id.style.backgroundColor="white";
        id.style.color="black";
        id.onmouseenter=function(){id.style.backgroundColor="black";id.style.color="white";}
        id.onmouseleave=function(){id.style.backgroundColor="white";id.style.color="black";}
    });
}
function darktheme(){
    arrApp.forEach(function(id){
        id.style.backgroundColor="black";
        id.style.color="white";
        id.onmouseenter=function(){id.style.backgroundColor="white";id.style.color="black";}
        id.onmouseleave=function(){id.style.backgroundColor="black";id.style.color="white";}
    });
}

const theme=document.getElementById("theme")
let themeDark=true;
theme.onclick=function(){
    if(themeDark==true){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        lighttheme();
        themeDark=false;
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        darktheme();
        themeDark=true;
    }
}


TempConvertor.onclick=function(){
    location.href="../TempConvertor/TempConvertor.html"
}

Stopwatch.onclick=function(){
    location.href="../Stopwatch/stopwatch.html"
}

NumberGuess.onclick=function(){
    location.href="../NumberGuess/NumberGuess.html"
}
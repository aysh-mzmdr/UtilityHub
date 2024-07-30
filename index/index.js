const apps=["TempConvertor","Stopwatch","NumberGuess","Pokedex"]

const arrApp=apps.map(app => document.getElementById(app));

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

theme.style.backgroundColor="black";
theme.textContent="🌙";
theme.onmouseenter=function(){theme.style.backgroundColor="white";theme.textContent="🔆";}
theme.onmouseleave=function(){theme.style.backgroundColor="black";theme.textContent="🌙";}

let themeDark=true;
theme.onclick=function(){
    if(themeDark==true){
        theme.style.backgroundColor="white";
        theme.textContent="🔆";
        theme.onmouseenter=function(){theme.style.backgroundColor="black";theme.textContent="🌙";}
        theme.onmouseleave=function(){theme.style.backgroundColor="white";theme.textContent="🔆";}
        
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        lighttheme();
        themeDark=false;
    }
    else{
        theme.style.backgroundColor="black";
        theme.textContent="🌙";
        theme.onmouseenter=function(){theme.style.backgroundColor="white";theme.textContent="🔆";}
        theme.onmouseleave=function(){theme.style.backgroundColor="black";theme.textContent="🌙";}

        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        darktheme();
        themeDark=true;
    }
}


arrApp.forEach(app => app.onclick=function(){
    app123=app.id;
    location.href=`../${app123}/${app123}.html`;
})

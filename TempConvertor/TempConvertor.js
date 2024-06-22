const button=document.getElementById("calc");
button.onclick=function(){
    let temp=Number(document.getElementById("temp").value);
    let C2F=document.getElementById("C2F");
    let F2C=document.getElementById("F2C");
    let result;
    if(C2F.checked){
        result=((9/5)*temp)+32;
        document.getElementById("ans").textContent=result+"°F";
    }
    else if(F2C.checked){
        result=(temp-32)*(5/9);
        document.getElementById("ans").textContent=result+"°C";
    }
    else{
        result=0;
        document.getElementById("ans").textContent=result;
    }

}
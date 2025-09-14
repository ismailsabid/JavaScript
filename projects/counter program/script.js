//🔥PROJECT 1:COUNTER PROGRAM:

let digit=0;
document.getElementById("digit").textContent=digit;
document.getElementById("inc_button").onclick=function(){
    digit+=1;
    document.getElementById("digit").textContent=digit;

}


document.getElementById("dec_button").onclick=function(){
    digit-=1;
    document.getElementById("digit").textContent=digit;

}
document.getElementById("reset_button").onclick=function(){
    digit=0;
    document.getElementById("digit").textContent=digit;

}
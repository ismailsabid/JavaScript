const label=document.getElementById("label");
const input=document.getElementById("input");
const button=document.getElementById("button");
const answer=document.getElementById("answer");




button.onclick=function(){
    if(input.value==""){
       alert("Enter a number");
        return;
    }
    let age=input.value;
    age=Number(age);

    if(age<=0){
        answer.textContent=`Enter a valid age`;
    }else if(age<18){
        answer.textContent=`You are not allowed to have license`
    }else if(age<90){
        answer.textContent=`You can have license`;
    }else if(age<100){
        answer.textContent=`You are too old to have license`;
    }else{
        answer.textContent=`You are still alive!`;
    }
}
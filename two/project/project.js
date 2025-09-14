// ✌️PROJECT 1:Temperature Conversion
const input=document.getElementById("input")
const toCelcius=document.getElementById("toCelcius")
const toFarenheit=document.getElementById("toFarenheit")
const result=document.getElementById("result")
let temp;

function convert(){
    if(toCelcius.checked){
        temp=Number(input.value);
        temp=(9/5 *temp)+32;
        result.textContent=temp.toFixed(2)+"°C";
    }else if(toFarenheit.checked){
        temp=Number(input.value);
        temp=5/9 * (temp-32);
        result.textContent=temp.toFixed(2)+"°F";
    }else{
        result.textContent=`Select a unit`;
    }
    event.preventDefault();
}
// ✌️PROJECT 1:Temperature Conversion


//  ✌️PROJECT 2:DICE ROLLER PROGRAM

const input_dice=document.getElementById("input_dice").value;
const values=[];
const images=[];

function magic(){
    const input_dice=document.getElementById("input_dice").value;
    for(let i=0;i<input_dice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice%20image/${value}.png" alt="${value}.png">`);
    }
    document.getElementById("resultText").textContent=`DICE = ${values.join(",")}`;
    document.getElementById("rsesultImage").innerHTML=images.join("");
}

//  ✌️PROJECT 2:DICE ROLLER PROGRAM

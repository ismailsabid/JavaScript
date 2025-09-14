const subscribe=document.getElementById("myCheckbox");
const visa=document.getElementById("visaBtn");
const mastercard=document.getElementById("masterCardBtn");
const paypal=document.getElementById("payPalBtn");
const submit=document.getElementById("mySubmit");

submit.onclick=function(){
    if(subscribe.checked){
        document.getElementById("subresult").textContent=`Congrats!You are a Subscriber now!`;
        if(visa.checked){
            document.getElementById("paymethod").textContent=`You pay by Visa card`;
        }else if(mastercard.checked){
            document.getElementById("paymethod").textContent=`You pay by Master card`;
        }
        else if(paypal.checked){
            document.getElementById("paymethod").textContent=`You pay by PayPal card`;
        }else{
            alert("please,select a payment method!")
        }

    }else{
        document.getElementById("subresult").textContent=`Alas! You are not a Subscriber yet`;
    }
}
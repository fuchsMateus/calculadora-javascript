const input = document.getElementById("calculator-screen-input");
const tempInput = document.getElementById("calculator-screen-temp");
const c = document.getElementById("c");
const sqrt = document.getElementById("sqrt");

function cState(){
    if(input.value == ""){
        c.innerText = "C";
    }
    else{
        c.innerText = "CE";
    }
}

function clickNum(clicked_id){
    const num = document.getElementById(clicked_id);
    if(input.value != "0"){
        input.value += num.innerText;
    }
}

function clickDel(){
    if(input.value != ""){
        input.value = input.value.slice(0, input.value.length-1);
    }
}

function clickC(){
   input.value = "";
   if(c.innerText == "C"){
        tempInput.value = "";
   }
}

function clickDot(){
    if(!input.value.includes(".")){
        if(input.value == ""){
            input.value += "0.";
        }
        else{
            input.value += ".";
        }
    }
 }

 function clickOPar(){
    if(input.value.charAt(input.value.length-1) != "."){

        if(input.value == "" || input.value.charAt(input.value.length-1) == "(" || input.value.charAt(input.value.length-1) == sqrt.innerHTML){
            input.value += "(";
        }
        else{
        tempInput.value += input.value + " * ";
        input.value = "(";  
        }
    }
 }

 function clickCPar(){
    if(input.value != "" && input.value.charAt(input.value.length-1) != "("){
        input.value+= ")";
    }
 }

 function clickSqrt(){
    if(input.value.charAt(input.value.length-1) != "."){
        if(input.value == "" || input.value.charAt(input.value.length-1) == sqrt.innerHTML || input.value.charAt(input.value.length-1) == "("){
            input.value += sqrt.innerHTML;
        }
        else{
        tempInput.value += input.value + " * ";
        input.value = sqrt.innerHTML;  
        }
    }
 }

 function clickPower(){
    let nSize = 0;
    for (let i = 1; i <= input.value.length; i++) {
        if(input.value.charAt(input.value.length-i) == "1" || input.value.charAt(input.value.length-i) == "2"
       || input.value.charAt(input.value.length-i) == "3" || input.value.charAt(input.value.length-i) == "4"
       || input.value.charAt(input.value.length-i) == "5" || input.value.charAt(input.value.length-i) == "6"
       || input.value.charAt(input.value.length-i) == "7" || input.value.charAt(input.value.length-i) == "8"
       || input.value.charAt(input.value.length-i) == "9" || input.value.charAt(input.value.length-i) == "0"){
           nSize++;
       }
       else{break;}
    }
    if(nSize > 0){
        let num = input.value.slice(-nSize);
        let result = Math.pow(num, 2);
        input.value = input.value.slice(0, input.value.length-nSize)+result;
    } 
 }



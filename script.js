const input = document.getElementById("calculator-screen-input");
const tempInput = document.getElementById("calculator-screen-temp");
const c = document.getElementById("c");
const sqrt = document.getElementById("sqrt");
const oPar = document.getElementById("oPar");
let nOPar = 0;
let nCPar = 0;

function cState(){
    if(input.value == ""){
        c.innerText = "C";
    }
    else{
        c.innerText = "CE";
    }

    nOPar = 0;
    nCPar = 0;
  
    for (let i = 0; i < tempInput.value.length; i++) {
        if(tempInput.value.charAt(i) == "("){
            nOPar++;
        }
        else if(tempInput.value.charAt(i) == ")"){
            nCPar++;
        }
    }

    if(nOPar > nCPar){
        let nn = nOPar - nCPar;
        oPar.innerHTML = "(<sub>"+nn+"</sub>";
    }
    else{
        oPar.innerHTML = "(";
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
        tempInput.value += "(";
    }
 }

 function clickCPar(){
    if(nCPar < nOPar){
        if(tempInput.value.charAt(tempInput.value.length-1) != "("){
            tempInput.value += ")";
        }
        else{
            if(input.value == ""){
                tempInput.value += "0)";
            }
            else{
                tempInput.value += input.value+")"
                input.value = "";
            }
        }
    }
 }

 function clickSqrt(){
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
        let result = Math.sqrt(num);
        input.value = input.value.slice(0, input.value.length-nSize)+result;
    } 

    if(input.value == "" && tempInput.value.includes(")")){
        let iCPar = tempInput.value.lastIndexOf(')')
        let nOParTemp = 0;
        let nCParTemp = 0;
        let iOPar;
        for (let i = iCPar; i >= 0; i--) {
            if(tempInput.value.charAt(i) == "("){
                nOParTemp++;
            }
            else if(tempInput.value.charAt(i) == ")"){
                nCParTemp++;
            }

            if(nCParTemp - nOParTemp == 0){
                iOPar = i;
                break;
            }
        }

        if(tempInput.value.charAt(iOPar-1) == "t"){
            tempInput.value = tempInput.value.slice(0, iOPar-4)+"sqrt("+tempInput.value.slice(iOPar-4, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "w"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"sqrt("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "c"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"sqrt("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else{
            tempInput.value = tempInput.value.slice(0, iOPar)+"sqrt"+tempInput.value.slice(iOPar);
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

    if(input.value == "" && tempInput.value.includes(")")){
        let iCPar = tempInput.value.lastIndexOf(')')
        let nOParTemp = 0;
        let nCParTemp = 0;
        let iOPar;
        for (let i = iCPar; i >= 0; i--) {
            if(tempInput.value.charAt(i) == "("){
                nOParTemp++;
            }
            else if(tempInput.value.charAt(i) == ")"){
                nCParTemp++;
            }

            if(nCParTemp - nOParTemp == 0){
                iOPar = i;
                break;
            }
        }

        if(tempInput.value.charAt(iOPar-1) == "t"){
            tempInput.value = tempInput.value.slice(0, iOPar-4)+"pow("+tempInput.value.slice(iOPar-4, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "w"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"pow("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "c"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"pow("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else{
            tempInput.value = tempInput.value.slice(0, iOPar)+"pow"+tempInput.value.slice(iOPar);
        }
    }
 }

 function clickPi(){
     input.value = 3.14159265359;
 }

 function clickFac(){
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
        let result = fac(num);
        input.value = input.value.slice(0, input.value.length-nSize)+result;
    } 

    if(input.value == "" && tempInput.value.includes(")")){
        let iCPar = tempInput.value.lastIndexOf(')')
        let nOParTemp = 0;
        let nCParTemp = 0;
        let iOPar;
        for (let i = iCPar; i >= 0; i--) {
            if(tempInput.value.charAt(i) == "("){
                nOParTemp++;
            }
            else if(tempInput.value.charAt(i) == ")"){
                nCParTemp++;
            }

            if(nCParTemp - nOParTemp == 0){
                iOPar = i;
                break;
            }
        }

        if(tempInput.value.charAt(iOPar-1) == "t"){
            tempInput.value = tempInput.value.slice(0, iOPar-4)+"fac("+tempInput.value.slice(iOPar-4, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "w"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"fac("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "c"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"fac("+tempInput.value.slice(iOPar-3, iCPar)+")"+tempInput.value.slice(iCPar);
        }

        else{
            tempInput.value = tempInput.value.slice(0, iOPar)+"fac"+tempInput.value.slice(iOPar);
        }
    }
}

let f = [];
function fac(n){
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = fac(n-1) * n;
}


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

function keyDetect(event){
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

    if(event.key == "0" || event.key == "1" || event.key == "2"
    || event.key == "3" || event.key == "4" || event.key == "5"
    || event.key == "6" || event.key == "7" || event.key == "8"
    || event.key == "9"){
        if(input.value != "0"){
            input.value += event.key;
            cState();
            if(tempInput.value.charAt(tempInput.value.length-1) == "="){
                tempInput.value = "";
                input.value = event.key;
                cState();
            }
        }
    }
    else if(event.key == "Backspace"){
        clickDel();
        cState();
    }
    else if(event.key == "="){
        clickEquals();
        cState();
    }
    else if(event.key == "/"){
        clickDivision();
        cState();
    }
    else if(event.key == "*"){
        clickTimes();
        cState();
    }
    else if(event.key == "+"){
        clickPlus();
        cState();
    }
    else if(event.key == "-"){
        clickMinus();
        cState();
    }
    else if(event.key == "."){
        clickDot();
        cState();
    }
    else if(event.key == "("){
        clickOPar();
        cState();
    }
    else if(event.key == ")"){
        clickCPar();
        cState();
    }
    else if(event.key == "%"){
        clickPercent();
        cState();
    }
    else if(event.key == "c"){
        clickC();
        cState();
    }

    console.log(event.key);

}

function clickNum(clicked_id){
    const num = document.getElementById(clicked_id);
    if(input.value != "0"){
        input.value += num.innerText;
        if(tempInput.value.charAt(tempInput.value.length-1) == "="){
            tempInput.value = "";
            input.value = num.innerText;
        }
    }
}

function clickDel(){
    if(input.value != ""){
        input.value = input.value.slice(0, input.value.length-1);
    }
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
        input.value = "";
    }
}

function clickC(){
   input.value = "";
   if(c.innerText == "C"){
        tempInput.value = "";
   }
   if(tempInput.value.charAt(tempInput.value.length-1) == "="){
    tempInput.value = "";
    input.value = "";
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
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
    }
 }

 function clickOPar(){
    if(input.value.charAt(input.value.length-1) != "." && tempInput.value.charAt(tempInput.value.length-1) != ")" 
        && tempInput.value.charAt(tempInput.value.length-1) != "="){
        tempInput.value += "(";
    }
 }

 function clickCPar(){
    if(nCPar < nOPar){
        if(tempInput.value.charAt(tempInput.value.length-1) != "(" && tempInput.value.charAt(tempInput.value.length-1) != " "){
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
       || input.value.charAt(input.value.length-i) == "9" || input.value.charAt(input.value.length-i) == "0"
       || input.value.charAt(input.value.length-i) == "."){
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
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
    }
 }

 function pow(n){
    return n*n;
 }

 function clickPower(){
    let nSize = 0;
    for (let i = 1; i <= input.value.length; i++) {
        if(input.value.charAt(input.value.length-i) == "1" || input.value.charAt(input.value.length-i) == "2"
       || input.value.charAt(input.value.length-i) == "3" || input.value.charAt(input.value.length-i) == "4"
       || input.value.charAt(input.value.length-i) == "5" || input.value.charAt(input.value.length-i) == "6"
       || input.value.charAt(input.value.length-i) == "7" || input.value.charAt(input.value.length-i) == "8"
       || input.value.charAt(input.value.length-i) == "9" || input.value.charAt(input.value.length-i) == "0"
       || input.value.charAt(input.value.length-i) == "."){
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
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
    }
 }

 function clickPi(){
     input.value = 3.14159265359;
     if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
    }
 }

 function clickFac(){
    let nSize = 0;
    for (let i = 1; i <= input.value.length; i++) {
        if(input.value.charAt(input.value.length-i) == "1" || input.value.charAt(input.value.length-i) == "2"
       || input.value.charAt(input.value.length-i) == "3" || input.value.charAt(input.value.length-i) == "4"
       || input.value.charAt(input.value.length-i) == "5" || input.value.charAt(input.value.length-i) == "6"
       || input.value.charAt(input.value.length-i) == "7" || input.value.charAt(input.value.length-i) == "8"
       || input.value.charAt(input.value.length-i) == "9" || input.value.charAt(input.value.length-i) == "0"
       || input.value.charAt(input.value.length-i) == "."){
           nSize++;
       }
       else{break;}
    }
    if(nSize > 0){
        let num = input.value.slice(-nSize);
        if(num > 170){
            input.value = "error";
            return false;
        }
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
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
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

function clickPercent(){
    let nSize = 0;
    for (let i = 1; i <= input.value.length; i++) {
        if(input.value.charAt(input.value.length-i) == "1" || input.value.charAt(input.value.length-i) == "2"
       || input.value.charAt(input.value.length-i) == "3" || input.value.charAt(input.value.length-i) == "4"
       || input.value.charAt(input.value.length-i) == "5" || input.value.charAt(input.value.length-i) == "6"
       || input.value.charAt(input.value.length-i) == "7" || input.value.charAt(input.value.length-i) == "8"
       || input.value.charAt(input.value.length-i) == "9" || input.value.charAt(input.value.length-i) == "0"
       || input.value.charAt(input.value.length-i) == "."){
           nSize++;
       }
       else{break;}
    }
    if(nSize > 0){
        let num = input.value.slice(-nSize);
        let result = num/100;
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
            tempInput.value = tempInput.value.slice(0, iOPar-4)+"("+tempInput.value.slice(iOPar-4, iCPar)+") / 100"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "w"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"("+tempInput.value.slice(iOPar-3, iCPar)+") / 100"+tempInput.value.slice(iCPar);
        }

        else if(tempInput.value.charAt(iOPar-1) == "c"){
            tempInput.value = tempInput.value.slice(0, iOPar-3)+"("+tempInput.value.slice(iOPar-3, iCPar)+") / 100"+tempInput.value.slice(iCPar);
        }

        else{
            tempInput.value = tempInput.value.slice(0, iCPar)+" / 100"+tempInput.value.slice(iCPar);
        }
    }
    if(tempInput.value.charAt(tempInput.value.length-1) == "="){
        tempInput.value = "";
    }
}

function clickDivision(){
    if(input.value != "" && tempInput.value == ""){   
        tempInput.value += input.value + " / ";
        input.value = "";    
    }
    else if(input.value == "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == ")"){
            tempInput.value += " / ";
        }
        if(tempInput.value.charAt(tempInput.value.length-2) == "*" || tempInput.value.charAt(tempInput.value.length-2) == "-"
        || tempInput.value.charAt(tempInput.value.length-2) == "+"){
            tempInput.value = tempInput.value.slice(0, tempInput.value.length-2)+ "/ ";
        }
    }
    else if(input.value != "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == "="){
            tempInput.value = input.value + " / ";
            input.value = "";
        }
        else{
            tempInput.value += input.value + " / ";
            input.value = "";
        }
    }
}

function clickTimes(){
    if(input.value != "" && tempInput.value == ""){   
        tempInput.value += input.value + " * ";
        input.value = "";    
    }
    else if(input.value == "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == ")"){
            tempInput.value += " * ";
        }
        if(tempInput.value.charAt(tempInput.value.length-2) == "/" || tempInput.value.charAt(tempInput.value.length-2) == "-"
        || tempInput.value.charAt(tempInput.value.length-2) == "+"){
            tempInput.value = tempInput.value.slice(0, tempInput.value.length-2)+ "* ";
        }
    }
    else if(input.value != "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == "="){
            tempInput.value = input.value + " * ";
            input.value = "";
        }
        else{
            tempInput.value += input.value + " * ";
            input.value = "";
        }
    }
}

function clickMinus(){
    if(input.value != "" && tempInput.value == ""){   
        tempInput.value += input.value + " - ";
        input.value = "";    
    }
    else if(input.value == "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == ")" || tempInput.value.charAt(tempInput.value.length-1) == "("){
            tempInput.value += " - ";
        }
        if(tempInput.value.charAt(tempInput.value.length-2) == "*" || tempInput.value.charAt(tempInput.value.length-2) == "/"
        || tempInput.value.charAt(tempInput.value.length-2) == "+"){
            tempInput.value = tempInput.value.slice(0, tempInput.value.length-2)+ "- ";
        }
    }
    else if(input.value != "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == "="){
            tempInput.value = input.value + " - ";
            input.value = "";
        }
        else{
            tempInput.value += input.value + " - ";
            input.value = "";
        }
    }
    else if(input.value == "" && tempInput.value == ""){
        tempInput.value+="- ";
    }
}

function clickPlus(){
    if(input.value != "" && tempInput.value == ""){   
        tempInput.value += input.value + " + ";
        input.value = "";    
    }
    else if(input.value == "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == ")"){
            tempInput.value += " + ";
        }
        if(tempInput.value.charAt(tempInput.value.length-2) == "*" || tempInput.value.charAt(tempInput.value.length-2) == "-"
        || tempInput.value.charAt(tempInput.value.length-2) == "/"){
            tempInput.value = tempInput.value.slice(0, tempInput.value.length-2)+ "+ ";
        }
    }
    else if(input.value != "" && tempInput.value != ""){
        if(tempInput.value.charAt(tempInput.value.length-1) == "="){
            tempInput.value = input.value + " + ";
            input.value = "";
        }
        else{
            tempInput.value += input.value + " + ";
            input.value = "";
        }
    }
}

function clickEquals(){
    if(input.value != ""){
        if(tempInput.value == "" || tempInput.value == "- "){
            if(tempInput.value == "- "){
                input.value = "- "+input.value; 
            }
            tempInput.value = input.value+" ="; 
        }
        else{
            if(tempInput.value.charAt(tempInput.value.length-1) != "="){
               if(input.value != ""){
                   if((tempInput.value.charAt(tempInput.value.length-1) == " " || tempInput.value.charAt(tempInput.value.length-1) == "(")){
                    tempInput.value += input.value;
                   }
                   while(nOPar>nCPar){
                       tempInput.value+=")";
                       ++nCPar;
                   }
                   input.value = eval(tempInput.value.replace("sqrt", "Math.sqrt"));
                   tempInput.value += "=";
               }
            }
        }
    }
    else if(input.value == "" && tempInput.value != "" && tempInput.value.charAt(tempInput.value.length-1) != "("){
        while(nOPar>nCPar){
            tempInput.value+=")";
            ++nCPar;
        }
        input.value = eval(tempInput.value.replace("sqrt", "Math.sqrt"));
        tempInput.value += "=";
    }     
}

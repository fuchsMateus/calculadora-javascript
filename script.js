const input = document.getElementById("calculator-screen-input");
const c = document.getElementById("c");

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
    input.value += num.innerText;
}


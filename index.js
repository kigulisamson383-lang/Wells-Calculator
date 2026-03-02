// calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function ClearDisplay(){
   display.value = ""; 
}

function Calcuate(){
    display.value = eval(display.value);
}
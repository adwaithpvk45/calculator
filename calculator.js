const display=document.getElementById("display");
const displayResult=document.getElementById("displayResult");

function appendtodisplay(input){
         display.value+=input;

}

function cleardisplay(input){
              display.value="";
              displayResult.value=""
}

function calculate(input){
    try{
        displayResult.value=eval(display.value);
    }
    catch(error){
        displayResult.value="Error"
    }
}
function clearLast(){
    display.value= display.value.slice(0,-1)
}
function percentage(){
    display.value += "/" + 100
}
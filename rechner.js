console.log("Hallo Peggy");

/*
document.getElementById("button0").addEventListener("click", addZero);
function addZero() {
    var valueFrombutton = document.getElementById("outputbox").value;
    valueFrombutton = valueFrombutton + "0";
    document.getElementById("outputbox").value = valueFrombutton;
    console.log("button0");
}
*/

function addnumberToTextbox(number) { 
// function name is free 
    var valueFrombutton = document.getElementById("outputbox").value;
// var name is free  Wert der in Outbox ausgegeben wird wenn Button gedrückt wird
    valueFrombutton = valueFrombutton + number;
// "Berechnung" das die Zahlen aneinandergereiht werden
    document.getElementById("outputbox").value = valueFrombutton;
}

function clearOutputbox() {
    var clear = document.getElementById("outputbox").value = "";
}

// greift auf Button "0" zu und gibt die function addZeroToTextbox aus 
document.getElementById("button0").addEventListener("click",addZeroToTextbox);
document.getElementById("button1").addEventListener("click",addOneToTextbox);
document.getElementById("button2").addEventListener("click",addTwoToTextbox);
document.getElementById("button3").addEventListener("click",addThreeToTextbox);
document.getElementById("button4").addEventListener("click",addFourToTextbox);
document.getElementById("button5").addEventListener("click",addFiveToTextbox);
document.getElementById("button6").addEventListener("click",addSixToTextbox);
document.getElementById("button7").addEventListener("click",addSevenToTextbox);
document.getElementById("button8").addEventListener("click",addEightToTextbox);
document.getElementById("button9").addEventListener("click",addNineToTextbox);
document.getElementById("buttonClear").addEventListener("click",clearOutputbox);

// 
function addZeroToTextbox() { addnumberToTextbox("0"); }
function addOneToTextbox() { addnumberToTextbox("1"); }
function addTwoToTextbox() { addnumberToTextbox("2"); }
function addThreeToTextbox() { addnumberToTextbox("3"); }
function addFourToTextbox() { addnumberToTextbox("4"); }
function addFiveToTextbox() { addnumberToTextbox("5"); }
function addSixToTextbox() { addnumberToTextbox("6"); }
function addSevenToTextbox() { addnumberToTextbox("7"); }
function addEightToTextbox() { addnumberToTextbox("8"); }
function addNineToTextbox() { addnumberToTextbox("9"); }

function plus(){}
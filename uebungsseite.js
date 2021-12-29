console.log("Hallo Peg")

//EINGABE / AUSGABE DATENFELDER
//Eingabe
function Eingabefelder() {
    var v_vorname = document.getElementById("Vorname").value; 
    var v_name = document.getElementById("Name").value;
    var v_strasse = document.getElementById("Strasse").value;
    var v_ort = document.getElementById("Ort").value;

    //Verarbeitung
    var v_ausgabe = v_vorname +" "+ v_name +"<br>"+ v_strasse +"<br>"+ v_ort;
        
    //Ausgabe
    document.getElementById("Output").innerHTML = v_ausgabe;
    //document.getElementById("Output").value = v_ausgabe; 

}

//Funktion Clear
function Clear() {
    document.getElementById("Output").innerHTML = "";
    document.getElementById("Vorname").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Strasse").value = "";
    document.getElementById("Ort").value = "";
}

//Button
var v_button = document.getElementById("buttonOK");
v_button.addEventListener("click",Eingabefelder);

var v_buttonClear = document.getElementById("buttonClear");
v_buttonClear.addEventListener("click",Clear);

// TASCHENRECHNER

//Eingabe - Verarbeitung Buttons Nummern
function eingabe(p_number) {
    var v_WertButton = document.getElementById("displayInput").value + p_number;
    document.getElementById("displayInput").value = v_WertButton;
    }

//Eingabe - Verarbeitung Buttons Zeichen
function f_zeichen(p_zeichen) {
    var v_ZeichenButton = document.getElementById("displayInputZeichen").value + p_zeichen;
    document.getElementById("displayInputZeichen").value = v_ZeichenButton;
    }

//Wert displayInput in displayValue1 und Wert Plus einfügen und displayInput clean
function f_takeover() {
    var v_displayInput = document.getElementById("displayInput").value;
    document.getElementById("displayInputValue1").value = v_displayInput;
    document.getElementById("displayInput").value = " ";
    }

//Wert displayInput in displayValue2 und displayInput clean
function f_equal() {    
    var v_displayInput2 = document.getElementById("displayInput").value;
    document.getElementById("displayInputValue2").value = v_displayInput2;
    document.getElementById("displayInput").value = " ";
    }

//Ausrechnen
function f_ausrechnen() {
    var v_Value1 = document.getElementById("displayInputValue1").value;
    var v_parseValue1 = parseInt (v_Value1); //wandelt string in number um
    var v_Value2 = document.getElementById("displayInputValue2").value;
    var v_parseValue2 = parseInt (v_Value2);
    var s_icon = document.getElementById("displayInputZeichen").value;
    var v_ergebnis = 0;
        
        switch (s_icon) {
        case "+" :  v_ergebnis = v_parseValue1 + v_parseValue2;
        break;
        case "-" :  v_ergebnis = v_parseValue1 - v_parseValue2;
        break;
        case "*" :  v_ergebnis = v_parseValue1 * v_parseValue2;
        break;
        case "/" :  v_ergebnis = v_parseValue1 / v_parseValue2;
        break;
       // case "x2" :  v_ergebnis = v_parseValue1 * v_parseValue1;
       // break;
    }
    document.getElementById("displayOutput").value = v_ergebnis;
    }
    
function f_clean() {
    document.getElementById("displayInputValue1").value = "";
    document.getElementById("displayInputValue2").value = "";
    document.getElementById("displayInputZeichen").value = "";
    document.getElementById("displayOutput").value = "";
    }


// diese function führt die function eingabe aus mit dem individuellen Parameter p_number:("0")
function add0toDisplay() { eingabe("0") } //"0" = Eingabewert für (p_number)
function add1toDisplay() { eingabe("1") }
function add2toDisplay() { eingabe("2") }
function add3toDisplay() { eingabe("3") }
function add4toDisplay() { eingabe("4") }
function add5toDisplay() { eingabe("5") }
function add6toDisplay() { eingabe("6") }
function add7toDisplay() { eingabe("7") }
function add8toDisplay() { eingabe("8") }
function add9toDisplay() { eingabe("9") }
function addPlustoDisplay() { f_zeichen("+") } 
function addSubtracttoDisplay() { f_zeichen("-") }
function addMultiplytoDisplay() { f_zeichen("*") }
function addDividetoDisplay() { f_zeichen("/") }
//function addQuadtoDisplay() { f_zeichen("x2") }

//Buttons - Ausgabe
var v_button1 = document.getElementById("button1");
var v_button2 = document.getElementById("button2");
var v_button3 = document.getElementById("button3");
var v_button4 = document.getElementById("button4");
var v_button5 = document.getElementById("button5");
var v_button6 = document.getElementById("button6");
var v_button7 = document.getElementById("button7");
var v_button8 = document.getElementById("button8");
var v_button9 = document.getElementById("button9");
var v_button0 = document.getElementById("button0");
var v_buttonClean = document.getElementById("buttonClean");
var v_buttonAdd = document.getElementById("buttonAdd");
var v_buttoSubtract = document.getElementById("buttoSubtract");
var v_buttonMultiply = document.getElementById("buttonMultiply");
var v_buttonDivide = document.getElementById("buttonDivide");
//var v_buttonQuad = document.getElementById("addQuadtoDisplay");
var v_buttoEqual = document.getElementById("buttoEqual");

// greift auf Button "0" zu und gibt die function add0toDisplay aus 
v_button0.addEventListener("click",add0toDisplay);
v_button1.addEventListener("click",add1toDisplay);
v_button2.addEventListener("click",add2toDisplay);
v_button3.addEventListener("click",add3toDisplay);
v_button4.addEventListener("click",add4toDisplay);
v_button5.addEventListener("click",add5toDisplay);
v_button6.addEventListener("click",add6toDisplay);
v_button7.addEventListener("click",add7toDisplay);
v_button8.addEventListener("click",add8toDisplay);
v_button9.addEventListener("click",add9toDisplay);
v_buttonClean.addEventListener("click",f_clean);
v_buttonAdd.addEventListener("click",addPlustoDisplay);
v_buttonAdd.addEventListener("click",f_takeover);
v_buttoSubtract.addEventListener("click",addSubtracttoDisplay);
v_buttoSubtract.addEventListener("click",f_takeover);
v_buttonMultiply.addEventListener("click",addMultiplytoDisplay);
v_buttonMultiply.addEventListener("click",f_takeover);
v_buttonDivide.addEventListener("click",addDividetoDisplay);
v_buttonDivide.addEventListener("click",f_takeover);
//v_buttonQuad.addEventListener("click",addQuadtoDisplay);
//v_buttonQuad.addEventListener("click",f_takeover);
v_buttoEqual.addEventListener("click",f_equal);
v_buttoEqual.addEventListener("click",f_ausrechnen);

//LEXIKON mit Json

//diese Funktion benötigt eine Information um zu arbeiten,
//in diesem Fall der Pfad aus der fetch function - empfaenger1
function empfaenger1 ( antwort ) { //(antwort) ist ein Parameter und beinhaltet den Inhalt der Rückmeldung aus fetch
    //Datenpaket auspacken
var v_json = antwort.json(); //Inhalt der eigentlichen json Datei speichern
return v_json; //Übergabe in fetch // Datenpaket zurückgeben an Aufrufer der Funktion
}
//beinhaltet var welche den kompletten Inhalt der kompletten .json Datei zieht
function empfaenger2 ( json )    { // return von empfaenger1 und wird an empfaenger2 übergeben

    //key-Titel     //value-Inhalt
var v_Rassename = json.json_Name; //lege in dieser var den Inhalt von json datei keyVorname ab
var v_FCIGruppe = json.json_FCIGruppe;
var v_Groesse = json.json_Groesse;
var v_Eigenschaften = json.json_Charakter;
var v_Verwendung = json.json_Verwendung;

document.getElementById("Rassename").value = v_Rassename;
document.getElementById("FCIGruppe").value = v_FCIGruppe;
document.getElementById("Groesse").value = v_Groesse;
document.getElementById("idVerwendung").value = v_Verwendung;
document.getElementById("idEigenschaften").innerHTML = v_Eigenschaften;
}


function mit_EingabeRasse_Daten_abrufen () {
    // Eingabe aus dem Input Feld auslesen und abspeichern (Schublade)
    var v_key = document.getElementById("eingabeRasse").value;

    // Verarbeitung
    fetch( v_key + ".json") // ggf. Pfad angeben zur .json Datei 
    .then( empfaenger1 ) // Aufruf der Methode empfaenger1 / siehe oben function empfaenger (antwort)
    .then( empfaenger2 );// Aufruf der Methode empfaenger2
}

//Aktivierung des Button
var v_ButtonFetch = document.getElementById("ButtonRasse"); //zieht die ID für den Button
v_ButtonFetch.addEventListener("click", mit_EingabeRasse_Daten_abrufen); //aktiviert den Button
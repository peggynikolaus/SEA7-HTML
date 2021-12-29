console.log("Hello PEG");

function fieldOutput() {
    //EINGABE
    //var = Variable zieht sich Inhalt aus dem Eingabefeld // Name: fieldFirstname ist frei vergeben
    var fieldFirstname = document.getElementById("inputFirstname").value;
    //var = Variable "Stuhl" für Funktion 
    //document.getEl...= Inhalt vom Eingabefeld Firstname wird gezogen
    //value = Wert der gezogen wird      
    var fieldSurname = document.getElementById("inputSurname").value; 
    
    //VERARBEITUNG
    var outPut = fieldFirstname +" "+ fieldSurname; //fügt die beiden Namensfelder zusammen
    if ( fieldFirstname == "" ) {   //Entscheidung wenn Firstname leer bleibt, dann nur Surname
        outPut = fieldSurname;    
    } else {
        outPut = fieldFirstname +" "+ fieldSurname; //Ansonsten wie ursprüngliche var outPut
    }
    
    //AUSGABE
    //links steht immer das Ziel / value zieht sich die var von der Zusammenfügung der Namen
    document.getElementById("outputName").value = outPut;
    
    //document.getElementById("outputName").value = field;
}

//Aktivierung des Button
var derButton = document.getElementById("buttonPress"); //zieht die ID für den Button
derButton.addEventListener("click",fieldOutput); //aktiviert den Button


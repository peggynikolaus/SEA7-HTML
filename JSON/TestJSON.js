console.log("Hello PEG");

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
    var v_Firstname = json.json_vorname; //lege in dieser var den Inhalt von json datei keyVorname ab
    var v_Surname = json.json_nachname;

    document.getElementById("Firstname").value = v_Firstname;
    document.getElementById("Surname").value = v_Surname;
}

function mit_key_Daten_abrufen () {
    // Eingabe aus dem Input Feld auslesen und abspeichern (Schublade)
    var key = document.getElementById("input").value;

    // Verarbeitung
    fetch( key + ".json") // ggf. Pfad angeben zur .json Datei 
    .then( empfaenger1 ) // Aufruf der Methode empfaenger1 / siehe oben function empfaenger (antwort)
    .then( empfaenger2 );// Aufruf der Methode empfaenger2
}
/*
    // Einpacken des JSON Paket
    function verschicken () {
    // URL:
    // host: Gastgeber - ein Computer im Netzwerk
    // port: zB: 8000 - Nebenstelle
    // pfad/auf/eine - Verzeichnis
    // datei - "Endpunkt"

    var url = "https:// ... "; // Sprache mit der sich die Rechner "unterhalten"

    var data = {                    //JSON kann auch direkt in Js eingefügt werden
        "inputFirstName": "Data"
        "inputSurname": "Android"
    }

    var datajson = JSON.stringify( data ); //JSON Object to stringify

    // Verschicken der Daten
    fetch( url, 
        {
            method: "POST", // wenn kein "Post" steht, wird von "get" ausgegangen
            body: "{ "Firstname": "dateiname"}" // kann auch als var eingefügt werden, var mit http vorher erstellen
        }
        
        );
}
*/

//Aktivierung des Button
var derButton = document.getElementById("buttonPress"); //zieht die ID für den Button
derButton.addEventListener("click", mit_key_Daten_abrufen); //aktiviert den Button

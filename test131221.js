console.log("Hallo iPeggy");


// Fakultaetrechner //
/*var Wert = document.getElementById("FReingabe").value;

function faculty( zahl ) {
	var n = 1; // zum hochzaehlen
	var m = 1; // Ergebnis Fakultät
	while ( n <= zahl ) {
	
	m = m * n;
	n = n + 1,
	console.log(m);
	}
	return m;
	}

var Ergebnis = faculty (Wert);	
document.getElementById("FRausgabe").value = faculty (Wert);

function ButtonFak() {
	console.log("Test Funktion");
}
document.getElementbyId("buttonFReingabe").addEventListener("click",faculty( zahl );
*/

// Quadratrechner //
var Wert = document.getElementById("InputQuadrat").value;

function sqr( Wert ) {
	var square; {
	square = Wert * Wert;
	console.log(square);
	}
	return square;
}

function ausrechnen()	{
	var input = document.getElementById("InputQuadrat").value;

	var output = sqr(Wert);
	document.getElementById("OutputQuadrat").value = output;

}

//var ErgebnisQuadrat = sqr (square);
//document.getElementById("OutputQuadrat").value = sqr (resultsqr);

document.getElementbyId("ButtonQuadrat").addEventListener("click",ausrechnen);


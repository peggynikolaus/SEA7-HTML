console.log("Hallo iPeggy")
alert("Hallo Peggy")

// Fakultaetsrechner //
var Wert = document.getElementById("Eingabe").value;

function faculty( zahl ) {
	var n = 1; // zum hochzaehlen
	var m = 1; // Ergebnis Fakultät
	while ( n <= zahl ) {
	// ...
	m = m * n;
	n = n + 1,
	console.log(m);
	}
	return m;
	}

var Ergebnis = faculty (Wert);
document.getElementById("Ausgabe").value = faculty (Wert)

document.getElementbyId("Button").addEventListener("click",faculty);

// Quadratrechner //
var Wert = document.getElementById("InputQuadrat").value;

function sqr( inputsqr ) {
	var square;
	square = inputsqr * inputsqr;
	console.log(result)
	}
	{ return result;
	}

var ErgebnisQuadrat = sqr (resultsqr);
document.getElementById("AusgabeQuadrat").value = sqr (resultsqr)

document.getElementbyId("ButtonQuadrat").addEventListener("click",sqr);


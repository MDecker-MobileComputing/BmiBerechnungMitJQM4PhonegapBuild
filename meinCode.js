/*jshint esversion: 6 */


/**
 *  Event-Handler für Button "Berechnen".
 */
function onButtonBerechnen() { "use strict";
    
    let kg = parseFloat( $("#inputGewicht").val() );
    let cm = parseFloat( $("#inputGroesse").val() );

    if (!kg) {
        popupAnzeigen("Fehler", "Kein gültiger Wert für Gewicht eingegeben.", "" );
        return;
    }
    if (!cm) {
        popupAnzeigen("Fehler", "Kein gültiger Wert für Größe eingegeben.", "" );
        return;
    }


    let meter = cm / 100.0;

    // Eigentliche BMI-Berechnung
    let bmiWert = kg / ( meter*meter );
    bmiWert = Math.round(bmiWert);
    console.log("BMI-Wert: " + bmiWert);

    let bewertung = "<KeineBewertung>";
    if (bmiWert < 20) {
        bewertung = "Untergewicht";
    } else if (bmiWert < 25) {
        bewertung = "Normalgewicht";
    } else if (bmiWert < 30) {
        bewertung = "Übergewicht";
    } else if (bmiWert < 40) {
        bewertung = "Adipositas";
    } else {
        bewertung = "Massive Adipositas";
    }
    console.log("Bewertung: " + bewertung);


    const bmiWertString   = "BMI-Wert: " + bmiWert;
    const bewertungString = "(" + bewertung  + ")";
    popupAnzeigen("Ergebnis", bmiWertString, bewertungString );
}


/**
 * Aufruf Popup zur Anzeige Ergebnis oder Fehlermeldung.
 */
function popupAnzeigen(titel, zeile1, zeile2) { "use strict";
    $("#popup_titel"  ).text( titel  );
    $("#popup_zeile_1").text( zeile1 );
    $("#popup_zeile_2").text( zeile2 );

    $("#ergebnisPopup").popup("open");
}


/**
 *  Event-Handler für Button "Zurücksetzen".
 */
function onButtonLoeschen() { "use strict";

    $("#inputGewicht").val("");
    $("#inputGroesse").val("");
}


function onErgebnisSchliessen() {  "use strict";
    $("#ergebnisPopup").popup("close");
}


/**
 * Event-Handler von jQM: Seite ist vollständig geladen.
 */
function onSeiteGeladen() { "use strict";

    $("#buttonBerechnen").click( onButtonBerechnen );
    $("#buttonLoeschen" ).click( onButtonLoeschen  );

    $("#buttonErgebnisPopupSchliessen").click( onErgebnisSchliessen );
}


$(document).on("pagecreate", onSeiteGeladen);

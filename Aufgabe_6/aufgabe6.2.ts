/* Aufgabe: Aufgabe 6.2
Name: Mario Sommer
Matrikel: 254785
Datum: 06.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/ 

namespace StudiVZ {

    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }

    var students: StudentData[] = []; //Array in welchem alle Studenten gespeichert werden, Studenteninformationen
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = w oder 1 = m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string { //savaData gibt einen String zurück

        let eingabeDaten: string[] = _input.split(",");

        let studentDaten: StudentData = {
            matrikelnummer: parseInt(eingabeDaten[0]),
            name: eingabeDaten[1],
            vorname: eingabeDaten[2],
            alter: parseInt(eingabeDaten[3]),
            geschlecht: parseInt(eingabeDaten[4]) == 1,
            kommentar: eingabeDaten[5]
        };

        //Fehlermeldungen
        if (eingabeDaten.length <= 4) {
            return "Nicht alle Daten wurden vollständig angegeben";
        }

        if (isNaN(parseInt(eingabeDaten[0])) || isNaN(parseInt(eingabeDaten[3]))) {
            return "Bitte verwenden Sie für die Matrikelnummer und das Alter eine Nummer";
        }

        if (parseInt(eingabeDaten[1]) || parseInt(eingabeDaten[2])) {
            return "Bitte verwenden Sie für den Namen und Nachnamen nur Buchstaben";
        }

        if (parseInt(eingabeDaten[4]) != 0 && parseInt(eingabeDaten[4]) != 1) {
            return "Bitte verwenden Sie für männlich die 1 und für weiblich die 0";
        }

        if (eingabeDaten.length >= 7) {
            return "Bitte tragen Sie nur die gewünschten Werte ein";
        }


        // Keine Fehlermeldung wenn Kommentar nicht abgegeben        
        // Aber in der Ausgabe soll später stehen das kein Kommentar abgegebn wurde
        if (eingabeDaten.length <= 5) {
            studentDaten.kommentar = "Es wurde kein Kommentar abgegeben";
        }

        if (eingabeDaten.length >= 4) {
            students.push(studentDaten); // Daten pushen -> neuer Student mit Matrikelnr wird angelegt
            console.log(studentDaten);
            return "Daten wurden erfolgreich eingegeben und gespeichert";
        }
    }

    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {  //Alle Studenten durchlaufen

            if (students[i].matrikelnummer == _matrikel) {     //Überprüfung ist die eingegebene Matrikelnummer vorhanden

                let _geschlecht: string;
                if (students[i].geschlecht == true) {
                    _geschlecht = "maennlich";
                }
                else {
                    _geschlecht = "weiblich";
                }

                return "Folgende Daten wurden gespeichert" +
                    "\nMatrikelnummer: " + students[i].matrikelnummer +
                    "\nVorname: " + students[i].vorname +
                    "\nName: " + students[i].name +
                    "\nAlter: " + students[i].alter +
                    "\nGeschlecht: " + _geschlecht +
                    "\nKommentar: " + students[i].kommentar;
            }
//          else {
//              return "Error: Matrikelnummer nicht vorha     
//          }
        }
        return "Error: Matrikelnummer nicht vorhanden";
    }
}
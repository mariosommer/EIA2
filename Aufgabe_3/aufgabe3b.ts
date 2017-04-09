/* Aufgabe: Aufgabe 3b
Name: Mario Sommer
Matrikel: 254785
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


document.addEventListener('DOMContentLoaded', function() {

    //Arrays erstellen
    let spielkarten = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
    var handkartenArray: any = [];
    var ablegestapelArray: any = [];

    //Divs erstellen
    let divZiehstapel = document.createElement("div");
    document.body.appendChild(divZiehstapel);
    divZiehstapel.id = "divZiehstapel";
    divZiehstapel.innerHTML = "Ziehstapel";

    let handkarten = document.createElement("div");
    document.body.appendChild(handkarten);
    handkarten.id = "handkarten";

    let divAblagestapel = document.createElement("div");
    document.body.appendChild(divAblagestapel);
    divAblagestapel.id = "divAblagestapel";
    divAblagestapel.innerHTML = "Ablagestapel";

    let i = spielkarten.length;

    //Karte ziehen
    document.getElementById("divZiehstapel").addEventListener("click", function() {

        if (spielkarten.length > 0 && handkartenArray.length < 5) {
            i--;
            var zufallszahl = Math.floor((Math.random() * i) + 0);  //Zufallszahl

            let karteZiehen = spielkarten[zufallszahl];
            spielkarten.splice(zufallszahl, 1);          // Karte aus Spielkartenstapel-Array löschen
            handkartenArray.push(karteZiehen);      // Karte dem Hand-Array hinzufügen

            console.log(handkartenArray)
            console.log(spielkarten)
            console.log(zufallszahl)
            console.log(ablegestapelArray)

            let divHandkarte = document.createElement("div"); // Handkarte 1-5 erstellen
            document.getElementById("handkarten").appendChild(divHandkarte);
            divHandkarte.style.backgroundColor = "grey"
            divHandkarte.style.width = "10em";
            divHandkarte.style.height = "16em";
            divHandkarte.style.cssFloat = "left";
            divHandkarte.style.margin = "1em";
            divHandkarte.textContent = karteZiehen;

            divHandkarte.addEventListener("click", function() {

                for (let i = 0; i < handkartenArray.length; i++) {

                    if (this.textContent == handkartenArray[i]) {
                        ablegestapelArray.push(handkartenArray[i]); // fügt die Karte dem Ablagestapel Array hinzu
                        handkartenArray.splice(i, 1);               // entfernt die geklickte Karte aus dem Handkarten Array
                        break;
                    }
                }       
         //       document.getElementById("divAblagestapel").textContent = handkartenArray[i]; 
                this.parentNode.removeChild(this); // Entfernt das Div 
            });
        }
    });
});
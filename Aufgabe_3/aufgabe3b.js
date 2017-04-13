/* Aufgabe: Aufgabe 3b
Name: Mario Sommer
Matrikel: 254785
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    //Arrays erstellen
    var spielkarten = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
    var handkartenArray = [];
    var ablegestapelArray = [];
    //Divs erstellen
    var divZiehstapel = document.createElement("div");
    document.body.appendChild(divZiehstapel);
    divZiehstapel.id = "divZiehstapel";
    divZiehstapel.innerHTML = "Ziehstapel";
    var handkarten = document.createElement("div");
    document.body.appendChild(handkarten);
    handkarten.id = "handkarten";
    var divAblagestapel = document.createElement("div");
    document.body.appendChild(divAblagestapel);
    divAblagestapel.id = "divAblagestapel";
    divAblagestapel.innerHTML = "Ablagestapel";
    var i = spielkarten.length;
    //Karte ziehen
    document.getElementById("divZiehstapel").addEventListener("click", function () {
        if (spielkarten.length > 0 && handkartenArray.length < 5) {
            i--;
            var zufallszahl = Math.floor((Math.random() * i) + 0); //Zufallszahl
            var karteZiehen = spielkarten[zufallszahl];
            spielkarten.splice(zufallszahl, 1); // Karte aus Spielkartenstapel-Array löschen
            handkartenArray.push(karteZiehen); // Karte dem Hand-Array hinzufügen
            console.log(handkartenArray);
            console.log(spielkarten);
            console.log(zufallszahl);
            console.log(ablegestapelArray);
            var divHandkarte = document.createElement("div"); // Handkarte 1-5 erstellen
            document.getElementById("handkarten").appendChild(divHandkarte);
            divHandkarte.style.backgroundColor = "grey";
            divHandkarte.style.width = "10em";
            divHandkarte.style.height = "16em";
            divHandkarte.style.cssFloat = "left";
            divHandkarte.style.margin = "1em";
            divHandkarte.textContent = karteZiehen;
            divHandkarte.addEventListener("click", function () {
                for (var i_1 = 0; i_1 < handkartenArray.length; i_1++) {
                    if (this.textContent == handkartenArray[i_1]) {
                        ablegestapelArray.push(handkartenArray[i_1]); // fügt die Karte dem Ablagestapel Array hinzu
                        handkartenArray.splice(i_1, 1); // entfernt die geklickte Karte aus dem Handkarten Array
                        break;
                    }
                }
                document.getElementById("divAblagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + ablegestapelArray.length + "\r\n" + " Karte: " + this.textContent;
                //       document.getElementById("divAblagestapel").textContent = handkartenArray[i]; 
                this.parentNode.removeChild(this); // Entfernt das Div 
            });
        }
    });
});
//# sourceMappingURL=aufgabe3b.js.map
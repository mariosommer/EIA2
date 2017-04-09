/* Aufgabe: Aufgabe 3a
Name: Mario Sommer
Matrikel: 254785
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    var zeile = 0;
    var rice = 1;
    for (var i_1 = 0; i_1 < 64; i_1++) {
        var div = document.createElement("div");
        if (i_1 % 8 == 0) {
            div.className = "floating";
            zeile++;
        }
        //ungerade Zeil  
        if (zeile % 2 == 0) {
            if (i_1 % 2 == 0) {
                div.className = "board black";
            }
            else {
                div.className = "board white";
            }
        }
        //gerade Zeil  
        if (zeile % 2 == 1) {
            if (i_1 % 2 == 0) {
                div.className = "board white";
            }
            else {
                div.className = "board black";
            }
        }
        div.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(div);
    }
    //    var divList = document.getElementsByTagName("div");
    //    var state =e; 
    //    for (let i_2: number = 0; i_2 < 8; i_2 ++) {
    //        divList[i_2].addEventListener("click"on () {
    //            .log(state);
    //        if (state) {
    //            document.getElementsByTagName("div")[i_2].style.backgroundColor = "blue";
    //       te;
    //        }
    //        else {
    //            document.getElementsByTagName("div")[i_2].style.backgroundColor = "";
    //            sta true;
    //        }
    //        });
    //    }  
    document.addEventListener("mousemove", function (event) {
        var x = event.pageX;
        var y = event.pageY;
        // document.getElementById("position").innerHTML = " X = "+ x +"][ Y = y;
        // Feld erstellen
        var position = document.createElement("p");
        document.body.appendChild(position);
        position.id = "position";
        document.getElementById("position").style.position = "absolute";
        document.getElementById("position").style.top = y + "px";
        document.getElementById("position").style.left = x + "px";
        document.getElementById("position").style.border = "solid #AFEEEE";
        document.getElementById("position").style.color = "black";
        document.getElementById("position").style.background = "#AFEEEE";
    });
    var felder = document.getElementsByTagName("div");
    var ausgewaehlteFelder = document.getElementsByClassName("ausgewaehlteFelder");
    // clickEvent für die ersten 8Felder
    for (var i = 0; i < 8; i++) {
        felder[i].addEventListener("click", function () {
            this.classList.toggle("ausgewaehlteFelder"); //ausgewaehlte Felder sollen die Klasse "" bekommen
            koerner(); //Funktion ausführen
        });
    }
    function koerner() {
        var anzahlKoerner = 0;
        //    document.getElementById("position").style.background = "#AFEEEE";
        if (ausgewaehlteFelder.length > 0) {
            document.getElementById("position").style.display = "inline-block"; // bei mindestens einem ausgewählten Feld Box einblenden
        }
        if (ausgewaehlteFelder.length <= 0) {
            document.getElementById("position").style.display = "none"; // bei 0 ausgewählten Feldern Box ausblenden
        }
        //Inhalt der ausgewaehlten Felder im Dezimal- und Hexadezimalsystem ausrechnen
        for (var i = 0; i < ausgewaehlteFelder.length; i++) {
            anzahlKoerner += Number(ausgewaehlteFelder[i].innerHTML);
            document.getElementById("position").innerHTML = "Reiskörner:" + "\r\n" + "Dezimal: " + anzahlKoerner.toString() + "\r\n" + "Hexadezimal: " + anzahlKoerner.toString(16);
        }
    }
});
//# sourceMappingURL=aufgabe3a.js.map
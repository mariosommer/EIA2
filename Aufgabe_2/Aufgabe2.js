/* Aufgabe: Aufgabe 2
Name: Mario Sommer
Matrikel: 254785
Datum: 02.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
 --> */
document.addEventListener('DOMContentLoaded', function () {
    var zeile = 0;
    var rice = 1;
    for (var i = 0; i < 64; i++) {
        var div = document.createElement("div");
        if (i % 8 == 0) {
            div.className = "floating";
            zeile++;
        }
        //ungerade Zeile
        if (zeile % 2 == 0) {
            if (i % 2 == 0) {
                div.className = "board black";
            }
            else {
                div.className = "board white";
            }
        }
        //gerade Zeile
        if (zeile % 2 == 1) {
            if (i % 2 == 0) {
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
});
//# sourceMappingURL=Aufgabe2.js.map
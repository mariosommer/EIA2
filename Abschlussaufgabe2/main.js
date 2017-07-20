/* Aufgabe: Abschlussaufgabe
Name: Mario Sommer
Matrikel: 254785
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Grafiken und Bilder von freepik.com
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var ground = [];
    var background = [];
    Abschlussaufgabe.pipes = [];
    //  export let pflanzen: PflanzeSuperklasse[] = [];
    var voegel = [];
    Abschlussaufgabe.bird = [];
    Abschlussaufgabe.z = 0;
    console.log(Abschlussaufgabe.z);
    var n = 3; //Anzahl NormaleBienen
    var imgData;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "20px";
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 480);
        // Vogel springen lassen
        canvas.addEventListener("click", erhoeheYWertVogel);
        //Rohre estellen
        for (var i = 0; i < 1; i++) {
            var r = new Abschlussaufgabe.Pipe(0, 0, 0, 0);
            Abschlussaufgabe.pipes.push(r);
        }
        //Vogel
        for (var i = 0; i < 1; i++) {
            var v = new Abschlussaufgabe.RoterVogel(20, 30, 0);
            voegel.push(v);
        }
        //Boden
        for (var i = 0; i < n; i++) {
            var s = new Abschlussaufgabe.Ground(0, 420, 0);
            ground.push(s);
        }
        //Hintergrund
        for (var i = 0; i < n; i++) {
            var t = new Abschlussaufgabe.Background(0, 420, 0);
            background.push(t);
        }
        //Vogel
        for (var i = 0; i < 1; i++) {
            var b = new Abschlussaufgabe.Bird(50, 100);
            Abschlussaufgabe.bird.push(b);
        }
        window.setTimeout(animate, 20);
    }
    function animate(_width, _height) {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //Bild
        var s = background[0];
        s.update();
        for (var i = 0; i < Abschlussaufgabe.pipes.length; i++) {
            var s_1 = Abschlussaufgabe.pipes[i];
            s_1.update();
        }
        for (var i = 0; i < ground.length; i++) {
            var s_2 = ground[i];
            s_2.update();
        }
        for (var i = 0; i < voegel.length; i++) {
            var s_3 = voegel[i];
            s_3.update();
        }
        for (var i = 0; i < Abschlussaufgabe.bird.length; i++) {
            var s_4 = Abschlussaufgabe.bird[i];
            s_4.update();
        }
        window.setTimeout(animate, 20);
    }
    //Vogel fliegt hoch wenn Leertaste gedrückt wird
    document.onkeydown = function (_event) {
        for (var i = 0; i < n; i++) {
            var r = Abschlussaufgabe.bird[i];
            var x = _event.keyCode;
            if (x == 32) {
                r.up();
            }
        }
    };
    //Vogel fliegt hoch bei MausKlick
    function erhoeheYWertVogel() {
        for (var i = 0; i < n; i++) {
            var r = Abschlussaufgabe.bird[i];
            r.up();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map
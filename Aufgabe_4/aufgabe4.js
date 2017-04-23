/* Aufgabe: Aufgabe 4
Name: Mario Sommer
Matrikel: 254785
Datum: 17.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    var crc2;
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        var gradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BDEDF");
        gradient.addColorStop(1, "#1874CD");
        //gradient.addColorStop(0, "orange");
        //gradient.addColorStop(1, "#ff3300");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, 400);
        //drawSun(500, 420, "#ff471a", "#ff3333");
        drawMountain(0, 301, "black", "grey");
        //Farbverlauf Wiese
        var gradient2 = crc2.createLinearGradient(0, 0, 800, 0);
        gradient2.addColorStop("0", "#185A18");
        gradient2.addColorStop("0.5", "#188218");
        gradient2.addColorStop("1.0", "#18C339");
        //Wiese
        crc2.fillStyle = gradient2;
        crc2.fillRect(0, 400, canvas.width, 80);
        //Sonne wird am Mittelpunkt des Kreises gesetzt
        drawSun(740, 55, "#ffcc00", "#ffff00");
        drawCloud_1(500, 140, "white");
        drawCloud_2(300, 140, "white");
        //Blumen werden am Wurzelpunkt gesetzt
        //Feste Position
        drawFlower_1(590, 440, "red", "yellow");
        drawFlower_1(540, 480, "red", "yellow");
        drawFlower_1(90, 440, "red", "yellow");
        drawFlower_2(30, 480, "white", "white");
        drawFlower_2(110, 460, "white", "white");
        drawFlower_2(700, 460, "white", "white");
        drawFlower_3(60, 475);
        drawFlower_3(780, 480);
        drawFlower_4(760, 400);
        //Random Position und Anzahl
        drawFlowerRandom();
        drawFlower_4(620, 470);
    }
    function drawFlowerRandom() {
        var numberFlowers = Math.floor((Math.random() * 10) + 8); //Zufallszahl zwischen 8 - 18
        console.log(numberFlowers);
        var x;
        var y;
        var p;
        for (var i = 0; i < numberFlowers; i++) {
            x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese
            p = Math.floor((Math.random() * 3) + 0);
            switch (p) {
                case 0:
                    drawFlower_1(x, y, "red", "yellow");
                    break;
                case 1:
                    drawFlower_2(x, y, "white", "white");
                    break;
                case 2:
                    drawFlower_3(x, y);
                    break;
                default:
                    break;
            }
        }
    }
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 2;
        //Farbverlauf Mountain
        var gradient = crc2.createLinearGradient(0, 0, 0, 440);
        gradient.addColorStop("0.5", "white");
        gradient.addColorStop("0.5", "#6E6E6E");
        gradient.addColorStop("1.0", "#3C3C3C");
        //Mountain
        crc2.fillStyle = gradient;
        crc2.moveTo(_x + 0, _y + 0);
        crc2.lineTo(_x + 20, _y - 20);
        crc2.lineTo(_x + 40, _y - 20);
        crc2.lineTo(_x + 60, _y - 40);
        crc2.lineTo(_x + 80, _y - 20);
        crc2.lineTo(_x + 120, _y - 60);
        crc2.lineTo(_x + 140, _y - 60);
        crc2.lineTo(_x + 160, _y - 100);
        crc2.lineTo(_x + 180, _y - 120);
        crc2.lineTo(_x + 220, _y - 80);
        crc2.lineTo(_x + 240, _y - 40);
        crc2.lineTo(_x + 260, _y - 60);
        crc2.lineTo(_x + 300, _y - 60);
        crc2.lineTo(_x + 360, _y + 0);
        crc2.lineTo(_x + 400, _y + 20);
        crc2.lineTo(_x + 440, _y + 100);
        crc2.lineTo(_x + 0, _y + 100);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Linien im Berg  
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 80, _y - 20);
        crc2.lineTo(_x + 100, _y + 20);
        crc2.lineTo(_x + 140, _y + 40);
        crc2.moveTo(_x + 240, _y - 40);
        crc2.lineTo(_x + 220, _y - 20);
        crc2.stroke();
        //Grüne Wiese über den Berg 
        //crc2.beginPath();
        //crc2.fillStyle = "green";
        //crc2.fillRect(0, 398, 800, 3);   
    }
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x + 0, _y + 0, 45, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    function drawCloud_1(_x, _y, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x - 7, _y - 46, 27, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.arc(_x + 49, _y - 56, 22, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 40, _y - 38, 32, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 16, _y - 60, 26, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 4, _y - 30, 24, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawCloud_2(_x, _y, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.beginPath();
        crc2.arc(_x - 3, _y - 46, 18, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.arc(_x + 29, _y - 50, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 22, _y - 39, 14, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 16, _y - 54, 17, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 4, _y - 33, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //BLUME 1 
    function drawFlower_1(_x, _y, _strokeColor, _fillColor) {
        //Grashalm + Blätter
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 40, 2.5, 40);
        crc2.ellipse(_x - 6.5, _y - 25, 2.5, 9.5, -45 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 11, _y - 18, 3, 11.5, 45 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x - 7, _y - 49, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.arc(_x + 9, _y - 49, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 54, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 7, _y - 39, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 39, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x + 1, _y - 45, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower_2(_x, _y, _strokeColor, _fillColor) {
        //Grashalm + Blätter
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 25, 2, 25);
        crc2.ellipse(_x - 3.5, _y - 13, 1.6, 6, -35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 5, _y - 9, 1.8, 6.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        for (var i = 0; i < 8; i++) {
            crc2.ellipse(_x + 1.2, _y - 30, 2, 10, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.arc(_x + 1.2, _y - 30, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawFlower_3(_x, _y) {
        //Grashalm + Blätter
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 25, 2.4, 25);
        crc2.ellipse(_x - 3.5, _y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 5, _y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#C61884";
        for (var i = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DF5AC3";
        for (var i = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFC6C3";
        crc2.arc(_x + 1.2, _y - 42, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawFlower_4(_x, _y) {
        //Grashalm + Blätter
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 25, 2.4, 25);
        crc2.ellipse(_x - 3.5, _y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 5, _y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#DF1818";
        for (var i = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 6, 22, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFC318";
        for (var i = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 18, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DF5A18";
        for (var i = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 14, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFDF7B";
        crc2.arc(_x + 1.2, _y - 42, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=aufgabe4.js.map
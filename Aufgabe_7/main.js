/* Aufgabe: Aufgabe 7
Name: Mario Sommer
Matrikel: 254785
Datum: 11.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    var bienen = [];
    var pflanzen = [];
    var n = 10; //Anzahl Bienen
    var numberFlowers = Math.floor((Math.random() * 10) + 8); //Zufallszahl zwischen 8 - 18 //Nur im Hintergrund
    var p = 6; //Anzahl feste Blumen
    var imgData;
    function init(_event) {
        //Hintergrund
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginLeft = "20px";
        L7_Classes.crc2 = canvas.getContext("2d");
        var gradient = L7_Classes.crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BDEDF");
        gradient.addColorStop(1, "#1874CD");
        L7_Classes.crc2.fillStyle = gradient;
        L7_Classes.crc2.fillRect(0, 0, canvas.width, 400);
        drawMountain(0, 301, "black", "grey");
        //Farbverlauf Wiese
        var gradient2 = L7_Classes.crc2.createLinearGradient(0, 0, 800, 0);
        gradient2.addColorStop(0, "#185A18");
        gradient2.addColorStop(0.5, "#188218");
        gradient2.addColorStop(1.0, "#18C339");
        //Wiese
        L7_Classes.crc2.fillStyle = gradient2;
        L7_Classes.crc2.fillRect(0, 400, canvas.width, 80);
        //Sonne wird am Mittelpunkt des Kreises gesetzt
        drawSun(740, 55, "#ffcc00", "#ffff00");
        drawCloud_1(500, 140, "white");
        drawCloud_2(300, 140, "white");
        drawTree(700, 210);
        drawBienenkorb(700, 295);
        // Feste Blumen im Hintergrund ohne Array
        for (var i = 0; i < numberFlowers; i++) {
            var t = new L7_Classes.Pflanze(0, 0);
            t.randomPosition();
        }
        console.log(pflanzen);
        imgData = L7_Classes.crc2.getImageData(0, 0, 800, 480);
        //Blumen erstellen + (Array)
        for (var i = 0; i < p; i++) {
            var x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            var y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese
            var f = new L7_Classes.Pflanze(x, y);
            pflanzen[i] = f;
        }
        //Bienen erstellen + (Array)
        for (var i = 0; i < n; i++) {
            var s = new L7_Classes.Biene(720, 280);
            bienen[i] = s;
        }
        window.setTimeout(animate, 20);
        //Click Event Biene hinzufügen
        canvas.addEventListener("click", addBiene);
    }
    function animate(_width, _height) {
        L7_Classes.crc2.putImageData(imgData, 0, 0); //Bild
        for (var i = 0; i < pflanzen.length; i++) {
            pflanzen[i].drawFlower_4();
        }
        for (var i = 0; i < bienen.length; i++) {
            var s = bienen[i];
            s.update();
        }
        //   console.log(bienen);
        window.setTimeout(animate, 20);
    }
    //    //Canvasbild speichern
    //    function copyPicture(): void {
    //        imgData = crc2.getImageData(0, 0, 800, 480);
    //        crc2.putImageData(imgData, 0, 0);
    //    }
    //Neue Biene bei Klick hinzufügen
    function addBiene(_event) {
        var s = new L7_Classes.Biene(720, 280);
        bienen.push(s);
    }
    function drawBienenkorb(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#e6b800";
        L7_Classes.crc2.strokeStyle = "#996633";
        L7_Classes.crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 10, _y - 17, 50, 10);
        L7_Classes.crc2.lineWidth = 4;
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 5, _y - 6, 60, 12);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 10, _y + 8, 50, 10);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 15, _y + 20, 40, 8);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 15, _y - 27, 40, 8);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 22.5, _y + 30, 25, 6);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
        L7_Classes.crc2.rect(_x + 22.5, _y - 35, 25, 6);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#000000";
        L7_Classes.crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
        L7_Classes.crc2.fill();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#663300";
        L7_Classes.crc2.rect(_x, _y - 49, 85, 12);
        L7_Classes.crc2.fill();
    }
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.lineWidth = 2;
        //Farbverlauf Mountain
        var gradient = L7_Classes.crc2.createLinearGradient(0, 0, 0, 440);
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.5, "#6E6E6E");
        gradient.addColorStop(1.0, "#3C3C3C");
        //Mountain
        L7_Classes.crc2.fillStyle = gradient;
        L7_Classes.crc2.moveTo(_x + 0, _y + 0);
        L7_Classes.crc2.lineTo(_x + 20, _y - 20);
        L7_Classes.crc2.lineTo(_x + 40, _y - 20);
        L7_Classes.crc2.lineTo(_x + 60, _y - 40);
        L7_Classes.crc2.lineTo(_x + 80, _y - 20);
        L7_Classes.crc2.lineTo(_x + 120, _y - 60);
        L7_Classes.crc2.lineTo(_x + 140, _y - 60);
        L7_Classes.crc2.lineTo(_x + 160, _y - 100);
        L7_Classes.crc2.lineTo(_x + 180, _y - 120);
        L7_Classes.crc2.lineTo(_x + 220, _y - 80);
        L7_Classes.crc2.lineTo(_x + 240, _y - 40);
        L7_Classes.crc2.lineTo(_x + 260, _y - 60);
        L7_Classes.crc2.lineTo(_x + 300, _y - 60);
        L7_Classes.crc2.lineTo(_x + 360, _y + 0);
        L7_Classes.crc2.lineTo(_x + 400, _y + 20);
        L7_Classes.crc2.lineTo(_x + 440, _y + 100);
        L7_Classes.crc2.lineTo(_x + 0, _y + 100);
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.closePath();
        //Linien im Berg  
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.moveTo(_x + 80, _y - 20);
        L7_Classes.crc2.lineTo(_x + 100, _y + 20);
        L7_Classes.crc2.lineTo(_x + 140, _y + 40);
        L7_Classes.crc2.moveTo(_x + 240, _y - 40);
        L7_Classes.crc2.lineTo(_x + 220, _y - 20);
        L7_Classes.crc2.stroke();
        //Grüne Wiese über den Berg 
        //crc2.beginPath();
        //crc2.fillStyle = "green";
        //crc2.fillRect(0, 398, 800, 3);   
    }
    function drawSun(_x, _y, _strokeColor, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _strokeColor;
        L7_Classes.crc2.arc(_x + 0, _y + 0, 45, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.closePath();
    }
    function drawCloud_1(_x, _y, _fillColor) {
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x - 7, _y - 46, 27, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.arc(_x + 49, _y - 56, 22, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 40, _y - 38, 32, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 16, _y - 60, 26, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 4, _y - 30, 24, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
    function drawCloud_2(_x, _y, _fillColor) {
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(_x - 3, _y - 46, 18, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.arc(_x + 29, _y - 50, 15, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 22, _y - 39, 14, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 16, _y - 54, 17, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.arc(_x + 4, _y - 33, 10, 0, 2 * Math.PI);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
    function drawTree(_x, _y) {
        //Stamm
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#663300";
        L7_Classes.crc2.fillRect(_x + 80, _y + 10, 35, 180);
        //Krone
        L7_Classes.crc2.beginPath();
        var gradient2 = L7_Classes.crc2.createLinearGradient(720, 0, 840, 0);
        gradient2.addColorStop(0.2, "#185A18");
        gradient2.addColorStop(0.5, "#188218");
        gradient2.addColorStop(1.0, "#18C339");
        L7_Classes.crc2.fillStyle = gradient2;
        L7_Classes.crc2.strokeStyle = "#196619";
        L7_Classes.crc2.arc(_x + 110, _y - 70, 35, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 140, _y - 40, 35, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 110, _y - 10, 35, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 65, _y - 20, 35, 0, 2 * Math.PI);
        L7_Classes.crc2.arc(_x + 65, _y - 60, 35, 0, 2 * Math.PI);
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=main.js.map
/* Aufgabe: Aufgabe 6.1
Name: Mario Sommer
Matrikel: 254785
Datum: 04.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/ 


namespace L4_Canvas {
    
     interface Biene {
        x: number;
        y: number;
        size: number;
        xspeed: number;
        yspeed: number;
    }
    
    window.addEventListener("load", init);
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D;
   
    let bienen: Biene[] = [];
    let n: number = 10;
    
    let xmin: number = -2.5;
    let xmax: number = 1.5;
    
    let ymin: number = -0.5;
    let ymax: number = 0.5;
    
    let radius: number = 10;  
    let imgData: ImageData = crc2.getImageData(0, 0, 800, 480);
    
    

    function init(_event: Event): void {
        
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginLeft = "20px";
        crc2 = canvas.getContext("2d");
        
        for (let i: number = 0; i < n; i++) {
           let s: Biene = { x: 0, y: 0, size: 0, xspeed: 0, yspeed: 0}; // default-values
           s.x = 720; //Startposition
           s.y = 280;
           s.size = Math.random() * 20 + 10; //Größe      
           s.xspeed = Math.random() * (xmax - xmin) + xmin; //Speed in x-Richtung 
           s.yspeed = Math.random() * (ymax - ymin) + ymin; //Speed in y-Richtung 
           bienen[i] = s;
        }
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
        gradient.addColorStop(0, "#7BDEDF");
        gradient.addColorStop(1, "#1874CD");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, 400);

        drawMountain(0, 301, "black", "grey");

        //Farbverlauf Wiese
        var gradient2: CanvasGradient = crc2.createLinearGradient(0, 0, 800, 0);
        gradient2.addColorStop(0, "#185A18");
        gradient2.addColorStop(0.5, "#188218");
        gradient2.addColorStop(1.0, "#18C339");
        //Wiese
        crc2.fillStyle = gradient2;
        crc2.fillRect(0, 400, canvas.width, 80);

        //Sonne wird am Mittelpunkt des Kreises gesetzt
        drawSun(740, 55, "#ffcc00", "#ffff00");
        drawCloud_1(500, 140, "white");
        drawCloud_2(300, 140, "white");

        drawTree(700, 210);
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
        drawFlower_4(770, 400);
        //Random Position und Anzahl
        drawFlowerRandom();
        drawFlower_4(620, 470);
        drawBienenkorb(700, 295);
        
        //Funktion Canvas Bild abspeichern
        copyPicture();
        window.setTimeout(animate, 20, canvas.width, canvas.height);

        //Click Event Biene hinzufügen
        canvas.addEventListener("click", addBiene);
    }

    function animate(_width: number, _height: number): void {
        crc2.putImageData(imgData, 0, 0);
        
        for (let i: number = 0; i < bienen.length; i++) {
            let s: Biene = bienen[i];
            s.x += Math.random() * 2 - 2 - s.xspeed;
            s.y += Math.random() * 2 - 1 - s.yspeed;
            
            //Biene kommt wieder auf der gegenüberliegenden Seite rein aus der sie rausfliegt        
            //rechts raus, links rein
            if (s.x >= crc2.canvas.width + 10) {
                s.x = -3;
            }
            //links raus, rechts rein
            if (s.x <= -18) {
                s.x = crc2.canvas.width;
            }
            //oben raus, unten rein   
            if (s.y <= -18) {
                s.y = 479;
            }
            //unten raus, oben rein   
            if (s.y >= crc2.canvas.height) {
                s.y = 0;
            }           
            drawBiene(s);
        }
        window.setTimeout(animate, 20, _width, _height);
    }
 
    //Canvasbild speichern
    function copyPicture(): void {
        imgData = crc2.getImageData(0, 0, 800, 480);
        crc2.putImageData(imgData, 0, 0);
    }

    //Neue Biene bei Klick hinzufügen
    function addBiene(_event: Event): void {
            let s: Biene = { x: 0, y: 0, size: 0, xspeed: 0, yspeed: 0}; // default-values
            s.x = 720; //Startposition
            s.y = 280;
            s.size = Math.random() * 20 + 10; //Größe
            s.xspeed = Math.random() * (xmax - xmin) + xmin; //Speed in x-Richtung
            s.yspeed = Math.random() * (ymax - ymin) + ymin; //Speed in y-Richtung 
            bienen.push(s);
    }
    
    function drawBiene(_s: Biene): void {
        
       var img: HTMLImageElement = <HTMLImageElement> document.getElementById("biene");
       crc2.drawImage(img, _s.x, _s.y, _s.size, _s.size);
    }

    function drawFlowerRandom(): void {

        let numberFlowers: number = Math.floor((Math.random() * 10) + 8); //Zufallszahl zwischen 8 - 18
        console.log(numberFlowers);
        let x: number;
        let y: number;
        let p: number;

        for (var i: number = 0; i < numberFlowers; i++) {

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

    function drawBienenkorb(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#e6b800";
        crc2.strokeStyle = "#996633";

        crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
        crc2.rect(_x + 10, _y - 17, 50, 10);
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
        crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
        crc2.rect(_x + 5, _y - 6, 60, 12);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
        crc2.rect(_x + 10, _y + 8, 50, 10);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
        crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
        crc2.rect(_x + 15, _y + 20, 40, 8);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
        crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
        crc2.rect(_x + 15, _y - 27, 40, 8);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
        crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
        crc2.rect(_x + 22.5, _y + 30, 25, 6);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
        crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
        crc2.rect(_x + 22.5, _y - 35, 25, 6);
        crc2.stroke();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#663300";
        crc2.rect(_x, _y - 49, 85, 12);
        crc2.fill();
    }

    function drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 2;

        //Farbverlauf Mountain
        var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 440);
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.5, "#6E6E6E");
        gradient.addColorStop(1.0, "#3C3C3C");
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

    function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.arc(_x + 0, _y + 0, 45, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }

    function drawCloud_1(_x: number, _y: number, _fillColor: string): void {
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

    function drawCloud_2(_x: number, _y: number, _fillColor: string): void {
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
    function drawFlower_1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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

    function drawFlower_2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
        for (let i: number = 0; i < 8; i++) {
            crc2.ellipse(_x + 1.2, _y - 30, 2, 10, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.arc(_x + 1.2, _y - 30, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawFlower_3(_x: number, _y: number): void {
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
        for (let i: number = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DF5AC3";
        for (let i: number = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFC6C3";
        crc2.arc(_x + 1.2, _y - 42, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawFlower_4(_x: number, _y: number): void {
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
        for (let i: number = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 6, 22, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFC318";
        for (let i: number = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 18, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DF5A18";
        for (let i: number = 0; i < 3; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 14, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFDF7B";
        crc2.arc(_x + 1.2, _y - 42, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawTree(_x: number, _y: number): void {
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "#663300";
        crc2.fillRect(_x + 80, _y + 10, 35, 180);
        //Krone
        crc2.beginPath();
        var gradient2: CanvasGradient = crc2.createLinearGradient(720, 0, 840, 0);
        gradient2.addColorStop(0.2, "#185A18");
        gradient2.addColorStop(0.5, "#188218");
        gradient2.addColorStop(1.0, "#18C339");
        crc2.fillStyle = gradient2;
        
        crc2.strokeStyle = "#196619";
        crc2.arc(_x + 110, _y - 70, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 140, _y - 40, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 110, _y - 10, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 65, _y - 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 65, _y - 60, 35, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.fill();
    }
} 
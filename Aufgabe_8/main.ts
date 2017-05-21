/* Aufgabe: Aufgabe 7
Name: Mario Sommer
Matrikel: 254785
Datum: 11.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


namespace L8_Classes {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D; //export - Klasse muss wissen worauf sie sich zeichnen soll

    let bienen: BieneSuperklasse[] = [];
    export let pflanzen: PflanzeSuperklasse[] = [];
    let n: number = 3; //Anzahl Bienen
    let numberFlowers: number = Math.floor((Math.random() * 10) + 4); //Zufallszahl zwischen 4 - 14 //Nur im Hintergrund
    let p: number = 6; //Anzahl feste Blumen
    let imgData: ImageData;



    function init(_event: Event): void {

        //Hintergrund
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        canvas.style.marginLeft = "20px";
        crc2 = canvas.getContext("2d");

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
        drawBienenkorb(700, 295);




        //          //Erstellen der speziellen Blumen und speichern in einem Array
        //        for (let i: number = 0; i < 5; i++) {
        //           let s: PflanzeSuperklasse = new RoteBlume(50, 50);
        //
        //           pflanzen.push(s);
        //        }
        //           console.log(PflanzeSuperklasse);

        
//        // Feste Blumen im Hintergrund ohne Array
//        for (let i: number = 0; i < numberFlowers; i++) {
//            let t: PflanzeSuperklasse = new RoteBlume(0, 0);      
//        }

         // Feste Blumen im Hintergrund ohne Array// Keine Nektarblumen
        for (let i: number = 0; i < numberFlowers; i++) {

            switch (Math.floor((Math.random() * 4) + 0)) {
                case 0:
                    new LilaBlume(0, 0);
                    break;
                case 1:
                    new RoteBlume(0, 0);
                    break;
                case 2:
                    new WeißeBlume(0, 0);
                    break;
                case 3:
                    new WeißeBlume(0, 0);
                    break;
                default:
                    break;
            }
        }




        imgData = crc2.getImageData(0, 0, 800, 480);


        //Blumen erstellen + (Array) -> Nektarblumen
        for (let i: number = 0; i < 6; i++) {
            let f: PflanzeSuperklasse = new OrangeneBlume(0, 0);
            pflanzen.push(f);
        }       
        console.log(pflanzen);

        
        
//        //Bienen erstellen + (Array) -> HonigBienen
//        for (let i: number = 0; i < n; i++) {
//            let s: BieneSuperklasse = new HonigBiene(720, 280);
//            bienen[i] = s;
//        }
        
        //Bienen erstellen + (Array) -> NormaleBienen
        for (let i: number = 0; i < n; i++) {
            let s: BieneSuperklasse = new NormaleBiene(720, 280);
            let n: BieneSuperklasse = new HonigBiene(720, 280);
         //   bienen[i] = n;
         //   bienen[i] = s;
            bienen.push(s);
            bienen.push(n);     
        }
        
        console.log(bienen);

        window.setTimeout(animate, 20);

        //Click Event Biene hinzufügen
        canvas.addEventListener("click", addBiene);
    }

    function animate(_width: number, _height: number): void {

        crc2.putImageData(imgData, 0, 0); //Bild

        for (let i: number = 0; i < pflanzen.length; i++) {
            //            pflanzen[i].drawFlower_Orange();
            let s: PflanzeSuperklasse = pflanzen[i];
            s.draw();

        }

        for (let i: number = 0; i < bienen.length; i++) {
            let s: BieneSuperklasse = bienen[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }


    //Neue Biene bei Klick hinzufügen
    function addBiene(_event: Event): void {
        let s: BieneSuperklasse = new HonigBiene(720, 280);
        bienen.push(s);
        
        let n: BieneSuperklasse = new NormaleBiene(720, 280);
        bienen.push(n);
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
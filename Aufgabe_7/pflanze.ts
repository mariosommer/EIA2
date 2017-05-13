namespace L7_Classes {

    export class Pflanze {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Zufallsposition für die Blumen erstellen und 
        randomPosition(): void {

            let l: number = Math.floor((Math.random() * 4) + 0);
            this.x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            this.y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese

            switch (l) {

                case 0:
                    this.drawFlower_1();
                    break;
                case 1:
                    this.drawFlower_3();
                    break;
                case 2:
                    this.drawFlower_2();
                    break;
                case 3:
                    this.drawFlower_2();
                    break;
                default:
                    break;
            }
        }

        //BLUME 1 
        drawFlower_1(): void {

            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            //Grashalm + Blätter
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(this.x, this.y - 40, 2.5, 40);
            crc2.ellipse(this.x - 6.5, this.y - 25, 2.5, 9.5, -45 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 11, this.y - 18, 3, 11.5, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x - 7, this.y - 49, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.arc(this.x + 9, this.y - 49, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 1, this.y - 54, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 7, this.y - 39, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 39, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "yellow";
            crc2.arc(this.x + 1, this.y - 45, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawFlower_2(): void {
            //Grashalm + Blätter
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(this.x, this.y - 25, 2, 25);
            crc2.ellipse(this.x - 3.5, this.y - 13, 1.6, 6, -35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 5, this.y - 9, 1.8, 6.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "white";
            for (let i: number = 0; i < 8; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 30, 2, 10, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.arc(this.x + 1.2, this.y - 30, 3.8, 0, 2 * Math.PI);
            crc2.fill();
        }

        drawFlower_3(): void {
            //Grashalm + Blätter
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(this.x, this.y - 25, 2.4, 25);
            crc2.ellipse(this.x - 3.5, this.y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 5, this.y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#C61884";
            for (let i: number = 0; i < 5; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DF5AC3";
            for (let i: number = 0; i < 5; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DFC6C3";
            crc2.arc(this.x + 1.2, this.y - 42, 3.8, 0, 2 * Math.PI);
            crc2.fill();
        }

        drawFlower_4(): void {
            //Grashalm + Blätter
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(this.x, this.y - 25, 2.4, 25);
            crc2.ellipse(this.x - 3.5, this.y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(this.x + 5, this.y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#DF1818";
            for (let i: number = 0; i < 3; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 42, 6, 22, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DFC318";
            for (let i: number = 0; i < 3; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 42, 5, 18, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DF5A18";
            for (let i: number = 0; i < 3; i++) {
                crc2.ellipse(this.x + 1.2, this.y - 42, 5, 14, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DFDF7B";
            crc2.arc(this.x + 1.2, this.y - 42, 3.8, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
}
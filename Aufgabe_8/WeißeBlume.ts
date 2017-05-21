namespace L8_Classes {
    export class WeißeBlume extends PflanzeSuperklasse {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
        }

        draw(): void {

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
    }
}
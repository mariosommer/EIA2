namespace L8_Classes {
    export class OrangeneBlume extends PflanzeSuperklasse {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
        }



        draw(): void {
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

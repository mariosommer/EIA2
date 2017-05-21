namespace L8_Classes {
    export class RoteBlume extends PflanzeSuperklasse {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.draw();
        }

        draw(): void {

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
    }
}

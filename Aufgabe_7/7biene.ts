namespace L7_Classes {

    export class Biene {
        x: number;
        y: number;
        size: number;
        xspeed: number;
        yspeed: number;

        xmin: number = -2.5;
        xmax: number = 1.5;
        ymin: number = -0.5;
        ymax: number = 0.5;

        constructor(_x: number, _y: number) {
            this.setRandomSpeed();
            this.setRandomSize();
            this.x = _x;
            this.y = _y;
            this.draw();
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("biene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }

        move(): void {
            //     this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            //     this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed i 
            
            this.x += Math.random() * 2 - 2 - this.xspeed;
            this.y += Math.random() * 2 - 1 - this.yspeed;

            if (this.x >= crc2.canvas.width + 10) {
                this.x = -3;
            }
            //links raus, rechts rein
            if (this.x <= -18) {
                this.x = crc2.canvas.width;
            }
            //oben raus, unten rein   
            if (this.y <= -18) {
                this.y = 479;
            }
            //unten raus, oben rein               
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }
        }

        setRandomSize(): void {
            this.size = Math.random() * 20 + 10; //Größe
        }

        setRandomSpeed(): void {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
    }
}
namespace Abschlussaufgabe {

    export class Bird {
        x: number;
        y: number;
        gravity: number = 1;
        velocity: number = 0;
        lift: number = -36;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("roterVogel");
            crc2.drawImage(img, this.x, this.y, 60, 60);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
        }

        up(): void {
            this.velocity += this.lift;
        }
    }
}
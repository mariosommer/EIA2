namespace L8_Classes {
    export class NormaleBiene extends BieneSuperklasse {

        constructor(_x: number, _y: number) {
            super(_x, _y);
//            this.draw();
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("NormaleBiene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }
    }
}
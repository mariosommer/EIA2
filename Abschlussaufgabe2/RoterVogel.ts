namespace Abschlussaufgabe {
    export class RoterVogel extends VogelSuperklasse {
        
        
        gravity: number = 10;

        constructor(_x: number, _y: number, _z: number) {
            super(_x, _y, _z);
            //            this.draw();
            
        //    this.vogelJump();
        }




        draw(): void {
////            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("roterVogel");
////            // crc2.drawImage(img, this.x, this.y, this.size, this.size);
////            crc2.drawImage(img, this.x, this.y, 100, 100);

            //            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("boden2");
            //            crc2.drawImage(img, this.x+800, this.y, 800, 60);
        }

   

////        vogelJump(): void {
////
////          //  this.z = 300;
////
////            this.gravity += this.gravity + this.z;
////            
////            console.log(this.gravity);
////
////            console.log(this.z);
////        }
    }
}
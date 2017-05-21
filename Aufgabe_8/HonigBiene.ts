namespace L8_Classes {
    export class HonigBiene extends BieneSuperklasse {
        xTarget: number;
        yTarget: number;
        speed: number;
     


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
         //   this.setTargetPosition();
           
          //  this.setTargetBienenstock();
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("HonigBiene");
            crc2.drawImage(img, this.x, this.y, this.size, this.size);
        }

//
//        setTargetPosition(): void {
//            //            this.xTarget = Math.random() * crc2.canvas.width;
//            //            this.yTarget = Math.random() * crc2.canvas.height;
//            let x: number = Math.round(Math.random() * (pflanzen.length - 1));
//
//            this.xTarget = pflanzen[x].x - 6;
//            this.yTarget = pflanzen[x].y - 45;
//        }

                setTargetBienenstock(): void {
                    this.xTarget = 720;
                    this.yTarget = 280;
                
                    
               }
    

    }
}     
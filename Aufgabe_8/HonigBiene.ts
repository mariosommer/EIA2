namespace L8_Classes {
    export class HonigBiene extends BieneSuperklasse {
        xTarget: number;
        yTarget: number;
        speed: number;
        nectar: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.02;
            this.setTargetPosition();
            this.nectar = 0;
            this.getNectar();
            //  this.setTargetBienenstock();
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("HonigBiene");
            // crc2.drawImage(img, this.x, this.y, this.size, this.size); Unterschiedliche Bienengröße
            crc2.drawImage(img, this.x, this.y, 25, 25);

            crc2.beginPath();
            crc2.arc(this.x + 8, this.y + 25, this.size, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();
        }

        setTargetPosition(): void {

            let x: number = Math.round(Math.random() * (pflanzen.length - 1));

            this.xTarget = pflanzen[x].x - 10;
            this.yTarget = pflanzen[x].y - 55;
        }

        setTargetBienenstock(): void {
            this.xTarget = 720;
            this.yTarget = 280;


        }

        getNectar(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (this.nectar > 0 && this.x > 718 && this.y < 290) {
                this.nectar = this.nectar - 1;
            }

            if (this.nectar < 10 && Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.nectar = this.nectar + 1;
            }

            this.size = this.nectar * 2;
        }

        move(): void {

            this.getNectar();
            let state: boolean = true;

            if (state == true) {
                let xDiff: number = this.xTarget - this.x;
                let yDiff: number = this.yTarget - this.y;

                // console.log(state);
                console.log(this.nectar);
                // console.log(this.x);  
               
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    state = false;
                    if (this.nectar > 2) {
                        state = false;
                        this.setTargetBienenstock();
                    }
                  }

                else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }

            if (state == false) {
                let xDiff: number = this.xTarget - this.x;
                let yDiff: number = this.yTarget - this.y;

                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1 && this.nectar) {
                    state = true;
                    this.setTargetPosition();
                }
                
                else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }
        }
    }
}     
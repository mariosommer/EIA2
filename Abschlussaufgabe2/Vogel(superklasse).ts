namespace Abschlussaufgabe {



    export class VogelSuperklasse {
        x: number;
        z: number;
        y: number;
        gravity: number = 0.0000000001;

        size: number;
        xspeed: number;

        yspeed: number;
        // yspeed: number;

        xmin: number = -2.5;
        xmax: number = 1.5;
        ymin: number = -0.5;
        ymax: number = 0.5;




       constructor(_x: number, _y: number, _z: number) {


            this.vogelJump();
            this.setYHigh();
            this.setRandomSpeed();
            this.x = _x;
            this.z = _z;

            //    this.y = _y;
            this.draw();
        }

        update(): void {
           this.move();
            this.draw();
         //   this.vogelJump();
        }

        
       

        
        move(): void {
            //     this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            //     this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed i 

           
            
//            if (this.y < 600){
//            
//            this.y += +6  - this.z;
            
         //   this.y = this.y + this.z;

        //    }


            //    this.z += 2 - 6 - this.xspeed;
            //   this.y += 2 - 3 - this.yspeed;

            //            if (this.x >= crc2.canvas.width + 10) {
            //                this.x = -3;
            //            }
            //            
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = crc2.canvas.width;
                this.setYHigh();
            }


//            if (this.z <= -1600) {
//                this.z = crc2.canvas.width - 800;
//                //    this.setRandomYHigh2();
//            }


            //oben raus, unten rein   
            //            if (this.y <= -18) {
            //                this.y = 479;
            //            }
            //            //unten raus, oben rein               
            //            if (this.y >= crc2.canvas.height) {
            //                this.y = 0;
            //            }
        }

        draw(): void {
            //abstract
        }







  vogelJump(): void {

          //  this.z = 300;

            this.gravity += this.gravity + this.z;
            
            console.log(this.gravity);

            console.log(this.z);
        }


        setYHigh(): void {


            //   this.y = Math.floor((Math.random() * 140) + 1);    
            this.y = 100;

        }





        setRandomSpeed(): void {
            // this.xspeed = (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }
    }
}
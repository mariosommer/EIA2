var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var VogelSuperklasse = (function () {
        function VogelSuperklasse(_x, _y, _z) {
            this.gravity = 0.0000000001;
            // yspeed: number;
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.vogelJump();
            this.setYHigh();
            this.setRandomSpeed();
            this.x = _x;
            this.z = _z;
            //    this.y = _y;
            this.draw();
        }
        VogelSuperklasse.prototype.update = function () {
            this.move();
            this.draw();
            //   this.vogelJump();
        };
        VogelSuperklasse.prototype.move = function () {
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
                this.x = Abschlussaufgabe.crc2.canvas.width;
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
        };
        VogelSuperklasse.prototype.draw = function () {
            //abstract
        };
        VogelSuperklasse.prototype.vogelJump = function () {
            //  this.z = 300;
            this.gravity += this.gravity + this.z;
            console.log(this.gravity);
            console.log(this.z);
        };
        VogelSuperklasse.prototype.setYHigh = function () {
            //   this.y = Math.floor((Math.random() * 140) + 1);    
            this.y = 100;
        };
        VogelSuperklasse.prototype.setRandomSpeed = function () {
            // this.xspeed = (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        };
        return VogelSuperklasse;
    }());
    Abschlussaufgabe.VogelSuperklasse = VogelSuperklasse;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Vogel(superklasse).js.map
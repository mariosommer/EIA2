var L8_Classes;
(function (L8_Classes) {
    var BieneSuperklasse = (function () {
        function BieneSuperklasse(_x, _y) {
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.setRandomSpeed();
            this.setRandomSize();
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        BieneSuperklasse.prototype.update = function () {
            this.move();
            this.draw();
        };
        BieneSuperklasse.prototype.move = function () {
            //     this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            //     this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed i 
            this.x += Math.random() * 2 - 2 - this.xspeed;
            this.y += Math.random() * 2 - 1 - this.yspeed;
            if (this.x >= L8_Classes.crc2.canvas.width + 10) {
                this.x = -3;
            }
            //links raus, rechts rein
            if (this.x <= -18) {
                this.x = L8_Classes.crc2.canvas.width;
            }
            //oben raus, unten rein   
            if (this.y <= -18) {
                this.y = 479;
            }
            //unten raus, oben rein               
            if (this.y >= L8_Classes.crc2.canvas.height) {
                this.y = 0;
            }
        };
        BieneSuperklasse.prototype.draw = function () {
            //abstract
        };
        BieneSuperklasse.prototype.setRandomSize = function () {
            this.size = Math.random() * 20 + 10; //Größe
        };
        BieneSuperklasse.prototype.setRandomSpeed = function () {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        };
        return BieneSuperklasse;
    }());
    L8_Classes.BieneSuperklasse = BieneSuperklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Biene(superklasse).js.map
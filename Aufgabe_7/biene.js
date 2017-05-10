var L7_Classes;
(function (L7_Classes) {
    var Biene = (function () {
        function Biene(_x, _y) {
            this.xmin = -2.5;
            this.xmax = 1.5;
            this.ymin = -0.5;
            this.ymax = 0.5;
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }
        Biene.prototype.update = function () {
            this.move();
            this.draw();
        };
        Biene.prototype.draw = function () {
            var img = document.getElementById("biene");
            L7_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        };
        Biene.prototype.move = function () {
            this.x += Math.random() * 2 - 2 - this.xspeed;
            this.y += Math.random() * 2 - 1 - this.yspeed;
            if (this.x >= L7_Classes.crc2.canvas.width + 10) {
                this.x = -3;
            }
            //links raus, rechts rein
            if (this.x <= -18) {
                this.x = L7_Classes.crc2.canvas.width;
            }
            //oben raus, unten rein   
            if (this.y <= -18) {
                this.y = 479;
            }
            //unten raus, oben rein               
            if (this.y >= L7_Classes.crc2.canvas.height) {
                this.y = 0;
            }
        };
        Biene.prototype.setRandomStyle = function () {
            this.size = Math.random() * 20 + 10; //Größe  
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung 
        };
        return Biene;
    }());
    L7_Classes.Biene = Biene;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=biene.js.map
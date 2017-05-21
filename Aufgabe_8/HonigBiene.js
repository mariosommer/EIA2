var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Classes;
(function (L8_Classes) {
    var HonigBiene = (function (_super) {
        __extends(HonigBiene, _super);
        function HonigBiene(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = 0.02;
            this.setTargetPosition();
            this.nectar = 0;
            this.getNectar();
            //  this.setTargetBienenstock();
        }
        HonigBiene.prototype.draw = function () {
            var img = document.getElementById("HonigBiene");
            // crc2.drawImage(img, this.x, this.y, this.size, this.size); Unterschiedliche Bienengröße
            L8_Classes.crc2.drawImage(img, this.x, this.y, 25, 25);
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x + 8, this.y + 25, this.size, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fillStyle = "orange";
            L8_Classes.crc2.fill();
        };
        HonigBiene.prototype.setTargetPosition = function () {
            var x = Math.round(Math.random() * (L8_Classes.pflanzen.length - 1));
            this.xTarget = L8_Classes.pflanzen[x].x - 10;
            this.yTarget = L8_Classes.pflanzen[x].y - 55;
        };
        HonigBiene.prototype.setTargetBienenstock = function () {
            this.xTarget = 720;
            this.yTarget = 280;
        };
        HonigBiene.prototype.getNectar = function () {
            var xDiff = this.xTarget - this.x;
            var yDiff = this.yTarget - this.y;
            if (this.nectar > 0 && this.x > 718 && this.y < 290) {
                this.nectar = this.nectar - 1;
            }
            if (this.nectar < 10 && Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.nectar = this.nectar + 1;
            }
            this.size = this.nectar * 2;
        };
        HonigBiene.prototype.move = function () {
            this.getNectar();
            var state = true;
            if (state == true) {
                var xDiff = this.xTarget - this.x;
                var yDiff = this.yTarget - this.y;
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
                var xDiff = this.xTarget - this.x;
                var yDiff = this.yTarget - this.y;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1 && this.nectar) {
                    state = true;
                    this.setTargetPosition();
                }
                else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }
        };
        return HonigBiene;
    }(L8_Classes.BieneSuperklasse));
    L8_Classes.HonigBiene = HonigBiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=HonigBiene.js.map
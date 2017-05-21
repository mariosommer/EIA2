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
            //   this.setTargetPosition();
            //  this.setTargetBienenstock();
        }
        HonigBiene.prototype.draw = function () {
            var img = document.getElementById("HonigBiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        };
        //
        //        setTargetPosition(): void {
        //            //            this.xTarget = Math.random() * crc2.canvas.width;
        //            //            this.yTarget = Math.random() * crc2.canvas.height;
        //            let x: number = Math.round(Math.random() * (pflanzen.length - 1));
        //
        //            this.xTarget = pflanzen[x].x - 6;
        //            this.yTarget = pflanzen[x].y - 45;
        //        }
        HonigBiene.prototype.setTargetBienenstock = function () {
            this.xTarget = 720;
            this.yTarget = 280;
        };
        return HonigBiene;
    }(L8_Classes.BieneSuperklasse));
    L8_Classes.HonigBiene = HonigBiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=HonigBiene.js.map
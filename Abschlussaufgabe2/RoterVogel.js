var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var RoterVogel = (function (_super) {
        __extends(RoterVogel, _super);
        function RoterVogel(_x, _y, _z) {
            _super.call(this, _x, _y, _z);
            this.gravity = 10;
            //            this.draw();
            //    this.vogelJump();
        }
        RoterVogel.prototype.draw = function () {
            ////            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("roterVogel");
            ////            // crc2.drawImage(img, this.x, this.y, this.size, this.size);
            ////            crc2.drawImage(img, this.x, this.y, 100, 100);
            //            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("boden2");
            //            crc2.drawImage(img, this.x+800, this.y, 800, 60);
        };
        return RoterVogel;
    }(Abschlussaufgabe.VogelSuperklasse));
    Abschlussaufgabe.RoterVogel = RoterVogel;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RoterVogel.js.map
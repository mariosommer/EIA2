var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Classes;
(function (L8_Classes) {
    var OrangeneBlume = (function (_super) {
        __extends(OrangeneBlume, _super);
        function OrangeneBlume(_x, _y) {
            _super.call(this, _x, _y);
            this.draw();
        }
        OrangeneBlume.prototype.draw = function () {
            //Grashalm + Blätter
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#185A18";
            L8_Classes.crc2.fillRect(this.x, this.y - 25, 2.4, 25);
            L8_Classes.crc2.ellipse(this.x - 3.5, this.y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.ellipse(this.x + 5, this.y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            //Blüte
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#DF1818";
            for (var i = 0; i < 3; i++) {
                L8_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 6, 22, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#DFC318";
            for (var i = 0; i < 3; i++) {
                L8_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 5, 18, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#DF5A18";
            for (var i = 0; i < 3; i++) {
                L8_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 5, 14, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#DFDF7B";
            L8_Classes.crc2.arc(this.x + 1.2, this.y - 42, 3.8, 0, 2 * Math.PI);
            L8_Classes.crc2.fill();
        };
        return OrangeneBlume;
    }(L8_Classes.PflanzeSuperklasse));
    L8_Classes.OrangeneBlume = OrangeneBlume;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=OrangeneBlume.js.map
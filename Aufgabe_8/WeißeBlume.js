var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Classes;
(function (L8_Classes) {
    var WeißeBlume = (function (_super) {
        __extends(WeißeBlume, _super);
        function WeißeBlume(_x, _y) {
            _super.call(this, _x, _y);
            this.draw();
        }
        WeißeBlume.prototype.draw = function () {
            //Grashalm + Blätter
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#185A18";
            L8_Classes.crc2.fillRect(this.x, this.y - 25, 2, 25);
            L8_Classes.crc2.ellipse(this.x - 3.5, this.y - 13, 1.6, 6, -35 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.ellipse(this.x + 5, this.y - 9, 1.8, 6.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            //Blüte
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "white";
            for (var i = 0; i < 8; i++) {
                L8_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 2, 10, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "orange";
            L8_Classes.crc2.arc(this.x + 1.2, this.y - 30, 3.8, 0, 2 * Math.PI);
            L8_Classes.crc2.fill();
        };
        return WeißeBlume;
    }(L8_Classes.PflanzeSuperklasse));
    L8_Classes.WeißeBlume = WeißeBlume;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=WeißeBlume.js.map
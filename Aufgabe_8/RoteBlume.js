var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Classes;
(function (L8_Classes) {
    var RoteBlume = (function (_super) {
        __extends(RoteBlume, _super);
        function RoteBlume(_x, _y) {
            _super.call(this, _x, _y);
            this.draw();
        }
        RoteBlume.prototype.draw = function () {
            L8_Classes.crc2.strokeStyle = this.strokeColor;
            L8_Classes.crc2.fillStyle = this.fillColor;
            //Grashalm + Blätter
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "#185A18";
            L8_Classes.crc2.fillRect(this.x, this.y - 40, 2.5, 40);
            L8_Classes.crc2.ellipse(this.x - 6.5, this.y - 25, 2.5, 9.5, -45 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.ellipse(this.x + 11, this.y - 18, 3, 11.5, 45 * Math.PI / 180, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            //Blüte
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "red";
            L8_Classes.crc2.arc(this.x - 7, this.y - 49, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "red";
            L8_Classes.crc2.arc(this.x + 9, this.y - 49, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x + 1, this.y - 54, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x + 7, this.y - 39, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x - 5, this.y - 39, 7, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.fillStyle = "yellow";
            L8_Classes.crc2.strokeStyle = "yellow";
            L8_Classes.crc2.arc(this.x + 1, this.y - 45, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
        };
        return RoteBlume;
    }(L8_Classes.PflanzeSuperklasse));
    L8_Classes.RoteBlume = RoteBlume;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=RoteBlume.js.map
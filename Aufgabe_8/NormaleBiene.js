var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L8_Classes;
(function (L8_Classes) {
    var NormaleBiene = (function (_super) {
        __extends(NormaleBiene, _super);
        function NormaleBiene(_x, _y) {
            _super.call(this, _x, _y);
            //            this.draw();
        }
        NormaleBiene.prototype.draw = function () {
            var img = document.getElementById("NormaleBiene");
            L8_Classes.crc2.drawImage(img, this.x, this.y, this.size, this.size);
        };
        return NormaleBiene;
    }(L8_Classes.BieneSuperklasse));
    L8_Classes.NormaleBiene = NormaleBiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=NormaleBiene.js.map
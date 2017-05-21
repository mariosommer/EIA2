var L7_Classes;
(function (L7_Classes) {
    var Pflanze = (function () {
        function Pflanze(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Zufallsposition für die Blumen erstellen und 
        Pflanze.prototype.randomPosition = function () {
            var l = Math.floor((Math.random() * 4) + 0);
            this.x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            this.y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese
            switch (l) {
                case 0:
                    this.drawFlower_1();
                    break;
                case 1:
                    this.drawFlower_3();
                    break;
                case 2:
                    this.drawFlower_2();
                    break;
                case 3:
                    this.drawFlower_2();
                    break;
                default:
                    break;
            }
        };
        //BLUME 1 
        Pflanze.prototype.drawFlower_1 = function () {
            L7_Classes.crc2.strokeStyle = this.strokeColor;
            L7_Classes.crc2.fillStyle = this.fillColor;
            //Grashalm + Blätter
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#185A18";
            L7_Classes.crc2.fillRect(this.x, this.y - 40, 2.5, 40);
            L7_Classes.crc2.ellipse(this.x - 6.5, this.y - 25, 2.5, 9.5, -45 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.ellipse(this.x + 11, this.y - 18, 3, 11.5, 45 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blüte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.arc(this.x - 7, this.y - 49, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "red";
            L7_Classes.crc2.arc(this.x + 9, this.y - 49, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 1, this.y - 54, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x + 7, this.y - 39, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.arc(this.x - 5, this.y - 39, 7, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "yellow";
            L7_Classes.crc2.strokeStyle = "yellow";
            L7_Classes.crc2.arc(this.x + 1, this.y - 45, 5, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
        };
        Pflanze.prototype.drawFlower_2 = function () {
            //Grashalm + Blätter
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#185A18";
            L7_Classes.crc2.fillRect(this.x, this.y - 25, 2, 25);
            L7_Classes.crc2.ellipse(this.x - 3.5, this.y - 13, 1.6, 6, -35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.ellipse(this.x + 5, this.y - 9, 1.8, 6.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blüte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "white";
            for (var i = 0; i < 8; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 30, 2, 10, (i * 22.5) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "orange";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 30, 3.8, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
        };
        Pflanze.prototype.drawFlower_3 = function () {
            //Grashalm + Blätter
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#185A18";
            L7_Classes.crc2.fillRect(this.x, this.y - 25, 2.4, 25);
            L7_Classes.crc2.ellipse(this.x - 3.5, this.y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.ellipse(this.x + 5, this.y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blüte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#C61884";
            for (var i = 0; i < 5; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DF5AC3";
            for (var i = 0; i < 5; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DFC6C3";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 42, 3.8, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
        };
        Pflanze.prototype.drawFlower_4 = function () {
            //Grashalm + Blätter
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#185A18";
            L7_Classes.crc2.fillRect(this.x, this.y - 25, 2.4, 25);
            L7_Classes.crc2.ellipse(this.x - 3.5, this.y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.ellipse(this.x + 5, this.y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            //Blüte
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DF1818";
            for (var i = 0; i < 3; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 6, 22, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DFC318";
            for (var i = 0; i < 3; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 5, 18, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DF5A18";
            for (var i = 0; i < 3; i++) {
                L7_Classes.crc2.ellipse(this.x + 1.2, this.y - 42, 5, 14, (i * 60) * Math.PI / 180, 0, 2 * Math.PI);
            }
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#DFDF7B";
            L7_Classes.crc2.arc(this.x + 1.2, this.y - 42, 3.8, 0, 2 * Math.PI);
            L7_Classes.crc2.fill();
        };
        return Pflanze;
    }());
    L7_Classes.Pflanze = Pflanze;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=7pflanze.js.map
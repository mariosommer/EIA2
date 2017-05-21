var L8_Classes;
(function (L8_Classes) {
    var PflanzeSuperklasse = (function () {
        function PflanzeSuperklasse(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        //           update(): void {
        //            this.draw();
        //        }
        //Zufallsposition für die Blumen erstellen und 
        PflanzeSuperklasse.prototype.setRandomPosition = function () {
            //            let l: number = Math.floor((Math.random() * 4) + 0);
            this.x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            this.y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese
        };
        PflanzeSuperklasse.prototype.draw = function () {
            // abstract
        };
        return PflanzeSuperklasse;
    }());
    L8_Classes.PflanzeSuperklasse = PflanzeSuperklasse;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=Pflanze(superklasse).js.map
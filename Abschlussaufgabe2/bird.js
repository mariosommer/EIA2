var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bird = (function () {
        function Bird(_x, _y) {
            this.gravity = 1;
            this.velocity = 0;
            this.lift = -36;
            this.x = _x;
            this.y = _y;
        }
        Bird.prototype.draw = function () {
            var img = document.getElementById("roterVogel");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y, 60, 60);
        };
        Bird.prototype.update = function () {
            this.move();
            this.draw();
        };
        Bird.prototype.move = function () {
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
        };
        Bird.prototype.up = function () {
            this.velocity += this.lift;
        };
        return Bird;
    }());
    Abschlussaufgabe.Bird = Bird;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bird.js.map
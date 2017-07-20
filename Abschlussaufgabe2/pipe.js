var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Pipe = (function () {
        function Pipe(_x, _y, _z, _distance) {
            this.damagePipeTop = 0;
            this.damagePipeBottom = 0;
            this.lifeBird = 1040;
            this.setRandomYHighTop();
            this.setRandomYHighBottom();
            this.x = _x;
            this.z = _z;
            this.distance = _distance;
            this.draw();
        }
        Pipe.prototype.move = function () {
            this.x += -6.5;
            this.z += -6.5;
            //distance
            this.distance += 6.5;
            //lvl2
            if (this.distance > 2600) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }
            //lvl3
            if (this.distance > 8000) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }
            //lvl3
            if (this.distance > 15000) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }
            //console.log(this.distance);
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = Abschlussaufgabe.crc2.canvas.width;
                this.setRandomYHighTop();
            }
            if (this.z <= -1600) {
                this.z = Abschlussaufgabe.crc2.canvas.width - 800;
                this.setRandomYHighBottom();
            }
        };
        Pipe.prototype.draw = function () {
            //abstract
        };
        Pipe.prototype.setRandomYHighTop = function () {
            this.y = Math.floor((Math.random() * 120) + 60); //Rohr1    Zwischen 60-180   
            this.y2 = Math.floor((Math.random() * 120) + 60); //Rohr2    Oben
            this.y5 = Math.floor((Math.random() * 80) + 1); //Rohr5    Zwischen 1-80   
            this.y6 = Math.floor((Math.random() * 80) + 1); //Rohr6     Unten
        };
        Pipe.prototype.setRandomYHighBottom = function () {
            this.y3 = Math.floor((Math.random() * 140) + 40); //Rohr3  Oben      
            this.y4 = Math.floor((Math.random() * 140) + 40); //Rohr4
            this.y7 = Math.floor((Math.random() * 60) + 1); //Rohr7  Unten      
            this.y8 = Math.floor((Math.random() * 60) + 1); //Rohr8
        };
        Pipe.prototype.update = function () {
            this.drawPipeTop();
            this.drawPipeBottom();
            this.crashTop();
            this.crashBottom();
            this.move();
            //   this.life();
            this.draw();
        };
        Pipe.prototype.drawPipeBottom = function () {
            var img = document.getElementById("rohrUnten");
            Abschlussaufgabe.crc2.drawImage(img, this.x + 0, this.y5 + 300, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.x + 400, this.y6 + 300, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.z + 800, this.y7 + 300, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.z + 1200, this.y8 + 300, 60, 180);
        };
        Pipe.prototype.drawPipeTop = function () {
            var img = document.getElementById("rohrOben");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y - 180, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.x + 400, this.y2 - 180, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.z + 800, this.y3 - 180, 60, 180);
            Abschlussaufgabe.crc2.drawImage(img, this.z + 1200, this.y4 - 180, 60, 180);
        };
        //        life(): void {
        //            crc2.fillStyle = "#F4F4F4";
        //            crc2.fillRect(100, 12, 1050 / 10, 18);
        //            crc2.fillStyle = "#BF1319";
        //            crc2.fillRect(100, 12, this.lifeBird / 10, 18);
        //            var img2: HTMLImageElement = <HTMLImageElement>document.getElementById("lebensanzeige");
        //            crc2.drawImage(img2, 10, 10, 200, 21);
        //        }
        Pipe.prototype.crashTop = function () {
            this.xBird = Abschlussaufgabe.bird[0].x;
            this.yBird = Abschlussaufgabe.bird[0].y;
            //Erste zwei Rohre Oben  
            if (((this.x > -9 && this.x < 110) && (this.y > this.yBird)) || ((this.x > -409 && this.x < -290) && (this.y2 > this.yBird))) {
                Abschlussaufgabe.crc2.beginPath();
                Abschlussaufgabe.crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                Abschlussaufgabe.crc2.fillStyle = "red";
                Abschlussaufgabe.crc2.fill();
                Abschlussaufgabe.crc2.closePath();
                this.damagePipeTop++;
                this.lifeBird = this.lifeBird - this.damagePipeTop - this.damagePipeBottom;
                if (this.lifeBird < 0) {
                    console.log("Game Over");
                    var element = document.getElementById("gameOver");
                    element.style.display = "block";
                }
            }
            //Rohr drei und vier Oben
            if (((this.z > -809 && this.z < -690) && (this.y3 > this.yBird)) || ((this.z > -1209 && this.z < -1090) && (this.y4 > this.yBird))) {
                Abschlussaufgabe.crc2.beginPath();
                Abschlussaufgabe.crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                Abschlussaufgabe.crc2.fillStyle = "red";
                Abschlussaufgabe.crc2.fill();
                Abschlussaufgabe.crc2.closePath();
                this.damagePipeTop++;
                this.lifeBird = this.lifeBird - this.damagePipeTop - this.damagePipeBottom;
                if (this.lifeBird < 0) {
                    console.log("Game Over");
                    var element = document.getElementById("gameOver");
                    element.style.display = "block";
                }
            }
        };
        Pipe.prototype.crashBottom = function () {
            this.xBird = Abschlussaufgabe.bird[0].x;
            this.yBird = Abschlussaufgabe.bird[0].y;
            //Erste zwei Rohre Unten  
            if (((this.x > -9 && this.x < 110) && ((this.y5 + 300) < (this.yBird + 60))) || ((this.x > -409 && this.x < -290) && ((this.y6 + 300) < (this.yBird + 60)))) {
                Abschlussaufgabe.crc2.beginPath();
                Abschlussaufgabe.crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                Abschlussaufgabe.crc2.fillStyle = "red";
                Abschlussaufgabe.crc2.fill();
                Abschlussaufgabe.crc2.closePath();
                this.damagePipeBottom++;
                this.lifeBird = this.lifeBird - this.damagePipeBottom - this.damagePipeTop;
                if (this.lifeBird < 0) {
                    console.log("Game Over");
                    var element = document.getElementById("gameOver");
                    element.style.display = "block";
                }
            }
            //Rohr drei und vier Unten
            if (((this.z > -809 && this.z < -690) && ((this.y7 + 300) < (this.yBird + 60))) || ((this.z > -1209 && this.z < -1090) && ((this.y8 + 300) < (this.yBird + 60)))) {
                Abschlussaufgabe.crc2.beginPath();
                Abschlussaufgabe.crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                Abschlussaufgabe.crc2.fillStyle = "red";
                Abschlussaufgabe.crc2.fill();
                Abschlussaufgabe.crc2.closePath();
                this.damagePipeBottom++;
                this.lifeBird = this.lifeBird - this.damagePipeBottom - this.damagePipeTop;
                if (this.lifeBird < 0) {
                    console.log("Game Over");
                    var element = document.getElementById("gameOver");
                    element.style.display = "block";
                }
            }
        };
        return Pipe;
    }());
    Abschlussaufgabe.Pipe = Pipe;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=pipe.js.map
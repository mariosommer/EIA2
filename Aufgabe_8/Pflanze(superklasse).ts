namespace L8_Classes {

    export class PflanzeSuperklasse {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }

        //Zufallsposition für die Blumen erstellen und 
        setRandomPosition(): void {

            //            let l: number = Math.floor((Math.random() * 4) + 0);
            this.x = Math.floor((Math.random() * 760) + 20); //Breite Wiese (20px links/rechts frei damit keine Blüte abgeschnitten wird)
            this.y = Math.floor((Math.random() * 80) + 400); //Höhe Wiese

        }

        draw(): void {
            // abstract
        }
    }
}
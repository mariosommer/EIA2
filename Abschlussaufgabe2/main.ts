/* Aufgabe: Abschlussaufgabe
Name: Mario Sommer
Matrikel: 254785
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Grafiken und Bilder von freepik.com
*/


namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D; //export - Klasse muss wissen worauf sie sich zeichnen soll

    let ground: Ground[] = [];

    let background: Background[] = [];

    export let pipes: Pipe[] = [];

    //  export let pflanzen: PflanzeSuperklasse[] = [];



    let voegel: VogelSuperklasse[] = [];

    export let bird: Bird[] = [];

       export let z: number = 0;

    console.log(z);


    let n: number = 3; //Anzahl NormaleBienen

    let imgData: ImageData;




    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "20px";
        crc2 = canvas.getContext("2d");
        imgData = crc2.getImageData(0, 0, 800, 480);

        // Vogel springen lassen
        canvas.addEventListener("click", erhoeheYWertVogel);

        //Rohre estellen
        for (let i: number = 0; i < 1; i++) {
            let r: Pipe = new Pipe(0, 0, 0, 0);
            pipes.push(r);
        }

        //Vogel
                for (let i: number = 0; i < 1; i++) {
                    let v: VogelSuperklasse = new RoterVogel(20, 30, 0);
                    voegel.push(v);
                }

        //Boden
        for (let i: number = 0; i < n; i++) {
            let s: Ground = new Ground(0, 420, 0);
            ground.push(s);
        }

        //Hintergrund
        for (let i: number = 0; i < n; i++) {
            let t: Background = new Background(0, 420, 0);
            background.push(t);
        }

        //Vogel
        for (let i: number = 0; i < 1; i++) {
            let b: Bird = new Bird(50, 100);
            bird.push(b);
        }

        window.setTimeout(animate, 20);
    }

    function animate(_width: number, _height: number): void {

        crc2.putImageData(imgData, 0, 0); //Bild

        let s: Background = background[0];
        s.update();

        for (let i: number = 0; i < pipes.length; i++) {
            let s: Pipe = pipes[i];
            s.update();
        }

        for (let i: number = 0; i < ground.length; i++) {
            let s: Ground = ground[i];
            s.update();
        }

        for (let i: number = 0; i < voegel.length; i++) {
            let s: VogelSuperklasse = voegel[i];
            s.update();
        }

        for (let i: number = 0; i < bird.length; i++) {
            let s: Bird = bird[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }

    //Vogel fliegt hoch wenn Leertaste gedrückt wird
    document.onkeydown = function(_event: KeyboardEvent): void {
        for (let i: number = 0; i < n; i++) {
            let r: Bird = bird[i];
            var x: number = _event.keyCode;
            if (x == 32) {
                r.up();
            }
        }
    };

    //Vogel fliegt hoch bei MausKlick
    function erhoeheYWertVogel(): void {

        for (let i: number = 0; i < n; i++) {
            let r: Bird = bird[i];
            r.up();
        }
    }
} 
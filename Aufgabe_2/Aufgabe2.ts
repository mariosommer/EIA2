/* Aufgabe: Aufgabe 2
Name: Mario Sommer
Matrikel: 254785
Datum: 02.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
 --> */

document.addEventListener('DOMContentLoaded', function () {

    let zeile:number = 0;
    let rice: number = 1;
    
    for (let i: number = 0; i < 64; i++) {
       
        let div: HTMLElement = document.createElement("div");
        
        if (i % 8 == 0) {
            div.className = "floating";
            zeile ++;
        }
        
      //ungerade Zeile
        
        if (zeile % 2 == 0){
            
            if (i % 2 == 0) {
            div.className = "board black";
            } 
            else {
            div.className = "board white";
            } 
        }
    
      //gerade Zeile
     
        if (zeile % 2 == 1){
        
            if (i % 2 == 0) {
            div.className = "board white";
            } 
            else {
            div.className = "board black";
            }
        }
       
        div.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(div);  
    }
});
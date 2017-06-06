namespace saveInput {
    window.addEventListener("load", init);


    let sorts: string[] = ["Schoko", "Erdbeer", "Haselnuss", "Banane", "Vanille"];
    // Das Fieldset in dem alle Inputs für die verschiedenen Kuchen angeordnet werden sollen.
    let fieldset: HTMLFieldSetElement;

    let fieldsetToppings: HTMLFieldSetElement;


    let Toppings: HTMLElement;

    let toppings: string[] = ["Erdbeersoße", "Schokosoße", "Streusel", "Sahne"];




    let containerPrice: number = 0;
    let toppingPrice: number = 0;

    //   let radioButton: HTMLElemen   
    // Array in dem alle inputs für die Sorten untergebracht werden
    let inputs: HTMLInputElement[] = [];

    // Array alle inputs für Toppings
    let inputsToppings: HTMLInputElement[] = [];


    let containers: string[] = ["Becher", "Waffel"];
    //let containerPrice2: number[] = []


    function init(): void {


       Toppings = document.getElementById("Toppings");



        fieldset = document.getElementsByTagName("fieldset")[0];

        createInputs();


        createTopping();



        createContainerField();


        fieldset.addEventListener("change", change);

        //  fieldsetToppings = document.getElementsByTagName("fieldset")[3];

        // fieldsetToppings.addEventListener("change", change);


        Toppings.addEventListener("change", change)

        calculatePrice();

        //    createToppingField();


        //   fieldset = document.getElementsByTagName("fieldset")[4];
        //      createTopping()   
        fieldset.addEventListener("change", calculatePrice);




    }

    //---------------------------------------------------------------------------------------//

    function createInputs(): void {
        // Erstelle pro Sorte Eis einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }


    function createTopping(): void {

        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputTopping(toppings[i]);
        }
    }

    function createInputTopping(_toppings: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");


        //        input.type = "checkbox";
        //        input.value = "";
        //        input.name = "topping";
        //        
        //        label.innerText = _toppings;
        //        label.appendChild(input);
        //        
        //        fieldsetTopp(label);
        //        inputsToppings.push(input);


        label.innerText = _toppings;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        label.id = _toppings;

        Toppings.appendChild(label);
        inputsToppings.push(input);
    }





    function calculatePrice(): void {




        let icePrice: number = 0;

        for (let i: number = 0; i < inputs.length; i++) {
            (icePrice += parseInt(inputs[i].value));
        }


        // let containerPrice: number = 0; 



        let summe: number = (icePrice * 0.8 + containerPrice + toppingPrice);

        //    let sum2: number = sum.toFixed(2   
        //    Math.round        
        let sum: number = summe;


        sum = Math.round(100.0 * sum) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen

        console.log(sum);




        document.getElementById("Preis").innerHTML = "Gesamtpreis:" + sum + "€";



    }


    function createInput(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);


        // Die Art des Inputs wird über den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";




        fieldset.appendChild(label);
        inputs.push(input);
    }


    // Wenn sich etwas ändert, summiere die Werte aller inputs auf und gebe
    // das Ergebnis auf der Konsole aus
    function change(): void {
















        ///////////////////////////////////  TOPPINGS /////////////////////////////////

        document.getElementById("ToppingZusammenfassung").innerText = ""; //Feld immer neu definieren, wenn der Haken weggenommen wird soll innerText leer sein

        let sumToppings: number = 0;

        toppingPrice = 0;
        calculatePrice(); //Berechne auch beim haken wegnehmen den Preis


        for (let i: number = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) { //Erst wenn das Topping ausgewählt wird berechnen
                { toppingPrice += 0.50; }

                calculatePrice();


                document.getElementById("ToppingZusammenfassung").innerText += "Topping:" + " " + toppings[i] + " " + "(0.50€)" + "\n";
            }
        }


        ///////////////////////////////////  EISKUGELN /////////////////////////////////


        let sumSorts: number = 0;

        for (let i: number = 0; i < inputs.length; i++) {
            sumSorts += parseInt(inputs[i].value);
        }

        document.getElementById("Kugeln").innerHTML = "Anzahl Eis-Kugeln:" + "    " + sumSorts;

        console.log(sumSorts);
    }





    function handleChange(_event: Event): void {
        //console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //        console.log("Changed " + target.name + " to " + target.value);
        //        //*/
        //        //*/ note: this == _event.currentTarget in an event-handler
        //        if (this.id == "checkbox")
        //            console.log("Changed " + target.name + " to " + target.checked);
        //        //*/
        //        //*/
        //        if (target.name == "Slider") {
        //            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
        //            progress.value = parseFloat(target.value);
        //        }
        //        //*/
        //        //*/
        //        if (target.name == "Stepper") {
        //            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
        //            progress.value = parseFloat(target.value);
        //        }


        calculatePrice();

        if (target.value == "Becher" || target.value == "Waffel") {

            console.log(target.value);


            calculatePrice();


            if (target.value == "Becher") {



                containerPrice = 0.50;
                console.log(containerPrice);
                calculatePrice();
            }
            else {
                containerPrice = 0.30;
                console.log(containerPrice);
                calculatePrice();

            }

            document.getElementById("Behälter").innerHTML = "Behälter:" + " " + target.value + " " + "(" + containerPrice + "0" + "€" + ")";
        }
    }








    function createContainerField(): void {

        let containerField = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv = document.getElementById("container");
        mainDiv.appendChild(containerField);

        //Legende für containerField
        let legend = document.createElement("legend");
        legend.innerText = "Becher (0,50€) oder Waffel (0,30€)?";
        containerField.appendChild(legend);


        //Behälter-Optionen für Array-Einträge
        for (let i: number = 0; i < containers.length; i++) {
            let container = document.createElement("input");
            container.type = "radio";
            container.value = containers[i];
            container.name = "container"
            container.id = "radio" + i + 1;
            containerField.appendChild(container);


            console.log(containers[i]);

            //Labels für Behälterauswahl
            let containerLabel = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange);
        }



    }



}
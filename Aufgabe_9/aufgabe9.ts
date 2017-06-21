/* Aufgabe: Aufgabe 10
Name: Mario Sommer
Matrikel: 254785
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace saveInput {
    window.addEventListener("load", init);

    let containers: string[] = ["Becher", "Waffel"];
    let sorts: string[] = ["Schoko", "Erdbeer", "Haselnuss", "Banane", "Vanille"];
    let toppings: string[] = ["Erdbeersoße", "Schokosoße", "Streusel", "Sahne"];
    let delivery: string[] = ["Abholung", "Standard-Lieferung", "Express-Lieferung"];

    let fieldset: HTMLFieldSetElement;
    let fieldsetToppings: HTMLFieldSetElement;

    let Toppings: HTMLElement;
    let Delivery: HTMLElement;
    let Bestellung: HTMLElement;

    let containerPrice: number = 0;
    let toppingPrice: number = 0;
  
    // Array in dem alle inputs untergebracht werden
    let inputsSorts: HTMLInputElement[] = [];
    let inputsToppings: HTMLInputElement[] = [];
    let inputsDelivery: HTMLInputElement[] = [];

    
    function init(): void {
        
        Toppings = document.getElementById("toppings");
        Delivery = document.getElementById("delivery");
        fieldset = document.getElementsByTagName("fieldset")[0];
        createInputs();
        createTopping();
        createDelivery();
        createContainerField();
        fieldset.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Delivery.addEventListener("change", change);
        calculatePrice();
        fieldset.addEventListener("change", calculatePrice);
        Bestellung = document.getElementById("button");
        Bestellung.addEventListener("click", checkFormular);
    }


    function checkFormular(): void {

        let failure: string[] = ["Bitte überprüfen/ergänzen Sie folgende Eingaben: \n"];
        let firstname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("straße");
        let plz: HTMLInputElement = <HTMLInputElement>document.getElementById("plz");
        let location: HTMLInputElement = <HTMLInputElement>document.getElementById("ort");
        let email: HTMLInputElement = <HTMLInputElement>document.getElementById("email");

        if (firstname.validity.valid == false)
            failure.push("Vorname eingeben \n");
        if (name.validity.valid == false)
            failure.push("Name eingeben \n");
        if (street.validity.valid == false)
            failure.push("Straße eingeben \n");
        if (plz.validity.valid == false)
            failure.push("Postleitzahl eingeben \n");
        if (location.validity.valid == false)
            failure.push("Ort eingeben \n");
        if (email.validity.valid == false)
            failure.push("Email-Adresse eingeben \n");

        let kugeln: number = 0;
        let delivery: number = 0;

        for (let i: number = 0; i < inputsSorts.length; i++) {
            if (parseInt(inputsSorts[i].value) > 0)
                kugeln += 1;
        }
        
        if (kugeln == 0)
            failure.push("Es wurde keine Eissorte ausgewählt \n");

        if (containerPrice < 0.3)
            failure.push("Es wurde kein Behälter ausgewählt \n");

        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked)
                delivery += 1;
        }
        
        if (delivery == 0)
            failure.push("Es wurde keine Lieferart ausgewählt \n");

        if (failure.length > 1) {
            for (let i: number = 0; i < failure.length; i++)
                failure.push;
            alert(failure.join(""));
        }
        
        else {
            alert("Bestellung abgeschlossen");
        }
    }


    function createInputs(): void {

        // Erstelle pro Sorte Eis einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }

    ///////////////////////Topping/////////////////////////////

    function createTopping(): void {

        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputTopping(toppings[i]);
        }
    }

    function createInputTopping(_toppings: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _toppings;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        label.id = _toppings;

        Toppings.appendChild(label);
        inputsToppings.push(input);
    }

    ///////////////////////////Delivery/////////////////////////////    

    function createDelivery(): void {

        for (let i: number = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInputDelivery(delivery[i]);
        }
    }

    function createInputDelivery(_delivery: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _delivery;
        label.appendChild(input);
        input.type = "radio";
        input.name = "delivery";
        input.required = true;
        label.id = _delivery;

        Delivery.appendChild(label);
        inputsDelivery.push(input);
    }


    function calculatePrice(): void {

        let icePrice: number = 0;

        for (let i: number = 0; i < inputsSorts.length; i++) {
            (icePrice += parseInt(inputsSorts[i].value));
        }

        let summe: number = (icePrice * 0.8 + containerPrice + toppingPrice);     
        let sum: number = summe;

        sum = Math.round(100.0 * sum) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen

        console.log(sum);

        document.getElementById("Preis").innerHTML = "Gesamtpreis:" + sum + "€";

        document.getElementById("button").innerHTML = "Bestellen" + " " + "(" + sum + "€" + ")";
    }

    function createInput(_sort: string): void {
     
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);

        input.type = "number";
        input.min = "0";
        input.value = "0";

        fieldset.appendChild(label);
        inputsSorts.push(input);
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

        for (let i: number = 0; i < inputsSorts.length; i++) {
            sumSorts += parseInt(inputsSorts[i].value);
        }

        document.getElementById("Kugeln").innerHTML = "Anzahl Eis-Kugeln:" + "    " + sumSorts;

        console.log(sumSorts);


        document.getElementById("Eissorte").innerText = "";

        for (let i: number = 0; i < inputsSorts.length; i++) {

            let price: number = (parseInt(inputsSorts[i].value) * 1);

            price = Math.round(100.0 * price) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen

            let price2: number = ((parseInt(inputsSorts[i].value) * 1) * 0.8);

            price = Math.round(100.0 * price) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen
            price2 = Math.round(100.0 * price2) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen

            if (parseInt(inputsSorts[i].value) > 0) {
                document.getElementById("Eissorte").innerText += sorts[i] + ":" + "   " + price + " " + "x 0.80€" + " " + " = " + price2 + "€" + "\n";
            }
        }

        ///////////////////////////////// DELIVERY  ///////////////////////////////////

        document.getElementById("LieferungZusammenfassung").innerText = "";



        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked) {

                document.getElementById("LieferungZusammenfassung").innerText += "Lieferung:" + " " + delivery[i] + " " + "\n";
            }
        }
    }

    function handleChange(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;

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

        let containerField: HTMLFieldSetElement = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv: HTMLElement = document.getElementById("Auswahl");
        mainDiv.appendChild(containerField);

        //Legende für containerField
        let legend: HTMLElement = document.createElement("h2");
        legend.innerText = "Becher (0,50€) oder Waffel (0,30€)?";
        containerField.appendChild(legend);

        //Behälter-Optionen für Array-Einträge
        for (let i: number = 0; i < containers.length; i++) {
            let container: HTMLInputElement = document.createElement("input");
            container.type = "radio";
            container.value = containers[i];
            container.name = "container";
            container.id = "radio" + i + 1;
            containerField.appendChild(container);
            console.log(containers[i]);

            //Labels für Behälterauswahl
            let containerLabel: HTMLLabelElement = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange);
        }
    }
}
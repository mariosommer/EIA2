/* Aufgabe: Aufgabe 9
Name: Mario Sommer
Matrikel: 254785
Datum: 07.06.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var saveInput;
(function (saveInput) {
    window.addEventListener("load", init);
    var containers = ["Becher", "Waffel"];
    var sorts = ["Schoko", "Erdbeer", "Haselnuss", "Banane", "Vanille"];
    var toppings = ["Erdbeersoße", "Schokosoße", "Streusel", "Sahne"];
    var delivery = ["Abholung", "Standard-Lieferung", "Express-Lieferung"];
    var fieldset;
    var fieldsetToppings;
    var Toppings;
    var Delivery;
    var Bestellung;
    var containerPrice = 0;
    var toppingPrice = 0;
    // Array in dem alle inputs untergebracht werden
    var inputsSorts = [];
    var inputsToppings = [];
    var inputsDelivery = [];
    function init() {
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
    function checkFormular() {
        var failure = ["Bitte überprüfen/ergänzen Sie folgende Eingaben: \n"];
        var firstname = document.getElementById("vorname");
        var name = document.getElementById("name");
        var street = document.getElementById("straße");
        var plz = document.getElementById("plz");
        var location = document.getElementById("ort");
        var email = document.getElementById("email");
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
        var kugeln = 0;
        var delivery = 0;
        for (var i = 0; i < inputsSorts.length; i++) {
            if (parseInt(inputsSorts[i].value) > 0)
                kugeln += 1;
        }
        if (kugeln == 0)
            failure.push("Es wurde keine Eissorte ausgewählt \n");
        if (containerPrice < 0.3)
            failure.push("Es wurde kein Behälter ausgewählt \n");
        for (var i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked)
                delivery += 1;
        }
        if (delivery == 0)
            failure.push("Es wurde keine Lieferart ausgewählt \n");
        if (failure.length > 1) {
            for (var i = 0; i < failure.length; i++)
                failure.push;
            alert(failure.join(""));
        }
        else {
            alert("Bestellung abgeschlossen");
        }
    }
    function createInputs() {
        // Erstelle pro Sorte Eis einen Input
        for (var i = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }
    ///////////////////////Topping/////////////////////////////
    function createTopping() {
        for (var i = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputTopping(toppings[i]);
        }
    }
    function createInputTopping(_toppings) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _toppings;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        label.id = _toppings;
        Toppings.appendChild(label);
        inputsToppings.push(input);
    }
    ///////////////////////////Delivery/////////////////////////////    
    function createDelivery() {
        for (var i = 0; i < delivery.length; i++) {
            console.log(delivery[i]);
            createInputDelivery(delivery[i]);
        }
    }
    function createInputDelivery(_delivery) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _delivery;
        label.appendChild(input);
        input.type = "radio";
        input.name = "delivery";
        input.required = true;
        label.id = _delivery;
        Delivery.appendChild(label);
        inputsDelivery.push(input);
    }
    function calculatePrice() {
        var icePrice = 0;
        for (var i = 0; i < inputsSorts.length; i++) {
            (icePrice += parseInt(inputsSorts[i].value));
        }
        var summe = (icePrice * 0.8 + containerPrice + toppingPrice);
        var sum = summe;
        sum = Math.round(100.0 * sum) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen
        console.log(sum);
        document.getElementById("Preis").innerHTML = "Gesamtpreis:" + sum + "€";
        document.getElementById("button").innerHTML = "Bestellen" + " " + "(" + sum + "€" + ")";
    }
    function createInput(_sort) {
        var label = document.createElement("label");
        var input = document.createElement("input");
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
    function change() {
        ///////////////////////////////////  TOPPINGS /////////////////////////////////
        document.getElementById("ToppingZusammenfassung").innerText = ""; //Feld immer neu definieren, wenn der Haken weggenommen wird soll innerText leer sein
        var sumToppings = 0;
        toppingPrice = 0;
        calculatePrice(); //Berechne auch beim haken wegnehmen den Preis
        for (var i = 0; i < inputsToppings.length; i++) {
            if (inputsToppings[i].checked) {
                {
                    toppingPrice += 0.50;
                }
                calculatePrice();
                document.getElementById("ToppingZusammenfassung").innerText += "Topping:" + " " + toppings[i] + " " + "(0.50€)" + "\n";
            }
        }
        ///////////////////////////////////  EISKUGELN /////////////////////////////////
        var sumSorts = 0;
        for (var i = 0; i < inputsSorts.length; i++) {
            sumSorts += parseInt(inputsSorts[i].value);
        }
        document.getElementById("Kugeln").innerHTML = "Anzahl Eis-Kugeln:" + "    " + sumSorts;
        console.log(sumSorts);
        document.getElementById("Eissorte").innerText = "";
        for (var i = 0; i < inputsSorts.length; i++) {
            var price = (parseInt(inputsSorts[i].value) * 1);
            price = Math.round(100.0 * price) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen
            var price2 = ((parseInt(inputsSorts[i].value) * 1) * 0.8);
            price = Math.round(100.0 * price) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen
            price2 = Math.round(100.0 * price2) / 100.0; // Ergebnis: x.xx zwei Nachkommastellen
            if (parseInt(inputsSorts[i].value) > 0) {
                document.getElementById("Eissorte").innerText += sorts[i] + ":" + "   " + price + " " + "x 0.80€" + " " + " = " + price2 + "€" + "\n";
            }
        }
        ///////////////////////////////// DELIVERY  ///////////////////////////////////
        document.getElementById("LieferungZusammenfassung").innerText = "";
        for (var i = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[i].checked) {
                document.getElementById("LieferungZusammenfassung").innerText += "Lieferung:" + " " + delivery[i] + " " + "\n";
            }
        }
    }
    function handleChange(_event) {
        var target = _event.target;
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
    function createContainerField() {
        var containerField = document.createElement("fieldset");
        containerField.id = "radio";
        var mainDiv = document.getElementById("Auswahl");
        mainDiv.appendChild(containerField);
        //Legende für containerField
        var legend = document.createElement("h2");
        legend.innerText = "Becher (0,50€) oder Waffel (0,30€)?";
        containerField.appendChild(legend);
        //Behälter-Optionen für Array-Einträge
        for (var i = 0; i < containers.length; i++) {
            var container = document.createElement("input");
            container.type = "radio";
            container.value = containers[i];
            container.name = "container";
            container.id = "radio" + i + 1;
            containerField.appendChild(container);
            console.log(containers[i]);
            //Labels für Behälterauswahl
            var containerLabel = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange);
        }
    }
})(saveInput || (saveInput = {}));
//# sourceMappingURL=aufgabe9.js.map
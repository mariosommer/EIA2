document.addEventListener('DOMContentLoaded', function () {
    var name : string = prompt("Bitte geben Sie Ihren Namen ein.");
    var gruss : string = "Herzlich Willkommen ";
    document.body.innerHTML = gruss + name;
}); 
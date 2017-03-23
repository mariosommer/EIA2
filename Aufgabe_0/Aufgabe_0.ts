

document.addEventListener('DOMContentLoaded', function () {
    
    var name: string;
    var gruss: string;
      
    var name = prompt("Bitte geben Sie Ihren Namen ein.");
    var gruss = "Herzlich Willkommen ";
    document.body.innerHTML = gruss + name;
}); 
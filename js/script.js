document.addEventListener('DOMContentLoaded',() => {

// Begrüßung nach Zeit des Tages
const currentHour = new Date().getHours();
let Begruessung = "Ciao!"; // Standardbegrüßung

if (currentHour >= 5 && currentHour < 12) {
    Begruessung = "Guten Morgen!";
} else if (currentHour >= 12 && currentHour < 18) {
    Begruessung = "Guten Tag!";
} else if (currentHour >= 18 && currentHour < 23) {
    Begruessung = "Gute Abend!";
}

// Tipp_Effekt
if (document.getElementById('greeting-typewriter')) {
    new Typed('#greeting-typewirter', {
        strings: [Begruessung],
        typeSpeed: 80,
        showCursor: true,
        cursorChar: '|',
        loop: false 
    });     
}


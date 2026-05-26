document.addEventListener('DOMContentLoaded',() => {

// =============================================== //  
// /index.html Begrüßung nach Zeit des Tages// 

const currentHour = new Date().getHours();
let Begruessung = "Ciao!"; // Standardbegrüßung

if (currentHour >= 5 && currentHour < 12) {
    Begruessung = "Guten Morgen!";
} else if (currentHour >= 12 && currentHour < 18) {
    Begruessung = "Ciao!";
} else if (currentHour >= 18 && currentHour < 24) {
    Begruessung = "Gute Abend!";
}

// /index.html Tipp_Effekt // 

if (document.getElementById('greeting-typewriter')) {
    new Typed('#greeting-typewriter', {
        strings: [Begruessung],
        typeSpeed: 80,
        showCursor: true,
        cursorChar: '|',
        loop: false 
    });     
}

});

// =============================================== //


//=============================================== //
// /about.html Tipp_Effekt //


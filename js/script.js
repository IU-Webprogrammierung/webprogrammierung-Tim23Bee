// =============================================== //  
// /index.html Begrüßung nach Zeit des Tages// 

const currentHour = new Date().getHours();
let Begruessung = "Ciao!"; // Standardbegrüßung

if (currentHour >= 5 && currentHour < 12) {
    Begruessung = "Guten Morgen!";
} else if (currentHour >= 12 && currentHour < 18) {
    Begruessung = "Ciao!";
} else if (currentHour >= 18 && currentHour < 24) {
    Begruessung = "Guten Abend!";
}

// /index.html Tipp_Effekt // 

if (document.getElementById('greeting-typewriter')) {
    new Typed('#greeting-typewriter', {
        strings: [Begruessung],
        typeSpeed: 130,
        showCursor: true,
        cursorChar: '|',
        loop: false 
    });     
}

// =============================================== //





// =============================================== //
// /komponenten header und footer laden //  

loadComponents("header","components/header.html");
loadComponents("footer","components/footer.html");

async function loadComponents(selector, path){  

   const response = await fetch(path);
   const html = await response.text(); 
   const element = document.querySelector(selector);
   element.innerHTML = html;

}

// =============================================== //


// ====================================================//
// Interaktivität: Hamburger-Menü öffnen und schließen
//====================================================//

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburgerBtn.addEventListener('click', () => {
    // Schaltet die Klasse .active beim Button und der Navbar an oder aus
    hamburgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    
    // Barrierefreiheit: Teilt dem Screenreader mit, ob das Menü offen oder zu ist
    const isOpen = hamburgerBtn.classList.contains('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

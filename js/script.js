// =============================================== //  
// /index.html Begrüßung nach Zeit des Tages// 

const currentHour = new Date().getHours();
let Begruessung = "Ciao!";

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
// /komponenten header und footer laden //  

loadComponents("header", "components/header.html");
loadComponents("footer", "components/footer.html");

async function loadComponents(selector, path) {

    const response = await fetch(path);
    const html = await response.text();
    const element = document.querySelector(selector);
    element.innerHTML = html;

    if (selector === "header") {
        initThemeToggle();
        initHamburgerMenu();
        setActiveNavLink();
    }

}




// Interaktivität: Dark/Light Mode Toggle
//====================================================//

function initThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
        themeToggle.textContent = '🌑';
    } else {
        themeToggle.textContent = '☀️';
    }

    updateLogo();

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        const isLight = document.documentElement.classList.contains('light');

        themeToggle.textContent = isLight ? '🌑 ' : '☀️'

        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateLogo();
    });

}




// Logo wechseln je nach Modus
//====================================================//

function updateLogo() {
    const logo = document.getElementById('logo-img');
    if (!logo) return;
    const isLight = document.documentElement.classList.contains('light');
    logo.src = isLight ? 'images/logo2_light.webp' : 'images/logo1_dark.webp';
}




// Interaktivität: Hamburger-Menü öffnen und schließen
//====================================================//

function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('main-nav');

    if (!hamburgerBtn || !mobileNav) return;

    hamburgerBtn.addEventListener('click', () => {

        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');


        const isOpen = hamburgerBtn.classList.contains('active');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);

    });




    // Interaktivität: Scroll Animation Interessen-Boxen
    //====================================================//

    const beobachter = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.interessen-box').forEach(box => {
        beobachter.observe(box);
    });




    // Scroll Animation Projekt-Einträge
    //====================================================//

    const projektBeobachter = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.projekt-eintrag').forEach(eintrag => {
        projektBeobachter.observe(eintrag);
    });




    // Back to Top Button
    //====================================================//

    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}


// Makierung des aktiven Navigationslinks
//====================================================//

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}



// ====================================================//
// Cursor Linie
//====================================================//

const canvas = document.getElementById('cursor-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = [];
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        points.push({
            x: mouseX + (Math.random() - 0.5) * 2,
            y: mouseY + (Math.random() - 0.5) * 2,
            age: 0
        });
    });

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach(point => point.age++);

        const alive = points.filter(p => p.age < 10);
        points.length = 0;
        points.push(...alive);

        if (points.length > 1) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                const opacity = 1 - points[i].age / 10;
                const isLight = document.documentElement.classList.contains('light');
                const lineColor = isLight ? '15, 15, 27' : '208, 195, 244';
                ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
                ctx.lineWidth = 2;
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
        }

        requestAnimationFrame(drawTrail);
    }

    drawTrail();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

### Portfolio: Persönlicher Webauftritt (DLBUXPWP01)

<p>Dieses Projekt entsteht als Prüfungsleistung im Rahmen des Kurses <strong>Projekt: Web-Programmierung (DLBUXPWP01)</strong> an der IU Internationalen Hochschule. Es handelt sich um eine digitale Visitenkarte und ein persönliches Portfolio zur beruflichen und privaten Repräsentation.</p>

<ul>
    <li><strong>Studierender:</strong> Timotheus Beirer</li>
    <li><strong>Matrikelnummer:</strong> 3210997</li>
    <li><strong>Tutoren:</strong> Jurek Breuninger & Oliver Herrmann</li>
    <li><strong>Abgabedatum:</strong> 27.07.2026</li>
</ul>

<hr/>


<h2>1. Konzept & Zielsetzung</h2>

<p>Ziel des Projekts ist die Erstellung einer minimalistischen digitalen Visitenkarte. Die Website dient als zentrale Plattform, um Qualifikationen und Interessen kompakt zu präsentieren. Das Portfolio umfasst eine Hauptseite sowie vier themenspezifische Unterseiten, eine Curriculum Seite und eine 404 Seite.</p>


### Wireframes & Mockups

<ul>

  <li><strong>Papierskizzen</strong> — Low-Fidelity Entwürfe für Desktop Tablet und Mobile</li>

  <li><strong>Wireframes</strong> — Digitale Umsetzung in Figma für alle Breakpoints</li>

  <li><strong>Mockups</strong> — Visuelle Darstellung des finalen Designs in Figma (Desktop, Tablet, Mobile)</li>

  <li><strong>Annotationen</strong> — Beschreibungen einzelner UI-Elemente wie Navigation, Buttons und Layout-Bereiche</li>

</ul>


### Seiten

<ul>

   <li><strong>indes.html:</strong> Ciao-Bereich, Begrüßung, Name und persönliches Foto.</li>
    
   <li><strong>about.html:</strong> Persönliche Vorstellung und Standort (der Weg vom Koch zum UX-Designer).</li>

   <li><strong>curriculum.html</strong> — Vollständiger Lebenslauf mit Dark/Light Mode</li>
    
   <li><strong>interessen.html:</strong> Einblicke in persönliche Antreiber wie Kreativität, Musik und Kochen.</li>

   <li><strong>projekte.html:</strong> Persönliche Dokumentationen über den bisherigen Weg und die Verbindung von Kunst und Technik.</li>
    
   <li><strong>kontakt.html:</strong> Vernetzungsmöglichkeiten via E-Mail und Social Media.</li>

   <li><strong>404.html:</strong> Platzhalter für kommende Seiten.</li>

</ul>


<ul>

<h2>2. Technische Umsetzung & Features</h2>

### HTML & CSS Architektur

<ul>

  <li><strong>HTML5</strong> — Semantische Struktur mit <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;address&gt;</code>, <code>&lt;nav&gt;</code></li>

  <li><strong>CSS3</strong> — Flexbox & CSS Grid für Layout, Media Queries für Responsive Design</li>

  <li><strong>Responsivität</strong> — Optimierung für Endgeräte von 360px bis 1920px</li>

  <li><strong>Zwei Breakpoints</strong> — <code>767px</code> (Mobile) und <code>1024px</code> (Tablet)</li>

  <li><strong>Dark / Light Mode</strong> — via <code>html.light</code> Klasse, gespeichert in <code>localStorage</code></li>

  <li><strong>CSS-Variablen</strong> — Farben zentral definiert via <code>:root</code> und <code>var()</code></li>

  <li><strong>CSS Nesting</strong> — Interessen-Seite refaktoriert für bessere Lesbarkeit</li>

  <li><strong>Komponenten-System</strong> — Header & Footer als separate Dateien, dynamisch via <code>fetch()</code> geladen</li>

  <li><strong>Hover nur auf Desktop</strong> — <code>@media (hover: hover)</code> verhindert Hover-Effekte auf Touch-Geräten</li>

  <li><strong>CSS-Kommentare</strong> — strukturierte Kommentierung aller Sektionen</li>

  <li><strong>Favicon</strong> — individuelles Icon im Browser-Tab</li>

  <li><strong>Meta Description</strong> — SEO-Optimierung auf allen Seiten</li>

</ul>


### Typografie

<ul>
  <li><strong>Urbanist</strong> — für alle Überschriften (H1–H6), modernes und markantes Profil</li>

  <li><strong>Inter</strong> — für Fließtext, hervorragende Lesbarkeit</li>

  <li>Schriftgrößen responsiv: Desktop 20px / Tablet 18px / Mobile 16px</li>


### Farbkonzept

<ul>

Rolle                   Dark Mode.            Light Mode

Hintergrund             #0F0F1B             #D7D7D7

Primärer Text.          #F1F1F3             #0F0F1B

Überschriften & Hover.  #D0C3F4             #5024BD

CTA-Buttons & Akzente.  #FFC224             #FFC224

</ul>


### Interaktivität (JavaScript)

<ul>

<li><strong>**Dark/Light Mode Toggle** — wechselt Farbschema und speichert Auswahl in `localStorage`</li>

<li><strong>**Logo-Wechsel** — `updateLogo()` tauscht Logo automatisch je nach aktivem Modus</li>

<li><strong>Favicon</strong> — individuelles oranges T-Icon im Browser-Tab</li>

<li><strong>**Zeitbasierte Begrüßung** — zeigt Guten Morgen / Ciao / Guten Abend je nach Tageszeit</li>

<li><strong>**Typewriter-Effekt** — animierter Text auf der Startseite via Typed.js</li>

<li><strong>**Hamburger-Menü** — öffnet/schließt mobile Navigation mit `aria-expanded`</li>


</ul>


### Micro-Animationen

<ul>

  <li><strong>Interessen-Boxen</strong> — fliegen beim Scrollen von links rein via <code>IntersectionObserver</code></li>

  <li><strong>Projekt-Einträge</strong> — blenden beim Scrollen sanft ein</li>

  <li><strong>Kontakt-Icons</strong> — bewegen sich beim Hover nach oben</li>

  <li><strong>Curriculum-Einträge</strong> — heben sich beim Hover nach oben</li>

  <li><strong>Bewegender Punkt</strong> — animierter CSS Punkt auf der Kontakt-Seite, führt zur 404-Seite</li>

  <li><strong>Logo-Animation</strong> — skaliert und rotiert beim Hover</li>

  <li><strong>Projekt-Einträge Hover</strong> — Projekteinträge heben sich beim Hover auf Desktop nach oben</li>

  <li><strong>Custom Cursor Linie</strong> — betrunkene Linie folgt dem Mauszeiger via Canvas API, wechselt Farbe je nach Dark/Light Mode</li>


</ul>


### Barrierefreiheit (WCAG)

<ul>

<li><strong>`aria-label` auf Navigation, Buttons und Links</li>

<li><strong>`aria-expanded` auf dem Hamburger-Button</li>

<li><strong>`alt`-Attribute auf allen Bildern</li>

<li><strong>Kontrastverhältnis 16.9:1 (Dark Mode) und 11.6:1 (Light Mode) — WCAG AA/AAA</li>

<li><strong>`rel="noopener"` auf allen externen Links</li>

<li><strong>Webauftritt mit Lighthouse überprüft</li>

</ul>

<h2>3. JavaScript — Code-Erklärungen</h2>


### Zeitbasierte Begrüßung & Typewriter-Effekt

<p>Mit <code>new Date().getHours()</code> wird die aktuelle Uhrzeit des Nutzers ausgelesen und je nach Tageszeit eine passende Begrüßung gesetzt. Die Bibliothek Typed.js animiert den Text dann Zeichen für Zeichen auf der Startseite.</p>


### Komponenten-System via fetch()

<p>Header und Footer werden als separate HTML-Dateien ausgelagert und beim Laden der Seite dynamisch via <code>fetch()</code> geladen. Das verhindert doppelten Code und ermöglicht eine zentrale Verwaltung der Navigation.</p>


### Dark/Light Mode Toggle

<p>Beim Klick auf den Toggle-Button wird die Klasse <code>light</code> auf dem <code>html</code>-Element ein- oder ausgeschaltet. Die Auswahl wird in <code>localStorage</code> gespeichert, sodass der Modus beim nächsten Besuch erhalten bleibt.</p>


### Logo-Wechsel via updateLogo()

<p>Die Funktion <code>updateLogo()</code> prüft ob die Klasse <code>light</code> aktiv ist und tauscht das Logo-Bild automatisch — dunkles Logo für Dark Mode, helles Logo für Light Mode.</p>


### Hamburger-Menü

<p>Beim Klick auf den Hamburger-Button wird die Klasse <code>active</code> auf Button und Navigation umgeschaltet. Das Attribut <code>aria-expanded</code> wird dabei dynamisch angepasst für bessere Barrierefreiheit.</p>


### Scroll-Animationen via IntersectionObserver

<p>Der <code>IntersectionObserver</code> erkennt wann ein Element im sichtbaren Bereich erscheint und fügt die Klasse <code>visible</code> hinzu. Mit einer Verzögerung via <code>setTimeout</code> werden die Elemente nacheinander animiert.</p>


### Back-to-top Button

<p>Beim Scrollen wird geprüft ob der Nutzer mehr als 300px nach unten gescrollt hat. Falls ja, erscheint der Button. Per Klick scrollt <code>window.scrollTo()</code> mit <code>behavior: 'smooth'</code> sanft zurück nach oben.</p>
<hr/>

### Navigation Aktiv auf aktueller Seite

<li><strong>Aktiver Navigationslink</strong> — die aktuelle Seite wird in der Navbar automatisch via <code>setActiveNavLink()</code> hervorgehoben und unterstrichen</li>

### Cursor Linie mit Canvas

<h3>Custom Cursor Linie via Canvas</h3>
<p>Ein <code>&lt;canvas&gt;</code> Element überlagert die gesamte Seite. Bei jeder Mausbewegung werden Punkte gespeichert und als Linie gezeichnet via <code>ctx.strokeStyle</code>. Mit <code>requestAnimationFrame</code> wird die Linie kontinuierlich neu gezeichnet und ältere Punkte verblassen automatisch. Die Linienfarbe wechselt automatisch je nach Dark/Light Mode.</p>


<h2>4. Projektstruktur</h2>

<pre><code>
/
---index.html
|
---about.html
|
---interessen.html
|
---projekt.html
|
---kontakt.html
|
---curriculum.html
|
---404.html
|
---css/
    |____style.css
    |____fonts.css
|
---js/
    |____script.js
|
---components/
    |____header.html
    |____footer.html
|
---fonts/
---images/
</code></pre>

<hr/>


<h2>5. Projektorganisation</h2>

<ul>
  <li>Versionsverwaltung via <strong>Git & GitHub</strong></li>

  <li>60+ Commits mit konventionellen Commit-Messages</li>

  <li>Git Tags für alle 3 Projektphasen (<code>phase-1</code>, <code>phase-2</code>, <code>phase-3</code>)</li>

  <li>Kontinuierliche Weiterentwicklung über alle drei Projektphasen</li>
</ul>

<hr/>

<h2>6. Besondere Leistungen</h2>

<p>Diese Punkte möchte ich besonders zur Bewertung hervorheben:</p>
<ul>
  <li><strong>Dark / Light Mode</strong> — vollständig implementiert mit <code>localStorage</code> und automatischem Logo-Wechsel via <code>updateLogo()</code></li>

  <li><strong>CSS Variablen</strong> — alle Farben zentral in <code>:root</code> definiert, konsistente Verwendung via <code>var()</code></li>

  <li><strong>CSS Nesting</strong> — Nur mit dem Interessen-Seite Code Block als Beispiel für modernes CSS Refactoring, da diese Arbeit viel Zeit in Anspruch genommen hat</li>

  <li><strong>Barrierefreiheit</strong> — Lighthouse Accessibility Score: 100/100, WCAG AA/AAA konform</li>

  <li><strong>Scroll Animationen</strong> — Interessen-Boxen und Projekt-Einträge via <code>IntersectionObserver</code></li>

  <li><strong>Curriculum Seite</strong> — vollständiger Lebenslauf als eigene HTML-Seite mit Dark/Light Mode</li>

  <li><strong>Back-to-top Button</strong> — erscheint beim Scrollen, nur auf Desktop & Tablet sichtbar</li>

  <li><strong>Favicon</strong> — individuelles Icon im Browser-Tab, Logo erstellt mit Figma</li>

  <li><strong>Typewriter Effekt</strong> — zeitbasierte Begrüßung via Typed.js</li>
 
  <li><strong>Kontakt Seite</strong> - Social Media Logos gehn hoch beim hovern</li>

  <li><strong>404-Seite</strong> — individuelle Work-in-Progress Seite mit animiertem CSS Punkt und Glitch-Effekt auf dem Titel</li>

  <li><strong>Aktiver Navigationslink</strong> — <code>setActiveNavLink()</code> erkennt automatisch welche Seite aktiv ist und hebt den entsprechenden Link hervor</li>

</ul>
<hr/>


<h2>7. Quellen & Referenzen</h2>

### JavaScript & Web APIs

<ul>

  <li><strong>IntersectionObserver</strong> — Scroll-Animationen<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">MDN — Intersection Observer API</a></li>

  <li><strong>fetch()</strong> — Dynamisches Laden von Komponenten<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">MDN — Fetch API</a></li>

  <li><strong>localStorage</strong> — Speicherung des Dark/Light Mode<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">MDN — localStorage</a></li>

  <li><strong>window.scrollTo()</strong> — Back-to-top Button<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo">MDN — Window.scrollTo()</a></li>

  <li><strong>Typed.js</strong> — Typewriter-Effekt<br>
  <a href="https://mattboldt.github.io/typed.js/">Typed.js Dokumentation</a></li>

  <li><strong>Canvas API & requestAnimationFrame</strong> — Custom Cursor Linie<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">MDN — Canvas API</a></li>

</ul>



### CSS

<ul>
  <li><strong>CSS Custom Properties</strong> — <code>:root</code> und <code>var()</code><br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">MDN — CSS Custom Properties</a></li>

  <li><strong>CSS Nesting</strong> — modernes CSS Refactoring<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting">MDN — CSS Nesting</a></li>

  <li><strong>@keyframes</strong> — CSS Animationen<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes">MDN — @keyframes</a></li>

  <li><strong>@media (hover: hover)</strong> — Hover nur auf Desktop<br>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover">MDN — hover Media Feature</a></li>

</ul>



### Barrierefreiheit

<ul>
  <li><strong>WCAG 2.1</strong> — Richtlinien für barrierefreies Webdesign<br>
  <a href="https://www.w3.org/WAI/WCAG21/quickref/">W3C — WCAG 2.1 Quick Reference</a></li>

  <li><strong>Kontrast-Test</strong><br>
  <a href="https://barrierefreies.design">barrierefreies.design</a></li>
</ul>



### Allgemeine Referenzen

<ul>
  <li><strong>W3Schools</strong> — HTML, CSS und JavaScript Referenz<br>
  <a href="https://www.w3schools.com/">w3schools.com</a></li>

  <li><strong>MDN Web Docs</strong> — Technische Dokumentation<br>
  <a href="https://developer.mozilla.org/">developer.mozilla.org</a></li>

</ul>
<hr/>


<p>© 2026 Timotheus Beirer</p>

</ul>



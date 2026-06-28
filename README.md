# Portfolio: Persönlicher Webauftritt (DLBUXPWP01)

<p>Dieses Projekt entsteht als Prüfungsleistung im Rahmen des Kurses <strong>Projekt: Web-Programmierung (DLBUXPWP01)</strong> an der IU Internationalen Hochschule. Es handelt sich um eine digitale Visitenkarte und ein persönliches Portfolio zur beruflichen und privaten Repräsentation.</p>

<ul>
    <li><strong>Studierender:</strong> Timotheus Beirer</li>
    <li><strong>Matrikelnummer:</strong> 3210997</li>
    <li><strong>Tutoren:</strong> Jurek Breuninger & Oliver Herrmann</li>
    <li><strong>Abgabedatum:</strong> 01.06.2026</li>
</ul>

<hr/>

## Konzept & Zielsetzung
<p>Ziel des Projekts ist die Erstellung einer minimalistischen Visitenkarte. Die Website dient als zentrale Plattform, um Qualifikationen und Interessen kompakt zu präsentieren..</p>

### Struktur & Seitenumfang
<p>Das Portfolio ist als mehrseitiger Webauftritt konzipiert und umfasst eine Hauptseite sowie vier themenspezifische Unterseiten und eine 404 Seite. Ziel ist es auch nocht im weiteresn Verlauf des Projektes eventuell 2 weitere Seiten hinzuzufügen. Im Moment bleibt es bei vier Unterseiten plus der Hauptseite und 404-Seite, da der Fokus noch auf den Hauptkriterien der Aufgabenstellung liegt, anstatt inhaltlich auszuschweifen. Der Header beinhaltet das Logo sowie eine konsistente Navigationsleiste zur einfachen Orientierung.</p>

### Seiten

<ul>

   <li><strong>indes.html:</strong> Ciao-Bereich, Begrüßung, Name und persönliches Foto.</li>
    
   <li><strong>about.html:</strong> Persönliche Vorstellung und Standort (der Weg vom Koch zum UX-Designer).</li>
    
   <li><strong>interessen.html:</strong> Einblicke in persönliche Antreiber wie Kreativität, Musik und Kochen.</li>

   <li><strong>projekte.html:</strong> Persönliche Dokumentationen über den bisherigen Weg und die Verbindung von Kunst und Technik.</li>
    
   <li><strong>kontakt.html:</strong> Vernetzungsmöglichkeiten via E-Mail und Social Media.</li>

   <li><strong>404.html:</strong> Platzhalter für kommende Seiten.</li>

</ul>


<ul>

<h2>Technische Umsetzung & Features</h2>

<h3>1. HTML & CSS Architektur</h3>

<ul>

  <li><strong>HTML5</strong> — Semantische Struktur mit <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;address&gt;</code>, <code>&lt;nav&gt;</code></li>

  <li><strong>CSS3</strong> — Flexbox & CSS Grid für Layout, Media Queries für Responsive Design</li>

  <li><strong>Zwei Breakpoints</strong> — <code>767px</code> (Mobile) und <code>1024px</code> (Tablet)</li>

  <li><strong>Dark / Light Mode</strong> — via <code>html.light</code> Klasse, gespeichert in <code>localStorage</code></li>

  <li><strong>Komponenten-System</strong> — Header & Footer als separate Dateien, dynamisch via <code>fetch()</code> geladen</li>

  <li><strong>Hover nur auf Desktop</strong> — <code>@media (hover: hover)</code> verhindert Hover-Effekte auf Touch-Geräten</li>

  <li><strong>CSS-Kommentare</strong> — strukturierte Kommentierung aller Sektionen</li>

</ul>


### Interaktivität (JavaScript)
<ul>

<li><strong>**Dark/Light Mode Toggle** — wechselt Farbschema und speichert Auswahl in `localStorage`</li>

<li><strong>**Logo-Wechsel** — `updateLogo()` tauscht Logo automatisch je nach aktivem Modus</li>

<li><strong>**Zeitbasierte Begrüßung** — zeigt Guten Morgen / Ciao / Guten Abend je nach Tageszeit</li>

<li><strong>**Typewriter-Effekt** — animierter Text auf der Startseite via Typed.js</li>

<li><strong>**Hamburger-Menü** — öffnet/schließt mobile Navigation mit `aria-expanded`</li>

</ul>

### Wireframes & Mockups

<ul>
  <li><strong>Papierskizzen</strong> — Low-Fidelity Entwürfe für Desktop, Tablet und Mobile</li>
  <li><strong>Wireframes</strong> — Digitale Umsetzung in Figma für alle Breakpoints</li>
  <li><strong>Mockups</strong> — Visuelle Darstellung des finalen Designs in Figma (Desktop, Tablet, Mobile)</li>
  <li><strong>Annotationen</strong> — Als zusätzliche Ergänzung wurden im Konzept Annotationen zu den Wireframes hinzugefügt, die einzelne UI-Elemente wie Navigation, Buttons und Layout-Bereiche gezielt beschreiben und deren Funktion erläutern.</li>
</ul>

### Barrierefreiheit (WCAG)
<ul>

<li><strong>`aria-label` auf Navigation, Buttons und Links</li>

<li><strong>`aria-expanded` auf dem Hamburger-Button</li>

<li><strong>`alt`-Attribute auf allen Bildern</li>

<li><strong>Kontrastverhältnis 16.9:1 (Dark Mode) und 11.6:1 (Light Mode) — WCAG AA/AAA</li>

<li><strong>`rel="noopener"` auf allen externen Links</li>

</ul>


### Farbkonzept

<ul>

Rolle                   Dark Mode.            Light Mode

Hintergrund             #0F0F1B             #D7D7D7

Primärer Text.          #F1F1F3             #0F0F1B

Überschriften & Hover.  #D0C3F4             #5024BD

CTA-Buttons & Akzente.  #FFC224             #FFC224

</ul>

<hr />

### Typografie


<p> <ul>
  <li><strong>Urbanist</strong> — für alle Überschriften (H1–H6), modernes und markantes Profil</li>
  <li><strong>Inter</strong> — für Fließtext, hervorragende Lesbarkeit</li>
  <li>Schriftgrößen responsiv je nach Gerät: Desktop 20px Body / Tablet 18px / Mobile 16px</li>
</ul> 
</p>


### Projektorganisation
<ul>

- Versionsverwaltung via **Git & GitHub**

- Regelmäßige Commits mit beschreibenden Commit-Messages

- Kontinuierliche Weiterentwicklung über alle drei Projektphasen

</ul>

<p>Die gesamte Versionsverwaltung, Protokollierung des Entwicklungsfortschritts und die Bereitstellung der Live-Vorschau erfolgen kontinuierlich über Git und GitHub.</p>

<p><h1>Im Laufe des Projekts können Änderungen vorgenommen werden!</h1></p>

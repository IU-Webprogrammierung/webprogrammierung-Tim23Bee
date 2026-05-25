# Portfolio: Persönlicher Webauftritt (DLBUXPWP01)

<p>Dieses Projekt entsteht als Prüfungsleistung im Rahmen des Kurses <strong>Projekt: Web-Programmierung (DLBUXPWP01)</strong> an der IU Internationalen Hochschule. Es handelt sich um eine digitale Visitenkarte und ein persönliches Portfolio zur beruflichen und privaten Repräsentation.</p>

<ul>
    <li><strong>Studierender:</strong> Timotheus Beirer</li>
    <li><strong>Matrikelnummer:</strong> 3210997</li>
    <li><strong>Tutoren:</strong> Jurek Breuninger & Oliver Herrmann</li>
    <li><strong>Abgabedatum:</strong> 01.06.2026</li>
</ul>

<hr />

## Konzept & Zielsetzung
<p>Ziel des Projekts ist die Erstellung einer minimalistischen, intuitiv bedienbaren digitalen Visitenkarte. Die Website dient als zentrale Plattform, um Qualifikationen und Interessen kompakt zu präsentieren. Das Design folgt einem minimalistischen Ansatz, um eine intuitive Benutzerführung zu gewährleisten.</p>

### Struktur & Seitenumfang
<p>Das Portfolio ist als mehrseitiger Webauftritt konzipiert und umfasst eine Hauptseite sowie vier themenspezifische Unterseiten. Ziel ist es auch nocht im weiteresn Verlauf des Projektes eventuell 2 weitere Seiten hinzuzufügen. Im Moment bleibt es bei vier Unterseiten plus der Hauptseite, da der Fokus noch auf den Hauptkriterien der Aufgabenstellung liegt, anstatt inhaltlich auszuschweifen. Der Header beinhaltet das Logo sowie eine konsistente Navigationsleiste zur einfachen Orientierung.</p>

<ul>

   <li><strong>Home:</strong> Ciao-Bereich, Begrüßung, Name und persönliches Foto.</li>
    
   <li><strong>Über mich:</strong> Persönliche Vorstellung und Standort (der Weg vom Koch zum UX-Designer).</li>
    
   <li><strong>Interessen:</strong> Einblicke in persönliche Antreiber wie Kreativität, Musik und Kochen.</li>

   <li><strong>Projekte:</strong> Persönliche Dokumentationen über den bisherigen Weg und die Verbindung von Kunst und Technik.</li>
    
   <li><strong>Kontakt:</strong> Vernetzungsmöglichkeiten via E-Mail und Social Media.</li>
</ul>

<hr />

## Technische Umsetzung & Features

### 1. HTML & CSS Architektur

<ul>

   <p><li><strong>Semantischer Code:</strong> Logischer Aufbau mittels HTML-Strukturelemente wie Header, Nav, Main und Footer.</li></p>

   <p><li><strong>Layout-Techniken:</strong> Einsatz von Flexbox für die dynamische Steuerung der Navigation und von Sektionsinhalten sowie CSS Grid für das flexible Spalten-Gestaltungsraster.</li></p>
    
   <p><li><strong>Responsivität:</strong> Optimiert für beliebige Ausgabegeräte von einer Mindestbreite von 360 Pixeln bis zu einer Maximalbreite von 1920 Pixeln mittels gezielter Media Queries.</li></p>
    
   <p><li><strong>Breakpoints:</strong> Bei einer Bildschirmbreite unter 768 Pixeln greift das einspaltige, platzsparende Mobile-Layout. Zwischen 768 Pixeln und 1024 Pixeln wird ein zweispaltiges Raster für gängige Tablet-Auflösungen aktiviert. Ab einer Breite von 1025 Pixeln schaltet die Seite in das vollflächige, mehrspaltige Desktop-Grid-System um.</li></p>
    
   <p><li><strong>Typografie:</strong> Dynamische Skalierung der Schriftgrößen (Fluid Typography) über die Breakpoints hinweg. Als Schriftarten kommen Urbanist für prägnante Überschriften und Inter für optimale Lesbarkeit im Fließtext zum Einsatz.</li></p>

</ul>

### 2. Interaktivität (JavaScript)
<ul>

<p><li><strong>Dynamische Begrüßung:</strong> Ein skriptbasiertes Feature zur zeitabhängigen Anpassung des Begrüßungstextes auf der Startseite, welches passend zur Tageszeit zwischen „Guten Morgen!“, „Ciao!“ und „Guten Abend!“ wechselt.</li></p>

<p><li><strong>Dark/Light Mode (Barrierefreiheit):</strong> Ein manueller Kontrast-Umschalter in der Navigationsleiste. Die getroffene Auswahl des Nutzers wird über das <code>localStorage</code>-Objekt im Browser dauerhaft gespeichert, sodass der Modus auch bei einem Seitenwechsel aktiv bleibt.</li></p>

<p><li><strong>Mikro-Interaktionen:</strong> Visuelles Feedback zur intuitiven Benutzerführung durch feine CSS- und JavaScript-Effekte wie sanfte Farbwechsel bei Buttons, animierte Unterstreichungen und dynamische Pfeilbewegungen bei Hover-Zuständen.</li></p>

</ul>

### 3. Barrierefreiheit (WCAG)
<ul>
   <p><li>Strikte Einhaltung kontrastreicher Farbkombinationen, um die barrierefreie Lesbarkeit aller Textelemente zu garantieren.</li></p>

   <p><li>Konsequenter und sinnvoller Einsatz von beschreibenden <code>alt</code>-Attributen bei sämtlichen eingebundenen Bildern und Grafiken.</li></p>

   <p><li>Gewährleistung einer logischen und fehlerfreien Hierarchie der Überschriften (von H1 bis H3) zur optimalen Interpretation durch Screenreader.</li></p>
</ul>

<hr />

## 📁 Projektorganisation
<ul>
    <p><li><strong>index.html:</strong> Die zentrale Startseite des Webauftritts (Home-Bereich).</li></p>
    <p><li><strong>Unterseiten:</strong> Separate HTML-Dateien für die Bereiche ueber-mich.html, interessen.html, projekte.html und kontakt.html.</li></p>
    <p><li><strong>css/</strong> Ein dedizierter Stylesheet-Ordner wird noch im laufe des Projektes erstellt die zur modularen Aufteilung des CSS-Codes in base.css, layout.css und components.css, welche in der zentralen style.css zusammengeführt werden.</li></p>
    <p><li><strong>assets/ / images/</strong> Zentraler Ressourcen-Ordner für die strukturierte Ablage von Bildern, Icons und den gestalterischen Grafikwellen.</li></p>
</ul>

<p>Die gesamte Versionsverwaltung, Protokollierung des Entwicklungsfortschritts und die Bereitstellung der Live-Vorschau erfolgen kontinuierlich über Git und GitHub.</p>

<p><h1>Im Laufe des Projekts können Änderungen vorgenommen werden!</h1></p>

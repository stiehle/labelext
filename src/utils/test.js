function adjustFontSize() {
  const divElement = document.querySelector(".div-container");
  const paragraphElement = divElement.querySelector("p");

  if (divElement && paragraphElement) {
    const divWidth = divElement.offsetWidth;
    const divHeight = divElement.offsetHeight;
    let fontSize = parseFloat(window.getComputedStyle(paragraphElement).fontSize);

    while (paragraphElement.offsetWidth > divWidth || paragraphElement.offsetHeight > divHeight) {
      fontSize -= 1; // Verkleinere die Schriftgröße schrittweise
      paragraphElement.style.fontSize = `${fontSize}px`;
      if (fontSize <= 1) {
        // Sicherheitsvorkehrung, um Endlosschleifen zu vermeiden
        break;
      }
    }

    // Optional: Erhöhe die Schriftgröße wieder, solange es Platz gibt (für initiale Anpassung)
    fontSize = parseFloat(window.getComputedStyle(paragraphElement).fontSize);
    while (paragraphElement.offsetWidth < divWidth - 5 && paragraphElement.offsetHeight < divHeight - 5) {
      fontSize += 1;
      paragraphElement.style.fontSize = `${fontSize}px`;
      if (fontSize >= 100) {
        // Sicherheitsvorkehrung
        break;
      }
      // Kurze Pause, um Layout-Neuberechnungen zu ermöglichen
      // Kann je nach Browser und Komplexität angepasst werden
      if (paragraphElement.offsetWidth >= divWidth || paragraphElement.offsetHeight >= divHeight) {
        fontSize -= 1;
        paragraphElement.style.fontSize = `${fontSize}px`;
        break;
      }
    }
  }
}

// Rufe die Funktion beim Laden der Seite und bei Fenstergrößenänderungen auf
window.onload = adjustFontSize;
window.addEventListener("resize", adjustFontSize);

// Rufe die Funktion auch auf, wenn sich der Inhalt des p-Elements dynamisch ändert (falls zutreffend)
// Beispiel:
// paragraphElement.addEventListener('DOMSubtreeModified', adjustFontSize);

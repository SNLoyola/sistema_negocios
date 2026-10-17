const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const triggers = accordion.querySelectorAll(
    ".accordion__trigger"
  );

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panelId = trigger.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);

      const isOpen =
        trigger.getAttribute("aria-expanded") === "true";

      // Cerramos todos los paneles del acordeón.
      triggers.forEach((otherTrigger) => {
        const otherPanelId =
          otherTrigger.getAttribute("aria-controls");

        const otherPanel =
          document.getElementById(otherPanelId);

        otherTrigger.setAttribute("aria-expanded", "false");
        otherPanel.hidden = true;


      });

      // Si estaba cerrado, abrimos el panel seleccionado.
      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;


      }
    });
  });
});
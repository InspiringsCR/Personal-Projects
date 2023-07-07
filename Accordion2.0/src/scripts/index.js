function setupAccordion() {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
        const accordionBody = title.nextElementSibling;
        accordionBody.classList.toggle('collapsed');
        });
    });
}
  
  // Llama a la función setupAccordion cuando se cargue el documento
document.addEventListener('DOMContentLoaded', () => {
setupAccordion();
});

  // Obtener referencias a los elementos relevantes
const openAllButton = document.getElementById('openAllButton');
const collapseAllButton = document.getElementById('collapseAllButton');
const accordionBodies = document.querySelectorAll('.accordion-body');

// Agregar evento de clic al botón "Abrir Todos"
openAllButton.addEventListener('click', () => {
  accordionBodies.forEach(body => {
    body.classList.remove('collapsed');
  });
});

// Agregar evento de clic al botón "Colapsar Todos"
collapseAllButton.addEventListener('click', () => {
  accordionBodies.forEach(body => {
    body.classList.add('collapsed');
  });
});
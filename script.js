document.addEventListener("DOMContentLoaded", () => {
  const contractBtn = document.getElementById('contractBtn');
  const modalForm = document.getElementById('modalForm');
  const overlay = document.getElementById('overlay');

  if (contractBtn && modalForm && overlay) {
      // Muestra el modal al hacer clic en el botón "Contratar"
      contractBtn.addEventListener('click', () => {
          modalForm.classList.add('show');
          overlay.classList.add('show');
      });

      // Oculta el modal al hacer clic en el overlay
      overlay.addEventListener('click', () => {
          modalForm.classList.remove('show');
          overlay.classList.remove('show');
      });
  } else {
      console.error("No se encontraron los elementos necesarios para el modal.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menuDropdown = document.getElementById("menuDropdown");

  // Muestra u oculta el menú al hacer clic en el botón
  menuButton.addEventListener("click", () => {
      const isVisible = menuDropdown.style.display === "block";
      menuDropdown.style.display = isVisible ? "none" : "block";
  });

  // Cierra el menú si se hace clic fuera de él
  window.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
          menuDropdown.style.display = "none";
      }
  });
});

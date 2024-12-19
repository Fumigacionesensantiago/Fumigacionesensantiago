document.addEventListener("DOMContentLoaded", () => {
    // Variables para el modal de "Contratar"
    const contractBtn = document.getElementById('contractBtn');
    const modalForm = document.getElementById('modalForm');
    const overlay = document.getElementById('overlay');

    if (contractBtn && modalForm && overlay) {
        // Muestra el modal al hacer clic en "Contratar"
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
        console.error("No se encontraron los elementos necesarios para el modal de contratación.");
    }

    // Variables para el menú
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    if (menuButton && menuDropdown) {
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
    } else {
        console.error("No se encontraron los elementos necesarios para el menú.");
    }

    // Modal de contacto
    const contactModal = document.getElementById('contactModal');
    const modalBackground = document.getElementById('modalBackground');
    const openContactModalBtn = document.getElementById('contactModalBtn');
    const closeContactModalBtn = document.getElementById('closeModalBtn');

    if (contactModal && modalBackground && openContactModalBtn && closeContactModalBtn) {
        // Abre el modal de contacto
        openContactModalBtn.addEventListener('click', () => {
            contactModal.style.display = 'block';
            modalBackground.style.display = 'block';
        });

        // Cierra el modal de contacto
        closeContactModalBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
            modalBackground.style.display = 'none';
        });

        // Cierra el modal si se hace clic fuera de él
        modalBackground.addEventListener('click', () => {
            contactModal.style.display = 'none';
            modalBackground.style.display = 'none';
        });
    } else {
        console.error("No se encontraron los elementos necesarios para el modal de contacto.");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const contactModalBtn = document.getElementById("contactModalBtn");
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    // Abrir el modal cuando se hace clic en el botón
    contactModalBtn.addEventListener("click", () => {
        contactModal.style.display = "block";
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeModal.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });
});

// CAFÉ ORIGEN — navegación móvil, filtros del menú y año automático

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const navLinks = primaryNav.querySelectorAll("a");

  // Abrir y cerrar el menú en dispositivos móviles.
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    primaryNav.classList.toggle("open", !isOpen);
  });

  // Cerrar el menú al seleccionar una sección.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });

  // Filtrar productos por categoría.
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      productCards.forEach((card) => {
        const shouldShow =
          selectedCategory === "todos" ||
          card.dataset.category === selectedCategory;

        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  // Mantener actualizado el año del pie de página.
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

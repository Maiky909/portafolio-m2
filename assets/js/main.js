document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");

  // Función para activar el enlace correspondiente en la navegación
  function activateNavLink(scrollPos) {
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const link = document.querySelector(
        `.navbar-nav a[href="#${section.id}"]`
      );

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  // Función para manejar el scroll
  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    activateNavLink(scrollPos);

    // Manejar el caso cuando estás en la parte superior de la página
    if (window.scrollY === 0) {
      navLinks.forEach((item) => item.classList.remove("active"));
      document
        .querySelector('.navbar-nav a[href="#home"]')
        .classList.add("active");
    }
  }

  // Función para inicializar el evento de clic en los enlaces de navegación
  function initNavLinkClick() {
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // Función para manejar el scroll suave al hacer clic en el botón de contacto
  function btnContacto(buttonId, sectionId) {
    document.getElementById(buttonId).addEventListener("click", () => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  }

  // Función para manejar el envío del formulario
  function initFormSubmit() {
    const form = document.getElementById("formContacto");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío real del formulario

      // Mostrar el modal de confirmación
      const enviadoModal = new bootstrap.Modal(
        document.getElementById("enviadoModal")
      );
      enviadoModal.show();

      form.reset();
    });
  }

  // Inicialización de eventos y funciones
  window.addEventListener("scroll", onScroll);
  initNavLinkClick();
  btnContacto("contactame", "contacto");
  initFormSubmit();

  // Inicializa el estado correcto al cargar la página
  onScroll();
});

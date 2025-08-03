// Interacciones para la página de teclados futurista con más animaciones y carrito

document.addEventListener("DOMContentLoaded", () => {
  // Animación de aparición futurista
  const animatedSections = document.querySelectorAll(".animate-futuristic");
  animatedSections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.3}s`;
    section.classList.add("visible");
  });

  // Filtro de productos por categoría
  const filtros = document.querySelectorAll(".filtro-btn");
  const productos = document.querySelectorAll(".card");

  filtros.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoria = btn.getAttribute("data-categoria");
      productos.forEach((producto) => {
        if (categoria === "todos" || producto.classList.contains(categoria)) {
          producto.style.display = "block";
          producto.classList.add("animate-fadeIn");
        } else {
          producto.style.display = "none";
        }
      });
    });
  });

  // Mostrar detalles en hover
  productos.forEach((producto) => {
    producto.addEventListener("mouseenter", () => {
      producto.classList.add("hovered");
    });
    producto.addEventListener("mouseleave", () => {
      producto.classList.remove("hovered");
    });
  });

  // Carrito simple
  const carrito = [];
  const botonesAgregar = document.querySelectorAll(".btn-agregar");

  botonesAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const nombre = card.querySelector("h3").innerText;
      const precio = card.querySelector(".precio, .precio-descuento").innerText;

      carrito.push({ nombre, precio });
      alert(`${nombre} fue agregado al carrito!`);

      actualizarCarritoVisual();
    });
  });

  function actualizarCarritoVisual() {
    const carritoContainer = document.getElementById("carrito-lista");
    if (!carritoContainer) return;
    carritoContainer.innerHTML = "";
    carrito.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - ${item.precio}`;
      carritoContainer.appendChild(li);
    });
  }

  // Animaciones de entrada al hacer scroll
  const fadeElements = document.querySelectorAll(".fade-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-fade");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  fadeElements.forEach((el) => observer.observe(el));
});
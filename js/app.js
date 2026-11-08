/*
  =========================
  Catálogo digital - plantilla reutilizable (JavaScript puro)
  =========================

  CÓMO CREAR EL CATÁLOGO DE OTRO NEGOCIO:
  1) Editá SOLO la sección "CONFIGURACIÓN DEL NEGOCIO" (objeto `business`).
  2) Editá la sección "PRODUCTOS" (array `products`).
  No hace falta buscar en otros archivos para estos datos.

  Notas:
  - whatsappNumber: con código de país, sin +, espacios ni guiones. Ej.: "5491123456789"
  - primaryColor: color principal en formato HEX (ej.: "#2563eb"). Se aplica automáticamente.
  - currency: código ISO de moneda (ARS, USD, MXN, CLP, etc.).
  - locale: formato regional para precios (es-AR, es-MX, es-CL, en-US, etc.).
*/

(function initCatalog() {
  // =========================================================
  // CONFIGURACIÓN DEL NEGOCIO (modificá solo esta sección)
  // =========================================================
  const business = {
    name: "Urban Secret",
    description:
      "Lo mejor en gaming consolas, mandos y demas.",
    // Logo opcional: ruta local (ej. "assets/images/logo.png") o URL externa.
    // Si lo dejás vacío (""), se muestra solo el nombre del negocio.
    logo: "",
    whatsappNumber: "5491100000000", // <-- CAMBIAR por el número real
    primaryColor: "#2563eb", // <-- Color principal del catálogo
    currency: "ARS", // Moneda: ARS, USD, MXN, CLP...
    locale: "es-AR", // Formato regional de precios
  };

  // 2) Productos de ejemplo (podés cambiarlos fácilmente)
  // badge (opcional): "Oferta", "Nuevo" o "Destacado". Si no la ponés (o la dejás vacía), no aparece.
  const products = [
    {
      id: 1,
      name: "PlayStation 5",
      price: 1400000,
      category: "Consolas",
      description: "Consola de nueva generación con gráficos avanzados y carga ultrarrápida.",
      image: "assets/images/ps5.jpg",
      badge: "Destacado",
    },
    {
      id: 2,
      name: "Xbox Series S",
      price: 800000,
      category: "Consolas",
      description: "Consola compacta next-gen, ideal para jugar en digital con gran rendimiento.",
      image: "assets/images/series s.jpg",
      badge: "Oferta",
    },
    {
      id: 3,
      name: "Nintendo Switch",
      price: 580000,
      category: "Consolas",
      description: "Consola híbrida para jugar en modo portátil o conectado a la TV.",
      image: "assets/images/nintendo switch.jpg",
    },
    {
      id: 4,
      name: "Xbox Series X",
      price: 1350000,
      category: "Consolas",
      description: "La consola más potente de Xbox, con soporte para 4K y alto rendimiento.",
      image:
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=60",
      badge: "Nuevo",
    },
    {
      id: 5,
      name: "Nintendo Switch OLED",
      price: 720000,
      category: "Consolas",
      description: "Modelo con pantalla OLED vibrante, audio mejorado y base con puerto LAN.",
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=60",
      badge: "Destacado",
    },
    {
      id: 6,
      name: "Control inalámbrico DualSense",
      price: 129999,
      category: "Accesorios",
      description: "Control para PlayStation con respuesta háptica y gatillos adaptativos.",
      image: "assets/images/mando ps5.jpg",
      badge: "Nuevo",
    },
    {
      id: 7,
      name: "Control inalámbrico Xbox",
      price: 109999,
      category: "Accesorios",
      description: "Control cómodo y preciso, compatible con Xbox y PC.",
      image: "assets/images/mando XBOX series.jpg",
      badge: "Oferta",
    },
    {
      id: 8,
      name: "Par de Joy-Con para Switch",
      price: 149999,
      category: "Accesorios",
      description: "Controles versátiles para jugar solo, en pareja o en modo portátil.",
      image: "assets/images/mando nintendo switch.jpg",
    },
    {
      id: 9,
      name: "Auriculares gamer multiplataforma",
      price: 84999,
      category: "Accesorios",
      description: "Audio envolvente, micrófono ajustable y almohadillas cómodas.",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      name: "Base de carga dual para controles",
      price: 45999,
      category: "Accesorios",
      description: "Cargá dos controles a la vez y mantené tu setup ordenado.",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=60",
      badge: "Oferta",
    },
    {
      id: 11,
      name: "God of War Ragnarök (PS5)",
      price: 89999,
      category: "Videojuegos",
      description: "Acción épica en la mitología nórdica, edición para PlayStation 5.",
      image:
        "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=60",
      badge: "Destacado",
    },
    {
      id: 12,
      name: "Halo Infinite (Xbox)",
      price: 74999,
      category: "Videojuegos",
      description: "Shooter de ciencia ficción con campaña y modos competitivos en Xbox.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 13,
      name: "The Legend of Zelda: Tears of the Kingdom",
      price: 94999,
      category: "Videojuegos",
      description: "Aventura de mundo abierto para Nintendo Switch con exploración y creatividad.",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=60",
      badge: "Destacado",
    },
    {
      id: 14,
      name: "Mario Kart 8 Deluxe",
      price: 79999,
      category: "Videojuegos",
      description: "Carreras divertidas para jugar solo o con amigos en Nintendo Switch.",
      image:
        "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&w=800&q=60",
      badge: "Nuevo",
    },
    {
      id: 15,
      name: "EA Sports FC 25",
      price: 84999,
      category: "Videojuegos",
      description: "Fútbol con modos actualizados, ideal para fans de PlayStation, Xbox y más.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=60",
    },
  ];

  // 3) Referencias a elementos del HTML (los "ganchos" para manipular la página)
  const productGrid = document.getElementById("product-grid");
  const searchInput = document.getElementById("search");
  const filtersContainer = document.getElementById("category-filters");
  const emptyState = document.getElementById("empty-state");
  const sortSelect = document.getElementById("sort-select");
  const businessName = document.getElementById("business-name");
  const businessDescription = document.getElementById("business-description");
  const businessLogo = document.getElementById("business-logo");
  const shareButton = document.getElementById("share-catalog");
  const shareFeedback = document.getElementById("share-feedback");

  // Comprobación defensiva: si falta algún elemento, evitamos errores en consola
  if (!productGrid || !searchInput || !filtersContainer || !emptyState) {
    console.error(
      "Catálogo: faltan elementos HTML requeridos (#product-grid, #search, #category-filters, #empty-state)."
    );
    return;
  }

  // Estado actual: qué categoría está activa, qué texto se buscó y cómo se ordena
  let activeCategory = "Todos";
  let searchTerm = "";
  let sortOrder = "default";

  // Escapa texto antes de insertarlo en HTML (evita problemas si se editan datos con caracteres especiales)
  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Convierte HEX (#rrggbb) a canales RGB para generar variantes de color
  function hexToRgb(hex) {
    const clean = String(hex).replace("#", "").trim();
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
    if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
    return {
      r: parseInt(full.slice(0, 2), 16),
      g: parseInt(full.slice(2, 4), 16),
      b: parseInt(full.slice(4, 6), 16),
    };
  }

  function clamp(value) {
    return Math.max(0, Math.min(255, Math.round(value)));
  }

  function rgbToHex({ r, g, b }) {
    return `#${[r, g, b].map((n) => clamp(n).toString(16).padStart(2, "0")).join("")}`;
  }

  // Aplica la configuración del negocio al HTML/CSS desde un único lugar
  function applyBusinessConfig() {
    if (businessName) businessName.textContent = business.name;
    if (businessDescription) businessDescription.textContent = business.description;
    document.title = `${business.name} | Catálogo digital`;

    if (businessLogo) {
      const logoSrc = String(business.logo || "").trim();
      if (logoSrc) {
        businessLogo.src = logoSrc;
        businessLogo.alt = `Logo de ${business.name}`;
        businessLogo.hidden = false;
        businessLogo.onerror = () => {
          businessLogo.hidden = true;
          businessLogo.removeAttribute("src");
        };
      } else {
        businessLogo.hidden = true;
        businessLogo.removeAttribute("src");
      }
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", business.description);
    }

    const rgb = hexToRgb(business.primaryColor);
    if (rgb) {
      const dark = rgbToHex({
        r: rgb.r * 0.82,
        g: rgb.g * 0.82,
        b: rgb.b * 0.82,
      });
      const root = document.documentElement.style;
      root.setProperty("--primary", rgbToHex(rgb));
      root.setProperty("--primary-dark", dark);
      root.setProperty("--primary-soft", `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`);
    }
  }

  // Formatea números como precio (ej: $ 2.500)
  function formatPrice(value) {
    return new Intl.NumberFormat(business.locale || "es-AR", {
      style: "currency",
      currency: business.currency || "ARS",
      maximumFractionDigits: 0,
    }).format(value);
  }

  // Crea el enlace de WhatsApp con un mensaje prearmado
  function buildWhatsAppLink(product) {
    const message = `Hola! Quiero consultar por el producto: ${product.name} (${formatPrice(product.price)}).`;
    return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  // Obtiene categorías únicas desde los productos (sin escribirlas a mano)
  function getCategories(items) {
    const unique = new Set(items.map((item) => item.category));
    return ["Todos", ...unique];
  }

  // Dibuja los botones de filtro
  function renderFilters() {
    const categories = getCategories(products);
    filtersContainer.innerHTML = categories
      .map((category) => {
        const safeCategory = escapeHTML(category);
        const isActive = category === activeCategory ? "active" : "";
        return `
          <button
            type="button"
            class="filter-btn ${isActive}"
            data-category="${safeCategory}"
          >
            ${safeCategory}
          </button>
        `;
      })
      .join("");
  }

  // Convierte el badge a una clase CSS segura (Oferta/Nuevo/Destacado)
  function getBadgeClass(badge) {
    const normalized = String(badge || "")
      .trim()
      .toLowerCase();
    if (normalized === "oferta") return "badge-oferta";
    if (normalized === "nuevo") return "badge-nuevo";
    if (normalized === "destacado") return "badge-destacado";
    return "";
  }

  // Dibuja las tarjetas de producto
  function renderProducts(items) {
    if (!items.length) {
      productGrid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    productGrid.innerHTML = items
      .map((product) => {
        const name = escapeHTML(product.name);
        const category = escapeHTML(product.category);
        const description = escapeHTML(product.description);
        const image = escapeHTML(product.image);
        const price = escapeHTML(formatPrice(product.price));
        const whatsappHref = escapeHTML(buildWhatsAppLink(product));
        const badgeText = product.badge ? escapeHTML(String(product.badge).trim()) : "";
        const badgeClass = getBadgeClass(product.badge);
        const badgeHTML =
          badgeText && badgeClass
            ? `<span class="product-badge ${badgeClass}">${badgeText}</span>`
            : "";

        return `
          <article class="product-card">
            <div class="product-media">
              ${badgeHTML}
              <img
                class="product-image"
                src="${image}"
                alt="${name}"
                loading="lazy"
                onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${encodeURIComponent(
                  `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800\" height=\"600\"><rect width=\"100%\" height=\"100%\" fill=\"#e5e7eb\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#6b7280\" font-family=\"Arial\" font-size=\"28\">Imagen no disponible</text></svg>`
                )}';"
              >
            </div>
            <div class="product-body">
              <p class="product-category">${category}</p>
              <h2 class="product-name">${name}</h2>
              <p class="product-description">${description}</p>
              <p class="product-price">${price}</p>
              <a
                class="whatsapp-btn"
                href="${whatsappHref}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Ordena una copia de los resultados (nunca modifica `products` ni el orden original)
  function sortProducts(items) {
    const sorted = [...items];
    if (sortOrder === "price-asc") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOrder === "price-desc") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortOrder === "name-asc") {
      sorted.sort((a, b) =>
        String(a.name).localeCompare(String(b.name), business.locale || "es", {
          sensitivity: "base",
        })
      );
    }
    return sorted; // "default": mantiene el orden del array original (tras filtrar)
  }

  // Aplica búsqueda + categoría + orden y vuelve a mostrar resultados
  function applyFilters() {
    const term = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "Todos" || product.category === activeCategory;
      const matchesSearch =
        term === "" ||
        String(product.name).toLowerCase().includes(term) ||
        String(product.description).toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    renderProducts(sortProducts(filtered));
  }

  // Eventos: cuando el usuario escribe o hace clic, actualizamos el estado
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    applyFilters();
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      sortOrder = event.target.value;
      applyFilters();
    });
  }

  // Delegación de eventos: un solo listener para todos los botones de filtro
  filtersContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    renderFilters(); // vuelve a dibujar para marcar el botón activo
    applyFilters();
  });

  // Compartir catálogo: Web Share API y, si no está disponible, copiar enlace
  function showShareFeedback(message) {
    if (!shareFeedback) return;
    shareFeedback.textContent = message;
    window.clearTimeout(showShareFeedback.timeoutId);
    showShareFeedback.timeoutId = window.setTimeout(() => {
      shareFeedback.textContent = "";
    }, 2500);
  }

  async function copyCatalogLink(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
      return true;
    }
    // Fallback simple para navegadores/contextos sin Clipboard API
    const temp = document.createElement("textarea");
    temp.value = url;
    temp.setAttribute("readonly", "");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(temp);
    return copied;
  }

  async function shareCatalog() {
    const url = window.location.href; // URL actual del catálogo (no inventada)
    const shareData = {
      title: business.name,
      text: business.description,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return; // El sistema muestra su propia interfaz/confirmación
      } catch (error) {
        // Si el usuario cancela, no hacemos nada; si falla, intentamos copiar
        if (error && error.name === "AbortError") return;
      }
    }

    try {
      const copied = await copyCatalogLink(url);
      showShareFeedback(
        copied ? "Enlace copiado al portapapeles." : "No se pudo copiar el enlace."
      );
    } catch (_error) {
      showShareFeedback("No se pudo copiar el enlace.");
    }
  }

  if (shareButton) {
    shareButton.addEventListener("click", shareCatalog);
  }

  // Inicio: aplicar configuración del negocio y dibujar todo
  applyBusinessConfig();
  renderFilters();
  applyFilters();
})();

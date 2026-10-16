// ==========================================================================
// NEHA ENTERPRISES - PNEUMATICS & TOOLS
// Main Application JavaScript
// ==========================================================================

const COMPANY_PHONE = "8890034736";
const COMPANY_PHONE_INTL = "918890034736";
const COMPANY_EMAIL = "shyampratap0589@gmail.com";
const COMPANY_NAME = "Neha Enterprises";

// Application State
const state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default",
  cart: JSON.parse(localStorage.getItem("neha_cart") || "[]"),
  currentModalProduct: null,
  currentSelectedVariant: null,
  modalQuantity: 1
};

// DOM Elements
const elements = {
  productsGrid: document.getElementById("productsGrid"),
  productsCount: document.getElementById("productsCount"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  filterPills: document.querySelectorAll(".filter-pill"),
  categoryCards: document.querySelectorAll(".category-card"),
  
  // Modal Elements
  productModal: document.getElementById("productModal"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  modalMainImg: document.getElementById("modalMainImg"),
  modalThumbnails: document.getElementById("modalThumbnails"),
  modalCatTag: document.getElementById("modalCatTag"),
  modalStockBadge: document.getElementById("modalStockBadge"),
  modalTitle: document.getElementById("modalTitle"),
  modalSku: document.getElementById("modalSku"),
  modalRating: document.getElementById("modalRating"),
  modalPriceCurrent: document.getElementById("modalPriceCurrent"),
  modalPriceOriginal: document.getElementById("modalPriceOriginal"),
  modalVariantsSection: document.getElementById("modalVariantsSection"),
  modalVariantTitle: document.getElementById("modalVariantTitle"),
  modalVariantChips: document.getElementById("modalVariantChips"),
  modalDesc: document.getElementById("modalDesc"),
  modalFeaturesList: document.getElementById("modalFeaturesList"),
  modalSpecsBody: document.getElementById("modalSpecsBody"),
  modalQtyInput: document.getElementById("modalQtyInput"),
  modalQtyMinus: document.getElementById("modalQtyMinus"),
  modalQtyPlus: document.getElementById("modalQtyPlus"),
  modalAddToCartBtn: document.getElementById("modalAddToCartBtn"),
  modalBuyNowBtn: document.getElementById("modalBuyNowBtn"),
  modalWhatsAppBtn: document.getElementById("modalWhatsAppBtn"),
  
  // Cart Drawer Elements
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  cartBadge: document.getElementById("cartBadge"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartDrawerBackdrop: document.getElementById("cartDrawerBackdrop"),
  cartCloseBtn: document.getElementById("cartCloseBtn"),
  cartDrawerItems: document.getElementById("cartDrawerItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartTax: document.getElementById("cartTax"),
  cartTotal: document.getElementById("cartTotal"),
  cartWhatsAppCheckoutBtn: document.getElementById("cartWhatsAppCheckoutBtn"),
  cartCheckoutBtn: document.getElementById("cartCheckoutBtn"),
  
  // Checkout Modal
  checkoutModal: document.getElementById("checkoutModal"),
  checkoutCloseBtn: document.getElementById("checkoutCloseBtn"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutSummaryList: document.getElementById("checkoutSummaryList"),
  checkoutGrandTotal: document.getElementById("checkoutGrandTotal"),
  
  // Invoice Modal
  invoiceModal: document.getElementById("invoiceModal"),
  invoiceContent: document.getElementById("invoiceContent"),
  invoiceCloseBtn: document.getElementById("invoiceCloseBtn"),
  invoicePrintBtn: document.getElementById("invoicePrintBtn"),
  
  // RFQ Form
  rfqForm: document.getElementById("rfqForm"),
  
  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();
  setupFaqAccordion();
});

// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
  // Search
  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Sorting
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });
  }

  // Category Filter Pills
  elements.filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = pill.getAttribute("data-category");
      setCategory(category);
    });
  });

  // Category Cards in Showcase
  elements.categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      setCategory(category);
      // Scroll to catalog smoothly
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Modal Controls
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener("click", closeModal);
  }
  if (elements.productModal) {
    elements.productModal.addEventListener("click", (e) => {
      if (e.target === elements.productModal) closeModal();
    });
  }

  // Modal Quantity
  if (elements.modalQtyMinus) {
    elements.modalQtyMinus.addEventListener("click", () => {
      if (state.modalQuantity > 1) {
        state.modalQuantity--;
        elements.modalQtyInput.value = state.modalQuantity;
      }
    });
  }

  if (elements.modalQtyPlus) {
    elements.modalQtyPlus.addEventListener("click", () => {
      state.modalQuantity++;
      elements.modalQtyInput.value = state.modalQuantity;
    });
  }

  if (elements.modalQtyInput) {
    elements.modalQtyInput.addEventListener("change", (e) => {
      const val = parseInt(e.target.value) || 1;
      state.modalQuantity = Math.max(1, val);
      elements.modalQtyInput.value = state.modalQuantity;
    });
  }

  // Modal Cart & Buy Actions
  if (elements.modalAddToCartBtn) {
    elements.modalAddToCartBtn.addEventListener("click", () => {
      if (state.currentModalProduct) {
        addToCart(state.currentModalProduct.id, state.modalQuantity);
        closeModal();
        openCartDrawer();
      }
    });
  }

  if (elements.modalBuyNowBtn) {
    elements.modalBuyNowBtn.addEventListener("click", () => {
      if (state.currentModalProduct) {
        addToCart(state.currentModalProduct.id, state.modalQuantity);
        closeModal();
        openCheckoutModal();
      }
    });
  }

  if (elements.modalWhatsAppBtn) {
    elements.modalWhatsAppBtn.addEventListener("click", () => {
      if (state.currentModalProduct) {
        sendProductWhatsAppInquiry(state.currentModalProduct, state.modalQuantity);
      }
    });
  }

  // Cart Drawer
  if (elements.cartToggleBtn) {
    elements.cartToggleBtn.addEventListener("click", openCartDrawer);
  }
  if (elements.cartCloseBtn) {
    elements.cartCloseBtn.addEventListener("click", closeCartDrawer);
  }
  if (elements.cartDrawerBackdrop) {
    elements.cartDrawerBackdrop.addEventListener("click", closeCartDrawer);
  }

  // Cart Drawer Checkout
  if (elements.cartWhatsAppCheckoutBtn) {
    elements.cartWhatsAppCheckoutBtn.addEventListener("click", sendCartWhatsAppCheckout);
  }

  if (elements.cartCheckoutBtn) {
    elements.cartCheckoutBtn.addEventListener("click", () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  // Checkout Modal
  if (elements.checkoutCloseBtn) {
    elements.checkoutCloseBtn.addEventListener("click", closeCheckoutModal);
  }
  if (elements.checkoutModal) {
    elements.checkoutModal.addEventListener("click", (e) => {
      if (e.target === elements.checkoutModal) closeCheckoutModal();
    });
  }

  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener("submit", handleOrderSubmit);
  }

  // Invoice Modal
  if (elements.invoiceCloseBtn) {
    elements.invoiceCloseBtn.addEventListener("click", closeInvoiceModal);
  }
  if (elements.invoicePrintBtn) {
    elements.invoicePrintBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // RFQ Form
  if (elements.rfqForm) {
    elements.rfqForm.addEventListener("submit", handleRfqSubmit);
  }
}

// ==========================================================================
// Filtering & Sorting
// ==========================================================================
function setCategory(category) {
  state.activeCategory = category;
  
  // Update filter pills UI
  elements.filterPills.forEach((pill) => {
    if (pill.getAttribute("data-category") === category) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  // Update Category Showcase Cards UI
  elements.categoryCards.forEach((card) => {
    if (card.getAttribute("data-category") === category) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  applyFilters();
}

function applyFilters() {
  let list = [...state.products];

  // Category filter
  if (state.activeCategory !== "all") {
    list = list.filter((p) => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery) {
    const q = state.searchQuery;
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.modelCode.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  state.filteredProducts = list;
  renderProducts();
}

// ==========================================================================
// Product Rendering
// ==========================================================================
function renderProducts() {
  if (!elements.productsGrid) return;

  if (elements.productsCount) {
    elements.productsCount.textContent = `${state.filteredProducts.length} Products Available`;
  }

  if (state.filteredProducts.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="catalog-empty-state">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3>No Pneumatic Products Found</h3>
        <p>Try clearing your search query or choosing another category.</p>
        <button class="btn-primary" onclick="setCategory('all'); document.getElementById('searchInput').value = ''; state.searchQuery = ''; applyFilters();" style="margin-top: 1rem;">
          Reset Catalog Filters
        </button>
      </div>
    `;
    return;
  }

  elements.productsGrid.innerHTML = state.filteredProducts
    .map((product) => {
      const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      );

      return `
        <div class="product-card" data-id="${product.id}">
          <span class="product-card-badge ${product.badge === 'Bestseller' ? 'bestseller' : ''}">
            ${product.badge}
          </span>
          
          <div class="product-image-wrap" onclick="openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="quick-view-overlay">
              <span class="btn-quick-view">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                View Details
              </span>
            </div>
          </div>

          <div class="product-info-wrap">
            <div class="product-meta-row">
              <span class="product-cat-tag">${product.categoryName}</span>
              <span class="product-sku">${product.modelCode}</span>
            </div>

            <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>

            <div class="product-rating-row">
              <div class="rating-stars">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span class="reviews-count">(${product.reviewsCount})</span>
            </div>

            ${product.variants && product.variants.length > 0 ? `
              <div class="product-has-variants-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
                <span>${product.variants.length} Sizes/Options Available</span>
              </div>
            ` : ''}

            <div class="product-pricing-row">
              <span class="product-current-price">₹${product.price.toLocaleString("en-IN")}</span>
              <span class="product-original-price">₹${product.originalPrice.toLocaleString("en-IN")}</span>
              <span class="product-discount-badge">${discount}% OFF</span>
            </div>

            <div class="product-actions-row">
              <button class="btn-card-details" onclick="openProductModal('${product.id}')">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Full Specs
              </button>
              <button class="btn-card-cart" onclick="addToCart('${product.id}', 1)" title="Add to Cart">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// ==========================================================================
// Product Details Modal Logic
// ==========================================================================
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  state.currentModalProduct = product;
  state.modalQuantity = 1;

  // Populate data
  elements.modalMainImg.src = product.image;
  elements.modalMainImg.alt = product.name;
  elements.modalCatTag.textContent = product.categoryName;
  elements.modalStockBadge.innerHTML = `
    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
    In Stock • Ready to Dispatch
  `;
  elements.modalTitle.textContent = product.name;
  elements.modalSku.textContent = `SKU / Model: ${product.modelCode}`;
  elements.modalRating.innerHTML = `
    <span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
    <span style="font-weight: 700; color: #0f172a; margin-left: 0.3rem;">${product.rating}</span>
    <span style="color: #64748b; margin-left: 0.2rem;">(${product.reviewsCount} industrial reviews)</span>
  `;

  elements.modalPriceCurrent.textContent = `₹${product.price.toLocaleString("en-IN")}`;
  elements.modalPriceOriginal.textContent = `₹${product.originalPrice.toLocaleString("en-IN")}`;
  elements.modalDesc.textContent = product.fullDesc;

  // Variants Selector setup
  if (product.variants && product.variants.length > 0) {
    const defaultVar = product.variants.find((v) => v.selected) || product.variants[0];
    state.currentSelectedVariant = defaultVar;

    if (elements.modalVariantsSection) {
      elements.modalVariantsSection.style.display = "block";
    }
    if (elements.modalVariantTitle) {
      elements.modalVariantTitle.textContent = product.variantsLabel || "Select Available Size / Fitting / Voltage:";
    }
    renderVariantChips(product);

    if (defaultVar.code && elements.modalSku) {
      elements.modalSku.textContent = `SKU / Model: ${defaultVar.code}`;
    }
    if (defaultVar.price && elements.modalPriceCurrent) {
      elements.modalPriceCurrent.textContent = `₹${defaultVar.price.toLocaleString("en-IN")}`;
      if (elements.modalPriceOriginal) {
        const orig = Math.round(defaultVar.price * 1.15);
        elements.modalPriceOriginal.textContent = `₹${orig.toLocaleString("en-IN")}`;
      }
    }
  } else {
    state.currentSelectedVariant = null;
    if (elements.modalVariantsSection) {
      elements.modalVariantsSection.style.display = "none";
    }
  }

  // Features list
  elements.modalFeaturesList.innerHTML = product.features
    .map(
      (feat) => `
        <li>
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          <span>${feat}</span>
        </li>
      `
    )
    .join("");

  // Specifications Table
  elements.modalSpecsBody.innerHTML = Object.entries(product.specifications)
    .map(
      ([key, val]) => `
        <tr>
          <td>${key}</td>
          <td><strong>${val}</strong></td>
        </tr>
      `
    )
    .join("");

  // Thumbnails
  if (product.images && product.images.length > 1) {
    elements.modalThumbnails.innerHTML = product.images
      .map(
        (img, idx) => `
          <div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalImage('${img}', this)">
            <img src="${img}" alt="${product.name}" />
          </div>
        `
      )
      .join("");
    elements.modalThumbnails.style.display = "flex";
  } else {
    elements.modalThumbnails.style.display = "none";
  }

  // Reset Quantity Input
  elements.modalQtyInput.value = state.modalQuantity;

  // Open Modal
  elements.productModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderVariantChips(product) {
  if (!elements.modalVariantChips || !product.variants) return;

  elements.modalVariantChips.innerHTML = product.variants
    .map((variant) => {
      const isSelected = state.currentSelectedVariant && state.currentSelectedVariant.code === variant.code;
      return `
        <button type="button" class="variant-chip ${isSelected ? 'active' : ''}" onclick="selectProductVariant('${variant.code}')">
          <span>${variant.name}</span>
          ${variant.price ? `<span class="variant-chip-price">(₹${variant.price.toLocaleString("en-IN")})</span>` : ''}
        </button>
      `;
    })
    .join("");
}

function selectProductVariant(variantCode) {
  if (!state.currentModalProduct || !state.currentModalProduct.variants) return;
  const variant = state.currentModalProduct.variants.find((v) => v.code === variantCode);
  if (!variant) return;

  state.currentSelectedVariant = variant;
  renderVariantChips(state.currentModalProduct);

  if (elements.modalSku) {
    elements.modalSku.textContent = `SKU / Model: ${variant.code}`;
  }
  if (variant.price && elements.modalPriceCurrent) {
    elements.modalPriceCurrent.textContent = `₹${variant.price.toLocaleString("en-IN")}`;
    if (elements.modalPriceOriginal) {
      const orig = Math.round(variant.price * 1.15);
      elements.modalPriceOriginal.textContent = `₹${orig.toLocaleString("en-IN")}`;
    }
  }
}

function switchModalImage(src, thumbElement) {
  elements.modalMainImg.src = src;
  const allThumbs = elements.modalThumbnails.querySelectorAll(".modal-thumb");
  allThumbs.forEach((t) => t.classList.remove("active"));
  thumbElement.classList.add("active");
}

function closeModal() {
  if (elements.productModal) {
    elements.productModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// Cart State & Drawer Logic
// ==========================================================================
function addToCart(productId, quantity = 1, selectedVariant = null) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  let variant = selectedVariant;
  if (!variant && state.currentModalProduct && state.currentModalProduct.id === productId) {
    variant = state.currentSelectedVariant;
  }

  const itemId = variant ? `${product.id}__${variant.code}` : product.id;
  const itemName = variant ? `${product.name} (${variant.name})` : product.name;
  const itemModel = variant ? variant.code : product.modelCode;
  const itemPrice = variant && variant.price ? variant.price : product.price;

  const existingIndex = state.cart.findIndex((item) => item.id === itemId);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: itemId,
      baseId: product.id,
      name: itemName,
      modelCode: itemModel,
      price: itemPrice,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${quantity}x "${itemName.slice(0, 30)}..." to Cart!`, "toast-success");
}

function updateCartItemQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex((i) => i.id === productId);
  if (itemIndex > -1) {
    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart", "toast-accent");
}

function saveCart() {
  localStorage.setItem("neha_cart", JSON.stringify(state.cart));
}

function getCartCalculations() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18); // 18% GST estimate
  const total = subtotal; // For industrial B2B pricing, prices include GST or standard calculation
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, tax, total, totalCount };
}

function updateCartUI() {
  const { subtotal, total, totalCount } = getCartCalculations();

  // Update navbar badge
  if (elements.cartBadge) {
    elements.cartBadge.textContent = totalCount;
    elements.cartBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  // Update Drawer Subtotal & Total
  if (elements.cartSubtotal) elements.cartSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  if (elements.cartTotal) elements.cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;

  // Update Drawer Items
  if (!elements.cartDrawerItems) return;

  if (state.cart.length === 0) {
    elements.cartDrawerItems.innerHTML = `
      <div class="cart-empty-view">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h4>Your Shopping Cart is Empty</h4>
        <p>Explore our high performance pneumatic cylinders, valves & air tools.</p>
        <button class="btn-primary" onclick="closeCartDrawer(); document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });">
          Browse Products
        </button>
      </div>
    `;
    if (elements.cartWhatsAppCheckoutBtn) elements.cartWhatsAppCheckoutBtn.style.display = "none";
    if (elements.cartCheckoutBtn) elements.cartCheckoutBtn.style.display = "none";
    return;
  }

  if (elements.cartWhatsAppCheckoutBtn) elements.cartWhatsAppCheckoutBtn.style.display = "flex";
  if (elements.cartCheckoutBtn) elements.cartCheckoutBtn.style.display = "flex";

  elements.cartDrawerItems.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-sku">${item.modelCode}</div>
            <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
            <div style="font-size: 0.75rem; color: #64748b;">(₹${item.price.toLocaleString("en-IN")} each)</div>
          </div>
          <div class="cart-item-actions">
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove Item">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
            <div class="qty-control" style="transform: scale(0.85); transform-origin: right;">
              <button class="qty-btn" onclick="updateCartItemQuantity('${item.id}', -1)">-</button>
              <input type="text" class="qty-input" value="${item.quantity}" readonly />
              <button class="qty-btn" onclick="updateCartItemQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function openCartDrawer() {
  if (elements.cartDrawer && elements.cartDrawerBackdrop) {
    elements.cartDrawer.classList.add("active");
    elements.cartDrawerBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  if (elements.cartDrawer && elements.cartDrawerBackdrop) {
    elements.cartDrawer.classList.remove("active");
    elements.cartDrawerBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// WhatsApp & Direct Order Flows
// ==========================================================================
function sendProductWhatsAppInquiry(product, quantity) {
  const variant = state.currentSelectedVariant;
  const name = variant ? `${product.name} (${variant.name})` : product.name;
  const model = variant ? variant.code : product.modelCode;
  const unitPrice = variant && variant.price ? variant.price : product.price;
  const totalPrice = unitPrice * quantity;

  const text = encodeURIComponent(
    `*Inquiry for ${COMPANY_NAME}*\n\n` +
    `Hello, I want to purchase / inquire about this product:\n` +
    `• *Product:* ${name}\n` +
    `• *Model / SKU:* ${model}\n` +
    `• *Quantity Required:* ${quantity}\n` +
    `• *Unit Price:* ₹${unitPrice.toLocaleString("en-IN")}\n` +
    `• *Estimated Total:* ₹${totalPrice.toLocaleString("en-IN")}\n\n` +
    `Please share availability and dispatch timeline.`
  );

  const url = `https://wa.me/${COMPANY_PHONE_INTL}?text=${text}`;
  window.open(url, "_blank");
}

function sendCartWhatsAppCheckout() {
  if (state.cart.length === 0) return;

  const { total } = getCartCalculations();
  let itemsText = "";
  state.cart.forEach((item, index) => {
    itemsText += `${index + 1}. *${item.name}* (${item.modelCode}) - ${item.quantity} pcs @ ₹${item.price} = ₹${item.quantity * item.price}\n`;
  });

  const text = encodeURIComponent(
    `*Order Inquiry from ${COMPANY_NAME} Website*\n\n` +
    `Hello Neha Enterprises,\nI would like to place an order for the following pneumatic items:\n\n` +
    `${itemsText}\n` +
    `*Total Order Amount:* ₹${total.toLocaleString("en-IN")}\n\n` +
    `Please confirm the order and send payment & shipping details.`
  );

  const url = `https://wa.me/${COMPANY_PHONE_INTL}?text=${text}`;
  window.open(url, "_blank");
}

// ==========================================================================
// Checkout Modal & Proforma Invoice Generator
// ==========================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!", "toast-accent");
    return;
  }

  const { total } = getCartCalculations();

  // Populate checkout summary
  if (elements.checkoutSummaryList) {
    elements.checkoutSummaryList.innerHTML = state.cart
      .map(
        (i) => `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.4rem 0; border-bottom: 1px solid #e2e8f0;">
          <span>${i.quantity}x ${i.name.slice(0, 32)}...</span>
          <strong>₹${(i.price * i.quantity).toLocaleString("en-IN")}</strong>
        </div>
      `
      )
      .join("");
  }

  if (elements.checkoutGrandTotal) {
    elements.checkoutGrandTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
  }

  if (elements.checkoutModal) {
    elements.checkoutModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal() {
  if (elements.checkoutModal) {
    elements.checkoutModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function handleOrderSubmit(e) {
  e.preventDefault();

  const formData = new FormData(elements.checkoutForm);
  const orderDetails = {
    orderId: "NE-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    name: formData.get("customerName"),
    phone: formData.get("customerPhone"),
    email: formData.get("customerEmail") || "Not provided",
    address: formData.get("customerAddress"),
    city: formData.get("customerCity"),
    state: formData.get("customerState"),
    pincode: formData.get("customerPincode"),
    gstin: formData.get("customerGstin") || "N/A",
    paymentMethod: formData.get("paymentMethod"),
    items: [...state.cart],
    total: getCartCalculations().total
  };

  closeCheckoutModal();
  generateInvoiceModal(orderDetails);

  // Clear cart
  state.cart = [];
  saveCart();
  updateCartUI();
  showToast(`Order #${orderDetails.orderId} Created Successfully!`, "toast-success");
}

function generateInvoiceModal(order) {
  const itemsRows = order.items
    .map(
      (item, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td>
          <strong>${item.name}</strong><br>
          <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">SKU: ${item.modelCode}</span>
        </td>
        <td>₹${item.price.toLocaleString("en-IN")}</td>
        <td>${item.quantity}</td>
        <td><strong>₹${(item.price * item.quantity).toLocaleString("en-IN")}</strong></td>
      </tr>
    `
    )
    .join("");

  elements.invoiceContent.innerHTML = `
    <div class="invoice-container">
      <div class="invoice-header">
        <div class="invoice-company-info">
          <h3>${COMPANY_NAME}</h3>
          <p>Industrial Pneumatics & High Precision Air Tools</p>
          <p><strong>Serving Quality Since 2006 (18+ Years)</strong></p>
          <p>Phone / WhatsApp: +91 ${COMPANY_PHONE} | Email: ${COMPANY_EMAIL}</p>
        </div>
        <div class="invoice-meta-info">
          <h2 style="font-size: 1.5rem; color: #0284c7; margin-bottom: 0.25rem;">PROFORMA INVOICE</h2>
          <p><strong>Invoice No:</strong> ${order.orderId}</p>
          <p><strong>Date:</strong> ${order.date}</p>
          <p><strong>Payment Status:</strong> ${order.paymentMethod}</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
        <div>
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: #64748b; margin-bottom: 0.3rem;">Billed & Shipped To:</h4>
          <p><strong>${order.name}</strong></p>
          <p>${order.address}</p>
          <p>${order.city}, ${order.state} - ${order.pincode}</p>
          <p>Phone: ${order.phone} | Email: ${order.email}</p>
          ${order.gstin !== "N/A" ? `<p>GSTIN: <strong>${order.gstin}</strong></p>` : ""}
        </div>
        <div>
          <h4 style="font-size: 0.85rem; text-transform: uppercase; color: #64748b; margin-bottom: 0.3rem;">Dispatch & Support:</h4>
          <p>• Fast dispatch with transit tracking</p>
          <p>• 100% Genuine Tested Pneumatic Components</p>
          <p>• For queries: Call <strong>${COMPANY_PHONE}</strong></p>
        </div>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
          <tr class="invoice-total-row">
            <td colspan="4" style="text-align: right; padding-top: 1rem;">Total Amount Payable:</td>
            <td style="padding-top: 1rem; color: #0284c7; font-size: 1.25rem;">₹${order.total.toLocaleString("en-IN")}</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px dashed #cbd5e1; font-size: 0.85rem; color: #64748b; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap; gap: 1rem;">
        <div>
          <p>Thank you for partnering with <strong>${COMPANY_NAME}</strong>!</p>
          <p>Authorized Signature: <em>Neha Enterprises Pneumatics</em></p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <a href="https://wa.me/${COMPANY_PHONE_INTL}?text=${encodeURIComponent('Hello Neha Enterprises, regarding Order ' + order.orderId + ' for ₹' + order.total + '. Please confirm dispatch.')}" target="_blank" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; background: #25d366;">
            Send to WhatsApp (${COMPANY_PHONE})
          </a>
        </div>
      </div>
    </div>
  `;

  if (elements.invoiceModal) {
    elements.invoiceModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeInvoiceModal() {
  if (elements.invoiceModal) {
    elements.invoiceModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// RFQ (Request for Quotation)
// ==========================================================================
function handleRfqSubmit(e) {
  e.preventDefault();
  const formData = new FormData(elements.rfqForm);
  const name = formData.get("rfqName");
  const phone = formData.get("rfqPhone");
  const email = formData.get("rfqEmail");
  const category = formData.get("rfqCategory");
  const details = formData.get("rfqDetails");

  const message = encodeURIComponent(
    `*Custom RFQ / Quotation Request*\n\n` +
    `Hello Neha Enterprises,\n` +
    `• *Client Name:* ${name}\n` +
    `• *Phone:* ${phone}\n` +
    `• *Email:* ${email}\n` +
    `• *Requirement Category:* ${category}\n` +
    `• *Specifications / Details:*\n${details}\n\n` +
    `Please provide technical recommendation & competitive quotation.`
  );

  showToast("Your quote request has been prepared! Opening WhatsApp...", "toast-success");
  window.open(`https://wa.me/${COMPANY_PHONE_INTL}?text=${message}`, "_blank");
  elements.rfqForm.reset();
}

// ==========================================================================
// FAQ Accordion
// ==========================================================================
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((f) => f.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, type = "") {
  if (!elements.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global window attachments for inline event handlers
window.setCategory = setCategory;
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.switchModalImage = switchModalImage;
window.selectProductVariant = selectProductVariant;
window.addToCart = addToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.closeInvoiceModal = closeInvoiceModal;
window.applyFilters = applyFilters;
window.state = state;


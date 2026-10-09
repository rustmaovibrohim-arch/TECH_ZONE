
"use strict";

/* =========================================
   ZOOR MARKET + ZOOR PLAY
   Asosiy JavaScript
========================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const money = (amount) =>
    new Intl.NumberFormat("uz-UZ").format(amount) + " so‘m";

function readStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
    } catch {
        return fallback;
    }
}

function saveStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Brauzer xotirasi mavjud bo'lmasa ham sahifa ishlashda davom etadi.
    }
}

/* =========================================
   MAHSULOTLAR
========================================= */

const products = [
    {
        id: 1,
        title: "Apple iPhone 15, 128 GB",
        brand: "Apple",
        category: "Telefonlar",
        price: 8999000,
        oldPrice: 9999000,
        rating: 4.9,
        discount: 10,
        image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Samsung Galaxy smartfon",
        brand: "Samsung",
        category: "Telefonlar",
        price: 6499000,
        oldPrice: 7299000,
        rating: 4.8,
        discount: 11,
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Yengil va zamonaviy noutbuk",
        brand: "Apple",
        category: "Kompyuterlar",
        price: 12999000,
        oldPrice: 13999000,
        rating: 4.9,
        discount: 7,
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Simsiz quloqchin, premium ovoz",
        brand: "Sony",
        category: "Quloqchinlar",
        price: 499000,
        oldPrice: 649000,
        rating: 4.7,
        discount: 23,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Aqlli qo‘l soati",
        brand: "Samsung",
        category: "Soatlar",
        price: 799000,
        oldPrice: 999000,
        rating: 4.6,
        discount: 20,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Simsiz musiqa quloqchini",
        brand: "Sony",
        category: "Quloqchinlar",
        price: 359000,
        oldPrice: 429000,
        rating: 4.5,
        discount: 16,
        image:
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Kundalik foydalanish uchun noutbuk",
        brand: "Apple",
        category: "Kompyuterlar",
        price: 8499000,
        oldPrice: 9299000,
        rating: 4.8,
        discount: 9,
        image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "Zamonaviy uy aksessuari",
        brand: "Xiaomi",
        category: "Uy uchun",
        price: 279000,
        oldPrice: 329000,
        rating: 4.4,
        discount: 15,
        image:
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        title: "Sport uchun aqlli soat",
        brand: "Huawei",
        category: "Soatlar",
        price: 1099000,
        oldPrice: 1299000,
        rating: 4.7,
        discount: 15,
        image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Simsiz kompyuter sichqonchasi",
        brand: "Logitech",
        category: "Aksessuarlar",
        price: 249000,
        oldPrice: 299000,
        rating: 4.6,
        discount: 17,
        image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        title: "Telefon uchun zamonaviy aksessuar",
        brand: "Xiaomi",
        category: "Aksessuarlar",
        price: 159000,
        oldPrice: 199000,
        rating: 4.3,
        discount: 20,
        image:
            "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        title: "Uy va ish uchun qulay qurilma",
        brand: "Huawei",
        category: "Uy uchun",
        price: 579000,
        oldPrice: 699000,
        rating: 4.5,
        discount: 17,
        image:
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=500&q=80"
    }
];

/* =========================================
   HOLATLAR VA XOTIRA
========================================= */

let cart = readStorage("zoor_cart", []);
let favorites = readStorage("zoor_favorites", []);
let currentCategory = "Hammasi";
let currentSearch = "";
let currentBrand = "";
let favoritesOnly = false;
let toastTimeout;

cart = Array.isArray(cart)
    ? cart.filter(item =>
        products.some(product => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
    )
    : [];

favorites = Array.isArray(favorites)
    ? favorites.filter(id => products.some(product => product.id === id))
    : [];

/* =========================================
   XABAR KO'RSATISH
========================================= */

function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

/* =========================================
   IKKI WEBSITE ORASIDA O'TISH
========================================= */

function showPage(page) {
    const isPlay = page === "play";

    $("#marketPage").classList.toggle("hidden", isPlay);
    $("#playPage").classList.toggle("hidden", !isPlay);

    $$(".switch-btn").forEach(button => {
        const active = button.dataset.page === page;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    document.title = isPlay
        ? "ZOOR Play — O'yna va ball to'pla!"
        : "ZOOR Market — Xarid qilish oson!";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

$$("[data-page]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.page);
    });
});

$$("[data-open-page]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.openPage);
    });
});

/* =========================================
   MAHSULOT KARTALARINI CHIQARISH
========================================= */

function renderProducts() {
    const grid = $("#productsGrid");
    const emptyState = $("#emptyState");

    if (!grid || !emptyState) return;

    const query = currentSearch.toLocaleLowerCase("uz");

    const filtered = products.filter(product => {
        const matchesCategory =
            currentCategory === "Hammasi" ||
            product.category === currentCategory;

        const searchableText =
            `${product.title} ${product.brand} ${product.category}`
                .toLocaleLowerCase("uz");

        const matchesSearch = searchableText.includes(query);

        const matchesBrand =
            !currentBrand || product.brand === currentBrand;

        const matchesFavorites =
            !favoritesOnly || favorites.includes(product.id);

        return (
            matchesCategory &&
            matchesSearch &&
            matchesBrand &&
            matchesFavorites
        );
    });

    $("#productResultCount").textContent =
        `${filtered.length} ta mahsulot`;

    if (favoritesOnly) {
        $("#productsTitle").textContent = "♡ Sevimli mahsulotlar";
    } else if (currentBrand) {
        $("#productsTitle").textContent = `Brend: ${currentBrand}`;
    } else if (currentSearch) {
        $("#productsTitle").textContent = "🔎 Qidiruv natijalari";
    } else if (currentCategory !== "Hammasi") {
        $("#productsTitle").textContent = currentCategory;
    } else {
        $("#productsTitle").textContent = "🔥 Mashhur mahsulotlar";
    }

    grid.innerHTML = "";

    emptyState.classList.toggle("hidden", filtered.length > 0);
    grid.classList.toggle("hidden", filtered.length === 0);

    filtered.forEach(product => {
        const isFavorite = favorites.includes(product.id);

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${escapeHTML(product.title)}"
          loading="lazy"
        >

        <span class="product-discount">-${product.discount}%</span>

        <button
          class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
          data-favorite-id="${product.id}"
          aria-label="${isFavorite ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo‘shish"}"
          aria-pressed="${isFavorite}"
        >${isFavorite ? "♥" : "♡"}</button>
      </div>

      <span class="product-category">${escapeHTML(product.category)}</span>
      <h3 class="product-title">${escapeHTML(product.title)}</h3>

      <div class="product-rating">
        ★★★★★ <span>${product.rating.toFixed(1)}</span>
      </div>

      <div class="product-price-row">
        <strong class="product-price">${money(product.price)}</strong>
        <span class="product-old-price">${money(product.oldPrice)}</span>
      </div>

      <div class="product-card-bottom">
        <button class="add-cart-btn" data-add-id="${product.id}">
          🛒 Savatchaga
        </button>
      </div>
    `;

        const image = card.querySelector("img");

        image.addEventListener("error", () => {
            image.style.display = "none";
            image.parentElement.style.background =
                "linear-gradient(135deg,#f0eaff,#fff0f6)";
            image.parentElement.insertAdjacentHTML(
                "beforeend",
                '<span style="font-size:52px" aria-label="Mahsulot">📦</span>'
            );
        }, { once: true });

        grid.appendChild(card);
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

/* =========================================
   QIDIRUV
========================================= */

function performSearch() {
    currentSearch = $("#searchInput").value.trim();
    currentBrand = "";
    favoritesOnly = false;

    renderProducts();

    $("#productsSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

$("#searchButton").addEventListener("click", performSearch);

$("#searchInput").addEventListener("keydown", event => {
    if (event.key === "Enter") performSearch();
});

$("#searchInput").addEventListener("input", event => {
    if (event.target.value.trim() === "") {
        currentSearch = "";
        renderProducts();
    }
});

$("#resetSearchButton").addEventListener("click", () => {
    resetFilters();
    $("#searchInput").value = "";
    renderProducts();
});

function resetFilters() {
    currentCategory = "Hammasi";
    currentSearch = "";
    currentBrand = "";
    favoritesOnly = false;

    $$(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === "Hammasi"
        );
    });
}

/* =========================================
   KATEGORIYALAR
========================================= */

$$(".category").forEach(button => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;
        currentBrand = "";
        favoritesOnly = false;

        $$(".category").forEach(category => {
            category.classList.toggle("active", category === button);
        });

        renderProducts();
    });
});

/* =========================================
   BREND FILTRI
========================================= */

$$(".brand-card").forEach(button => {
    button.addEventListener("click", () => {
        currentBrand = button.dataset.brand;
        currentCategory = "Hammasi";
        currentSearch = "";
        favoritesOnly = false;

        $("#searchInput").value = "";

        $$(".category").forEach(category => {
            category.classList.toggle(
                "active",
                category.dataset.category === "Hammasi"
            );
        });

        renderProducts();

        $("#productsSection").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* =========================================
   SEVIMLILAR
========================================= */

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favoriteId => favoriteId !== id);
        showToast("Mahsulot sevimlilardan olib tashlandi.");
    } else {
        favorites.push(id);
        showToast("♡ Sevimlilarga qo‘shildi!");
    }

    saveStorage("zoor_favorites", favorites);
    updateFavoritesPanel();
    renderProducts();
}

function updateFavoritesPanel() {
    const text = $("#favoritesText");
    const button = $("#showFavoritesButton");

    text.textContent = favorites.length
        ? `${favorites.length} ta mahsulot sevimlilarga saqlangan.`
        : "Hali sevimli mahsulot yo‘q.";

    button.textContent = favoritesOnly
        ? "Barcha mahsulotlar →"
        : "Sevimlilarni ko‘rish →";
}

$("#favoriteShortcut").addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    currentCategory = "Hammasi";
    currentSearch = "";
    currentBrand = "";

    $("#searchInput").value = "";

    $$(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === "Hammasi"
        );
    });

    renderProducts();

    $("#productsSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

$("#showFavoritesButton").addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    currentCategory = "Hammasi";
    currentSearch = "";
    currentBrand = "";

    $("#searchInput").value = "";
    renderProducts();
    updateFavoritesPanel();

    $("#productsSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

/* =========================================
   SAVATCHA
========================================= */

function addToCart(id) {
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, quantity: 1 });
    }

    saveStorage("zoor_cart", cart);
    renderCart();

    const product = products.find(item => item.id === id);
    showToast(`${product.title} savatchaga qo‘shildi!`);
}

function changeCartQuantity(id, change) {
    const item = cart.find(cartItem => cartItem.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== id);
    }

    saveStorage("zoor_cart", cart);
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);

    saveStorage("zoor_cart", cart);
    renderCart();
    showToast("Mahsulot savatchadan olib tashlandi.");
}

function renderCart() {
    const cartItems = $("#cartItems");
    const totalCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    $("#cartCount").textContent = totalCount;
    $("#cartPanelCount").textContent = `${totalCount} ta`;
    $("#cartTotal").textContent = money(totalPrice);
    $("#checkoutButton").disabled = totalCount === 0;

    if (totalCount === 0) {
        cartItems.innerHTML = `
      <div class="cart-empty">
        <span>🛍️</span>
        <p>Savatchangiz hozircha bo‘sh.</p>
      </div>
    `;
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;

        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
      <img src="${product.image}" alt="${escapeHTML(product.title)}">

      <div>
        <div class="cart-item-name">${escapeHTML(product.title)}</div>
        <div class="cart-item-price">${money(product.price * item.quantity)}</div>

        <div class="cart-item-controls">
          <button data-minus-id="${product.id}" aria-label="Kamaytirish">−</button>
          <span>${item.quantity}</span>
          <button data-plus-id="${product.id}" aria-label="Ko‘paytirish">+</button>
          <button
            class="remove-item"
            data-remove-id="${product.id}"
            aria-label="O‘chirish"
          >×</button>
        </div>
      </div>
    `;

        const image = row.querySelector("img");
        image.addEventListener("error", () => {
            image.style.visibility = "hidden";
        }, { once: true });

        cartItems.appendChild(row);
    });
}

$("#cartShortcut").addEventListener("click", () => {
    $("#cartPanel").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

$("#checkoutButton").addEventListener("click", () => {
    if (!cart.length) {
        showToast("Avval savatchaga mahsulot qo‘shing.");
        return;
    }

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const confirmed = window.confirm(
        `Demo buyurtma\n\n` +
        `Mahsulotlar soni: ${count}\n` +
        `Jami: ${money(total)}\n\n` +
        `Bu demo sayt. Haqiqiy buyurtma yoki to‘lov amalga oshirilmaydi.\n\n` +
        `Savatchani tozalaymizmi?`
    );

    if (confirmed) {
        cart = [];
        saveStorage("zoor_cart", cart);
        renderCart();
        showToast("Demo savatcha tozalandi!");
    }
});

/* =========================================
   TUGMALAR UCHUN UMUMIY HODISALAR
========================================= */

document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-id]");
    const favoriteButton = event.target.closest("[data-favorite-id]");
    const plusButton = event.target.closest("[data-plus-id]");
    const minusButton = event.target.closest("[data-minus-id]");
    const removeButton = event.target.closest("[data-remove-id]");

    if (addButton) {
        addToCart(Number(addButton.dataset.addId));
    }

    if (favoriteButton) {
        toggleFavorite(Number(favoriteButton.dataset.favoriteId));
    }

    if (plusButton) {
        changeCartQuantity(Number(plusButton.dataset.plusId), 1);
    }

    if (minusButton) {
        changeCartQuantity(Number(minusButton.dataset.minusId), -1);
    }

    if (removeButton) {
        removeFromCart(Number(removeButton.dataset.removeId));
    }
});

/* =========================================
   HERO VA BONUS TUGMALARI
========================================= */

$("#heroShopButton").addEventListener("click", () => {
    $("#productsSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

$("#bonusButton").addEventListener("click", () => {
    showToast("ZOOR Bonus — demo loyiha funksiyasi.");
});

/* =========================================
   ZOOR PLAY — O'YIN
========================================= */

let score = 0;
let timeLeft = 30;
let gameRunning = false;
let gameInterval = null;

let bestScore = Number(readStorage("zoor_best_score", 0)) || 0;

$("#bestScore").textContent = bestScore;

function updateScore() {
    $("#currentScore").textContent = score;
}

function startGame() {
    if (gameRunning) return;

    clearInterval(gameInterval);

    score = 0;
    timeLeft = 30;
    gameRunning = true;

    updateScore();

    $("#gameTimer").textContent = timeLeft;
    $("#gameMessage").classList.add("hidden");
    $("#tapTarget").classList.remove("hidden");
    $("#tapTarget").disabled = false;
    $("#tapTarget").textContent = "BOS! ⚡";

    $("#gameStartAgain").textContent = "↻ Qayta boshlash";

    showToast("O‘yin boshlandi! Tezroq bos!");

    gameInterval = setInterval(() => {
        timeLeft -= 1;
        $("#gameTimer").textContent = timeLeft;

        if (timeLeft <= 0) {
            finishGame();
        }
    }, 1000);
}

function finishGame() {
    if (!gameRunning) return;

    gameRunning = false;
    clearInterval(gameInterval);
    gameInterval = null;

    $("#tapTarget").disabled = true;
    $("#tapTarget").classList.add("hidden");
    $("#gameMessage").classList.remove("hidden");

    const isRecord = score > bestScore;

    if (isRecord) {
        bestScore = score;
        saveStorage("zoor_best_score", bestScore);
        $("#bestScore").textContent = bestScore;
    }

    $("#gameMessage").innerHTML = `
    <span class="game-big-icon">${isRecord ? "🏆" : "🎮"}</span>
    <h3>${isRecord ? "Yangi rekord!" : "O‘yin tugadi!"}</h3>
    <p>Natijang: <strong>${score} ball</strong></p>
    <p>${isRecord ? "Ajoyib! Eng yaxshi natijang yangilandi." : "Yana urinib, rekordingni yangila!"}</p>
  `;

    $("#gameStartAgain").textContent = "▶ Yana o‘ynash";

    showToast(`O‘yin tugadi! Natija: ${score} ball.`);
}

$("#tapTarget").addEventListener("click", () => {
    if (!gameRunning || timeLeft <= 0) return;

    score += 1;
    updateScore();

    // Har bosishda kichik vizual o'zgarish.
    $("#tapTarget").textContent =
        score % 5 === 0 ? "ZO‘R! 🔥" : "BOS! ⚡";
});

$("#startGameButton").addEventListener("click", () => {
    $("#gameSection");
    startGame();

    $("#gameBoard").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

$("#gameStartAgain").addEventListener("click", startGame);

/* =========================================
   SAYTNI ISHGA TAYYORLASH
========================================= */

function initializeSite() {
    renderProducts();
    renderCart();
    updateFavoritesPanel();
    updateScore();

    $("#bestScore").textContent = bestScore;

    $$(".switch-btn").forEach(button => {
        button.setAttribute(
            "aria-pressed",
            String(button.classList.contains("active"))
        );
    });
}

initializeSite();
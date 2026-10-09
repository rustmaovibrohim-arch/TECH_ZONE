
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const products = [
    { id: 1, name: "Nova X Pro smartfon", category: "Telefon", price: 4299000, oldPrice: 4899000, rating: 4.9, badge: "TOP TANLOV", emoji: "📱", bg: "#eee8ff", popularity: 99 },
    { id: 2, name: "AirBeat simsiz naushnik", category: "Audio", price: 549000, oldPrice: 699000, rating: 4.8, badge: "−21%", emoji: "🎧", bg: "#ffe9f1", popularity: 97 },
    { id: 3, name: "UltraBook Air noutbuk", category: "Kompyuter", price: 7999000, oldPrice: 8999000, rating: 4.9, badge: "TOP TANLOV", emoji: "💻", bg: "#e5f2ff", popularity: 96 },
    { id: 4, name: "Smart Watch aqlli soat", category: "Telefon", price: 899000, oldPrice: 1099000, rating: 4.7, badge: "−18%", emoji: "⌚", bg: "#e6f7ee", popularity: 94 },
    { id: 5, name: "Minimal stol chirog‘i", category: "Uy", price: 289000, oldPrice: 0, rating: 4.6, badge: "YANGI", emoji: "💡", bg: "#fff0d9", popularity: 85 },
    { id: 6, name: "Studio Bass audio kolonka", category: "Audio", price: 679000, oldPrice: 799000, rating: 4.8, badge: "−15%", emoji: "🔊", bg: "#f0eaff", popularity: 92 },
    { id: 7, name: "Nova Pad planshet", category: "Telefon", price: 2399000, oldPrice: 2699000, rating: 4.7, badge: "−11%", emoji: "📲", bg: "#e5efff", popularity: 88 },
    { id: 8, name: "Mexanik gaming klaviatura", category: "Kompyuter", price: 459000, oldPrice: 0, rating: 4.9, badge: "TOP TANLOV", emoji: "⌨️", bg: "#ffe8e3", popularity: 91 },
    { id: 9, name: "Uy uchun mini namlagich", category: "Uy", price: 199000, oldPrice: 249000, rating: 4.5, badge: "−20%", emoji: "💧", bg: "#e6f6ff", popularity: 78 },
    { id: 10, name: "Ergonomik simsiz sichqoncha", category: "Kompyuter", price: 179000, oldPrice: 0, rating: 4.6, badge: "YANGI", emoji: "🖱️", bg: "#f2eaff", popularity: 82 },
    { id: 11, name: "Premium mikrofon", category: "Audio", price: 749000, oldPrice: 899000, rating: 4.8, badge: "−17%", emoji: "🎙️", bg: "#ffe8f1", popularity: 86 },
    { id: 12, name: "Aqlli uy kamerasi", category: "Uy", price: 389000, oldPrice: 459000, rating: 4.7, badge: "−15%", emoji: "📷", bg: "#e8f6e8", popularity: 81 }
];

const money = (number) => new Intl.NumberFormat("uz-UZ").format(number) + " so‘m";

let activeCategory = "Barchasi";
let searchTerm = "";
let showAll = false;
let favorites = new Set();
let cart = {};
let toastTimer;

try {
    favorites = new Set(JSON.parse(localStorage.getItem("nova-favorites") || "[]"));
    cart = JSON.parse(localStorage.getItem("nova-cart") || "{}");
} catch {
    favorites = new Set();
    cart = {};
}

function saveState() {
    try {
        localStorage.setItem("nova-favorites", JSON.stringify([...favorites]));
        localStorage.setItem("nova-cart", JSON.stringify(cart));
    } catch {
        // Brauzer xotiraga yozishni bloklasa ham sahifa ishlayveradi.
    }
}

function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}

function updateCounts() {
    $("#favoriteCount").textContent = favorites.size;
    $("#cartCount").textContent = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function getFilteredProducts() {
    let list = products.filter(product => {
        const matchesCategory = activeCategory === "Barchasi" || product.category === activeCategory;
        const haystack = `${product.name} ${product.category}`.toLocaleLowerCase("uz");
        const matchesSearch = haystack.includes(searchTerm.toLocaleLowerCase("uz"));
        return matchesCategory && matchesSearch;
    });

    const sort = $("#sortSelect").value;
    if (sort === "cheap") list.sort((a, b) => a.price - b.price);
    if (sort === "expensive") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "popular") list.sort((a, b) => b.popularity - a.popularity);

    return list;
}

function renderProducts() {
    const grid = $("#productGrid");
    const empty = $("#emptyState");
    const list = getFilteredProducts();
    const visible = showAll ? list : list.slice(0, 8);

    grid.innerHTML = visible.map(product => {
        const isFavorite = favorites.has(product.id);
        const badgeClass = product.badge.includes("−") ? "sale" : "";
        return `
      <article class="product-card">
        <div class="product-visual" style="--product-bg:${product.bg}">
          <span class="product-badge ${badgeClass}">${product.badge}</span>
          <button class="wish-btn ${isFavorite ? "active" : ""}"
            data-favorite="${product.id}"
            aria-label="${isFavorite ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo‘shish"}"
            aria-pressed="${isFavorite}">${isFavorite ? "♥" : "♡"}</button>
          <span class="product-emoji" aria-hidden="true">${product.emoji}</span>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-rating"><span>★</span> ${product.rating.toFixed(1)} <span style="color:#aaa4b9">· Xaridorlar tanlovi</span></div>
          <div class="product-price-row">
            <div>
              <div class="product-price">${money(product.price)}</div>
              ${product.oldPrice ? `<span class="product-old-price">${money(product.oldPrice)}</span>` : ""}
            </div>
            <button class="add-cart" data-add="${product.id}" aria-label="Savatchaga qo‘shish">+</button>
          </div>
        </div>
      </article>`;
    }).join("");

    empty.hidden = list.length > 0;
    $("#showMoreBtn").hidden = list.length <= 8 || showAll;
    if (list.length === 0) $("#showMoreBtn").hidden = true;
    updateCounts();
}

function setCategory(category) {
    activeCategory = category;
    showAll = false;

    $$(".filter-chip").forEach(button => {
        button.classList.toggle("active", button.dataset.category === category);
    });

    renderProducts();
    $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
}

function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveState();
    updateCounts();
    renderCart();
    const product = products.find(item => item.id === id);
    toast(`${product.name} savatchaga qo‘shildi ✓`);
}

function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
        toast("Sevimlilardan olib tashlandi");
    } else {
        favorites.add(id);
        toast("Sevimlilarga qo‘shildi ♥");
    }
    saveState();
    renderProducts();
}

function renderCart() {
    const drawerItems = $("#drawerItems");
    const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);

    if (entries.length === 0) {
        drawerItems.innerHTML = `<div class="drawer-empty"><div style="font-size:35px;margin-bottom:12px">🛍️</div>Savatcha hozircha bo‘sh.<br>O‘zingga yoqqan mahsulotni tanla!</div>`;
    } else {
        drawerItems.innerHTML = entries.map(([id, quantity]) => {
            const product = products.find(item => item.id === Number(id));
            if (!product) return "";
            return `<div class="drawer-item">
        <div class="drawer-item-visual">${product.emoji}</div>
        <div><strong>${product.name}</strong><small>${quantity} dona · ${money(product.price * quantity)}</small></div>
        <button class="remove-item" data-remove="${id}" aria-label="Olib tashlash">×</button>
      </div>`;
        }).join("");
    }

    const total = entries.reduce((sum, [id, quantity]) => {
        const product = products.find(item => item.id === Number(id));
        return sum + (product ? product.price * quantity : 0);
    }, 0);

    $("#cartTotal").textContent = money(total);
    updateCounts();
}

function openDrawer() {
    $("#cartDrawer").classList.add("open");
    $("#drawerBackdrop").classList.add("open");
    $("#cartDrawer").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderCart();
}

function closeDrawer() {
    $("#cartDrawer").classList.remove("open");
    $("#drawerBackdrop").classList.remove("open");
    $("#cartDrawer").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

$("#searchForm").addEventListener("submit", event => {
    event.preventDefault();
    searchTerm = $("#searchInput").value.trim();
    activeCategory = "Barchasi";
    showAll = true;
    $$(".filter-chip").forEach(button => {
        button.classList.toggle("active", button.dataset.category === "Barchasi");
    });
    renderProducts();
    $("#products").scrollIntoView({ behavior: "smooth" });
});

$("#searchInput").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    showAll = true;
    renderProducts();
});

$$("[data-search]").forEach(button => {
    button.addEventListener("click", () => {
        $("#searchInput").value = button.dataset.search;
        searchTerm = button.dataset.search;
        showAll = true;
        activeCategory = "Barchasi";
        $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "Barchasi"));
        renderProducts();
        $("#products").scrollIntoView({ behavior: "smooth" });
    });
});

$$(".filter-chip").forEach(button => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
});

$$(".category-card").forEach(button => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
});

$("#sortSelect").addEventListener("change", renderProducts);
$("#showMoreBtn").addEventListener("click", () => {
    showAll = true;
    renderProducts();
});
$("#resetSearch").addEventListener("click", () => {
    searchTerm = "";
    activeCategory = "Barchasi";
    showAll = false;
    $("#searchInput").value = "";
    $("#sortSelect").value = "popular";
    $$(".filter-chip").forEach(button => button.classList.toggle("active", button.dataset.category === "Barchasi"));
    renderProducts();
});
$("#productGrid").addEventListener("click", event => {
    const favoriteButton = event.target.closest("[data-favorite]");
    const addButton = event.target.closest("[data-add]");
    if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favorite));
    if (addButton) addToCart(Number(addButton.dataset.add));
});

$("#favoritesButton").addEventListener("click", () => {
    if (favorites.size === 0) {
        toast("Hali sevimlilarga mahsulot qo‘shmagansiz");
        return;
    }
    searchTerm = "";
    activeCategory = "Barchasi";
    showAll = true;
    renderProducts();
    $$(".product-card").forEach(card => {
        const button = card.querySelector("[data-favorite]");
        if (button && !favorites.has(Number(button.dataset.favorite))) card.hidden = true;
    });
    $("#products").scrollIntoView({ behavior: "smooth" });
    toast("Sevimli mahsulotlaringiz ko‘rsatildi ♥");
});

$("#cartButton").addEventListener("click", openDrawer);
$("#closeDrawer").addEventListener("click", closeDrawer);
$("#drawerBackdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeDrawer();
});

$("#drawerItems").addEventListener("click", event => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    delete cart[button.dataset.remove];
    saveState();
    renderCart();
    toast("Mahsulot savatchadan olib tashlandi");
});

$("#checkoutBtn").addEventListener("click", () => {
    if (Object.values(cart).reduce((sum, quantity) => sum + quantity, 0) === 0) {
        toast("Avval savatchaga mahsulot qo‘shing");
        return;
    }
    toast("Bu demo loyiha — haqiqiy buyurtma yuborilmaydi");
});

$("#catalogBtn").addEventListener("click", () => {
    $("#categories").scrollIntoView({ behavior: "smooth" });
});

$("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    toast("Rahmat! Bu demo obuna formasi ✨");
    $("#emailInput").value = "";
});

// NOVA PLAY — yulduz tutish o‘yini
const canvas = $("#gameCanvas");
const ctx = canvas.getContext("2d");
const gameOverlay = $("#gameOverlay");
const scoreElement = $("#gameScore");
const bestElement = $("#bestScore");
const timeElement = $("#gameTime");

let running = false;
let score = 0;
let timeLeft = 30;
let playerX = canvas.width / 2;
let stars = [];
let particles = [];
let lastFrame = 0;
let spawnClock = 0;
let gameLoopId = 0;
let countdownId = 0;
let lastTimestamp = 0;
let keys = new Set();

let bestScore = 0;
try {
    bestScore = Number(localStorage.getItem("nova-best-score") || 0);
} catch { }
bestElement.textContent = bestScore;

function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#30234e");
    gradient.addColorStop(1, "#171326");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 38; i++) {
        const x = (i * 137 + 31) % canvas.width;
        const y = (i * 71 + 19) % canvas.height;
        ctx.fillStyle = i % 4 === 0 ? "#a997ff" : "#ffffff55";
        ctx.beginPath();
        ctx.arc(x, y, i % 5 === 0 ? 1.8 : 1, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.strokeStyle = "#ffffff0c";
    ctx.lineWidth = 1;
    for (let y = 45; y < canvas.height; y += 45) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function drawPlayer() {
    const y = canvas.height - 44;

    ctx.save();
    ctx.shadowColor = "#a997ff";
    ctx.shadowBlur = 20;
    ctx.fillStyle = "#8c72ff";
    ctx.beginPath();
    ctx.roundRect(playerX - 32, y - 12, 64, 29, 12);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#cfc5ff";
    ctx.beginPath();
    ctx.roundRect(playerX - 24, y - 18, 48, 13, 7);
    ctx.fill();

    ctx.font = "23px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🧺", playerX, y + 6);
    ctx.restore();
}

function drawStar(star) {
    ctx.save();
    ctx.translate(star.x, star.y);
    ctx.rotate(star.spin);
    ctx.shadowColor = "#ffe48a";
    ctx.shadowBlur = 14;
    ctx.fillStyle = star.color;
    ctx.beginPath();

    for (let i = 0; i < 10; i++) {
        const radius = i % 2 === 0 ? star.size : star.size * 0.46;
        const angle = -Math.PI / 2 + i * Math.PI / 5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawParticles() {
    particles.forEach(particle => {
        ctx.globalAlpha = Math.max(0, particle.life / 25);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
}

function createBurst(x, y) {
    for (let i = 0; i < 12; i++) {
        particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.7) * 5,
            life: 25,
            size: 2 + Math.random() * 3,
            color: ["#ffe48a", "#b8a5ff", "#ff9cc8", "#ffffff"][i % 4]
        });
    }
}

function updateGame(delta) {
    const step = Math.min(delta / 16.67, 2);
    const playerSpeed = 6 * step;

    if (keys.has("ArrowLeft") || keys.has("a") || keys.has("A")) playerX -= playerSpeed;
    if (keys.has("ArrowRight") || keys.has("d") || keys.has("D")) playerX += playerSpeed;
    playerX = Math.max(35, Math.min(canvas.width - 35, playerX));

    spawnClock += delta;
    if (spawnClock > 650) {
        spawnClock = 0;
        stars.push({
            x: 20 + Math.random() * (canvas.width - 40),
            y: -15,
            size: 8 + Math.random() * 7,
            speed: 1.8 + Math.random() * 2.4,
            spin: Math.random() * 6,
            color: ["#ffe48a", "#c5b7ff", "#ff9fc7"][Math.floor(Math.random() * 3)]
        });
    }

    stars.forEach(star => {
        star.y += star.speed * step;
        star.spin += 0.025 * step;
    });

    const basketY = canvas.height - 44;
    stars = stars.filter(star => {
        if (star.y > basketY - 20 && star.y < basketY + 20 &&
            Math.abs(star.x - playerX) < 39) {
            score += 1;
            scoreElement.textContent = score;
            createBurst(star.x, star.y);
            return false;
        }
        return star.y < canvas.height + 20;
    });

    particles.forEach(particle => {
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;
        particle.life -= step;
    });
    particles = particles.filter(particle => particle.life > 0);
}

function renderGame(delta = 16) {
    drawBackground();
    stars.forEach(drawStar);
    drawParticles();
    drawPlayer();
}

function gameFrame(timestamp) {
    if (!running) return;
    const delta = lastTimestamp ? timestamp - lastTimestamp : 16;
    lastTimestamp = timestamp;

    updateGame(delta);
    renderGame(delta);

    gameLoopId = requestAnimationFrame(gameFrame);
}

function finishGame() {
    running = false;
    cancelAnimationFrame(gameLoopId);
    clearInterval(countdownId);

    if (score > bestScore) {
        bestScore = score;
        bestElement.textContent = bestScore;
        try {
            localStorage.setItem("nova-best-score", String(bestScore));
        } catch { }
    }

    gameOverlay.classList.remove("hidden");
    gameOverlay.innerHTML = `
    <div class="overlay-icon">${score >= 15 ? "🏆" : "⭐"}</div>
    <h3>O‘yin tugadi!</h3>
    <p>Sen ${score} ta yulduz to‘plading.</p>
    <button class="btn btn-light" id="overlayStart">Yana o‘ynash ↗</button>
  `;
    $("#overlayStart").addEventListener("click", startGame);
}

function startGame() {
    cancelAnimationFrame(gameLoopId);
    clearInterval(countdownId);

    score = 0;
    timeLeft = 30;
    playerX = canvas.width / 2;
    stars = [];
    particles = [];
    spawnClock = 0;
    lastTimestamp = 0;
    scoreElement.textContent = "0";
    timeElement.textContent = "30 SEC";
    running = true;

    gameOverlay.classList.add("hidden");
    gameLoopId = requestAnimationFrame(gameFrame);

    countdownId = setInterval(() => {
        if (!running) return;
        timeLeft -= 1;
        timeElement.textContent = `${timeLeft} SEC`;
        if (timeLeft <= 0) finishGame();
    }, 1000);
}

function movePlayerToPointer(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    playerX = (event.clientX - rect.left) * scaleX;
    playerX = Math.max(35, Math.min(canvas.width - 35, playerX));
}

canvas.addEventListener("pointerdown", event => {
    movePlayerToPointer(event);
    if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", event => {
    if (event.pointerType === "touch" || event.buttons === 1) {
        movePlayerToPointer(event);
    }
});

window.addEventListener("keydown", event => {
    if (["ArrowLeft", "ArrowRight", " "].includes(event.key)) event.preventDefault();
    keys.add(event.key);
});

window.addEventListener("keyup", event => keys.delete(event.key));
window.addEventListener("blur", () => keys.clear());

$("#startGame").addEventListener("click", startGame);
$("#overlayStart").addEventListener("click", startGame);

drawBackground();
drawPlayer();
renderProducts();
renderCart();
updateCounts();
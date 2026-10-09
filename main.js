
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const productCards = $$(".product-card");
    const cart = new Map();
    const favorites = new Set();
    let activeFilter = "Barchasi";
    let searchTerm = "";
    let toastTimer;

    const products = new Map(
        productCards.map(card => [
            card.dataset.id,
            {
                id: card.dataset.id,
                name: card.dataset.name,
                category: card.dataset.category,
                price: Number(card.dataset.price),
                image: $("img", card)?.src || "",
                card
            }
        ])
    );

    const money = value =>
        new Intl.NumberFormat("uz-UZ").format(value) + " so‘m";

    function toast(message) {
        const element = $("#toast");
        if (!element) return;

        element.textContent = message;
        element.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            element.classList.remove("show");
        }, 2600);
    }

    // Mahsulot qidiruvi va kategoriya filtri
    function filterProducts() {
        let visible = 0;

        productCards.forEach(card => {
            const matchesCategory =
                activeFilter === "Barchasi" ||
                card.dataset.category === activeFilter;

            const text = (
                card.dataset.name + " " +
                card.dataset.category
            ).toLocaleLowerCase("uz");

            const matchesSearch = text.includes(searchTerm);
            const show = matchesCategory && matchesSearch;

            card.hidden = !show;
            if (show) visible++;
        });

        const results = $("#resultsCount");
        if (results) {
            results.textContent = searchTerm
                ? `${visible} ta mos mahsulot topildi`
                : `${visible} ta mahsulot`;
        }

        const empty = $("#emptyState");
        if (empty) empty.hidden = visible !== 0;
    }

    $("#searchForm")?.addEventListener("submit", event => {
        event.preventDefault();
        searchTerm = ($("#searchInput")?.value || "")
            .trim()
            .toLocaleLowerCase("uz");

        filterProducts();
        $("#products")?.scrollIntoView({ behavior: "smooth" });

        if (searchTerm && !productCards.some(card =>
            !card.hidden
        )) {
            toast("Mahsulot topilmadi. Boshqa so‘z bilan urinib ko‘ring.");
        }
    });

    $("#searchInput")?.addEventListener("input", event => {
        searchTerm = event.target.value.trim().toLocaleLowerCase("uz");
        filterProducts();
    });

    $$(".filter-tab").forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter || "Barchasi";

            $$(".filter-tab").forEach(tab => {
                tab.classList.toggle("active", tab === button);
            });

            filterProducts();
        });
    });

    // Kategoriya kartalari va yuqoridagi katalog
    $$("[data-category]").forEach(link => {
        link.addEventListener("click", event => {
            const category = link.dataset.category;
            if (!category) return;

            event.preventDefault();
            activeFilter = category;
            searchTerm = "";

            const searchInput = $("#searchInput");
            if (searchInput) searchInput.value = "";

            $$(".filter-tab").forEach(tab => {
                tab.classList.toggle(
                    "active",
                    tab.dataset.filter === category
                );
            });

            filterProducts();
            $("#products")?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Narx bo‘yicha saralash
    $("#sortSelect")?.addEventListener("change", event => {
        const mode = event.target.value;
        const grid = $("#productGrid");
        if (!grid) return;

        const sorted = [...productCards];

        if (mode === "price-asc") {
            sorted.sort((a, b) =>
                Number(a.dataset.price) - Number(b.dataset.price)
            );
        } else if (mode === "price-desc") {
            sorted.sort((a, b) =>
                Number(b.dataset.price) - Number(a.dataset.price)
            );
        }

        sorted.forEach(card => grid.appendChild(card));
        filterProducts();
    });

    $("#catalogButton")?.addEventListener("click", () => {
        $("#categories")?.scrollIntoView({ behavior: "smooth" });
    });

    $("#showAllButton")?.addEventListener("click", () => {
        activeFilter = "Barchasi";
        searchTerm = "";

        if ($("#searchInput")) $("#searchInput").value = "";

        $$(".filter-tab").forEach(tab => {
            tab.classList.toggle(
                "active",
                tab.dataset.filter === "Barchasi"
            );
        });

        filterProducts();
        toast("Barcha mavjud demo mahsulotlar ko‘rsatildi.");
    });

    // Sevimlilar
    function toggleFavorite(button) {
        const card = button.closest(".product-card");
        const id = card?.dataset.id;
        if (!id) return;

        if (favorites.has(id)) {
            favorites.delete(id);
            button.classList.remove("is-favorite");
            button.textContent = "♡";
            toast("Sevimlilardan olib tashlandi.");
        } else {
            favorites.add(id);
            button.classList.add("is-favorite");
            button.textContent = "♥";
            toast("Sevimlilarga qo‘shildi!");
        }
    }

    $$(".favorite-toggle").forEach(button => {
        button.addEventListener("click", () => toggleFavorite(button));
    });

    $("#favoritesButton")?.addEventListener("click", () => {
        if (favorites.size === 0) {
            toast("Hali sevimlilarga mahsulot qo‘shmagansiz.");
            return;
        }

        activeFilter = "Barchasi";
        searchTerm = "";

        if ($("#searchInput")) $("#searchInput").value = "";

        productCards.forEach(card => {
            card.hidden = !favorites.has(card.dataset.id);
        });

        $$(".filter-tab").forEach(tab => {
            tab.classList.toggle(
                "active",
                tab.dataset.filter === "Barchasi"
            );
        });

        if ($("#resultsCount")) {
            $("#resultsCount").textContent =
                `${favorites.size} ta sevimli mahsulot`;
        }

        if ($("#emptyState")) $("#emptyState").hidden = true;

        $("#products")?.scrollIntoView({ behavior: "smooth" });
    });

    // Savatcha paneli
    const drawer = $("#cartDrawer");
    const backdrop = $("#drawerBackdrop");

    function updateScrollLock() {
        const isOpen =
            drawer?.classList.contains("open") ||
            $("#playModal")?.classList.contains("open") ||
            $("#accountModal")?.classList.contains("open");

        document.body.classList.toggle("no-scroll", Boolean(isOpen));
    }

    function openCart() {
        drawer?.classList.add("open");
        backdrop?.classList.add("open");
        drawer?.setAttribute("aria-hidden", "false");
        updateScrollLock();
        $("#closeCartButton")?.focus();
    }

    function closeCart() {
        drawer?.classList.remove("open");
        backdrop?.classList.remove("open");
        drawer?.setAttribute("aria-hidden", "true");
        updateScrollLock();
    }

    $("#cartButton")?.addEventListener("click", openCart);
    $("#closeCartButton")?.addEventListener("click", closeCart);
    backdrop?.addEventListener("click", closeCart);

    function addToCart(id) {
        const product = products.get(id);
        if (!product) return;

        const existing = cart.get(id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.set(id, { ...product, quantity: 1 });
        }

        renderCart();
        toast(`${product.name} savatchaga qo‘shildi!`);
    }

    // Kartochkadagi ikkala qo‘shish tugmasi
    $$("[data-add]").forEach(button => {
        button.addEventListener("click", () => {
            addToCart(button.dataset.add);
        });
    });

    function renderCart() {
        const count = [...cart.values()].reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const total = [...cart.values()].reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        if ($("#cartCount")) $("#cartCount").textContent = count;
        if ($("#drawerCount")) $("#drawerCount").textContent = `(${count})`;
        if ($("#cartTotal")) $("#cartTotal").textContent = money(total);

        const container = $("#cartItems");
        if (!container) return;

        if (cart.size === 0) {
            container.innerHTML = `
        <div class="cart-empty">
          <span>🛍</span>
          <h3>Savatchangiz hozircha bo‘sh</h3>
          <p>Yoqtirgan mahsulotlaringizni shu yerga qo‘shing.</p>
        </div>`;
            return;
        }

        container.replaceChildren();

        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "cart-item";

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.loading = "lazy";

            const info = document.createElement("div");
            const title = document.createElement("h3");
            title.textContent = item.name;

            const price = document.createElement("strong");
            price.textContent = money(item.price * item.quantity);

            const controls = document.createElement("div");
            controls.className = "quantity-control";

            const minus = document.createElement("button");
            minus.type = "button";
            minus.textContent = "−";
            minus.setAttribute("aria-label", "Miqdorni kamaytirish");
            minus.addEventListener("click", () => changeQuantity(item.id, -1));

            const quantity = document.createElement("span");
            quantity.textContent = item.quantity;

            const plus = document.createElement("button");
            plus.type = "button";
            plus.textContent = "+";
            plus.setAttribute("aria-label", "Miqdorni oshirish");
            plus.addEventListener("click", () => changeQuantity(item.id, 1));

            controls.append(minus, quantity, plus);
            info.append(title, price, controls);

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "remove-item";
            remove.textContent = "×";
            remove.setAttribute("aria-label", "Mahsulotni o‘chirish");
            remove.addEventListener("click", () => {
                cart.delete(item.id);
                renderCart();
                toast("Mahsulot savatchadan olib tashlandi.");
            });

            row.append(image, info, remove);
            container.appendChild(row);
        });
    }

    function changeQuantity(id, delta) {
        const item = cart.get(id);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) cart.delete(id);

        renderCart();
    }

    $("#checkoutButton")?.addEventListener("click", () => {
        if (cart.size === 0) {
            toast("Avval savatchaga mahsulot qo‘shing.");
            return;
        }

        toast("Demo rejim: haqiqiy buyurtma uchun backend va checkout kerak.");
    });

    // Modal oynalar
    function openModal(id) {
        const modal = $(id);
        if (!modal) return;

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        updateScrollLock();
    }

    function closeModal(id) {
        const modal = $(id);
        if (!modal) return;

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        updateScrollLock();
    }

    $("#accountButton")?.addEventListener("click", () => {
        openModal("#accountModal");
    });

    $("#closeAccountButton")?.addEventListener("click", () => {
        closeModal("#accountModal");
    });

    $("#accountOkButton")?.addEventListener("click", () => {
        closeModal("#accountModal");
    });

    $("#openPlayButton")?.addEventListener("click", () => {
        openModal("#playModal");
    });

    $("#closePlayButton")?.addEventListener("click", () => {
        stopReactionGame();
        closeModal("#playModal");
    });

    $$(".play-modal, .account-modal").forEach(modal => {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                stopReactionGame();
                closeModal("#" + modal.id);
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;

        closeCart();
        closeModal("#playModal");
        closeModal("#accountModal");
    });

    // ZOOR Play: uchta ishlaydigan mini-o‘yin
    const gameStatus = $("#gameStatus");
    let reactionTimer = null;
    let reactionStartedAt = 0;
    let reactionState = "idle";

    function stopReactionGame() {
        if (reactionTimer !== null) {
            clearTimeout(reactionTimer);
            reactionTimer = null;
        }
        reactionState = "idle";
    }

    function playMemory() {
        const sequence = Array.from(
            { length: 5 },
            () => Math.floor(Math.random() * 4) + 1
        );

        if (gameStatus) {
            gameStatus.textContent =
                `Ketma-ketlik: ${sequence.join(" · ")} — 3 soniya eslab qoling!`;
        }

        setTimeout(() => {
            if (!$("#playModal")?.classList.contains("open")) return;

            if (gameStatus) {
                gameStatus.textContent =
                    "Endi ketma-ketlikni eslab, o‘zingizni sinab ko‘ring: " +
                    sequence.length + " ta sonni eslay oldingizmi?";
            }
        }, 3000);
    }

    function startReaction() {
        stopReactionGame();
        reactionState = "waiting";

        if (gameStatus) {
            gameStatus.textContent =
                "Tayyor turing... ekran yashildan binafsha rangga o‘zgarganda shu oyna ustiga bosing!";
        }

        reactionTimer = setTimeout(() => {
            if (reactionState !== "waiting") return;

            reactionState = "go";
            reactionStartedAt = performance.now();

            if (gameStatus) {
                gameStatus.textContent =
                    "HOZIR BOSING! ⚡ (O‘yin tugmasini yana bosing)";
            }
        }, 1500 + Math.random() * 2500);
    }

    $$(".game-option").forEach(button => {
        button.addEventListener("click", () => {
            const game = button.dataset.game;

            if (game === "memory") {
                stopReactionGame();
                playMemory();
            } else if (game === "reaction") {
                if (reactionState === "go") {
                    const elapsed = Math.round(performance.now() - reactionStartedAt);
                    stopReactionGame();

                    if (gameStatus) {
                        gameStatus.textContent = `Reaksiya vaqtingiz: ${elapsed} ms! Qayta urinib, natijangizni yaxshilang.`;
                    }
                } else if (reactionState === "waiting") {
                    stopReactionGame();
                    if (gameStatus) {
                        gameStatus.textContent = "Juda erta! Biroz kuting va qayta boshlang.";
                    }
                } else {
                    startReaction();
                }
            } else if (game === "puzzle") {
                stopReactionGame();

                const colors = ["🟣", "🟢", "🟠", "🔵"];
                const target = colors[Math.floor(Math.random() * colors.length)];

                if (gameStatus) {
                    gameStatus.textContent =
                        `Rang jumboqi: ${target} belgini toping! Tanlovlar: ${colors.join("  ")}. To‘g‘ri javob — ${target}.`;
                }
            }
        });
    });

    // Obuna formasi — hozircha demo
    $("#newsletterForm")?.addEventListener("submit", event => {
        event.preventDefault();

        const input = $("#newsletterEmail");
        if (!input?.checkValidity()) {
            input?.reportValidity();
            return;
        }

        toast("Rahmat! Demo rejimda obuna serverga yuborilmadi.");
        input.value = "";
    });

    // Boshlang‘ich holat
    filterProducts();
    renderCart();
});
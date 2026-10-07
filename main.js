// ===== PRODUCTS DATA (60 items) =====
const products = [
    // PHONES (10)
    { id: 1, name: "iPhone 16 Pro Max 256GB", category: "phones", price: 1199, oldPrice: 1399, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400", rating: 4.9, reviews: 2847, badge: "hot", desc: "A18 Pro chip, 48MP kamera, Titan dizayn" },
    { id: 2, name: "iPhone 16 Pro 128GB", category: "phones", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400", rating: 4.8, reviews: 1923, badge: "new", desc: "A18 Pro chip, ProMotion displey" },
    { id: 3, name: "iPhone 16 128GB", category: "phones", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400", rating: 4.7, reviews: 3421, badge: null, desc: "A18 chip, 48MP asosiy kamera" },
    { id: 4, name: "Samsung Galaxy S24 Ultra", category: "phones", price: 1099, oldPrice: 1299, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.8, reviews: 2156, badge: "sale", desc: "Snapdragon 8 Gen 3, 200MP kamera, S Pen" },
    { id: 5, name: "Samsung Galaxy S24+", category: "phones", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", rating: 4.6, reviews: 1534, badge: null, desc: "6.7 inch Dynamic AMOLED, 50MP" },
    { id: 6, name: "Samsung Galaxy Z Fold 5", category: "phones", price: 1799, oldPrice: 1999, image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=400", rating: 4.5, reviews: 876, badge: "hot", desc: "Buklama ekran, 7.6 inch" },
    { id: 7, name: "Google Pixel 8 Pro", category: "phones", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", rating: 4.7, reviews: 1245, badge: "new", desc: "Tensor G3, AI kamera, 50MP" },
    { id: 8, name: "Xiaomi 14 Pro", category: "phones", price: 699, oldPrice: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4.6, reviews: 987, badge: null, desc: "Snapdragon 8 Gen 3, Leica kamera" },
    { id: 9, name: "OnePlus 12", category: "phones", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400", rating: 4.5, reviews: 654, badge: "new", desc: "Snapdragon 8 Gen 3, 100W zaryad" },
    { id: 10, name: "Huawei Mate 60 Pro", category: "phones", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400", rating: 4.4, reviews: 432, badge: "sale", desc: "Kirin 9000s, Sunway kamera" },
    // LAPTOPS (10)
    { id: 11, name: "MacBook Pro 16 M3 Max", category: "laptops", price: 3499, oldPrice: 3999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.9, reviews: 1876, badge: "hot", desc: "M3 Max chip, 36GB RAM, 1TB SSD" },
    { id: 12, name: "MacBook Pro 14 M3 Pro", category: "laptops", price: 1999, oldPrice: 2199, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400", rating: 4.8, reviews: 2341, badge: null, desc: "M3 Pro chip, 18GB RAM, 512GB SSD" },
    { id: 13, name: "MacBook Air 15 M3", category: "laptops", price: 1299, oldPrice: null, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400", rating: 4.7, reviews: 3124, badge: "new", desc: "M3 chip, 8GB RAM, 256GB SSD" },
    { id: 14, name: "MacBook Air 13 M2", category: "laptops", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", rating: 4.7, reviews: 4532, badge: "sale", desc: "M2 chip, 8GB RAM, 256GB SSD" },
    { id: 15, name: "Dell XPS 15 OLED", category: "laptops", price: 1899, oldPrice: 2199, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400", rating: 4.6, reviews: 1234, badge: null, desc: "Intel i9, 32GB RAM, RTX 4060" },
    { id: 16, name: "ASUS ROG Strix G16", category: "laptops", price: 1599, oldPrice: 1799, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", rating: 4.7, reviews: 876, badge: "hot", desc: "Intel i9-13980HX, RTX 4070, 16GB" },
    { id: 17, name: "Lenovo ThinkPad X1 Carbon", category: "laptops", price: 1499, oldPrice: null, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", rating: 4.6, reviews: 1543, badge: null, desc: "Intel i7-1365U, 16GB RAM, 512GB" },
    { id: 18, name: "HP Spectre x360 14", category: "laptops", price: 1399, oldPrice: 1599, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400", rating: 4.5, reviews: 765, badge: "sale", desc: "Intel i7, OLED, 16GB RAM" },
    { id: 19, name: "ASUS ZenBook 14 OLED", category: "laptops", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", rating: 4.6, reviews: 1098, badge: null, desc: "AMD Ryzen 7, 16GB RAM, OLED" },
    { id: 20, name: "Microsoft Surface Laptop 5", category: "laptops", price: 1299, oldPrice: null, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400", rating: 4.5, reviews: 654, badge: "new", desc: "Intel i7, 16GB RAM, 512GB SSD" },
    // TABLETS (7)
    { id: 21, name: "iPad Pro 13 M4", category: "tablets", price: 1299, oldPrice: 1499, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", rating: 4.9, reviews: 1567, badge: "hot", desc: "M4 chip, OLED displey, 256GB" },
    { id: 22, name: "iPad Pro 11 M4", category: "tablets", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400", rating: 4.8, reviews: 2134, badge: null, desc: "M4 chip, 128GB, Wi-Fi" },
    { id: 23, name: "iPad Air M2 13\"", category: "tablets", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400", rating: 4.7, reviews: 1876, badge: "new", desc: "M2 chip, 128GB, Wi-Fi" },
    { id: 24, name: "iPad Air M2 11\"", category: "tablets", price: 599, oldPrice: 699, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400", rating: 4.7, reviews: 2345, badge: "sale", desc: "M2 chip, 64GB, Wi-Fi" },
    { id: 25, name: "iPad 10-avlod", category: "tablets", price: 449, oldPrice: null, image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400", rating: 4.5, reviews: 3456, badge: null, desc: "A14 Bionic, 64GB, 10.9 inch" },
    { id: 26, name: "Samsung Galaxy Tab S9 Ultra", category: "tablets", price: 1199, oldPrice: 1399, image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400", rating: 4.6, reviews: 876, badge: "hot", desc: "Snapdragon 8 Gen 2, 14.6 inch AMOLED" },
    { id: 27, name: "Samsung Galaxy Tab S9+", category: "tablets", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400", rating: 4.5, reviews: 654, badge: null, desc: "12.4 inch AMOLED, S Pen" },
    // AUDIO (8)
    { id: 28, name: "AirPods Pro 2 (USB-C)", category: "audio", price: 249, oldPrice: 279, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f49?w=400", rating: 4.8, reviews: 5678, badge: "hot", desc: "Adaptive Audio, USB-C, 30 soat batareya" },
    { id: 29, name: "AirPods Max", category: "audio", price: 549, oldPrice: 599, image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400", rating: 4.7, reviews: 2345, badge: null, desc: "Spatial Audio, 20 soat batareya" },
    { id: 30, name: "AirPods 3-avlod", category: "audio", price: 169, oldPrice: 179, image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400", rating: 4.6, reviews: 4321, badge: "sale", desc: "Spatial Audio, MagSafe" },
    { id: 31, name: "Sony WH-1000XM5", category: "audio", price: 349, oldPrice: 399, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400", rating: 4.8, reviews: 3456, badge: "hot", desc: "Industry-leading ANC, 30 soat" },
    { id: 32, name: "Sony WF-1000XM5", category: "audio", price: 279, oldPrice: 299, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400", rating: 4.7, reviews: 2134, badge: null, desc: "True wireless, ANC, LDAC" },
    { id: 33, name: "Bose QuietComfort Ultra", category: "audio", price: 429, oldPrice: null, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400", rating: 4.7, reviews: 1567, badge: "new", desc: "Immersive Audio, ANC" },
    { id: 34, name: "JBL Tune 770NC", category: "audio", price: 99, oldPrice: 129, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4.4, reviews: 2876, badge: "sale", desc: "ANC, 70 soat batareya" },
    { id: 35, name: "Samsung Galaxy Buds3 Pro", category: "audio", price: 229, oldPrice: 249, image: "https://images.unsplash.com/photo-1598331668871-c8a6b5a8a6e7?w=400", rating: 4.5, reviews: 1234, badge: null, desc: "ANC, 360 Audio, IPX7" },
    // GAMING (7)
    { id: 36, name: "PlayStation 5 Slim", category: "gaming", price: 449, oldPrice: 499, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400", rating: 4.9, reviews: 8765, badge: "hot", desc: "1TB SSD, 4K gaming, DualSense" },
    { id: 37, name: "PlayStation 5 Pro", category: "gaming", price: 699, oldPrice: null, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400", rating: 4.8, reviews: 3456, badge: "new", desc: "8K gaming, 2TB SSD, Ray Tracing" },
    { id: 38, name: "Xbox Series X", category: "gaming", price: 499, oldPrice: 549, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400", rating: 4.7, reviews: 5432, badge: "sale", desc: "1TB SSD, 12 TFLOPS, 4K 120fps" },
    { id: 39, name: "Nintendo Switch OLED", category: "gaming", price: 349, oldPrice: null, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400", rating: 4.8, reviews: 6789, badge: null, desc: "7 inch OLED, 64GB, Joy-Con" },
    { id: 40, name: "Steam Deck OLED 1TB", category: "gaming", price: 649, oldPrice: 699, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400", rating: 4.7, reviews: 2345, badge: "hot", desc: "7.4 inch OLED, 1TB, Wi-Fi 6E" },
    { id: 41, name: "ASUS ROG Ally", category: "gaming", price: 599, oldPrice: 699, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400", rating: 4.5, reviews: 1234, badge: "sale", desc: "AMD Z1 Extreme, 7 inch 120Hz" },
    { id: 42, name: "PS5 DualSense Controller", category: "gaming", price: 69, oldPrice: 79, image: "https://images.unsplash.com/photo-1592840496011-b8052509813c?w=400", rating: 4.7, reviews: 4567, badge: null, desc: "Haptic feedback, Adaptive triggers" },
    // TVs (4)
    { id: 43, name: "Samsung 65\" QN90C Neo QLED 4K", category: "tvs", price: 1799, oldPrice: 2199, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400", rating: 4.8, reviews: 1234, badge: "sale", desc: "Neo QLED, 4K 120Hz, Gaming Hub" },
    { id: 44, name: "LG 55\" C3 OLED 4K", category: "tvs", price: 1299, oldPrice: 1499, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400", rating: 4.9, reviews: 2345, badge: "hot", desc: "OLED evo, α9 Gen6, Dolby Vision" },
    { id: 45, name: "Sony 65\" A95L QD-OLED", category: "tvs", price: 2799, oldPrice: null, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400", rating: 4.9, reviews: 876, badge: "new", desc: "QD-OLED, XR Processor, 4K 120Hz" },
    { id: 46, name: "TCL 55\" C845 Mini LED 4K", category: "tvs", price: 699, oldPrice: 899, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400", rating: 4.5, reviews: 1567, badge: "sale", desc: "Mini LED, 144Hz, Google TV" },
    // APPLIANCES (5)
    { id: 47, name: "Samsung Bespoke AI Fridge", category: "appliances", price: 2499, oldPrice: 2999, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400", rating: 4.6, reviews: 543, badge: "hot", desc: "AI Energy Mode, 28 cu ft, Family Hub" },
    { id: 48, name: "LG WashTower AI", category: "appliances", price: 1899, oldPrice: 2199, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400", rating: 4.7, reviews: 432, badge: "new", desc: "AI Direct Drive, 5.2 cu ft" },
    { id: 49, name: "Dyson V15 Detect", category: "appliances", price: 749, oldPrice: 849, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400", rating: 4.8, reviews: 2134, badge: null, desc: "Laser dust detection, 60 min" },
    { id: 50, name: "iRobot Roomba j9+", category: "appliances", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1589820296156-2454bb8a4250?w=400", rating: 4.6, reviews: 1876, badge: "sale", desc: "AI navigation, Auto-empty, Pet friendly" },
    { id: 51, name: "Ninja Foodi 14-in-1", category: "appliances", price: 299, oldPrice: 349, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.7, reviews: 3456, badge: null, desc: "Pressure cook, air fry, bake" },
    // SMART HOME (4)
    { id: 52, name: "Apple HomePod 2", category: "smart", price: 299, oldPrice: null, image: "https://images.unsplash.com/photo-1543512214-318c77a07298?w=400", rating: 4.6, reviews: 1234, badge: "new", desc: "Spatial Audio, Siri, Smart Home Hub" },
    { id: 53, name: "Google Nest Hub Max", category: "smart", price: 229, oldPrice: 249, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400", rating: 4.5, reviews: 2345, badge: null, desc: "10 inch display, Google Assistant" },
    { id: 54, name: "Amazon Echo Show 15", category: "smart", price: 279, oldPrice: 299, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400", rating: 4.4, reviews: 1567, badge: "sale", desc: "15.6 inch, Alexa, Smart display" },
    { id: 55, name: "Ring Video Doorbell Pro 2", category: "smart", price: 249, oldPrice: null, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", rating: 4.5, reviews: 3456, badge: null, desc: "1536p video, 3D motion, Alexa" },
    // DRONES (5)
    { id: 56, name: "DJI Mavic 3 Pro", category: "drones", price: 2199, oldPrice: 2499, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400", rating: 4.9, reviews: 876, badge: "hot", desc: "Hasselblad camera, 46 min flight" },
    { id: 57, name: "DJI Air 3", category: "drones", price: 1099, oldPrice: 1199, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400", rating: 4.7, reviews: 1234, badge: "new", desc: "Dual camera, 46 min, 20km range" },
    { id: 58, name: "DJI Mini 4 Pro", category: "drones", price: 759, oldPrice: null, image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400", rating: 4.8, reviews: 2345, badge: null, desc: "249g, 4K HDR, Omnidirectional sensing" },
    { id: 59, name: "Autel EVO Lite+", category: "drones", price: 1149, oldPrice: 1299, image: "https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?w=400", rating: 4.6, reviews: 543, badge: "sale", desc: "1-inch sensor, 40 min flight" },
    { id: 60, name: "DJI FPV Combo", category: "drones", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1506947411487-a56738c4b582?w=400", rating: 4.5, reviews: 765, badge: null, desc: "Immersive FPV, 4K 60fps, 140 km/h" }
];

// ===== STATE =====
let cart = [], wishlist = [], currentUser = null, displayed = 12, curCat = 'all', curSort = 'popular';

// ===== AUTH =====
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(tab === 'signin' ? 'signinForm' : 'signupForm').classList.add('active');
}
function togglePass(id, btn) {
    const i = document.getElementById(id), ic = btn.querySelector('i');
    if (i.type === 'password') { i.type = 'text'; ic.className = 'fas fa-eye-slash' }
    else { i.type = 'password'; ic.className = 'fas fa-eye' }
}
function checkStrength(pw) {
    let s = 0;
    if (pw.length >= 8) s++; if (pw.length >= 12) s++;
    if (/[A-Z]/.test(pw)) s++; if (/[0-9]/.test(pw)) s++; if (/[^A-Za-z0-9]/.test(pw)) s++;
    const lv = [{ p: 20, c: '#ff6b6b', l: 'Juda zaif' }, { p: 40, c: '#fdcb6e', l: 'Zaif' }, { p: 60, c: '#ffeaa7', l: "O'rtacha" }, { p: 80, c: '#00b894', l: 'Kuchli' }, { p: 100, c: '#00cec9', l: 'Juda kuchli' }];
    const v = lv[Math.min(s, 4)];
    const f = document.getElementById('strengthFill'), lb = document.getElementById('strengthLabel');
    if (f) { f.style.width = v.p + '%'; f.style.background = v.c }
    if (lb) { lb.textContent = v.l; lb.style.color = v.c }
}
function handleSignIn(e) {
    e.preventDefault();
    const em = document.getElementById('signinEmail').value, pw = document.getElementById('signinPassword').value;
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    const user = users.find(u => u.email === em && u.password === pw);
    if (user) { currentUser = user; localStorage.setItem('tz_cur', JSON.stringify(user)); enterSite(); showToast('Xush kelibsiz, ' + user.name + '!', 'success') }
    else { const nu = { name: em.split('@')[0], email: em, password: pw, phone: '' }; users.push(nu); localStorage.setItem('tz_users', JSON.stringify(users)); currentUser = nu; localStorage.setItem('tz_cur', JSON.stringify(nu)); enterSite(); showToast('Muvaffaqiyatli kirdingiz!', 'success') }
}
function handleSignUp(e) {
    e.preventDefault();
    const nm = document.getElementById('signupName').value, em = document.getElementById('signupEmail').value, ph = document.getElementById('signupPhone').value, pw = document.getElementById('signupPassword').value, cf = document.getElementById('signupConfirm').value;
    if (pw !== cf) { showToast('Parollar mos kelmaydi!', 'error'); return }
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    if (users.find(u => u.email === em)) { showToast('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error'); return }
    const nu = { name: nm, email: em, phone: ph, password: pw }; users.push(nu); localStorage.setItem('tz_users', JSON.stringify(users)); currentUser = nu; localStorage.setItem('tz_cur', JSON.stringify(nu)); enterSite(); showToast('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!', 'success');
}
function socialAuth(pr) { currentUser = { name: pr + ' User', email: 'user@' + pr.toLowerCase() + '.com', phone: '' }; localStorage.setItem('tz_cur', JSON.stringify(currentUser)); enterSite(); showToast(pr + ' orqali muvaffaqiyatli kirdingiz!', 'success') }
function enterSite() { document.getElementById('authOverlay').style.display = 'none'; document.getElementById('mainWebsite').style.display = 'block'; document.getElementById('userName').textContent = currentUser.name; initSite() }
function logout() { currentUser = null; localStorage.removeItem('tz_cur'); document.getElementById('mainWebsite').style.display = 'none'; document.getElementById('authOverlay').style.display = 'flex'; document.getElementById('userDD').classList.remove('show'); showToast('Tizimdan chiqdingiz', 'info') }

window.addEventListener('load', () => { const s = localStorage.getItem('tz_cur'); if (s) { currentUser = JSON.parse(s); enterSite() } });

// ===== SITE INIT =====
function initSite() { renderProds(); renderOffers(); initScroll(); animStats() }

function renderProds() {
    const g = document.getElementById('prodGrid');
    let f = getFiltered().slice(0, displayed);
    g.innerHTML = f.map((p, i) => `
        <div class="prod-card" style="animation-delay:${i * .04}s" data-id="${p.id}">
            ${p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge === 'new' ? 'YANGI' : p.badge === 'sale' ? 'AKSIYA' : '🔥 HIT'}</span>` : ''}
            <button class="prod-wish ${wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWish(${p.id},event)"><i class="fas fa-heart"></i></button>
            <div class="prod-img">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a3e/6c5ce7?text=${encodeURIComponent(p.name)}'">
                <div class="quick-acts">
                    <button class="qa-btn" onclick="showProdDetail(${p.id})"><i class="fas fa-eye"></i> Ko'rish</button>
                    <button class="qa-btn add" onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Savatga</button>
                </div>
            </div>
            <div class="prod-info">
                <div class="prod-cat">${catName(p.category)}</div>
                <h3 class="prod-name">${p.name}</h3>
                <div class="prod-rating"><span class="stars">${stars(p.rating)}</span><span class="rating-cnt">(${p.reviews})</span></div>
                <div class="prod-price"><span class="price-cur">$${p.price.toLocaleString()}</span>${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}</div>
            </div>
        </div>`).join('');
    const lb = document.getElementById('loadMoreBtn');
    if (lb) lb.style.display = displayed >= getFiltered().length ? 'none' : 'inline-flex';
}

function getFiltered() {
    let f = curCat === 'all' ? [...products] : products.filter(p => p.category === curCat);
    const s = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    if (s) f = f.filter(p => p.name.toLowerCase().includes(s) || p.desc.toLowerCase().includes(s));
    switch (curSort) { case 'cheap': f.sort((a, b) => a.price - b.price); break; case 'expensive': f.sort((a, b) => b.price - a.price); break; case 'new': f.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)); break; default: f.sort((a, b) => b.reviews - a.reviews) }
    return f;
}
function catName(c) { return { phones: 'Telefonlar', laptops: 'Noutbuklar', tablets: 'iPadlar', audio: 'Audio', gaming: 'Gaming', tvs: 'Televizorlar', appliances: 'Maishiy texnika', smart: 'Aqlli Uy', drones: 'Dronlar' }[c] || c }
function stars(r) { const f = Math.floor(r), h = r % 1 >= .5 ? 1 : 0, e = 5 - f - h; return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e) }

function filterCat(c, btn) { curCat = c; displayed = 12; document.querySelectorAll('.nav-cat').forEach(x => x.classList.remove('active')); if (btn) btn.classList.add('active'); renderProds() }
function sortProd(s, btn) { curSort = s; document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active')); if (btn) btn.classList.add('active'); renderProds() }
function searchProducts() { displayed = 60; renderProds() }
function loadMore() { displayed += 12; renderProds() }

// ===== CART =====
function addToCart(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    const ex = cart.find(x => x.id === id);
    if (ex) ex.qty++; else cart.push({ ...p, qty: 1 });
    updateCartUI(); showToast(p.name + ' savatga qo\'shildi!', 'success');
}
function removeFromCart(id) { cart = cart.filter(x => x.id !== id); updateCartUI(); renderCart() }
function updateQty(id, d) { const it = cart.find(x => x.id === id); if (it) { it.qty += d; if (it.qty <= 0) { removeFromCart(id); return } } updateCartUI(); renderCart() }
function updateCartUI() { const c = cart.reduce((s, x) => s + x.qty, 0), t = cart.reduce((s, x) => s + x.price * x.qty, 0); document.getElementById('cartCount').textContent = c; document.getElementById('cartTotal').textContent = '$' + t.toLocaleString() }
function renderCart() {
    const c = document.getElementById('cartItems');
    if (!cart.length) { c.innerHTML = '<div class="side-empty"><i class="fas fa-shopping-cart"></i><p>Savat bo\'sh</p></div>'; return }
    c.innerHTML = cart.map(it => `
        <div class="side-item">
            <div class="side-item-img"><img src="${it.image}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/70/1a1a3e/6c5ce7?text=IMG'"></div>
            <div class="side-item-info">
                <div class="side-item-name">${it.name}</div>
                <div class="side-item-price">$${(it.price * it.qty).toLocaleString()}</div>
                <div class="side-item-qty">
                    <button class="qty-btn" onclick="updateQty(${it.id},-1)">-</button>
                    <span>${it.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${it.id},1)">+</button>
                </div>
            </div>
            <button class="side-item-rm" onclick="removeFromCart(${it.id})"><i class="fas fa-trash"></i></button>
        </div>`).join('');
}
function showCart() { renderCart(); document.getElementById('cartOv').classList.add('show'); document.getElementById('cartPanel').classList.add('show') }
function closeCart() { document.getElementById('cartOv').classList.remove('show'); document.getElementById('cartPanel').classList.remove('show') }
function checkout() { if (!cart.length) { showToast('Savat bo\'sh!', 'error'); return } const t = cart.reduce((s, x) => s + x.price * x.qty, 0); showToast('Buyurtma qabul qilindi! Jami: $' + t.toLocaleString(), 'success'); cart = []; updateCartUI(); renderCart(); closeCart() }

// ===== WISHLIST =====
function toggleWish(id, ev) { if (ev) ev.stopPropagation(); const i = wishlist.indexOf(id); if (i > -1) { wishlist.splice(i, 1); showToast('Sevimlilardan olib tashlandi', 'info') } else { wishlist.push(id); showToast('Sevimlilarga qo\'shildi!', 'success') } document.getElementById('wishCount').textContent = wishlist.length; renderProds(); renderWish() }
function renderWish() {
    const c = document.getElementById('wishItems'), items = products.filter(p => wishlist.includes(p.id));
    if (!items.length) { c.innerHTML = '<div class="side-empty"><i class="fas fa-heart"></i><p>Sevimlilar bo\'sh</p></div>'; return }
    c.innerHTML = items.map(it => `
        <div class="side-item">
            <div class="side-item-img"><img src="${it.image}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/70/1a1a3e/6c5ce7?text=IMG'"></div>
            <div class="side-item-info"><div class="side-item-name">${it.name}</div><div class="side-item-price">$${it.price.toLocaleString()}</div></div>
            <button class="side-item-rm" onclick="toggleWish(${it.id})"><i class="fas fa-times"></i></button>
        </div>`).join('');
}
function showWishlist() { renderWish(); document.getElementById('wishOv').classList.add('show'); document.getElementById('wishPanel').classList.add('show') }
function closeWishlist() { document.getElementById('wishOv').classList.remove('show'); document.getElementById('wishPanel').classList.remove('show') }

// ===== PRODUCT MODAL =====
function showProdDetail(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    const m = document.getElementById('prodModal'), b = document.getElementById('prodModalBox');
    b.innerHTML = `
        <div class="modal-prod">
            <button class="modal-close" onclick="closeProdModal()"><i class="fas fa-times"></i></button>
            <div class="modal-prod-img"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x400/1a1a3e/6c5ce7?text=${encodeURIComponent(p.name)}'"></div>
            <div class="modal-prod-info">
                <div class="prod-cat">${catName(p.category)}</div>
                <h2 style="font-size:22px;font-weight:800;margin:10px 0">${p.name}</h2>
                <div class="prod-rating" style="margin-bottom:14px"><span class="stars" style="font-size:15px">${stars(p.rating)}</span><span class="rating-cnt">${p.rating} (${p.reviews} sharh)</span></div>
                <p style="color:var(--tx2);margin-bottom:18px;line-height:1.7">${p.desc}</p>
                <div class="prod-price" style="margin-bottom:20px"><span class="price-cur" style="font-size:28px">$${p.price.toLocaleString()}</span>${p.oldPrice ? `<span class="price-old" style="font-size:16px">$${p.oldPrice.toLocaleString()}</span>` : ''}</div>
                <div style="display:flex;gap:10px;flex-wrap:wrap">
                    <button class="btn-p" onclick="addToCart(${p.id});closeProdModal()" style="flex:1;justify-content:center"><i class="fas fa-cart-plus"></i> Savatga qo'shish</button>
                    <button class="btn-s" onclick="toggleWish(${p.id});closeProdModal()" style="flex:0 0 auto"><i class="fas fa-heart"></i></button>
                </div>
                <div style="margin-top:20px;padding-top:18px;border-top:1px solid var(--brd)">
                    <div style="display:flex;align-items:center;gap:9px;margin-bottom:10px;color:var(--tx2);font-size:13px"><i class="fas fa-truck" style="color:var(--a)"></i> Bepul yetkazib berish</div>
                    <div style="display:flex;align-items:center;gap:9px;margin-bottom:10px;color:var(--tx2);font-size:13px"><i class="fas fa-shield-alt" style="color:var(--a)"></i> 2 yil rasmiy kafolat</div>
                    <div style="display:flex;align-items:center;gap:9px;color:var(--tx2);font-size:13px"><i class="fas fa-undo" style="color:var(--a)"></i> 14 kun ichida qaytarish</div>
                </div>
            </div>
        </div>`;
    m.classList.add('show');
}
function closeProdModal(e) { if (e && e.target !== e.currentTarget) return; document.getElementById('prodModal').classList.remove('show') }

// ===== OFFERS =====
function renderOffers() {
    const os = [{ t: "iPhone 16 Pro", d: "20% chegirma - faqat shu hafta!", i: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600" }, { t: "MacBook M3", d: "Bepul AirPods sovg'a!", i: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" }, { t: "PlayStation 5", d: "2 ta o'yin bepul!", i: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600" }];
    document.getElementById('offersGrid').innerHTML = os.map(o => `
        <div class="offer-card">
            <img src="${o.i}" alt="${o.t}" onerror="this.src='https://via.placeholder.com/400x200/6c5ce7/ffffff?text=${encodeURIComponent(o.t)}'">
            <div class="offer-ov"><h3>${o.t}</h3><p>${o.d}</p><button class="o-btn">Batafsil</button></div>
        </div>`).join('');
}

// ===== SCROLL =====
function initScroll() {
    const h = document.getElementById('header'), s = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) h.classList.add('scrolled'); else h.classList.remove('scrolled');
        if (window.scrollY > 400) s.classList.add('show'); else s.classList.remove('show');
    });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
function scrollToProducts() { document.getElementById('productsSec').scrollIntoView({ behavior: 'smooth' }) }

// ===== STATS =====
function animStats() {
    document.querySelectorAll('.stat-num').forEach(el => {
        const t = parseInt(el.dataset.count), dur = 2000, st = performance.now();
        function up(ct) {
            const e = ct - st, p = Math.min(e / dur, 1), ez = 1 - Math.pow(1 - p, 3), v = Math.floor(ez * t);
            el.textContent = v.toLocaleString();
            if (p < 1) requestAnimationFrame(up); else el.textContent = t.toLocaleString();
        }
        requestAnimationFrame(up);
    });
}

// ===== USER MENU =====
function toggleUserMenu() { document.getElementById('userDD').classList.toggle('show') }
function showProfile() { document.getElementById('userDD').classList.remove('show'); showToast('Profil: ' + currentUser.name + ' (' + currentUser.email + ')', 'info') }
function showOrders() { document.getElementById('userDD').classList.remove('show'); showToast('Buyurtmalar sahifasi tez orada!', 'info') }
document.addEventListener('click', e => { if (!e.target.closest('.user-menu')) { const d = document.getElementById('userDD'); if (d) d.classList.remove('show') } });

// ===== TOAST =====
function showToast(msg, type = 'info') {
    const c = document.getElementById('toastWrap'), t = document.createElement('div');
    t.className = 'toast ' + type;
    const ic = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    t.innerHTML = `<i class="fas ${ic[type]}"></i><span>${msg}</span>`;
    c.appendChild(t); setTimeout(() => t.remove(), 3000);
}

// ===== FOOTBALL GAME =====
let gCanvas, gCtx;
let ball = { x: 400, y: 420, r: 18, vx: 0, vy: 0, kicking: false };
let gk = { x: 400, y: 100, w: 60, h: 80, tx: 400 };
let goal = { x: 250, y: 40, w: 300, h: 80 };
let gGoals = 0, gAttempts = 0, gRunning = false, particles = [], netEff = null;

function showGame() {
    document.getElementById('gameSec').style.display = 'block';
    document.getElementById('userDD').classList.remove('show');
    setTimeout(() => { document.getElementById('gameSec').scrollIntoView({ behavior: 'smooth' }); initGame() }, 100);
}
function hideGame() { document.getElementById('gameSec').style.display = 'none'; gRunning = false }

function initGame() {
    gCanvas = document.getElementById('fCanvas'); gCtx = gCanvas.getContext('2d'); gRunning = true; resetBall(); gameLoop();
}
function resetBall() { ball.x = 400; ball.y = 420; ball.vx = 0; ball.vy = 0; ball.kicking = false; netEff = null }

function kickBall() {
    if (ball.kicking) return; ball.kicking = true; gAttempts++;
    const tx = 280 + Math.random() * 240, ty = 60 + Math.random() * 40;
    const dx = tx - ball.x, dy = ty - ball.y, d = Math.sqrt(dx * dx + dy * dy);
    ball.vx = (dx / d) * 12; ball.vy = (dy / d) * 12;
    document.getElementById('gAttempts').textContent = gAttempts;
}

document.addEventListener('DOMContentLoaded', () => {
    const cv = document.getElementById('fCanvas');
    if (cv) {
        cv.addEventListener('click', e => {
            if (!gRunning || ball.kicking) return;
            const r = cv.getBoundingClientRect(), sx = cv.width / r.width, sy = cv.height / r.height;
            const cx = (e.clientX - r.left) * sx, cy = (e.clientY - r.top) * sy;
            if (cy < 150 && cx > 200 && cx < 600) {
                ball.kicking = true; gAttempts++;
                const dx = cx - ball.x, dy = cy - ball.y, d = Math.sqrt(dx * dx + dy * dy);
                ball.vx = (dx / d) * 14; ball.vy = (dy / d) * 14;
                document.getElementById('gAttempts').textContent = gAttempts;
            }
        });
    }
});

function gameLoop() { if (!gRunning) return; updateGame(); drawGame(); requestAnimationFrame(gameLoop) }

function updateGame() {
    gk.tx = 280 + Math.random() * 240;
    const gd = gk.tx - gk.x; gk.x += gd * .02; gk.x = Math.max(270, Math.min(530, gk.x));

    if (ball.kicking) {
        ball.x += ball.vx; ball.y += ball.vy; ball.vy += .15;
        if (ball.y <= goal.y + goal.h && ball.y >= goal.y && ball.x >= goal.x && ball.x <= goal.x + goal.w) {
            const gl = gk.x - gk.w / 2, gr = gk.x + gk.w / 2;
            if (ball.x >= gl && ball.x <= gr && ball.y >= gk.y && ball.y <= gk.y + gk.h) {
                ball.vx *= -.5; ball.vy *= -.5; mkPart(ball.x, ball.y, '#ff6b6b'); setTimeout(resetBall, 1500);
            } else if (ball.y <= goal.y + 20) {
                gGoals++; document.getElementById('gGoals').textContent = gGoals;
                const ac = Math.round(gGoals / gAttempts * 100); document.getElementById('gAccuracy').textContent = ac + '%';
                document.getElementById('gPrize').textContent = (gGoals * 50000).toLocaleString() + " so'm";
                mkPart(ball.x, ball.y, '#00b894'); netEff = { x: ball.x, y: ball.y, life: 30 }; setTimeout(resetBall, 2000);
            }
        }
        if (ball.y < 0 || ball.x < 0 || ball.x > 800 || ball.y > 500) { mkPart(ball.x, ball.y, '#fdcb6e'); setTimeout(resetBall, 1000) }
    }
    particles = particles.filter(p => { p.x += p.vx; p.y += p.vy; p.vy += .1; p.life--; return p.life > 0 });
    if (netEff) { netEff.life--; if (netEff.life <= 0) netEff = null }
}

function mkPart(x, y, c) { for (let i = 0; i < 20; i++)particles.push({ x, y, vx: (Math.random() - .5) * 8, vy: (Math.random() - .5) * 8 - 3, life: 30 + Math.random() * 20, color: c, size: 3 + Math.random() * 4 }) }

function drawGame() {
    const ctx = gCtx, W = 800, H = 500;
    const gr = ctx.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#1a472a'); gr.addColorStop(1, '#2d6a3f');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.lineWidth = 2; ctx.strokeRect(50, 30, 700, 440);
    ctx.beginPath(); ctx.moveTo(50, 250); ctx.lineTo(750, 250); ctx.stroke();
    ctx.beginPath(); ctx.arc(400, 250, 60, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.strokeRect(200, 30, 400, 150);
    ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
    ctx.strokeStyle = 'white'; ctx.lineWidth = 4; ctx.strokeRect(goal.x, goal.y, goal.w, goal.h);
    ctx.strokeStyle = 'rgba(255,255,255,.2)'; ctx.lineWidth = 1;
    for (let x = goal.x; x <= goal.x + goal.w; x += 15) { ctx.beginPath(); ctx.moveTo(x, goal.y); ctx.lineTo(x, goal.y + goal.h); ctx.stroke() }
    for (let y = goal.y; y <= goal.y + goal.h; y += 15) { ctx.beginPath(); ctx.moveTo(goal.x, y); ctx.lineTo(goal.x + goal.w, y); ctx.stroke() }
    ctx.shadowColor = '#00cec9'; ctx.shadowBlur = 15; ctx.strokeStyle = '#00cec9'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(goal.x, goal.y + goal.h); ctx.lineTo(goal.x, goal.y); ctx.lineTo(goal.x + goal.w, goal.y); ctx.lineTo(goal.x + goal.w, goal.y + goal.h); ctx.stroke(); ctx.shadowBlur = 0;
    ctx.fillStyle = '#ff6b6b'; ctx.shadowColor = '#ff6b6b'; ctx.shadowBlur = 10;
    const gx = gk.x - gk.w / 2; ctx.fillRect(gx, gk.y, gk.w, gk.h);
    ctx.fillStyle = 'white'; ctx.fillRect(gx + 10, gk.y + 10, 15, 15); ctx.fillRect(gx + 35, gk.y + 10, 15, 15); ctx.shadowBlur = 0;
    ctx.fillStyle = '#fdcb6e'; ctx.fillRect(gx - 10, gk.y + 30, 12, 20); ctx.fillRect(gx + gk.w - 2, gk.y + 30, 12, 20);
    ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2); ctx.fillStyle = 'white'; ctx.shadowColor = 'white'; ctx.shadowBlur = 15; ctx.fill(); ctx.shadowBlur = 0;
    ctx.fillStyle = '#333'; ctx.beginPath(); ctx.arc(ball.x - 5, ball.y - 5, 5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(ball.x + 6, ball.y + 3, 4, 0, Math.PI * 2); ctx.fill();
    if (ball.kicking) { ctx.beginPath(); ctx.arc(ball.x - ball.vx * 2, ball.y - ball.vy * 2, ball.r * .7, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,.3)'; ctx.fill() }
    if (netEff) {
        ctx.beginPath(); ctx.arc(netEff.x, netEff.y, (30 - netEff.life) * 3, 0, Math.PI * 2); ctx.strokeStyle = `rgba(0,206,201,${netEff.life / 30})`; ctx.lineWidth = 3; ctx.stroke();
        if (netEff.life > 15) { ctx.font = 'bold 46px Inter'; ctx.fillStyle = `rgba(0,206,201,${(netEff.life - 15) / 15})`; ctx.textAlign = 'center'; ctx.fillText('⚽ GOOOL!', 400, 250) }
    }
    particles.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (p.life / 50), 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.globalAlpha = p.life / 50; ctx.fill(); ctx.globalAlpha = 1 });
    if (!ball.kicking) { ctx.font = '15px Inter'; ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.textAlign = 'center'; ctx.fillText('Darvoza ustiga bosing yoki TEPISH tugmasini bosing!', 400, 480) }
}

function resetGame() { gGoals = 0; gAttempts = 0; document.getElementById('gGoals').textContent = '0'; document.getElementById('gAttempts').textContent = '0'; document.getElementById('gAccuracy').textContent = '0%'; document.getElementById('gPrize').textContent = "0 so'm"; resetBall(); showToast('O\'yin qayta boshlandi!', 'info') }

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCart(); closeWishlist(); closeProdModal(); hideGame() } if (e.key === ' ' && gRunning && !ball.kicking) { e.preventDefault(); kickBall() } });
// ===== GAME SWITCHER =====
function switchGame(game) {
    document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.game-container').forEach(c => c.style.display = 'none');
    event.target.closest('.game-tab').classList.add('active');
    document.getElementById('game-' + game).style.display = 'block';

    // Stop all games
    gRunning = false;
    if (sInterval) clearInterval(sInterval);

    // Start selected game
    if (game === 'football') { setTimeout(() => { initFootball(); }, 100) }
    else if (game === 'snake') { setTimeout(() => { initSnake(); }, 100) }
    else if (game === 'memory') { setTimeout(() => { initMemory(); }, 100) }
    else if (game === 'quiz') { setTimeout(() => { initQuiz(); }, 100) }
}

// ===== SNAKE GAME =====
let sCanvas, sCtx, snake, food, sDirection, sNextDir, sInterval, sScoreVal, sLevel, sHighScore = 0;

function initSnake() {
    sCanvas = document.getElementById('sCanvas');
    sCtx = sCanvas.getContext('2d');
    resetSnake();
    drawSnake();
}

function resetSnake() {
    snake = [{ x: 10, y: 10 }];
    food = spawnFood();
    sDirection = 'right';
    sNextDir = 'right';
    sScoreVal = 0;
    sLevel = 1;
    updateSnakeUI();
    if (sInterval) clearInterval(sInterval);
}

function spawnFood() {
    return {
        x: Math.floor(Math.random() * 39) + 1,
        y: Math.floor(Math.random() * 24) + 1
    };
}

function startSnake() {
    if (sInterval) return;
    sInterval = setInterval(updateSnake, 1000 / (8 + sLevel * 2));
}

function updateSnake() {
    sDirection = sNextDir;
    const head = { ...snake[0] };

    switch (sDirection) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }

    // Collision
    if (head.x < 0 || head.x > 40 || head.y < 0 || head.y > 25 || snake.some(s => s.x === head.x && s.y === head.y)) {
        clearInterval(sInterval);
        sInterval = null;
        if (sScoreVal > sHighScore) { sHighScore = sScoreVal; localStorage.setItem('snakeHigh', sHighScore) }
        showToast('O\'yin tugadi! Ball: ' + sScoreVal, 'error');
        return;
    }

    snake.unshift(head);

    // Eat food
    if (head.x === food.x && head.y === food.y) {
        sScoreVal += 10 * sLevel;
        if (sScoreVal % sLevel * 50 === 0) sLevel++;
        food = spawnFood();
        updateSnakeUI();
        clearInterval(sInterval);
        sInterval = setInterval(updateSnake, 1000 / (8 + sLevel * 2));
    } else {
        snake.pop();
    }

    drawSnake();
}

function drawSnake() {
    // Background
    sCtx.fillStyle = '#1a472a';
    sCtx.fillRect(0, 0, 800, 500);

    // Grid
    sCtx.strokeStyle = 'rgba(255,255,255,.05)';
    sCtx.lineWidth = 1;
    for (let i = 0; i <= 40; i++) {
        sCtx.beginPath(); sCtx.moveTo(i * 20, 0); sCtx.lineTo(i * 20, 500); sCtx.stroke();
    }
    for (let i = 0; i <= 25; i++) {
        sCtx.beginPath(); sCtx.moveTo(0, i * 20); sCtx.lineTo(800, i * 20); sCtx.stroke();
    }

    // Food
    sCtx.fillStyle = '#ff6b6b';
    sCtx.beginPath();
    sCtx.arc(food.x * 20 + 10, food.y * 20 + 10, 8, 0, Math.PI * 2);
    sCtx.fill();
    sCtx.shadowColor = '#ff6b6b';
    sCtx.shadowBlur = 15;
    sCtx.fill();
    sCtx.shadowBlur = 0;

    // Snake
    snake.forEach((seg, i) => {
        const grad = sCtx.createLinearGradient(seg.x * 20, seg.y * 20, seg.x * 20 + 20, seg.y * 20 + 20);
        grad.addColorStop(0, '#00cec9');
        grad.addColorStop(1, '#0984e3');
        sCtx.fillStyle = grad;
        if (i === 0) {
            sCtx.shadowColor = '#00cec9';
            sCtx.shadowBlur = 10;
        }
        sCtx.fillRect(seg.x * 20 + 1, seg.y * 20 + 1, 18, 18);
        sCtx.shadowBlur = 0;
    });
}

function updateSnakeUI() {
    document.getElementById('sScore').textContent = sScoreVal;
    document.getElementById('sHighScore').textContent = Math.max(sHighScore, localStorage.getItem('snakeHigh') || 0);
    document.getElementById('sLevel').textContent = sLevel;
}

document.addEventListener('keydown', e => {
    if (document.getElementById('game-snake').style.display === 'none') return;
    switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': if (sDirection !== 'down') sNextDir = 'up'; break;
        case 'ArrowDown': case 's': case 'S': if (sDirection !== 'up') sNextDir = 'down'; break;
        case 'ArrowLeft': case 'a': case 'A': if (sDirection !== 'right') sNextDir = 'left'; break;
        case 'ArrowRight': case 'd': case 'D': if (sDirection !== 'left') sNextDir = 'right'; break;
    }
});

// ===== MEMORY GAME =====
let memoryCards = [], memoryFlipped = [], memoryMatched = [], memoryMoves = 0, memoryTimer, memorySeconds = 0;
const memoryIcons = ['📱', '💻', '', '🎮', '📺', '⌚', '🖥️', ''];

function initMemory() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    memoryCards = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - .5);
    memoryFlipped = [];
    memoryMatched = [];
    memoryMoves = 0;
    memorySeconds = 0;
    clearInterval(memoryTimer);
    memoryTimer = setInterval(() => { memorySeconds++; document.getElementById('mTime').textContent = memorySeconds + 's' }, 1000);
    updateMemoryUI();

    memoryCards.forEach((icon, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = i;
        card.dataset.icon = icon;
        card.innerHTML = `<div class="card-front">?</div><div class="card-back">${icon}</div>`;
        card.onclick = () => flipMemoryCard(card);
        grid.appendChild(card);
    });
}

function flipMemoryCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || memoryFlipped.length >= 2) return;

    card.classList.add('flipped');
    memoryFlipped.push(card);

    if (memoryFlipped.length === 2) {
        memoryMoves++;
        updateMemoryUI();
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    const [c1, c2] = memoryFlipped;
    if (c1.dataset.icon === c2.dataset.icon) {
        setTimeout(() => {
            c1.classList.add('matched');
            c2.classList.add('matched');
            memoryMatched.push(c1, c2);
            memoryFlipped = [];
            updateMemoryUI();
            if (memoryMatched.length === 16) {
                clearInterval(memoryTimer);
                showToast(`Tabriklaymiz! ${memoryMoves} yurishda, ${memorySeconds} soniyada yakunladingiz!`, 'success');
            }
        }, 500);
    } else {
        setTimeout(() => {
            c1.classList.remove('flipped');
            c2.classList.remove('flipped');
            memoryFlipped = [];
        }, 1000);
    }
}

function updateMemoryUI() {
    document.getElementById('mMoves').textContent = memoryMoves;
    document.getElementById('mPairs').textContent = `${memoryMatched.length / 2}/8`;
}

// ===== QUIZ GAME =====
const quizQuestions = [
    { q: "iPhone 16 Pro Max qaysi chip bilan ishlaydi?", a: ["A18 Pro", "A17 Pro", "M3", "Snapdragon 8 Gen 3"], c: 0 },
    { q: "MacBook Pro 16 M3 Max narxi qancha?", a: ["$2499", "$3499", "$4499", "$1999"], c: 1 },
    { q: "PlayStation 5 Pro qachon chiqarilgan?", a: ["2023", "2024", "2025", "2022"], c: 1 },
    { q: "AirPods Pro 2 qaysi port bilan keladi?", a: ["Lightning", "USB-C", "Micro USB", "Wireless"], c: 1 },
    { q: "Samsung Galaxy S24 Ultra kamerasi nechta MP?", a: ["108MP", "200MP", "50MP", "48MP"], c: 1 },
    { q: "DJI Mavic 3 Pro uchish vaqti qancha?", a: ["30 daqiqa", "46 daqiqa", "60 daqiqa", "40 daqiqa"], c: 1 },
    { q: "iPad Pro 13 M4 displeyi qanday?", a: ["LCD", "OLED", "Mini LED", "QD-OLED"], c: 1 },
    { q: "Sony WH-1000XM5 batareyasi qancha ishlaydi?", a: ["20 soat", "30 soat", "40 soat", "25 soat"], c: 1 },
    { q: "Steam Deck OLED xotirasi nechta?", a: ["256GB", "512GB", "1TB", "2TB"], c: 2 },
    { q: "LG C3 OLED qaysi protsessorga ega?", a: ["α8 Gen5", "α9 Gen6", "XR Processor", "Tensor G3"], c: 1 }
];

let quizCurrent = 0, quizCorrect = 0, quizWrong = 0;

function initQuiz() {
    quizCurrent = 0;
    quizCorrect = 0;
    quizWrong = 0;
    showQuizQuestion();
    updateQuizUI();
}

function showQuizQuestion() {
    if (quizCurrent >= quizQuestions.length) {
        showQuizResult();
        return;
    }
    const q = quizQuestions[quizCurrent];
    document.getElementById('quizQuestion').textContent = `${quizCurrent + 1}. ${q.q}`;
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.innerHTML = `<span>${String.fromCharCode(65 + i)})</span><span>${opt}</span>`;
        btn.onclick = () => answerQuiz(i);
        opts.appendChild(btn);
    });
}

function answerQuiz(ans) {
    const q = quizQuestions[quizCurrent];
    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((o, i) => {
        o.classList.add(i === q.c ? 'correct' : i === ans && i !== q.c ? 'wrong' : '');
        o.style.pointerEvents = 'none';
    });

    if (ans === q.c) quizCorrect++; else quizWrong++;
    updateQuizUI();

    setTimeout(() => {
        quizCurrent++;
        showQuizQuestion();
    }, 1500);
}

function showQuizResult() {
    const box = document.getElementById('quizBox');
    const percent = Math.round(quizCorrect / quizQuestions.length * 100);
    box.innerHTML = `
        <div class="quiz-result">
            <h3>${percent >= 80 ? '🏆 Ajoyib!' : percent >= 60 ? ' Yaxshi!' : '📚 Yana o\'rganing!'}</h3>
            <p>${quizCorrect} ta to'g'ri, ${quizWrong} ta noto'g'ri<br>
            Natija: ${percent}%</p>
            <button class="btn-p" onclick="initQuiz()" style="justify-content:center;margin:0 auto">
                <i class="fas fa-redo"></i> Qayta boshlash
            </button>
        </div>`;
    if (percent >= 80) showToast('Tabriklaymiz! Siz texnika bo\'yicha ekspertsiz!', 'success');
}

function updateQuizUI() {
    document.getElementById('qCorrect').textContent = quizCorrect;
    document.getElementById('qWrong').textContent = quizWrong;
    document.getElementById('qNumber').textContent = `${Math.min(quizCurrent + 1, quizQuestions.length)}/${quizQuestions.length}`;
}

// ===== AI ASSISTANT =====
function toggleAI() { document.getElementById('aiWindow').classList.toggle('show') }

function quickAI(text) { document.getElementById('aiInput').value = text; sendAI() }

function handleAIKey(e) { if (e.key === 'Enter') sendAI() }

function sendAI() {
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;

    addAIMessage(msg, 'user');
    input.value = '';

    // AI Response
    setTimeout(() => {
        const response = getAIResponse(msg);
        addAIMessage(response, 'bot');
    }, 500 + Math.random() * 1000);
}

function addAIMessage(text, type) {
    const div = document.createElement('div');
    div.className = `ai-msg ${type}`;
    div.innerHTML = `<p>${text}</p>`;
    const container = document.getElementById('aiMessages');
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function getAIResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes('iphone') || msg.includes('telefon')) {
        return 'iPhone uchun maslahatim: <br>• iPhone 16 Pro Max - eng kuchli (A18 Pro, 48MP)<br>• iPhone 16 - optimal narx/sifat<br>• iPhone 15 - arzonroq variant<br>Budgetingiz qancha?';
    }
    if (msg.includes('noutbuk') || msg.includes('laptop') || msg.includes('macbook')) {
        return 'Noutbuk tanlashda:<br>• MacBook Pro M3 - professional ishlar uchun<br>• MacBook Air M3 - yengil, ofis ishlari<br>• ASUS ROG - gaming uchun<br>• Dell XPS - biznes uchun<br>Qaysi maqsadda kerak?';
    }
    if (msg.includes('arzon') || msg.includes('uchun')) {
        return 'Arzon variantlar:<br>📱 iPhone 15 - $799<br> MacBook Air M2 - $999<br>🎧 AirPods 3 - $169<br>⌚ iPad 10 - $449<br>Bularning barchasi a\'lo sifat!';
    }
    if (msg.includes('gaming') || msg.includes('o\'yin')) {
        return 'Gaming uchun:<br>🎮 PS5 Pro - $699 (eng yaxshi)<br>🎮 Xbox Series X - $499<br>💻 ASUS ROG Strix - $1599<br> Sony WH-1000XM5 - $349<br>Qaysi platforma afzal?';
    }
    if (msg.includes('salom') || msg.includes('hi')) {
        return 'Salom! 😊 Men TechZone AI yordamchisiman. Sizga qanday yordam bera olaman? Mahsulotlar haqida savol bering!';
    }
    if (msg.includes('rahmat') || msg.includes('thanks')) {
        return 'Arzimaydi! 😊 Yana savollar bo\'lsa, bemalol so\'rang. Xarid qilishda omad tilayman!';
    }
    if (msg.includes('yetkazish') || msg.includes('delivery')) {
        return '📦 Yetkazib berish:<br>• 500,000 so\'mdan yuqori - BEPUL<br>• Toshkent ichida - 1-2 kun<br>• Viloyatlar - 3-5 kun<br>• Express - 24 soat (qo\'shimcha to\'lov)';
    }
    if (msg.includes('kafolat') || msg.includes('warranty')) {
        return '🛡️ Kafolat:<br>• Barcha mahsulotlarga 2 yil rasmiy kafolat<br>• 14 kun ichida qaytarish mumkin<br>• Servis markazlari Toshkentda<br>• Online qo\'llab-quvvatlash 24/7';
    }

    return 'Tushundim! Bu haqida batafsil ma\'lumot uchun:<br>• Mahsulotlar bo\'limiga qarang<br>• Telefon: +998 90 123 45 67<br>• Email: info@techzone.uz<br>Yoki boshqa savolingiz bormi?';
}

// ===== FIX IMAGES =====
// Barcha rasmlar uchun fallback
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        const name = e.target.alt || 'Product';
        e.target.src = `https://via.placeholder.com/400x300/6c5ce7/ffffff?text=${encodeURIComponent(name)}`;
    }
}, true);

// Init football game function rename
function initFootball() {
    gameCanvas = document.getElementById('fCanvas');
    gameCtx = gameCanvas.getContext('2d');
    gRunning = true;
    resetBall();
    gameLoop();
}

function resetFootball() {
    gGoals = 0; gAttempts = 0;
    document.getElementById('gGoals').textContent = '0';
    document.getElementById('gAttempts').textContent = '0';
    document.getElementById('gAccuracy').textContent = '0%';
    document.getElementById('gPrize').textContent = "0 so'm";
    resetBall();
}
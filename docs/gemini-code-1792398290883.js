// Termékadatok (később akár egy külső JSON fájlból is beolvasható)
const products = [
  {
    id: 1,
    title: "Kaparós Világtérkép",
    category: "Térképek",
    price: "8 990 Ft",
    image: "https://via.placeholder.com/400x400?text=Vilagterkep"
  },
  {
    id: 2,
    title: "Világító Földgömb 30cm",
    category: "Glóbuszok",
    price: "14 500 Ft",
    image: "https://via.placeholder.com/400x400?text=Foldgomb"
  },
  {
    id: 3,
    title: "Antik Stílusú Fali Térkép",
    category: "Térképek",
    price: "11 200 Ft",
    image: "https://via.placeholder.com/400x400?text=Antik+Terkep"
  },
  {
    id: 4,
    title: "Puskin Zászló Készlet",
    category: "Kiegészítők",
    price: "3 490 Ft",
    image: "https://via.placeholder.com/400x400?text=Zaszlo+Keszlet"
  }
];

// Termékek megjelenítése a DOM-ban
function renderProducts(items) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = "<p>Nincs a keresésnek megfelelő termék.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price">${product.price}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Élő keresés és kategória szűrés
function filterProducts() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;

  const filtered = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchValue);
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

// Kezdeti betöltés
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
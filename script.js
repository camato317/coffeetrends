// Trending coffee drinks — 2026 edition
const drinks = [
  {
    name: "Pistachio Cream Latte",
    emoji: "🥤",
    art: "linear-gradient(160deg,#7ea06a,#4f6b45)",
    category: "Latte",
    desc: "Espresso with steamed milk and a nutty pistachio cream cold foam. The breakout flavor of the year.",
    price: "$5.75",
    heat: "Hot or Iced",
    tags: ["sweet", "milk"],
  },
  {
    name: "Olive Oil Espresso (Oleato)",
    emoji: "🫒",
    art: "linear-gradient(160deg,#9aa55b,#5f6a33)",
    category: "Espresso",
    desc: "A spoonful of cold-pressed extra virgin olive oil blended into espresso for a silky, velvety body.",
    price: "$6.25",
    heat: "Hot or Iced",
    tags: ["bold", "novel"],
  },
  {
    name: "Nitro Cold Brew",
    emoji: "🍺",
    art: "linear-gradient(160deg,#3a2a20,#1d130d)",
    category: "Cold Brew",
    desc: "Cold brew infused with nitrogen for a creamy, cascading pour and naturally sweet finish — no ice.",
    price: "$5.25",
    heat: "Iced",
    tags: ["bold", "cold"],
  },
  {
    name: "Brown Sugar Oat Shaken Espresso",
    emoji: "🧋",
    art: "linear-gradient(160deg,#b07a45,#7a4d28)",
    category: "Espresso",
    desc: "Ristretto shots shaken with brown sugar and ice, topped with oat milk. Energetic and lightly sweet.",
    price: "$5.45",
    heat: "Iced",
    tags: ["sweet", "cold", "milk"],
  },
  {
    name: "Matcha Espresso Fusion",
    emoji: "🍵",
    art: "linear-gradient(160deg,#7fae57,#3f6b2e)",
    category: "Specialty",
    desc: "Layered ceremonial matcha and a shot of espresso over milk — earthy meets roasty in one glass.",
    price: "$6.00",
    heat: "Iced",
    tags: ["novel", "milk"],
  },
  {
    name: "Spanish Latte",
    emoji: "🥛",
    art: "linear-gradient(160deg,#caa06a,#9c7340)",
    category: "Latte",
    desc: "Espresso with sweetened condensed milk and steamed milk — rich, caramel-forward, dessert-like.",
    price: "$5.50",
    heat: "Hot or Iced",
    tags: ["sweet", "milk"],
  },
  {
    name: "Cortado",
    emoji: "☕",
    art: "linear-gradient(160deg,#8a5a38,#5a3722)",
    category: "Espresso",
    desc: "Equal parts espresso and warm steamed milk. Small, balanced, and back in a big way.",
    price: "$4.25",
    heat: "Hot",
    tags: ["bold", "milk"],
  },
  {
    name: "Lavender Cold Foam Cold Brew",
    emoji: "💜",
    art: "linear-gradient(160deg,#9a7bb5,#5f4480)",
    category: "Cold Brew",
    desc: "Smooth cold brew crowned with floral lavender cold foam. Gently sweet and aromatic.",
    price: "$5.65",
    heat: "Iced",
    tags: ["sweet", "cold", "novel"],
  },
  {
    name: "Dirty Chai Latte",
    emoji: "🌶️",
    art: "linear-gradient(160deg,#b5703f,#7d4824)",
    category: "Latte",
    desc: "Spiced chai with a shot of espresso. The caffeine kick meets cozy cinnamon-cardamom warmth.",
    price: "$5.40",
    heat: "Hot or Iced",
    tags: ["bold", "milk"],
  },
];

const drinkCount = drinks.length;

// ---- Render cards ----
const grid = document.getElementById("drinks-grid");

function cardHTML(d, i) {
  return `
    <article class="card" data-tags="${d.tags.join(" ")}" style="animation-delay:${i * 60}ms">
      <div class="card-art" style="background:${d.art}">${d.emoji}</div>
      <div class="card-body">
        <div class="card-top">
          <h3>${d.name}</h3>
          <span class="tag">${d.category}</span>
        </div>
        <p>${d.desc}</p>
        <div class="card-meta">
          <span class="price">${d.price}</span>
          <span class="heat">${d.heat}</span>
        </div>
      </div>
    </article>`;
}

grid.innerHTML = drinks.map(cardHTML).join("");

// ---- Filter chips ----
const filters = [
  { label: "All", value: "all" },
  { label: "Sweet", value: "sweet" },
  { label: "Bold", value: "bold" },
  { label: "Iced & Cold", value: "cold" },
  { label: "With Milk", value: "milk" },
  { label: "New & Novel", value: "novel" },
];

const chipRow = document.getElementById("chip-row");
chipRow.innerHTML = filters
  .map(
    (f, i) =>
      `<button class="chip${i === 0 ? " active" : ""}" data-filter="${f.value}">${f.label}</button>`
  )
  .join("");

chipRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.dataset.filter;
  document.querySelectorAll(".card").forEach((card) => {
    const tags = card.dataset.tags.split(" ");
    const show = filter === "all" || tags.includes(filter);
    card.classList.toggle("is-hidden", !show);
  });
});

// ---- Animated stat counter ----
const statEl = document.getElementById("stat-count");
let current = 0;
const timer = setInterval(() => {
  current += 1;
  statEl.textContent = current;
  if (current >= drinkCount) clearInterval(timer);
}, 90);

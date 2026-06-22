// The history of coffee — key moments
const events = [
  {
    era: "c. 850 CE",
    title: "The dancing goats of Ethiopia",
    emoji: "🐐",
    text: "Legend tells of Kaldi, an Ethiopian goat herder who noticed his goats grew lively after eating bright red cherries from a certain shrub. The first hint of coffee's energizing power.",
  },
  {
    era: "15th century",
    title: "Brewed in Yemen",
    emoji: "🕌",
    text: "Sufi monasteries in Yemen cultivated and brewed coffee to stay awake through long nights of prayer. The port of Mocha became the heart of the early coffee trade.",
  },
  {
    era: "16th century",
    title: "Coffeehouses of the Middle East",
    emoji: "🏺",
    text: "From Mecca to Cairo to Istanbul, qahveh khaneh (coffeehouses) became hubs of conversation, music, and chess — earning coffee the name 'wine of Araby'.",
  },
  {
    era: "1600s",
    title: "Coffee reaches Europe",
    emoji: "⛵",
    text: "Venetian traders brought coffee to Europe. Despite suspicion, Pope Clement VIII reportedly blessed the drink, and coffeehouses spread across the continent.",
  },
  {
    era: "1650–1700",
    title: "The 'penny universities'",
    emoji: "📜",
    text: "English coffeehouses charged a penny for entry and endless discussion. Lloyd's of London and the London Stock Exchange both grew out of these caffeinated gatherings.",
  },
  {
    era: "1720",
    title: "Coffee crosses the Atlantic",
    emoji: "🌎",
    text: "A single seedling carried to Martinique is said to have seeded plantations across the Caribbean and Latin America — the region that still grows much of the world's coffee.",
  },
  {
    era: "1884–1901",
    title: "The espresso machine is born",
    emoji: "⚙️",
    text: "Italian inventors patented machines that forced pressurized water through coffee, dramatically speeding up brewing and giving rise to espresso culture.",
  },
  {
    era: "1900s",
    title: "Instant coffee & mass market",
    emoji: "🥄",
    text: "Soluble 'instant' coffee was refined and popularized, becoming a wartime staple and bringing coffee into kitchens worldwide.",
  },
  {
    era: "1971",
    title: "The specialty era begins",
    emoji: "🏪",
    text: "Starbucks opens in Seattle, and the 'second wave' turns espresso drinks like the latte and cappuccino into everyday icons.",
  },
  {
    era: "2000s–Today",
    title: "Third wave & beyond",
    emoji: "🌱",
    text: "Single-origin beans, careful sourcing, and brewing as craft. Today's 'fourth wave' adds cold brew, nitro, and experiments like oat milk and olive-oil espresso.",
  },
];

const list = document.getElementById("timeline-list");
list.innerHTML = events
  .map(
    (e, i) => `
    <li class="t-item" style="animation-delay:${i * 70}ms">
      <div class="t-marker">${e.emoji}</div>
      <div class="t-content">
        <span class="t-era">${e.era}</span>
        <h3>${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </li>`
  )
  .join("");

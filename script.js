const items = [
  {
    name: 'Fluffy Buttery Cloud Bread', cat: 'Breads', price: '$8', label: 'CLOUD BREAD',
    desc: "A dreamy, pillow-soft loaf that's kneaded slow and baked low until it turns golden and impossibly light — like tearing into a warm cloud. Bake time: 4 hours.",
    ingredients: ['Yeast', 'Sugar', 'Milk', 'Flour', 'Salt', 'Softened butter']
  },
  {
    name: 'Vanilla Bean Cupcakes', cat: 'Cupcakes', price: '$18 / 6', label: 'CUPCAKES',
    desc: 'Fluffy vanilla bean cupcakes crowned with tall swirls of raspberry frosting and a shower of rainbow sprinkles. Sold by the half-dozen.',
    ingredients: ['Vanilla bean', 'Cake flour', 'Raspberry frosting', 'Sprinkles'],
    comingSoon: true
  },
  {
    name: 'Rosewater Macarons', cat: 'Macarons', price: '$16 / 12', label: 'MACARONS',
    desc: 'Delicate almond shells sandwiching a silky rosewater ganache — light, chewy, and just sweet enough. A box of twelve, all blush.',
    ingredients: ['Almond flour', 'Egg whites', 'Rosewater', 'White chocolate'],
    comingSoon: true
  },
  {
    name: 'Butter Croissants', cat: 'Pastries', price: '$4 each', label: 'CROISSANTS',
    desc: 'Golden, flaky layers of French butter folded by hand and baked until shatteringly crisp. Best warm, straight from the morning batch.',
    ingredients: ['French butter', 'Bread flour', 'Sea salt', 'A little patience'],
    comingSoon: true
  },
  {
    name: 'Funfetti Sugar Cookies', cat: 'Cookies', price: '$12 / 6', label: 'COOKIES',
    desc: 'Soft-baked sugar cookies loaded with confetti sprinkles and finished with a swoosh of pink royal icing. Chewy in the middle, always.',
    ingredients: ['Butter', 'Sugar', 'Sprinkles', 'Royal icing'],
    comingSoon: true
  },
  {
    name: 'Honey Milk Bread', cat: 'Breads', price: '$9', label: 'MILK BREAD',
    desc: 'Cloud-soft Japanese milk bread with a whisper of honey — pillowy enough to tear by hand, perfect toasted with a little butter.',
    ingredients: ['Bread flour', 'Whole milk', 'Honey', 'Butter'],
    comingSoon: true
  }
];

// TODO: replace with your real Venmo link, e.g. "https://venmo.com/u/YourVenmoUsername"
const VENMO_LINK = "https://venmo.com/u/YOUR_VENMO_USERNAME";

function openVenmoTip(amount) {
  const note = encodeURIComponent('Tip for The Pink Bakery');
  const url = amount
    ? `${VENMO_LINK}?txn=pay&amount=${amount}&note=${note}`
    : VENMO_LINK;
  window.open(url, '_blank');
}

document.querySelectorAll('.tip-btn[data-amount]').forEach(btn => {
  btn.addEventListener('click', () => openVenmoTip(btn.dataset.amount));
});

const tipCustomBtn = document.getElementById('tip-custom');
if (tipCustomBtn) {
  tipCustomBtn.addEventListener('click', () => {
    const amount = window.prompt('Enter a custom tip amount ($):');
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      openVenmoTip(amount);
    }
  });
}

const galleryView = document.getElementById('gallery-view');
const detailView = document.getElementById('detail-view');
const grid = document.getElementById('gallery');
const backBtn = document.getElementById('back-btn');

function renderGrid() {
  grid.innerHTML = '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');

    if (item.comingSoon) {
      card.className = 'card card-coming-soon';
      card.innerHTML = `
        <div class="card-image"></div>
        <div class="card-body coming-soon-body">
          <div class="coming-soon-text">Coming soon!</div>
        </div>
        <div class="tape-ribbon">Coming Soon!</div>
      `;
      grid.appendChild(card);
      return;
    }

    card.className = 'card';
    card.innerHTML = `
      <div class="card-image"><span>${item.label}</span></div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-meta">
          <span class="card-cat">${item.cat}</span>
          <span class="card-price">${item.price}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openItem(idx));
    grid.appendChild(card);
  });
}

function openItem(idx) {
  const item = items[idx];
  document.getElementById('detail-image').innerHTML = `<span>${item.label}</span>`;
  document.getElementById('detail-cat').textContent = item.cat;
  document.getElementById('detail-name').textContent = item.name;
  document.getElementById('detail-price').textContent = item.price;
  document.getElementById('detail-desc').textContent = item.desc;
  document.getElementById('detail-ingredients').innerHTML =
    item.ingredients.map(ing => `<span>${ing}</span>`).join('');

  galleryView.hidden = true;
  detailView.hidden = false;
  window.scrollTo(0, 0);
}

function backToMenu() {
  detailView.hidden = true;
  galleryView.hidden = false;
  window.scrollTo(0, 0);
}

backBtn.addEventListener('click', backToMenu);

renderGrid();

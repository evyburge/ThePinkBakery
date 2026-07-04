const items = [
  {
    name: 'Strawberry Cloud Cake', cat: 'Cakes', price: '$42', label: 'STRAWBERRY CAKE',
    desc: "A pillowy vanilla sponge layered with fresh strawberry cream and finished in a cloud of pink buttercream. Our signature bake — the one everyone photographs first.",
    ingredients: ['Vanilla sponge', 'Fresh strawberries', 'Whipped cream', 'Pink buttercream']
  },
  {
    name: 'Vanilla Bean Cupcakes', cat: 'Cupcakes', price: '$18 / 6', label: 'CUPCAKES',
    desc: 'Fluffy vanilla bean cupcakes crowned with tall swirls of raspberry frosting and a shower of rainbow sprinkles. Sold by the half-dozen.',
    ingredients: ['Vanilla bean', 'Cake flour', 'Raspberry frosting', 'Sprinkles']
  },
  {
    name: 'Rosewater Macarons', cat: 'Macarons', price: '$16 / 12', label: 'MACARONS',
    desc: 'Delicate almond shells sandwiching a silky rosewater ganache — light, chewy, and just sweet enough. A box of twelve, all blush.',
    ingredients: ['Almond flour', 'Egg whites', 'Rosewater', 'White chocolate']
  },
  {
    name: 'Butter Croissants', cat: 'Pastries', price: '$4 each', label: 'CROISSANTS',
    desc: 'Golden, flaky layers of French butter folded by hand and baked until shatteringly crisp. Best warm, straight from the morning batch.',
    ingredients: ['French butter', 'Bread flour', 'Sea salt', 'A little patience']
  },
  {
    name: 'Funfetti Sugar Cookies', cat: 'Cookies', price: '$12 / 6', label: 'COOKIES',
    desc: 'Soft-baked sugar cookies loaded with confetti sprinkles and finished with a swoosh of pink royal icing. Chewy in the middle, always.',
    ingredients: ['Butter', 'Sugar', 'Sprinkles', 'Royal icing']
  },
  {
    name: 'Honey Milk Bread', cat: 'Breads', price: '$9', label: 'MILK BREAD',
    desc: 'Cloud-soft Japanese milk bread with a whisper of honey — pillowy enough to tear by hand, perfect toasted with a little butter.',
    ingredients: ['Bread flour', 'Whole milk', 'Honey', 'Butter']
  }
];

const galleryView = document.getElementById('gallery-view');
const detailView = document.getElementById('detail-view');
const grid = document.getElementById('gallery');
const backBtn = document.getElementById('back-btn');

function renderGrid() {
  grid.innerHTML = '';
  items.forEach((item, idx) => {
    const card = document.createElement('div');
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

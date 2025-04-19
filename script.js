let cart = {};

function addToCart(product, price) {
  if (!cart[product]) {
    cart[product] = { quantity: 0, price };
  }
  cart[product].quantity++;
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cartList');
  const total = document.getElementById('total');
  list.innerHTML = '';
  let sum = 0;

  for (const product in cart) {
    const item = cart[product];
    const line = `${product} x${item.quantity} – ${item.price * item.quantity}€`;
    const li = document.createElement('li');
    li.innerText = line;
    list.appendChild(li);
    sum += item.price * item.quantity;
  }

  total.innerText = `Gesamt: ${sum}€`;
}

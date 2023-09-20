const openCart = document.getElementById('open-cart');
const closeCart = document.getElementById('close-cart');
const cart = document.getElementById('cart');

openCart.addEventListener('click', () => {
  cart.classList.add('open');
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('open');
});



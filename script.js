// alert('Tudo certo por aqui!!');
// {
  //   id: 1,
  //   name: 'Boneco HP',
  //   price: 98.99,
  //   // installmentePrice: price + (price * 100/5),
  //   image: 'product-1.png',
  //   female: false,
  // },

//===================================================================
// ARRAY DE OBJETOS COM OS DADOS DO PRODUTO, SIMULANDO UM BD
const catalog = [
  {
    id: 1,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
  {
    id: 2,
    name: 'Mistery Box HP',
    price: 268.95,
    // installmentePrice: price + (price * 100/5),
    image: 'product-2.png',
    female: false,
  },
  {
    id: 3,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-3.png',
    female: false,
  },
  {
    id: 4,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-4.png',
    female: false,
  },
  {
    id: 5,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-5.png',
    female: false,
  },
  {
    id: 6,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-6.png',
    female: false,
  },
  {
    id: 7,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
  {
    id: 8,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
  {
    id: 9,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },

  {
    id: 10,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
  {
    id: 11,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
  {
    id: 12,
    name: 'Boneco HP',
    price: 98.99,
    // installmentePrice: price + (price * 100/5),
    image: 'product-1.png',
    female: false,
  },
]

//===================================================================
// LOOP PARA PEGAR PRODUTO POR PRODUTO DO ARRAY CATALOG
for (const productCatalog of catalog) {
//===================================================================
// ABAIXO UTILIZEI DO TEMPLATE LITERALS PARA ACRESCENTAR HTML NO JS
const cardProducts = `
<div id="card">
  <img 
    src="assets/images/${productCatalog.image}" 
    alt="Imagem do rpoduto ${productCatalog.name}"
  />

  <div id="product-details">
    <p class="product-name">${productCatalog.name}</p>
    <p class="product-price">R$${productCatalog.price}</p>
  </div>

  <div id="button-card">
    <button><i id="add-${productCatalog.id}" class="fa-solid fa-cart-shopping"></i></button>
  </div>
</div>
`;
//===================================================================
// UTILIZANDO DA DOM PARA RENDERIZAR OS CARDS NO HTML
document.getElementById('products-on-sale').innerHTML += cardProducts;
document.getElementById('launch-products').innerHTML += cardProducts;
document.getElementById('top-selling-products').innerHTML += cardProducts;
// ADICIONAR O PRODUTO NO CARRINHO
document.getElementById(`add-${productCatalog.id}`)
}

for (const productCatalog of catalog) {
  document.getElementById(`add-${productCatalog.id}`).addEventListener('click', () => addCart(productCatalog.id));
}

//===================================================================
// ABRIR E FECHAR O CARRINHO DE COMPRAS
const openCart = document.getElementById('open-cart');
const closeCart = document.getElementById('close-cart');
const cart = document.getElementById('cart');

openCart.addEventListener('click', () => {
  cart.classList.add('open');
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('open');
});

//===================================================================
// ACRESCENTANDO PRODUTOS AO CARRINHO
function addCart(idProduct) {
  const product = catalog.find ((p) => p.id === idProduct);
  const containerProductsCart = document.getElementById('cart-products')
  const cardProdutoCart = `
  <article class="mini-cart">
    <span id="delete-product" class="fechar">&times;</span>

    <img src="assets/images/${product.image}" 
    alt="Carrinho: ${product.name}">

    <div id="mini-cart-content">
      <p>${product.name}</p>
      <p>R$${product.price}</p>
    </div>
  </article>
  `;
  containerProductsCart.innerHTML += cardProdutoCart;
}

// const headerMobile = `

// <header>
//     <img id="logo" src="assets/logo/logo.svg" alt="Logo e-commerce Harry Potter">
//     <div id="icons">
//     <i class="fa-solid fa-user"></i>
//     <i id="open-cart" class="fa-solid fa-cart-shopping"></i>
//   </div>
//     <input type="text" name="" id="searchBox" placeholder="O que você procura?">
//   </header>
// `;
// document.getElementsByClassName('')




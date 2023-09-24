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
<div id="card" ${productCatalog.id}>
  <img 
    src="assets/images/${productCatalog.image}" 
    alt="Produto 1"
  />
  <div id="product-details">

    <p class="product-name">${productCatalog.name}</p>
    <p class="product-price">R$${productCatalog.price}</p>
    
  </div>

  <div id="button-card">
    <button><i class="fa-solid fa-cart-shopping"></i></button>
  </div>
  
  
</div>

`;
//===================================================================
// UTILIZANDO DA DOM PARA RENDERIZAR OS CARDS NO HTML
document.getElementById('products-on-sale').innerHTML += cardProducts;
document.getElementById('launch-products').innerHTML += cardProducts;
document.getElementById('top-selling-products').innerHTML += cardProducts;
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
// 


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




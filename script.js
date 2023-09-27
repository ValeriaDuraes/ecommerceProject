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
let totalPrice = 0;

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
    <div class="add-cart">
      <button class="button remove-product-cart" id="subtract-button">
        <svg width="20" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 .468C6.972.468.468 6.972.468 15S6.972 29.532 15 29.532 29.532 23.028 29.532 15 23.028.468 15 .468zM7.266 17.344a.706.706 0 0 1-.704-.704v-3.282c0-.386.316-.704.704-.704h15.468c.386 0 .704.316.704.704v3.282a.706.706 0 0 1-.704.704H7.266z" fill="var(#FFE181)"></path></svg>

      </button>
      <p>
        <input style="text-align:center;" class="input" type="number" name="quant" id="product-quantity" max="17" value="1" required="" onchange="atualizaPreco()" onkeydown="atualizaPreco()">
      </p>
      <button class="button add-product-cart" id="add-button">      
        <svg width="20" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M15 .469C6.973.469.469 6.973.469 15S6.973 29.531 15 29.531 29.531 23.027 29.531 15 23.027.469 15 .469zm8.438 16.172a.705.705 0 0 1-.703.703h-5.391v5.391a.705.705 0 0 1-.703.703H13.36a.705.705 0 0 1-.703-.703v-5.391H7.266a.705.705 0 0 1-.703-.703V13.36c0-.387.316-.703.703-.703h5.391V7.266c0-.387.316-.703.703-.703h3.281c.387 0 .703.316.703.703v5.391h5.391c.387 0 .703.316.703.703v3.281z" fill="var(--color_buy_button_bg)"></path></svg>
 
      </button>
    </div>
  </article>
  `;
  containerProductsCart.innerHTML += cardProdutoCart;

//AQUI VAMOS SOMAR O PREÇO TOTAL DO CARRINHO
  totalPrice += product.price;

const totalElement = document.getElementById('cart-total-price');
totalElement.textContent = `Total: R$${totalPrice.toFixed(2)}`;
}





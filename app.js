let products = [
  {
    id: 1,
    name: "Mobile",
    price: "Rs 20,000/=",
    description: "Samsung Galaxy A 50",
  },
  {
    id: 2,
    name: "Laptop",
    price: "Rs 50,000/=",
    description: "Hp EliteBook",
  },
  {
    id: 3,
    name: "Computer",
    price: "Rs 80,000/=",
    description: "iMac",
  },
];

let render = () => {
  let productContainer = document.querySelector(".Product-Container");
  let productCard = products.map((product) => {
    return `<div class="productCards">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button onclick="deleteProduct(${product.id})">Delete</button>
        </div>`;
  });
  productContainer.innerHTML = productCard.join("");
};
let deleteProduct = (productId) => {
  products = products.filter((product) => {
    return product.id !== productId;
  });
  render();
};
render();

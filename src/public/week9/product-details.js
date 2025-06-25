import { getDentalProducts } from "./load-products.js";

async function showProduct(id) {
  const products = await getDentalProducts();
  const product = products.find(p => p.id === id);
  if (!product) return;

const info = document.querySelector(".product-info");
info.innerHTML = `

    <h2>${product.name}</h2>
    <img src="${product.imageUrl}" alt="${product.name}" />
    <p>${product.description}</p>
    <p><strong>Price: $<span id="product-price">${product.price}</span></strong></p>
    <button>Add to Cart</button>
  `;
}

const overlay = document.getElementById("overlay");
const email = document.getElementById("email");
const signup = document.getElementById("signup");

function hideOverlay() {
  overlay.setAttribute("aria-hidden", "true");
}

signup.addEventListener("click", () => {
  if (email.value.trim()) hideOverlay();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") hideOverlay();
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) hideOverlay();
});

const id = new URLSearchParams(location.search).get("id");
showProduct(parseInt(id));

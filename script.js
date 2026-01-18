const products = [
  {
    name: "Shiny Dress",
    brand: "Al Karam",
    price: 99.48,
    reviews: "4.1k",
    category: "women",
    image: "./img/item.png",
    soldOut: true,
  },
  {
    name: "Men Jacket",
    brand: "Brand X",
    price: 89.0,
    reviews: "3.2k",
    category: "men",
    image: "./img/item.png",
    soldOut: false,
  },
];

const tabs = document.querySelectorAll(".item-options button");
const productContainer = document.getElementById("products");
/* PRODUCT TABS */

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

/* Product Showcase  */

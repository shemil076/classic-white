// Dummy product data
const products = [
  {
    title: "Radiant & Protective Brightening Day Cream",
    description: "This is a sample product description 1.",
    price: 2800,
    imageUrl: "./Images/ML_R9841.jpg",
    quantity: 0
  },
  {
    title: "Rejuvenating and Brightening Night Cream",
    description: "This is a sample product description 2.",
    price: 2850,
    imageUrl: "./Images/ML_R9848.webp",
    quantity: 0
  },
  {
    title: "Golden Radiance Gold Turmeric Cream",
    description: "This is a sample product description 3.",
    price: 2900,
    imageUrl: "./Images/ML_R9563.jpg",
    quantity: 0
  },
  {
    title: "Radiant & Protective Brightening Daytime Body Lotion",
    description: "This is a sample product description 1.",
    price: 3150,
    imageUrl: "./Images/ML_R9897.jpg",
    quantity: 0
  },
  {
    title: "Rejuvenating and Brightening Night-time Body Lotion",
    description: "This is a sample product description 2.",
    price: 3300,
    imageUrl: "./Images/ML_R9913.jpg",
    quantity: 0
  },
  {
    title: "Golden Radiance Fairness Face Wash 100 ml",
    description: "This is a sample product description 1.",
    price: 600,
    imageUrl: "./Images/ML_R9922.jpg",
    quantity: 0
  },
  {
    title: "Golden Radiance Fairness Face Wash 50 ml",
    description: "This is a sample product description 2.",
    price: 325,
    imageUrl: "./Images/ML_R9925.webp",
    quantity: 0
  },
  {
    title: "Pimple Clear Anti-acne Mint Face Wash 100 ml",
    description: "This is a sample product description 2.",
    price: 600,
    imageUrl: "./Images/ML_R9921.jpg",
    quantity: 0
  },
  {
    title: "Pimple Clear Anti-acne Mint Face Wash 50 ml",
    description: "This is a sample product description 2.",
    price: 325,
    imageUrl: "./Images/ML_R9920.jpg",
    quantity: 0
  },
  {
    title: "Smooth Exfoliating Coffee & Walnut Facial Scrub",
    description: "This is a sample product description 2.",
    price: 1699,
    imageUrl: "./Images/ML_R9846.webp",
    quantity: 0
  },
  {
    title: "Brightening and Rejuvenating Activated Charcoal Face Pack",
    description: "This is a sample product description 2.",
    price: 1600,
    imageUrl: "./Images/ML_R9854.webp",
    quantity: 0
  },
  {
    title: "Gentle Rejuvenating Facial Cleanser",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9877.webp",
    quantity: 0
  },

  {
    title: "Refreshing Skin Toner",
    description: "This is a sample product description 2.",
    price: 490,
    imageUrl: "./Images/ML_R9879.webp",
    quantity: 0
  },
  {
    title: "Hydrating Everyday Body Moisturizer",
    description: "This is a sample product description 2.",
    price: 1200,
    imageUrl: "./Images/ML_R9880.webp",
    quantity: 0
  },
  {
    title: "Rose T & Aloe Vera Day and Night Body Lotion",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9895.jpg",
    quantity: 0
  },
  {
    title: "Shielding 2 in 1 Sun Cream - (SPF 50)",
    description: "This is a sample product description 2.",
    price: 1100,
    imageUrl: "./Images/ML_R9905.jpg",
    quantity: 0
  },
  {
    title: "Anti-Blemish Pigmentation Control Cream",
    description: "This is a sample product description 2.",
    price: 3850,
    imageUrl: "./Images/ML_R9849.webp",
    quantity: 0
  },
  {
    title: "Golden Radiance Turmeric Day & Night Cream",
    description: "This is a sample product description 2.",
    price: 2900,
    imageUrl: "./Images/ML_R9851.webp",
    quantity: 0
  },
  {
    title: "Spot Correcting Anti-Acne Cream",
    description: "This is a sample product description 2.",
    price: 1100,
    imageUrl: "./Images/ML_R9875.webp",
    quantity: 0
  },

  {
    title: "Sandalwood Day & Night Cream",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9872.webp",
    quantity: 0
  },
  {
    title: "7 Herbs Hair Oil",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9916.jpg",
    quantity: 0
  },
  {
    title: "Revive & Radiance Hair Elixir Shampoo",
    description: "This is a sample product description 2.",
    price: 740,
    imageUrl: "./Images/ML_R9907.jpg",
    quantity: 0
  },
  {
    title: "Revive & Radiance Hair Elixir Conditioner",
    description: "This is a sample product description 2.",
    price: 740,
    imageUrl: "./Images/ML_R9908.jpg",
    quantity: 0
  },
  
];

const productsPerPage = 12; // Number of products per page
let currentPage = 1; // Current page

// Function to display products with pagination
function displayProducts(productList, page = 1) {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = productList.slice(start, end);

  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = ""; // Clear previous products

  paginatedProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "product";

    productItem.innerHTML = `
      <div class="product-container container">
        <div class="products-container">
          <div class="product" data-name="p-2">
            <img src=${product.imageUrl} alt="product image">
            <div>
              <h3 style="font-family: 'Times New Roman', Times, serif;">${product.title}</h3>
              <div>
                <div class="price" style="padding-bottom: 10px; font-family: 'Times New Roman', Times, serif;">LKR ${product.price}</div>
 
                <div class="cart-button" data-title="${product.title}" data-price="${product.price}" data-image-url="${product.imageUrl}">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    productContainer.appendChild(productItem);
  });

// <button class="add-to-cart-btn" data-title="${product.title}" data-price="${product.price}" data-image-url="${product.imageUrl}">Add to Cart</button>
  updatePaginationInfo(page, productList.length);
  setupEventListeners(); // Set up event listeners for the new buttons
}

// Function to update pagination info
function updatePaginationInfo(page, totalProducts) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  document.getElementById("page-info").innerText = `Page ${page} of ${totalPages}`;
  document.getElementById("prev-page").disabled = page === 1;
  document.getElementById("next-page").disabled = page === totalPages;
}

// Set up event listeners
function setupEventListeners() {
  document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const title = event.target.dataset.title;
      const price = event.target.dataset.price;
      const imageUrl = event.target.dataset.imageUrl;
      const quantity = event.target.dataset.quantity;
      addToCart({ title, price, imageUrl, quantity });
    });
  });

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts(products, currentPage);
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(products, currentPage);
    }
  });
}

// Function to add items to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(!findItemInCart(cart, product)){
    console.log("Found")
    product.quantity = 1;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
  else{
    alert("This product is already in your cart. Please update the quantity on the cart page")
  }


}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products, currentPage);
});

function findItemInCart(cart, product) {
  return cart.find(item => item.title === product.title);
}ion 
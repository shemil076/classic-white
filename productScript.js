// Dummy product data
const products = [
  {
    title: "Radiant & Protective Brightening Day Cream",
    description: "This is a sample product description 1.",
    price: 2800,
    imageUrl: "./Images/ML_R9841.jpg",
  },
  {
    title: "Rejuvenating and Brightening Night Cream",
    description: "This is a sample product description 2.",
    price: 2850,
    imageUrl: "./Images/ML_R9848.jpg",
  },
  {
    title: "Golden Radiance Gold Turmeric Cream",
    description: "This is a sample product description 3.",
    price: 2900,
    imageUrl: "./Images/ML_R9563.jpg",
  },
  {
    title: "Radiant & Protective Brightening Daytime Body Lotion",
    description: "This is a sample product description 1.",
    price: 3150,
    imageUrl: "./Images/ML_R9897.jpg",
  },
  {
    title: "Rejuvenating and Brightening Night-time Body Lotion",
    description: "This is a sample product description 2.",
    price: 3300,
    imageUrl: "./Images/ML_R9913.jpg",
  },
  {
    title: "Golden Radiance Fairness Face Wash 100 ml",
    description: "This is a sample product description 1.",
    price: 600,
    imageUrl: "./Images/ML_R9922.jpg",
  },
  {
    title: "Golden Radiance Fairness Face Wash 50 ml",
    description: "This is a sample product description 2.",
    price: 325,
    imageUrl: "./Images/ML_R9925.jpg",
  },
  {
    title: "Pimple Clear Anti-acne Mint Face Wash 100 ml",
    description: "This is a sample product description 2.",
    price: 600,
    imageUrl: "./Images/ML_R9921.jpg",
  },
  {
    title: "Pimple Clear Anti-acne Mint Face Wash 50 ml",
    description: "This is a sample product description 2.",
    price: 325,
    imageUrl: "./Images/ML_R9920.jpg",
  },
  {
    title: "Smooth Exfoliating Coffee & Walnut Facial Scrub",
    description: "This is a sample product description 2.",
    price: 1699,
    imageUrl: "./Images/ML_R9846.jpg",
  },
  {
    title: "Brightening and Rejuvenating Activated Charcoal Face Pack",
    description: "This is a sample product description 2.",
    price: 1600,
    imageUrl: "./Images/ML_R9854.jpg",
  },
  {
    title: "Gentle Rejuvenating Facial Cleanser",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9877.jpg",
  },

  {
    title: "Refreshing Skin Toner",
    description: "This is a sample product description 2.",
    price: 490,
    imageUrl: "./Images/ML_R9879.jpg",
  },
  {
    title: "Hydrating Everyday Body Moisturizer",
    description: "This is a sample product description 2.",
    price: 1200,
    imageUrl: "./Images/ML_R9880.jpg",
  },
  {
    title: "Rose T & Aloe Vera Day and Night Body Lotion",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9895.jpg",
  },
  {
    title: "Shielding 2 in 1 Sun Cream - (SPF 50)",
    description: "This is a sample product description 2.",
    price: 1100,
    imageUrl: "./Images/ML_R9905.jpg",
  },
  {
    title: "Anti-Blemish Pigmentation Control Cream",
    description: "This is a sample product description 2.",
    price: 3850,
    imageUrl: "./Images/ML_R9849.jpg",
  },
  {
    title: "Golden Radiance Turmeric Day & Night Cream",
    description: "This is a sample product description 2.",
    price: 2900,
    imageUrl: "./Images/ML_R9851.jpg",
  },
  {
    title: "Spot Correcting Anti-Acne Cream",
    description: "This is a sample product description 2.",
    price: 1100,
    imageUrl: "./Images/ML_R9875.jpg",
  },

  {
    title: "Sandalwood Day & Night Cream",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9872.jpg",
  },
  {
    title: "7 Herbs Hair Oil",
    description: "This is a sample product description 2.",
    price: 690,
    imageUrl: "./Images/ML_R9916.jpg",
  },
  {
    title: "Revive & Radiance Hair Elixir Shampoo",
    description: "This is a sample product description 2.",
    price: 740,
    imageUrl: "./Images/ML_R9907.jpg",
  },
  {
    title: "Revive & Radiance Hair Elixir Conditioner",
    description: "This is a sample product description 2.",
    price: 740,
    imageUrl: "./Images/ML_R9908.jpg",
  },
  
];

const productsPerPage = 10; // Number of products per page
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
            <h3 style="font-family: 'Times New Roman', Times, serif;">${product.title}</h3>
            <div class="price" style="padding-bottom: 10px; font-family: 'Times New Roman', Times, serif;">LKR ${product.price}</div>
            <div class="buttons">
              <a href="#" class="cart">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    `;

    productContainer.appendChild(productItem);
  });

  updatePaginationInfo(page, productList.length);
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
  document.querySelectorAll("#add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Product added to cart!");
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

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products, currentPage);
  setupEventListeners();
});

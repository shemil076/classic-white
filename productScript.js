// Dummy product data
const products = [
  {
    id:1,
    title: "Radiant & Protective Brightening Day Cream",
    description: "Start your day with our hydrating and protective Day Cream, formulated to provide lightweight moisture and shield your skin from environmental stressors.",
    price: 2800,
    imageUrl: "./Images/ML_R9841.jpg",
    quantity: 0
  },
  {
    id:2,
    title: "Rejuvenating and Brightening Night Cream",
    description: "Then, indulge in the luxurious nourishment of our Night Cream, enriched with potent ingredients to replenish and rejuvenate your skin as you sleep.",
    price: 2850,
    imageUrl: "./Images/ML_R9848.webp",
    quantity: 0
  },
  {
    id:3,
    title: "Golden Radiance Gold Turmeric Cream",
    description: "A true testament to the fusion of ancient wisdom and modern skincare innovation. This multifaceted cream is meticulously crafted to address a variety of skincare concerns while embracing the rich heritage of Ayurveda. With SPF 35, our cream provides essential protection from harmful UV rays, safeguarding your skin against premature aging and sun damage. Double up your skincare and makeup routine effortlessly with our cream, serving as a perfect base for seamless makeup application.",
    price: 2900,
    imageUrl: "./Images/ML_R9563.jpg",
    quantity: 0
  },
  {
    id:4,
    title: "Radiant & Protective Brightening Daytime Body Lotion",
    description: "During the day, indulge in our Radiant & Protective Brightening Daytime Body Lotion. Lightweight and fast absorbing, this soft and smooth lotion is enriched with vitamin E and castor oil to nourish and protect your skin throughout the day.",
    price: 3150,
    imageUrl: "./Images/ML_R9897.jpg",
    quantity: 0
  },
  {
    id:5,
    title: "Rejuvenating and Brightening Night-time Body Lotion",
    description: "A luxurious blend infused with bee honey and vitamin A to deeply nourish and revitalize your skin while you sleep. This advanced formula goes beyond moisturization, working to even out skin tone and promote a radiant complexion.",
    price: 3300,
    imageUrl: "./Images/ML_R9913.jpg",
    quantity: 0
  },
  {
    id:6,
    title: "Golden Radiance Fairness Face Wash 100 ml",
    description: "Infused with 24-carat gold dust, this luxurious formula gently removes dead skin and dark spots, leaving skin fresh and vibrant. Restore your natural complexion, even out skin tone, and eliminate dullness with every wash.",
    price: 600,
    imageUrl: "./Images/ML_R9922.jpg",
    quantity: 0
  },
  {
    id:7,
    title: "Golden Radiance Fairness Face Wash 50 ml",
    description: "Infused with 24-carat gold dust, this luxurious formula gently removes dead skin and dark spots, leaving skin fresh and vibrant. Restore your natural complexion, even out skin tone, and eliminate dullness with every wash.",
    price: 325,
    imageUrl: "./Images/ML_R9925.webp",
    quantity: 0
  },
  {
    id:8,
    title: "Pimple Clear Anti-acne Mint Face Wash 100 ml",
    description: "Infused with the purifying properties of neem, tea tree, and salicylic acid, this refreshing formula deeply cleanses pores, freeing them from dirt and impurities. Say goodbye to acne as it gently removes blackheads and whiteheads, revealing a smoother, blemish-free complexion with every use.",
    price: 600,
    imageUrl: "./Images/ML_R9921.jpg",
    quantity: 0
  },
  {
    id:9,
    title: "Pimple Clear Anti-acne Mint Face Wash 50 ml",
    description: "Infused with the purifying properties of neem, tea tree, and salicylic acid, this refreshing formula deeply cleanses pores, freeing them from dirt and impurities. Say goodbye to acne as it gently removes blackheads and whiteheads, revealing a smoother, blemish-free complexion with every use.",
    price: 325,
    imageUrl: "./Images/ML_R9920.jpg",
    quantity: 0
  },
  {
    id:10,
    title: "Smooth Exfoliating Coffee & Walnut Facial Scrub",
    description: "Infused with special ingredients like hyaluronic acid, walnut shell powder, coffee powder, green tea extract, and glycolic acid. Experience a revitalizing exfoliation with natural, skin- loving ingredients.",
    price: 1699,
    imageUrl: "./Images/ML_R9846.webp",
    quantity: 0
  },
  {
    id:11,
    title: "Brightening and Rejuvenating Activated Charcoal Face Pack",
    description: "Formulated with hyaluronic acid, glycolic acid, and vitamin E to nourish and rejuvenate. Achieve a brighter complexion and revitalized skin with the purifying power of activated charcoal.",
    price: 1600,
    imageUrl: "./Images/ML_R9854.webp",
    quantity: 0
  },
  {
    id:12,
    title: "Gentle Rejuvenating Facial Cleanser",
    description: "Our skin cleanser is a deep cleanse that purifies your skin, removing impurities, excess oil, and makeup residue without stripping away essential moisture. Formulated with gentle yet effective ingredients, it leaves your skin feeling refreshed, balanced, and ready to absorb the benefits of your skincare routine.",
    price: 690,
    imageUrl: "./Images/ML_R9877.webp",
    quantity: 0
  },

  {
    id:13,
    title: "Refreshing Skin Toner",
    description: "Our toner is the essential second step in your skincare regimen, designed to rebalance your skin's pH levels, tighten pores, and refine texture. Enriched with skin-loving botanical extracts and hydrating agents, it preps your skin to receive the full benefits of your serums and moisturizers while providing a refreshing boost of hydration.",
    price: 490,
    imageUrl: "./Images/ML_R9879.webp",
    quantity: 0
  },
  {
    id:14,
    title: "Hydrating Everyday Body Moisturizer",
    description: "A luxurious blend crafted to quench your skin's thirst for hydration. Formulated without petroleum, it provides 48-hour deep moisture that absorbs in seconds, ensuring your skin stays nourished and moisturized throughout the day.",
    price: 1200,
    imageUrl: "./Images/ML_R9880.webp",
    quantity: 0
  },
  {
    id:15,
    title: "Rose T & Aloe Vera Day and Night Body Lotion",
    description: "Enriched with the essence of rose tea and the soothing properties of aloe vera, this luxurious formula provides hydration and nourishment to your skin, leaving it feeling smooth and rejuvenated.",
    price: 690,
    imageUrl: "./Images/ML_R9895.jpg",
    quantity: 0
  },
  {
    id:16,
    title: "Shielding 2 in 1 Sun Cream - (SPF 50)",
    description: "This SPF 50 sunscreen provides superior sun control while keeping your skin moisturized throughout the day. Protecting against harmful UV rays, it not only prevents sunburn but also shields your skin from premature aging. Our shielding sun cream is your trusted companion for radiant and healthy skin under the sun.",
    price: 1100,
    imageUrl: "./Images/ML_R9905.jpg",
    quantity: 0
  },
  {
    id:17,
    title: "Anti-Blemish Pigmentation Control Cream",
    description: "Our Anti Blemish Pigmentation Control Cream targets dark spots and blemishes, effectively reducing their appearance for a more even skin tone. Formulated with potent ingredients, this cream helps control pigmentation, preventing new spots from forming and promoting a clearer complexion. This cream also helps defy signs of aging and clear off wrinkles for a youthful complexion.",
    price: 3850,
    imageUrl: "./Images/ML_R9849.webp",
    quantity: 0
  },
  {
    id:18,
    title: "Golden Radiance Turmeric Day & Night Cream",
    description: "This is a sample product description 2.",
    price: 2900,
    imageUrl: "./Images/ML_R9851.webp",
    quantity: 0
  },
  {
    id:19,
    title: "Spot Correcting Anti-Acne Cream",
    description: "Formulated with potent ingredients like encapsulated sulfur and salicylic acid, this cream targets acne at its source, effectively reducing blemishes and preventing future breakouts. It's time to sabotage the breakout cycle and reveal your best skin yet.",
    price: 1100,
    imageUrl: "./Images/ML_R9875.webp",
    quantity: 0
  },

  {
    id:20,
    title: "Sandalwood Day & Night Cream",
    description: "Enriched with the timeless essence of sandalwood, this indulgent formula provides essential hydration and protection during the day, while working overnight to repair and replenish, leaving your skin soft, supple, and radiant.",
    price: 690,
    imageUrl: "./Images/ML_R9872.webp",
    quantity: 0
  },
  {
    id:21,
    title: "7 Herbs Hair Oil",
    description: "Enriched with the essence of seven powerful herbs including Bhringraj, Amla, and Neem, this exquisite formula penetrates deep into the roots, nourishing and strengthening each strand from within Bid farewell to dryness, breakage, and dullness as this lightweight elixir replenishes moisture, promotes healthy growth, and adds a radiant shine to your locks.",
    price: 690,
    imageUrl: "./Images/ML_R9916.jpg",
    quantity: 0
  },
  {
    id:22,
    title: "Revive & Radiance Hair Elixir Shampoo",
    description: "Crafted with a harmonious blend of natural extracts to nourish and revitalize your hair. Enriched with virgin coconut oil, Bhringraj extract, Shikakai extract, and soothing Aloe extract, this formula gently cleanses while providing deep hydration and strengthening benefits. Experience the luxurious lather and invigorating scent as it leaves your hair feeling soft, silky, and refreshed after each wash.",
    price: 740,
    imageUrl: "./Images/ML_R9907.jpg",
    quantity: 0
  },
  {
    id:23,
    title: "Revive & Radiance Hair Elixir Conditioner",
    description: "Introducing our luxurious conditioner, infused with a nourishing blend of premium ingredients to pamper your hair. Enriched with B165, Xiameter 1785, hydrolyzed silk protein, and virgin coconut oil, this formula provides intense hydration and strengthens each strand from within. Experience the silky-smooth texture and the irresistible shine as it detangles and softens your hair, leaving it looking and feeling healthier than ever before.",
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
 
                <div class="cart-button" data-title="${product.title}" data-price="${product.price}" data-image-url="${product.imageUrl}" data-description="${product.description}">Add to Cart</div>
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
// Set up event listeners
function setupEventListeners() {
  document.querySelectorAll(".product img, .product h3, .product .price").forEach((element) => {
    element.addEventListener("click", (event) => {
      const productElement = event.target.closest(".product");
      const title = productElement.querySelector("h3").innerText;
      const price = productElement.querySelector(".price").innerText.replace("LKR ", "");
      const imageUrl = productElement.querySelector("img").src;
      const description = productElement.querySelector(".cart-button").dataset.description;
      showProductPreview({ title, price, imageUrl, description });
    });
  });

  document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = button.dataset.id;
      const title = button.dataset.title;
      const price = button.dataset.price;
      const imageUrl = button.dataset.imageUrl;
      const quantity = button.dataset.quantity;

      if(title !==undefined, price !== undefined){
        addToCart({ title, price, imageUrl, quantity });
      }
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

  document.getElementById("close-preview").addEventListener("click", () => {
    document.getElementById("product-preview").classList.add("hidden");
  });
}

// Function to show product preview
function showProductPreview(product) {
  document.getElementById("preview-title").innerText = product.title;
  document.getElementById("preview-description").innerText = product.description;
  document.getElementById("preview-price").innerText = `LKR ${product.price}`;
  document.getElementById("preview-image").src = product.imageUrl;
  document.getElementById("product-preview").classList.remove("hidden");

  document.getElementById("preview-add-to-cart").onclick = () => {

      addToCart(product);
    
    document.getElementById("product-preview").classList.add("hidden");
  };
}


// Function to add items to the cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  if (!findItemInCart(cart, product)) {
    product.quantity = 1;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  } else {
    alert("This product is already in your cart. Please update the quantity on the cart page");
  }
}

function getProductById(productId) {
  return products.find(product => product.id === productId);
}

// Attach event listeners to the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.dataset.id, 10);
      const product = getProductById(productId);

      if (product) {
        addToCart(product);
      }
    });
  });
});

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products, currentPage);
});

function findItemInCart(cart, product) {
  return cart.find(item => item.title === product.title);
} 
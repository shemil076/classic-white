// Function to display cart items
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = ""; // Clear previous items

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cart.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
        <div>
          <h3 style="font-family: 'Times New Roman', Times, serif;">${product.title}</h3>
          <div class="price" style="font-family: 'Times New Roman', Times, serif;">LKR ${product.price}</div>
        </div>
      `;

      cartContainer.appendChild(cartItem);
    });
  }
}

// Function to clear cart items
function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
}

// Initialize the cart page
document.addEventListener("DOMContentLoaded", () => {
  displayCartItems();

  // Attach event listener to clear cart button
  const clearCartButton = document.getElementById("clear-cart");
  clearCartButton.addEventListener("click", clearCart);
});

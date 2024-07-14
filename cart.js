// Function to add item to cart
function addItemToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1; // Increase the quantity if the product already exists in the cart
  } else {
    product.quantity = 1; // Set the initial quantity to 1
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

// Function to display cart items
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = ""; // Clear previous items

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cart.forEach((product, index) => {
      if (!product.quantity || product.quantity < 1) {
        product.quantity = 1; // Ensure quantity is at least 1
      }
      
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
        <div class="item-component-container">
          <div class="cart-item">
            <h3 style="font-family: 'Times New Roman', Times, serif;">${product.title}</h3>
            <div class="price" style="font-family: 'Times New Roman', Times, serif;">
              <h4>LKR ${product.price * product.quantity}</h4>
            </div>
          </div>
          <div class="update-controls">
            <div class="quantity" style="font-family: 'Times New Roman', Times, serif;">
              <label for="quantity-${index}">Quantity:</label>
              <input type="number" id="quantity-${index}" name="quantity" min="1" value="${product.quantity}" style="width: 50px;">
            </div>
            <button class="remove-button" data-index="${index}">Remove</button>
          </div>
        </div>
      `;

      cartContainer.appendChild(cartItem);
    });
  }

  // Update the total amount
  updateTotalAmount();

  // Attach event listeners to quantity inputs
  document.querySelectorAll('.quantity input').forEach(input => {
    input.addEventListener('change', updateQuantity);
  });

  // Attach event listeners to remove buttons
  document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', removeItem);
  });
}

 // Attach event listener to clear cart button
 const clearCartButton = document.getElementById("clear-cart");
 clearCartButton.addEventListener("click", clearCart);

   // Attach event listener to confirm order button
   const confirmOrderButton = document.getElementById("confirm-button");
   confirmOrderButton.addEventListener("click", sendOrderEmail);


// Function to clear cart items
function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
}

// Function to update item quantity
function updateQuantity(event) {
  const index = event.target.id.split('-')[1];
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let newQuantity = parseInt(event.target.value, 10);
  if (isNaN(newQuantity) || newQuantity < 1) {
    newQuantity = 1; // Set quantity to 1 if the value is invalid
    event.target.value = 1;
  }
  cart[index].quantity = newQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

// Function to remove item from cart
function removeItem(event) {
  const index = event.target.getAttribute('data-index');
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

// Function to update total amount
function updateTotalAmount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalAmount = 0;

  cart.forEach(product => {
    totalAmount += product.price * product.quantity;
  });
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Function to send order confirmation email
function sendOrderEmail() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const billingAddress = document.getElementById("billing-address").value;
  const telephoneNumber = document.getElementById("telephone-number").value;

  if (cart.length === 0) {
    alert("Your cart is empty. Please add items to the cart before confirming the order.");
    return;
  }

  if (!billingAddress || !telephoneNumber) {
    alert("Please fill in the billing address and telephone number.");
    return;
  }

  const items = cart.map(product => ({
    title: product.title,
    quantity: product.quantity,
    price: product.price,
    total: product.price * product.quantity
  }));

  const totalAmount = document.getElementById("total-amount").textContent;

  const templateParams = {
    items: JSON.stringify(items), // Ensure items are correctly passed as an array
    total_amount: totalAmount,
    billing_address: billingAddress,
    telephone_number: telephoneNumber
  };

  emailjs.init('GMfVEHC7b35kbtHM4');
  emailjs.send('service_k0uvgo5', 'template_in6jdeu', templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Order confirmed! An email has been sent.');
      clearCart();
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send order confirmation email.');
    });
}





// Initialize the cart page
document.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
  updateTotalAmount(); // Update
});

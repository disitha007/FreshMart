// Retrieve the orders from local storage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to calculate the total price
function calculateTotal() {
  let totalPrice = 0;

  orders.forEach(order => {
    // Assume each product has a price (replace this with actual price logic)
    const productPrice = getProductPrice(order.productName);
    totalPrice += productPrice * order.productCount;
  });

  return totalPrice.toFixed(2); // Return total price as a string with two decimals
}

// Dummy function to return product price (replace with actual logic)
function getProductPrice(productName) {
  const priceList = {
    Milk: 2.5,
    Cheese: 3.0,
    Yogurt: 1.5,
    Butter: 2.0,
    Cream: 2.8,
    "Ice Cream": 5.0,
    Tomato: 0.8,
    Broccoli: 1.2,
    Spinach: 1.0,
    Potato: 0.5,
    Onion: 0.4,
    Carrot: 0.7,
    Apple: 1.0,
    Banana: 0.5,
    Orange: 0.6,
    Grapes: 2.0,
    Strawberry: 2.5,
    Mango: 1.5,
    Chicken: 4.0,
    Beef: 5.0,
    Pork: 3.5,
    Lamb: 6.0,
    Turkey: 4.5,
    Duck: 5.5,
    Salmon: 8.0,
    Shrimp: 9.0,
    Tuna: 7.0,
    Lipstick: 10.0,
    Perfume: 25.0,
    "Face Cream": 15.0,
    Foundation: 12.0,
    Mascara: 8.0,
    Eyeliner: 5.0,
  };

  return priceList[productName] || 0; // Return 0 if product not found
}

// Function to display the cart items
function displayCartItems() {
  const cartTableBody = document.querySelector('#cartTable tbody');
  cartTableBody.innerHTML = ''; // Clear existing rows

  orders.forEach((order, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${order.name}</td>
      <td>${order.email}</td>
      <td>${order.productType}</td>
      <td>${order.productName}</td>
      <td>${order.amountType}</td>
      <td>${order.productCount}</td>
      <td>${order.address}</td>
      <td>$${(getProductPrice(order.productName) * order.productCount).toFixed(2)}</td>
      <td><button class="button" onclick="addToFavorites(${index})">Add to Favorites</button></td>
    `;

    cartTableBody.appendChild(row);
  });

  // Update total price
  document.getElementById('totalPrice').textContent = `Total Price: $${calculateTotal()}`;
}

// Function to add an order to favorites
function addToFavorites(index) {
  // Retrieve favorite orders from local storage or initialize as empty array
  const favoriteOrders = JSON.parse(localStorage.getItem('favoriteOrders')) || [];

  // Add the selected order to favorites
  favoriteOrders.push(orders[index]);

  // Save back to local storage
  localStorage.setItem('favoriteOrders', JSON.stringify(favoriteOrders));

  alert('Order added to favorites!');
}

// Function to navigate to the favorite orders page
function navigateToFavorites() {
  window.location.href = './favorites.html'; // Navigate to favorites page
}

// Function to handle payment process (this is a placeholder)
function payNow() {
  window.location.href = '../payment.html'; // Replace with actual payment logic
}

// Initialize the cart
displayCartItems();

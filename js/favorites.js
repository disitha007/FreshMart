// Retrieve favorite orders from local storage
const favoriteOrders = JSON.parse(localStorage.getItem('favoriteOrders')) || [];

// Function to calculate the total price of favorite orders
function calculateFavoriteTotal() {
  let totalPrice = 0;

  favoriteOrders.forEach(order => {
    const productPrice = getProductPrice(order.productName);
    totalPrice += productPrice * order.productCount;
  });

  return totalPrice.toFixed(2);
}

// Function to display favorite orders
function displayFavoriteOrders() {
  const favoriteOrdersTableBody = document.querySelector('#favoriteOrdersTable tbody');
  favoriteOrdersTableBody.innerHTML = ''; // Clear existing rows

  favoriteOrders.forEach(order => {
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
    `;

    favoriteOrdersTableBody.appendChild(row);
  });

  // Update total price
  document.getElementById('favoriteTotalPrice').textContent = `Total Price: $${calculateFavoriteTotal()}`;
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

// Function to handle payment process (this is a placeholder)
function payNow() {
    window.location.href = '../payment.html'; // Replace with actual payment logic
  }

// Initialize the favorite orders table
displayFavoriteOrders();

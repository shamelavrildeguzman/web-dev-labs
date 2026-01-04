const menuItems = [
  { category: "best-seller", name: "Latte", description: "Creamy milk coffee", price: 130 },
  { category: "best-seller", name: "Chocolate Cake", description: "Rich chocolate flavor", price: 150 },
  { category: "coffee", name: "Espresso", description: "Strong brewed coffee", price: 90 },
  { category: "coffee", name: "Cappuccino", description: "Coffee with milk foam", price: 120 },
  { category: "coffee", name: "Latte", description: "Creamy milk coffee", price: 130 },
  { category: "tea", name: "Green Tea", description: "Fresh and organic", price: 80 },
  { category: "tea", name: "Matcha Latte", description: "Premium matcha blend", price: 130 },
  { category: "snacks", name: "Veggie Sandwich", description: "Healthy and fresh", price: 120 },
  { category: "snacks", name: "Grilled Cheese", description: "Cheesy goodness", price: 140 },
  { category: "desserts", name: "Chocolate Cake", description: "Rich chocolate flavor", price: 150 },
  { category: "desserts", name: "Banana Bread", description: "Soft and homemade", price: 110 }
];


menuItems.forEach(item => {
  const ul = document.getElementById(item.category);
  if (ul) {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong> - ₱${item.price}  
      <p class="desc">${item.description}</p>
      <button onclick="orderItem('${item.name}')">Order Now</button>
    `;
    ul.appendChild(li);
  }
});


function orderItem(itemName) {
  alert("You ordered: " + itemName);
}

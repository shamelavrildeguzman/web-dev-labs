let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let list = document.getElementById("fruit-list");

for (let i = 0; i < fruits.length; i++) {
  let item = document.createElement("li");
  item.textContent = fruits[i];
  list.appendChild(item);
}

// === Setup DOM Elements ===
let cart = [];
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");
const clearCartButton = document.getElementById("clearCartButton");
const itemCount = document.getElementById("itemCount");
const cartList = document.getElementById("cart");

// === Add Item to Cart on Button Click ===
addItemButton.addEventListener("click", () => {
  const item = itemInput.value.trim();

  if (item === "") {
    alert("Please enter an item.");
    return;
  }

  cart.push(item);
  renderCart();
  itemInput.value = "";
  itemInput.focus();
});

// === Remove Last Item from Cart ===
removeItemButton.addEventListener("click", () => {
  cart.pop();
  renderCart();
});

// === Add Item with ENTER Key ===
itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItemButton.click();
  }
});

// === Clear All Items from Cart ===
clearCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// === Render Cart Items ===
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    li.setAttribute("data-index", index); // Used for delegation
    cartList.appendChild(li);
  });

  // Update item count display
  itemCount.innerHTML = `<strong>Items in cart:</strong> ${cart.length}`;
}

// === EVENT DELEGATION: Toggle Purchased on Click ===
cartList.addEventListener("click", function (event) {
  const clickedItem = event.target;
  if (clickedItem.tagName !== "LI") return;

  clickedItem.classList.toggle("purchased");
});

// === EVENT DELEGATION: Delete Item on Right-Click ===
cartList.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  const clickedItem = event.target;
  if (clickedItem.tagName !== "LI") return;

  const index = clickedItem.getAttribute("data-index");
  cart.splice(index, 1);
  renderCart();
});

// === Show Today's Date ===
document.getElementById("todayDate").innerText = new Date().toLocaleDateString();

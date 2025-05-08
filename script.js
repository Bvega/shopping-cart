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

// === FEATURE 1: Add Item with ENTER Key ===
itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItemButton.click();
  }
});

// === FEATURE 2: Clear All Items ===
clearCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// === FEATURE 3: Render Cart and Add Delete Buttons ===
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;

    // Add delete button next to each item
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑️";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    li.appendChild(deleteBtn); // ✅ FIXED
    cartList.appendChild(li);
  });

  // === Update the item count display ===
  itemCount.innerHTML = `<strong>Items in cart:</strong> ${cart.length}`;
}

// === Show Today's Date ===
document.getElementById("todayDate").innerText = new Date().toLocaleDateString();

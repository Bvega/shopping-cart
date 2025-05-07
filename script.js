let cart = [];
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");
const cartList = document.getElementById("cart");

// Add item
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

// Remove last item
removeItemButton.addEventListener("click", () => {
  cart.pop();
  renderCart();
});

// Display cart
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    cartList.appendChild(li);
  });
}

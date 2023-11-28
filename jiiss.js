console.log("connected");
let carts = document.querySelectorAll(".addbutton");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function () {
    console.log("tzadt");
  });
}

// Get all the "Add" buttons
const addButtons = document.querySelectorAll(".addbutton");

// Function to handle the click event when "Add" button is pressed
function handleAddButtonClick(event) {
  const itemContainer = event.target.parentElement.parentElement;
  const itemName = itemContainer.querySelector("h2").innerText;
  const itemPrice = itemContainer.querySelector("p:last-of-type").innerText;
  const selectedItem = {
    name: itemName,
    text: "",
    price: parseInt(itemPrice.slice(0,itemPrice.length - 1)),
  };

  // Get the existing items from local storage or initialize an empty array
  const existingItems = JSON.parse(localStorage.getItem("selectedItems")) || [];


    const indexExiste = existingItems.findIndex(
      item => item.name === selectedItem.name
    );

    
    if(indexExiste!== -1){
      console.log(existingItems[indexExiste]);
      existingItems[indexExiste].price += existingItems[indexExiste].price
      
    }else{
        // Add the selected item to the existing items
       existingItems.push(selectedItem);
    }
    
 

  // Store the updated items in local storage
  localStorage.setItem("selectedItems", JSON.stringify(existingItems));
}

// Attach click event listener to each "Add" button
addButtons.forEach((button) => {
  button.addEventListener("click", handleAddButtonClick);
});

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Get selected items from local storage
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  // Clear previous content
  cartItemsContainer.innerHTML = "";

  // Display each selected item in the cart
  let totalPrice = 0;
  selectedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name}: ${item.price} ${item.text}`; // item.name + ": $" + item.price
    

    cartItemsContainer.appendChild(listItem);
    totalPrice += parseFloat(item.price);
  });

  // Display total price
  totalPriceElement.innerText = `Total: $${totalPrice}`;
}

// Call updateCartDisplay to initially populate the cart
updateCartDisplay();

// Add event listener for the checkout button
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
  // You can add your checkout logic here
  alert("Thank you for your order!");
  // Clear selected items from local storage after checkout
  localStorage.removeItem("selectedItems");
  // Update cart display
  updateCartDisplay();
});

// Function to handle the click event when "Delete" button is pressed
function handleDeleteButtonClick(itemName) {
  // Get the existing items from local storage
  const existingItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  // Remove the selected item from the existing items based on the itemName
  const updatedItems = existingItems.filter((item) => item.name !== itemName);

  // Store the updated items in local storage
  localStorage.setItem("selectedItems", JSON.stringify(updatedItems));

  // Update cart display after deletion
  updateCartDisplay();
}

// Modify the updateCartDisplay function to include delete buttons
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Get selected items from local storage
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

  // Clear previous content
  cartItemsContainer.innerHTML = "";

  // Display each selected item in the cart with a delete button
  let totalPrice = 0;
  selectedItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name}: ${item.price} ${item.text}  <button onClick="handleDeleteButtonClick('${item.name}')">delete</button>`;

    
    

    cartItemsContainer.appendChild(listItem);
    totalPrice += parseFloat(item.price);
  });

  // Display total price
  totalPriceElement.innerText = `Total: ${totalPrice.toFixed(2)}`;

  // Display total price
  totalPriceElement.innerText = `Total: ${totalPrice}`;
}

// Call updateCartDisplay to initially populate the cart
updateCartDisplay();

let tCart = document.getElementById("pCart");
let dCart = document.getElementById("dropCart");

tCart.addEventListener("click", function () {
  if (dCart.classList.contains("visually-hidden"))
    dCart.classList.remove("visually-hidden");
  else dCart.classList.add("visually-hidden");
});

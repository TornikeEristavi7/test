function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "user" && password === "1234") {
      document.getElementById("login-page").style.display = "none";
      document.getElementById("store-page").style.display = "block";
      displayProducts(); // <--- NEW
    } else {
      alert("Wrong username or password!");
    }
  }
  
  const products = [
    { id: 1, name: "Laptop", price: 800, image: "laptop.webp" },
    { id: 2, name: "Headphones", price: 50, image: "headphones.webp" },
    { id: 3, name: "Phone", price: 500, image: "iphone.webp" }
  ];
  
  
  let basket = [];
  let total = 0;
  
  // Show products on the page
  function displayProducts() {
    const productDiv = document.getElementById("products");
    productDiv.innerHTML = "";
  
    products.forEach(product => {
      const item = document.createElement("div");
      item.classList.add("product-card"); // add class for CSS
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name} - $${product.price}</p>
        <button onclick="addToBasket(${product.id})">Add to Basket</button>
      `;
      productDiv.appendChild(item);
    });
  }
  
  
  // Add product to basket
  function addToBasket(id) {
    const product = products.find(p => p.id === id);
    basket.push(product);
    total += product.price;
    updateBasket();
  }
  
  // Update basket UI
  function updateBasket() {
    const basketList = document.getElementById("basket");
    basketList.innerHTML = "";
  
    basket.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      basketList.appendChild(li);
    });
  
    document.getElementById("total").textContent = total;
  }
  // Remove product from basket
function removeFromBasket(index) {
    total -= basket[index].price; // subtract price
    basket.splice(index, 1);       // remove item from array
    updateBasket();                // refresh UI
  }
  
  // Update basket UI with remove buttons
  function updateBasket() {
    const basketList = document.getElementById("basket");
    basketList.innerHTML = "";
  
    basket.forEach((item, i) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromBasket(${i})">Remove</button>`;
      basketList.appendChild(li);
    });
  
    document.getElementById("total").textContent = total;
  }
  
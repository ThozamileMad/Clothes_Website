// Search Form Animation
const searchPlaceholderButton = document.querySelector("#search-but");
const searchForm = document.querySelector("#search-form");

function retractElement() {
  searchPlaceholderButton.style.transform = "scaleX(0)";

  setTimeout(() => {
    // Placeholder 
    searchPlaceholderButton.style.display = "none";

    // Replacement
    searchForm.style.display  = "block";
    searchForm.style.transform = "scaleX(1)";
  }, 500);
} 

searchPlaceholderButton.onclick = retractElement;

// Tabs Switching

const tabButtons = document.querySelectorAll(".cate-but");
const productList = document.querySelector("#cards");
const productHTML = {
"All": ` <div class="card">
                    <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">AIR JORDAN 12 GYM RED</h2>
                        <p class="price">R1700</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Blank and plain white sweater with jeans and sneakers.</h2>
                        <p class="price">R800</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1491485326079-8713ae1e00a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Pro Hoodie</h2>
                        <p class="price">R640</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Jean Jacket</h2>
                        <p class="price">R1400</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Nice Pants</h2>
                        <p class="price">R900</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Pearl Necklace</h2>
                        <p class="price">R4000</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"Sale": ``,
"Shoes": `<div class="card">
                    <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">AIR JORDAN 12 GYM RED</h2>
                        <p class="price">R1700</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"T-Shirts": ``,
"Hoodies": `<div class="card">
                    <img src="https://images.unsplash.com/photo-1491485326079-8713ae1e00a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Pro Hoodie</h2>
                        <p class="price">R640</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"Jackets": `<div class="card">
                    <img src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Jean Jacket</h2>
                        <p class="price">R1400</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"Pants": `<div class="card">
                    <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Nice Pants</h2>
                        <p class="price">R900</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"Jewelry": `<div class="card">
                    <img src="https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product">
                    <div class="card-text">
                        <h2 class="card-h">Pearl Necklace</h2>
                        <p class="price">R4000</p>
                    </div>
                    <div class="card-buts">
                        <a href="#" class="card-but buy-now">
                            <button>Buy Now</button>
                        </a>
                        <a href="#" class="card-but cart">
                            <button>Add to Cart</button>
                        </a>
                    </div>
                </div>`,
"Misc": ``,
"1:1": ``
}


function changeTab(element) {
  for (const tab of tabButtons) {
    tab.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
}

  element.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  productList.innerHTML = productHTML[element.innerText];
}


for (const element of tabButtons) {
  element.addEventListener("click", function() {
  	changeTab(element);
});
}

// Search Feature 
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const searchInput = document.querySelector("#search");

  for (const element of tabButtons) {
    if (element.innerText === searchInput.value) {
      changeTab(element);
      searchInput.value = "";
      window.scrollTo({top: 620, behavior: "smooth"});
    }
  }
});



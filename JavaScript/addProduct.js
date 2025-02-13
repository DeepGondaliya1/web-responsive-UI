const addButton = document.getElementById("addProduct");
const productForm = document.getElementById("addProductForm");
const submitProduct = document.getElementById("submitProduct");
const cancelProduct = document.getElementById("cancelProduct");

addButton.addEventListener("click", () => {
  addButton.style.display = "none";
  productForm.style.display = "block";
});

cancelProduct.addEventListener("click", () => {
  productForm.style.display = "none";
  addButton.style.display = "block";
});

submitProduct.addEventListener("click", () => {
  productForm.style.display = "none";
  addButton.style.display = "block";
});
// add Product

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

function addNewProduct() {
  const name = document.getElementById("productName").value;
  const image = document.getElementById("productImage").value;
  const price = document.getElementById("productPrice").value;
  const discount = document.getElementById("productDiscount").value;
  const description = document.getElementById("productDescription").value;
  //use this url =  /image/Casual-products/Frame_{any number}

  if (!name || !image || !price || !description) {
    alert("Please fill all fields");
    return;
  }

  const product = {
    id: Date.now().toString(),
    name,
    image,
    price,
    discount,
    description,
  };

  const products = JSON.parse(localStorage.getItem("products"));
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDiscount").value = "";
  document.getElementById("productDescription").value = "";

  displayProducts();
}

function displayProducts() {
  const productsDiv = document.getElementById("products");

  const products = JSON.parse(localStorage.getItem("products"));

  productsDiv.innerHTML = "";

  products.forEach((product) => {
    const productCard = `
            <div class="products-grid-1">
                <div class="product-card">
                  <div class="product-image">
                    <img
                      src="${product.image}"
                      alt="${product.name}"
                    />
                  </div>
                  <h3 class="product-title font-style2">
                    ${product.name}
                  </h3>
                  <div class="product-rating font-style2">
                    <div class="stars">
                      <svg
                        width="114"
                        height="19"
                        viewBox="0 0 114 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M33.0468 0.255127L35.666 5.89504L41.8393 6.64322L37.2848 10.8771L38.4809 16.9794L33.0468 13.9561L27.6128 16.9794L28.8089 10.8771L24.2544 6.64322L30.4276 5.89504L33.0468 0.255127Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M80.6506 0.255127L83.2698 5.89504L89.4431 6.64322L84.8886 10.8771L86.0846 16.9794L80.6506 13.9561L75.2166 16.9794L76.4126 10.8771L71.8581 6.64322L78.0314 5.89504L80.6506 0.255127Z"
                          fill="#FFC633"
                        />
                        <path
                          d="M104.452 0.255127L107.072 5.89504L113.245 6.64322L108.69 10.8771L109.887 16.9794L104.452 13.9561L99.0184 16.9794L100.215 10.8771L95.66 6.64322L101.833 5.89504L104.452 0.255127Z"
                          fill="#FFC633"
                        />
                      </svg>
                    </div>
                    <span class="rating-text"
                      >5.0/<span class="rating-style">5</span></span
                    >
                  </div>
                  <div class="product-price font-style2">
                    <span class="current-price">$${
                      product.discount
                        ? `${Math.round(
                            product.price * (1 - product.discount / 100)
                          )}`
                        : `${product.price}`
                    }</span>
                    <span class="original-price">${
                      product.discount ? `$${product.price}` : ""
                    }</span>
                    <span class=${product.discount ? "discount-badge" : ""}>${
      product.discount ? `${product.discount}%` : ""
    }</span>
                  </div>
                </div>
                <div class="button-group">
                    <button class="update-style" onclick="updateProduct('${
                      product.id
                    }')">Update</button>
                    <button class="delete-style" onclick="deleteProduct('${
                      product.id
                    }')">Delete</button>
                </div>
            </div>
            
    `;
    productsDiv.innerHTML += productCard;
  });
}

displayProducts();

function updateProduct(id) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((i) => i.id === id);

  if (product) {
    addButton.style.display = "none";
    productForm.style.display = "block";

    document.getElementById("productName").value = product.name;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productDiscount").value = product.discount;
    document.getElementById("productDescription").value = product.description;

    const newName = document.getElementById("productName").value;
    const newImage = document.getElementById("productImage").value;
    const newPrice = document.getElementById("productPrice").value;
    const newDiscount = document.getElementById("productDiscount").value;
    const newDescription = document.getElementById("productDescription").value;

    if (newName && newImage && newPrice && newDescription) {
      product.name = newName;
      product.image = newImage;
      product.price = newPrice;
      product.description = newDescription;
      product.discount = newDiscount;

      localStorage.setItem("products", JSON.stringify(products));
      displayProducts();
    }
  }
}

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    const products = JSON.parse(localStorage.getItem("products"));
    const newProducts = products.filter((i) => i.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
    displayProducts();
  }
}

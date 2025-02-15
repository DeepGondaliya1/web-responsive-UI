let currentPage = 1;
const itemsPerPage = 9;

function displayProducts(productsToShow = null) {
  const productsDiv = document.getElementById("products");

  const products =
    productsToShow || JSON.parse(localStorage.getItem("products"));

  productsDiv.innerHTML = "";

  products.forEach((product) => {
    const productCard = `
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
                    <span class="current-price">$${product.price}</span>
                    <span class="original-price">${
                      product.discount
                        ? `$${Math.round(
                            product.price * (1 - product.discount / 100)
                          )}`
                        : ""
                    }</span>
                    <span class=${product.discount ? "discount-badge" : ""}>${
      product.discount ? `${product.discount}%` : ""
    }</span>
                  </div>
                </div>
    `;
    productsDiv.innerHTML += productCard;
  });
}

function searchProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const products = JSON.parse(localStorage.getItem("products"));
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
}

displayProducts();

function showProductbyId() {
  const productId = document.getElementById("dropdown-content");
  const product = JSON.parse(localStorage.getItem("products"));

  productId.innerHTML = ``;

  product.forEach((product) => {
    const productsId = `
    <a href="../html/viewProduct.html?userId=${product.id}">${product.id}</a>`;
    productId.innerHTML += productsId;
  });
}

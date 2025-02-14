function initial() {
  const userId = new URLSearchParams(window.location.search).get("userId");
  console.log(userId);

  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((i) => i.id === userId);
  console.log(product);

  const productContainer = document.getElementById("view-product-main");
  console.log(productContainer);

  productContainer.innerHTML = ``;

  const singleProduct = `
  <div class="view-images">
              <div class="image-different-sides">
                <div class="image-side" id="image-side-1">
                  <img
                    src="../image/image-different-sides/image-side-1.png"
                    alt="product"
                  />
                </div>
                <div class="image-side" id="image-side-2">
                  <img
                    src="../image/image-different-sides/image-side-2.png"
                    alt="product"
                  />
                </div>
                <div class="image-side" id="image-side-3">
                  <img
                    src="../image/image-different-sides/image-side-3.png"
                    alt="product"
                  />
                </div>
              </div>
              <div class="main-image">
                <img
                  class="main-image"
                  src="${product.image}"
                  alt="product"
                />
              </div>
            </div>
            <div class="image-content-main">
              <div class="discription-1">
                <p class="image-name font-style1">${product.name}</p>
                <div class="product-rating rating-margin font-style2">
                  <div class="stars">
                    <svg
                      width="104"
                      height="19"
                      viewBox="0 0 104 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                        fill="#FFC633"
                      />
                      <path
                        d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z"
                        fill="#FFC633"
                      />
                      <path
                        d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z"
                        fill="#FFC633"
                      />
                      <path
                        d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z"
                        fill="#FFC633"
                      />
                      <path
                        d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z"
                        fill="#FFC633"
                      />
                    </svg>
                  </div>
                  <span class="rating-text"
                    >4.5/<span class="rating-style">5</span></span
                  >
                </div>
                <div class="product-prices font-style2">
                  <span class="product-current-price">$${
                    product.discount
                      ? `${Math.round(
                          product.price * (1 - product.discount / 100)
                        )}`
                      : `${product.price}`
                  }</span>
                  <span class="product-original-price">${
                    product.discount ? `$${product.price}` : ""
                  }</span>
                  <span class="${
                    product.discount ? "product-discount-badge" : ""
                  }">${product.discount ? `${product.discount}%` : ""}</span>
                </div>
                <p class="product-discriptions font-style2 gray-color">
                  ${product.description}
                </p>
              </div>
              <hr />
              <div class="discription-2">
                <p class="product-color gray-color">Select Colors</p>
                <div class="color-grid">
                  <div
                    class="color-round"
                    style="
                      background-color: rgb(83, 56, 56);
                      border: 1px solid rgb(53, 33, 34);
                    "
                  ></div>
                  <div
                    class="color-round"
                    style="
                      background-color: rgba(49, 79, 74, 1);
                      border: 1px solid rgb(27, 43, 40);
                    "
                  ></div>
                  <div
                    class="color-round"
                    style="
                      background-color: rgba(49, 52, 79, 1);
                      border: 1px solid rgb(16, 17, 26);
                    "
                  ></div>
                </div>
              </div>
              <hr />
              <div class="discription-3">
                <p class="product-sizes gray-color">Choose Size</p>
                <div class="sizes-main gray-color">
                  <button class="sizes-style" style="min-width: 86px">
                    <p class="gray-color">Small</p>
                  </button>
                  <button class="sizes-style" style="min-width: 105px">
                    <p class="gray-color">Medium</p>
                  </button>
                  <button
                    class="sizes-style"
                    style="
                      min-width: 89px;
                      background-color: black;
                      color: white;
                    "
                  >
                    <p>Large</p>
                  </button>
                  <button class="sizes-style" style="min-width: 104px">
                    <p class="gray-color">X-Large</p>
                  </button>
                </div>
              </div>
              <hr />
              <div class="discription-4">
                <div class="product-quantity">
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
                <button class="addtocart-btn">Add to cart</button>
              </div>
            </div>
  `;

  productContainer.innerHTML += singleProduct;
}

initial();

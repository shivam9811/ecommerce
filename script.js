//counter && cart

const cart = document.querySelector(".cart");
const cartbox = document.querySelector(".cartbox");
let cartClick = true;

cart.addEventListener("click", () => {
  if (cartClick) {
    cartbox.classList.add("active");
  } else {
    cartbox.classList.remove("active");
  }
  cartClick = !cartClick;
});

const count = document.querySelector(".count");
const dec = document.querySelector(".dec");
const inc = document.querySelector(".inc");
let countValue = count.innerText;

dec.addEventListener("click", () => {
  if (parseInt(count.innerText) > 0) {
    count.innerText--;
  }
});

inc.addEventListener("click", () => {
  count.innerText++;
});

const addToCart = document.querySelector(".addtocart");
const number = document.querySelector(".number");
const cartBox = document.querySelector(".cartbox");
const empty = document.querySelector(".cartempty");
if (count.innerText > 0) addToCart.disabled = false;

addToCart.addEventListener("click", () => {
  if (count.innerText > 0) {
    number.classList.add("active");
    number.innerText = count.innerText;
    cartBox.innerHTML = `
    <h5 class="carthead">Cart</h5>
    <div class="content">
    <div class="infowprice">
    <img class="cart-image" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div class="fprice">
    <div class="head">Fall Limited Edition Sneakers</div>
        <div class="amount">$125*${count.innerText} <strong>$${
      count.innerText * 125
    }</strong> </div>
      </div>
      <svg class="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
    </div>
    <button class="checkout">Checkout</button>
    </div>`;
    const del = document.querySelector(".delete");
    del.addEventListener("click", () => {
      cartBox.innerHTML = `<h5 class="carthead">Cart</h5>
      <p class="cartempty active">Your cart is empty</p>`;
      number.classList.remove("active");
      count.innerText = 0;
      number.innerText = "";
    });
    const checkout = document.querySelector(".checkout");
    checkout.addEventListener("click", () => {
      cartBox.innerHTML = `<h5 class="carthead">Cart</h5>
      <p class="cartempty active">Your cart is empty</p>`;
      number.classList.remove("active");
      count.innerText = 0;
      number.innerText = "";
    });
  }
});

//lightbox

const mainProduct = document.querySelector(".main-product");
const backDrop = document.querySelector(".backdrop");
const lightBox = document.querySelector(".lightbox");
const cross = document.querySelector("#cart-cross");

mainProduct.addEventListener("click", () => {
  backDrop.classList.add("active");
  lightBox.classList.add("active");
});

cross.addEventListener("click", () => {
  backDrop.classList.remove("active");
  lightBox.classList.remove("active");
});

//carousel

const images = document.querySelectorAll(".main-product-lightbox");
const thumbnails = document.querySelectorAll(".thumbnail-lightbox");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const next1 = document.querySelector("#next");
const prev1 = document.querySelector("#prev");
const images1 = document.querySelectorAll(".main-product");
const thumbnails1 = document.querySelectorAll(".thumbnail");

const nextSlide = (images, thumbnails, currSlide) => {
  images[currSlide].classList.remove("active");
  thumbnails[currSlide].classList.remove("active");
  if (currSlide === images1.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  images[currSlide].classList.add("active");
  thumbnails[currSlide].classList.add("active");
  return currSlide;
};

const previous = (images, thumbnails, currSlide) => {
  images[currSlide].classList.remove("active");
  thumbnails[currSlide].classList.remove("active");
  if (currSlide === 0) {
    currSlide = images.length - 1;
  } else {
    currSlide--;
  }
  images[currSlide].classList.add("active");
  thumbnails[currSlide].classList.add("active");
  return currSlide;
};

let curr = 0;
next1.addEventListener("click", () => {
  curr = nextSlide(images1, thumbnails1, curr);
});

prev1.addEventListener("click", () => {
  curr = previous(images1, thumbnails1, curr);
});

next.addEventListener("click", () => {
  curr = nextSlide(images, thumbnails, curr);
});

prev.addEventListener("click", () => {
  curr = previous(images, thumbnails, curr);
});

// navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navCross = document.querySelector("#nav-cross");
const navBackDrop = document.querySelector(".backdropn");
menu.addEventListener("click", () => {
  navbar.classList.add("active");
  navBackDrop.classList.add("active");
});

navCross.addEventListener("click", () => {
  navbar.classList.remove("active");
  navBackDrop.classList.remove("active");
});

let hero = document.getElementById("hero");
let nav_bar = document.querySelector(".nav_list");
console.log(nav_bar);

document.querySelector("#menu_toggle").addEventListener("click", function () {
  nav_bar.classList.toggle("show");
});

nav_bar.addEventListener("click", function () {
  nav_bar.classList.toggle("show"); 
});

let Product_Container = document.getElementById("product_container");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");

let scrollAmount = 300;

leftBtn.addEventListener("click", () => {
  Product_Container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  Product_Container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

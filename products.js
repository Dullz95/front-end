// const storage = window.localStorage

// view all products
let base_URL = "https://ecommerce-abdullah.herokuapp.com/view-all-products/";

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let products = data;
      document.querySelector(".all-info").innerHTML = ``;
      products["data"].forEach((product) => {
        document.querySelector(
          ".all-info"
        ).innerHTML += `<div class="all"><br><span class="products-span"><img src='${product[5]}' alt='product'></img><br><div class="bottom"><br>ID: ${product[0]}<br>Name: ${product[1]}<br>Type: ${product[2]}<br>Price: ${product[3]}<br>Quantity: ${product[4]}'</span><br><button id="${product[0]}" class="add-to-cart">Add to cart</button></div></div>`;
        
      });
      document.querySelectorAll(".add-to-cart").forEach(button => button.addEventListener("click", addToCart))
    });
}

getData(base_URL);

// adding to products

function addingProduct() {
    console.log({
      product_name: document.getElementById("add_product_name").value,
      product_type: document.getElementById("add_product_type").value,
      price: document.getElementById("add_price").value,
      quantity: document.getElementById("add_quantity").value,
      product_image: document.getElementById("picture").src,
    })
      
    fetch("https://ecommerce-abdullah.herokuapp.com/add-to-product-table/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `jwt ${storage.getItem('jwt-token')}`
      },
      body: JSON.stringify({
        product_name: document.getElementById("add_product_name").value,
        product_type: document.getElementById("add_product_type").value,
        price: document.getElementById("add_price").value,
        quantity: document.getElementById("add_quantity").value,
        product_image: document.querySelector("#picture").src,
      }),
     })
      .then(res => res.json())
      .then(res => {
        window.location.reload();
        console.log(res);
      });
  }
  
// updating products
function updatingProduct() {
    console.log({
      product_name: document.getElementById("product_name").value,
      product_type: document.getElementById("product_type").value,
      price: document.getElementById("price").value,
      quantity: document.getElementById("quantity").value,
      product_image: document.getElementById("picture").src,
    })
    
    let productId = document.querySelector(".product-id").value;
    console.log(productId)
    // console.log(storage.getItem('jwt-token'))
      
    fetch(`https://ecommerce-abdullah.herokuapp.com/updating-products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: document.getElementById("product_name").value,
        product_type: document.getElementById("product_type").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value,
        product_image: document.getElementById("picture").src,
      }),
     })
      .then(res => res.json())
      .then(res => {
        window.location.reload();
        console.log(res);
      });
  }

  
//   deleting products from catalogue
function deleteProduct() {
    let deleteProductId = document.querySelector(".deleteProductId").value;
    fetch(`https://ecommerce-abdullah.herokuapp.com/delete-product/${deleteProductId}`, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.reload()
        console.log(res);
      });
  }
// create cart

  let cart = [];
if (storage["cart"]){
  cart = JSON.parse(storage.getItem("cart"))
} 
  function addToCart(e){
   let product = {};
   let productId = e.target.id;
   console.log(productId);
   fetch(`https://ecommerce-abdullah.herokuapp.com/view-product/${productId}/`, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
      }}) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        product.name = data["data"][0][1]
        product.price = data["data"][0][3]
        product.image = data["data"][0][5]
        console.log(product.name)
        console.log(product.price)
        console.log(product.image)

        for (let item in cart){
          console.log(item)
          if (product.name == cart[item].name){

              alert('item already in cart')
              return
          };
        }
        cart = cart.concat(product)
        storage.setItem("cart", JSON.stringify(cart))
        console.log(cart)
        alert("item added succesfully")
        
      });
  }
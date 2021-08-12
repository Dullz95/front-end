const storage = window.localStorage

// log in
function login() {
  fetch("https://ecommerce-abdullah.herokuapp.com/auth", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      myStorage = window.localStorage;
      console.log(res["access_token"]);
      myStorage.setItem("jwt-token", res["access_token"]);
      window.location.href = "./products.html";
    });
}

// // registering a user
// function register() {
//   fetch("https://ecommerce-abdullah.herokuapp.com/registration/", {
//     method: "POST",

//     body: JSON.stringify({
//       first_name: document.getElementsByClassName("fname")[0].value,
//       last_name: document.getElementsByClassName("lname")[0].value,
//       username: document.getElementsByClassName("uname")[0].value,
//       password: document.getElementsByClassName("pword")[0].value,
//       email: document.getElementsByClassName("mail")[0].value,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     mode: "cors",
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// register();
// function clearForm() {
//   document.getElementsByClassName("fname")[0].value = "";
//   document.getElementsByClassName("lname")[0].value = "";
//   document.getElementsByClassName("uname")[0].value = "";
//   document.getElementsByClassName("pword")[0].value = "";
//   document.getElementsByClassName("mail")[0].value = "";
// }
// clearForm();
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
        ).innerHTML += `<div class="all"><br><span class="products-span"><img src='${product[5]}' alt='product'></img><div class="bottom"><br>Name: ${product[1]}<br>Type: ${product[2]}<br>Price: ${product[3]}<br>Quantity: ${product[4]}'</span></div></div>`;
        
      });
    });
}

getData(base_URL);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// adding product

function addingProduct() {
  fetch("https://ecommerce-abdullah.herokuapp.com/add-to-product-table", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `jwt ${storage.getItem('jwt-token')}`
    },
    mode: 'no-cors',
    body: JSON.stringify({
      product_name: document.getElementById("product_name").value,
      product_type: document.getElementById("product_type").value,
      price: document.getElementById("price").value,
      quantity: document.getElementById("quantity").value,
      product_image: document.getElementById("product_image").value,
    }),
  })
    .then(res => res.json()
    .then(res => {
      console.log(res);
      myStorage = window.localStorage;
      console.log(res["access_token"]);
      myStorage.setItem("jwt-token", res["access_token"]);
    });
}
addingProduct();

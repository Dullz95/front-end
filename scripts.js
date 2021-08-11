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
        ).innerHTML += `<br><span>${product[1]}<br>${product[2]}<br>${product[3]}<br>${product[4]}<br><img src='${product[5]}' alt='product'></img>'</span>`;
      });
    });
}

getData(base_URL);

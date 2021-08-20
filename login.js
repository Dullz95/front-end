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
      console.log(res["access_token"]);
      storage.setItem("jwt-token", res["access_token"]);
      window.location.href = "./products.html";
    });
}


// function register() {
//     window.location.href = "./products.html";
//   }
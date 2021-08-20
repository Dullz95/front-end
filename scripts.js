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

function register() {
  window.location.href = "./products.html";
}

function signOut(){
  alert("are you sure you want to sign out?");
}



// Get the modal
let modal = document.getElementById("myModal");


// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


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

// converting input to javascript url
function convert(opt){
  let option = opt
  let imageInput
  if (option == 1){
    imageInput = document.getElementById("add_product_image").files[0]  
  }
  if (option == 2){
    imageInput = document.getElementById("up_product_image").files[0]
  }
  console.log(imageInput)
  let image = document.getElementById("picture");
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    image.src=reader.result;
  }, false);

  if (imageInput)
  reader.readAsDataURL(imageInput);


}




// updating product




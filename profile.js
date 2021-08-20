// view profile

function getData() {
    let email = document.querySelector(".email").value;
    let url = `https://ecommerce-abdullah.herokuapp.com/view-profile/${email}/`;
      
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let profile = data;
      document.querySelector(".profile-info").innerHTML = ``;
      profile["data"].forEach((profile) => {
        document.querySelector(
          ".profile-info"
        ).innerHTML += `<div class="profile">
        <h3 class="type">USER ID: ${profile[0]}</h3>
        <h3 class="profile-name">First name: ${profile[1]}</h3>
        <h3 class="profile-discription">Last name: ${profile[2]}</h3>
        <h3 class="profile-price">Username: ${profile[3]}</h3>
        <h3 class="profile">Password: ${profile[4]}</h3>
        <h3 class="profile">Email: ${profile[5]}</h3>`
      });
    });
}

// edit profile
function updatingProfile() {
    console.log({
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
    })
    
    let emailv = document.querySelector(".edit-profile").value;
    console.log(emailv)

      
    fetch(`https://ecommerce-abdullah.herokuapp.com/updating-profile/${emailv}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
      }),
     })
      .then(res => res.json())
      .then(res => {
          alert("profile updated succesfully");
          window.location.reload();
        console.log(res);
      });
  }

// modal for updating user profile
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

// delete profile
function deleteProfile() {
    let deleteProfileEmail = document.querySelector(".remove-profile").value;
    fetch(`https://ecommerce-abdullah.herokuapp.com/delete-profile/${deleteProfileEmail}`, {
        method: 'GET',
        headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
     alert("user profile removed")
     window.location.href = "./index.html";
        console.log(res);
      });
  }
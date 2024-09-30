"use script";

let url = "http://localhost:8000/users";

function getProfile() {
  fetch("http://localhost:8000/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getProfile();

async function createProfile(userData) {
  console.log("create profile");

  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    if (response.status == 201) {
      alert("created profile");
    } else {
      alert("did not post");
    }
  } catch (error) {
    console.log(error);
  }
}

function deleteusers() {
  fetch(`http://localhost:8000/users/`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        console.log("Users deleted");
      } else {
        console.log("Cannot delete users", response.status);
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

let deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", deleteusers);

export { getProfile, createProfile };

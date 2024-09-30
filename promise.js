"use strict";

const posts = [
  { title: "Post One", body: "This is post one", id: 1 },
  { title: "Post Two", body: "This is post two", id: 2 },
  { title: "Post Three", body: "This is post three", id: 3 },
  { title: "Post Four", body: "This is post four", id: 4 },
  { title: "Post Five", body: "This is post five", id: 5 },
  { title: "Post Six", body: "This is post six", id: 6 },
  { title: "Post Seven", body: "This is post seven", id: 7 },
  { title: "Post Eight", body: "This is post eight", id: 8 },
  { title: "Post Nine", body: "This is post nine", id: 9 },
  { title: "Post Ten", body: "This is post ten", id: 10 },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}: ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = false;
      !error ? resolve() : reject("Error: Something happen oooh");
    }, 5000);
  });
}

// using async function to create posts and getting posts
async function init() {
  await createPost({ title: "Post Eleven", body: "This is Post Eleven" });
  getPosts();
}



// Function to handle a processed payment.
function processedPayment(amount, callback) {
  console.log(`Processing payment of ${amount}`);

  setTimeout(() => {
    console.log("Payment made and succcessful");
    callback();
  }, 2000);
}

// Callback function that sends confirmation of payment
function sendConfirmation() {
  console.log("Confirmation of the payment you made");
}

// Initializing processed payment and calling the callback
processedPayment(2000, sendConfirmation);

// function to handle a placed order
function placeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Placing Order ...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Order ID: 12345");
      } else {
        reject("Could'nt place your order now");
      }
    }, 2000);
  });
}

// Initializing the place holder function
placeOrder()
  .then((orderId) => {
    console.log(`Order placed successfully with ID: ${orderId}`);
    return "Tracking number : XYZ123";
  })
  .then((trackingNumber) => {
    console.log(`Received ${trackingNumber}`);
  })
  .catch((error) => {
    console.error("Error", error);
  });

// Learning to use an async funtion to fetch a users data
async function fetchUserData() {
  console.log("Fetching data");

  try {
    const userProfile = await new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve({ name: "Justin", age: 20 });
        } else {
          reject("Can't get user data");
        }
      }, 2000);
    });
    console.log("User Profile:", userProfile);
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

fetchUserData();

// Fetching users with then and catch from api
function fetchPlaceHolderUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("Fetching data from placeholder API");
      return response.json();
    })
    .then((users) => {
      for (let user of users) {
        console.log(user.name);
      }
    });
}

// using callback to fetch data from placeholder api
function fetchUserDataFromApi(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => callback(error.message));
}

// Callback function that handles the user
function handleUserData(error, users) {
  if (error) {
    console.error(error);
  } else {
    console.log(users[0]);
  }
}


// Initializing the fetch user function and parsing a callback in it 
fetchUserDataFromApi(handleUserData)
export {
  posts,
  getPosts,
  createPost,
  processedPayment,
  sendConfirmation,
  placeOrder,
  fetchUserData,
  fetchPlaceHolderUser,
  fetchUserDataFromApi,
  handleUserData,
};

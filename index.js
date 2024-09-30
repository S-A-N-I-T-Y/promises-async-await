("use strict");
import {
  posts,
  getPosts,
  createPost,
  sendConfirmation,
  processedPayment,
  placeOrder,
  fetchUserData,
  fetchPlaceHolderUser,
  handleUserData,
  fetchUserDataFromApi,
} from "./promise.js";
import { createProfile, getProfile } from "./fetch.js";
// Working with promises

// new Promise((resolve, reject) => {
//     resolve("Worked");
//   })
//     .then((result) => {
//       throw new Error("Didnt Work");
//     })
//     .catch(alert);

//   new Promise((resolve, reject) => {
//     reject(new Error("Whoops"));
//   }).catch(alert);

//   new Promise((resolve, reject) => {
//     throw new Error("Whoopsie");
//   })
//     .catch(function (error) {
//       alert("The error is handled, continue normally now");
//     })
//     .then(() => alert("Next successful handler runs"));

//   new Promise((resolve, reject) => {
//     throw new Error("wawu");
//   })
//     .catch((error) => {
//       if (error instanceof URIError) {
//         alert("I no sabi wetin dey go on oohh");
//       } else {
//         alert("Can't handle such error");
//         throw error;
//       }
//     })
//     .then(() => {
//       alert("E be like say e don work, LMAO");
//     })
//     .catch((error) => {
//       alert(`Bro this is the ${error}`);
//     });
//   console.log(URIError);

//   new Promise(() => {
//     cakeBoy();
//   }).then(() => {});

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       throw new Error("Caught the MF error: Whoops");
//     }, 1000);
//   }).catch(alert);

//   let urlss = [
//     "https://api.github.com/users/s-a-n-i-t-y",
//     "https://api.github.com/users/Unnamed",
//     "https://api.github.com/users/Avikky",
//     "https://api.github.com/users/chimboy19",
//     "https://api.github.com/users/diverse",
//   ];

//   let request = urlss.map((url) => fetch(url));
//   console.log(request);

//   Promise.all(request).then((responses) => {
//     responses.forEach((response) => console.log(`${response.url}: ${response.status}`));
//   });

//   let names = ["s-a-n-i-t-y", "Avikky", "bulsklfdhnfjurhr", "diverse", "unnamed"];

//   let requestss = names.map((name) =>
//     fetch(`https://api.github.com/users/${name}`)
//   );

//   Promise.all(requestss)
//     .then((responses) => {
//       for (let response of responses) {
//         alert(`${response.url} : ${response.status}`);
//       }
//       return responses;
//     })
//     .then((responses) => Promise.all(responses.map((r) => r.json())))
//     .then((users) => users.forEach((user) => console.log(user.name)));

//   Promise.allSettled(requests).then((responses) => {
//     for (let response of responses) {
//       console.log(`{${response.status} : ${response.value}`);
//     }
//   });

//   Promise.race(requests).then((responses) => {
//     console.log(responses);
//   });

//   async function f() {
//     return 1;
//   }
//   f();
//   console.log(f());

//   async function showAvatar() {
//     let response = await fetch("/article/promise-chaining/user.json");
//     let user = await response.json();

//     let githubUserResponse = await fetch(
//       `https://api.github.com/users/${user.name}`
//     );
//     let githubUser = await githubUserResponse.json();

//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     await new Promise((resolve, reject) => {
//       setTimeout(resolve, 3000);
//     });

//     img.remove();

//     return githubUser;
//   }

//   showAvatar();

//   async function loadJson(url) {
//     try {
//       let response = await fetch(url);
//       if (response.status == 200) {
//         let data = response.json();
//         alert(data);
//       }
//     } catch (err) {
//       alert(err);
//     }
//   }

//   loadJson("https://getsomething.com");

// function loadJson(url) {
//   return fetch(url).then((response) => response.json());
// }

// function loadGithubUser(name) {
//   return loadJson(`https://api.github.com/users/${name}`);
// }

// function showAvatar(githubUser) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 3000);
//   });
// }

// loadJson("/article/promise-chaining/user.json")
//   .then((user) => loadGithubUser(user.name))
//   .then(showAvatar)
//   .then((githubUser) => alert(`Finished showing ${githubUser.name}`));

// get Urls from github api with .then and .catch
let urls = [
  "https://api.github.com/users/s-a-n-i-t-y",
  "https://api.github.com/users/Unnamed",
  "https://api.github.com/users/Avikky",
  "https://api.github.com/users/chimboy19",
  "https://api.github.com/users/diverse",
];

let requests = urls.map((url) => fetch(url));
console.log(requests);

Promise.all(requests).then((responses) => {
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  );
});

// get link from github api with .then and .catch

let link = ["https://api.github.com/users/s-a-n-i-t-y"];

async function getLink() {
  let response = await fetch(link);
  if (response.ok == true) {
    let data = await response.json();
    console.log(data);
  } else {
    console.log("Check Well");
  }
}

getLink();


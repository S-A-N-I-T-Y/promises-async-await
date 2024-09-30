"use strict";
import { createProfile } from "./fetch.js";

let form = document.querySelector("form");
let btn = document.getElementById("submit-btn");
let nameInput = document.getElementById("name"),
  ageInput = document.getElementById("age"),
  occupationInput = document.getElementById("occupation");

async function handleSubmit(e) {
  e.preventDefault();

  let userData = {
    name: nameInput.value,
    age: ageInput.value,
    occupation: occupationInput.value,
  };
  createProfile(userData);
}

form.addEventListener("submit", handleSubmit);

window.addEventListener("DOMContentLoaded", async function(){

  let userNameContainer = document.querySelector("#username");
  let ageContainer = document.querySelector("#age");
  let genderContainer = document.querySelector("#gender");
  let hobbiesContainer = document.querySelector("#hobbies");

  let response = await axios.get("./profile.json");
  let responseData = response.data;

  userNameContainer.innerHTML = responseData["user_name"];
  ageContainer.innerHTML = `${responseData["age"]}`;
  genderContainer.innerHTML = responseData["gender"];

  let hobbyListContainer = document.createElement("ul");

  for (let hobby of responseData["hobbies"]){
    let listItem = document.createElement("li");
    listItem.innerHTML = `${hobby}`
    hobbyListContainer.appendChild(listItem);
  }
  hobbiesContainer.appendChild(hobbyListContainer);

})
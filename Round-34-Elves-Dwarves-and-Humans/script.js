let kindred = document.querySelector("#kindred");

kindred.addEventListener("change", async function(){

    let chosenValue = kindred.value;

    let response = await axios.get(`${chosenValue}.json`);
    let responseData = response.data;

    let characterContainer = document.querySelector("#characters");
    characterContainer.innerHTML = "";

    for (let character of responseData){
        
        let listItem = document.createElement("li");
        listItem.innerHTML = `${character.name} (${character.age})`
        characterContainer.appendChild(listItem);

    }


})
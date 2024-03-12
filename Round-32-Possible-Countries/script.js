document.querySelector("#btnLoad").addEventListener("click", async function(){

    let response = await axios.get("./countries.json");
    let responseData = response.data;

    let countrySelect = document.querySelector("#countries")

    for (let item of responseData){
        let optionItem = document.createElement("option");
        optionItem.value = item.value;
        optionItem.innerHTML = item.country;       
        countrySelect.appendChild(optionItem);
    }

})

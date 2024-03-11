document.addEventListener("DOMContentLoaded", async function(){

    const body = document.querySelector("body");

    const response = await axios.get("./data.json");

    for (let item of response.data){
        
        const listObject = document.createElement("ul");
        listObject.innerHTML = `
            <li> Name: ${item.Name} </li>
            <li> Type of Animal ${item["Type of Animal"]} </li>
            <li> Breed: ${item.Breed} </li>
            <li> Date of Birth: ${item["Date of Birth"]} </li>
            <li> Medical Condition: ${item["Medical Conditions"]} </li>
        `
        const listImage = document.createElement("img");
        listImage.setAttribute("src", `${item.Photo}`)

        body.appendChild(listObject);
        body.appendChild(listImage);
    }
})
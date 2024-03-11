
document.addEventListener("DOMContentLoaded", async function(){

    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json");
    console.log("response data here", response.data);

    const body = document.querySelector("body");

    // remember that any object where key cannot/shouldnot be variable name, need to use [] instead
    // if not sure what to call, console.log your response.data

    body.innerHTML += `
        <ul>
            <li>Name: ${response.data.Name} </li>  
            <li>Mobile Number: ${response.data.Mobile}</li>
            <li>Current Address: ${response.data["Address"]["current Address"]} Street</li>
            <li>Permanent Address: ${response.data["Address"]["Permanent address"]} Street</li>
        </ul>
    `

})
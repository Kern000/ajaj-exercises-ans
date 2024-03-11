// remember the querySelector not in function will once on load

async function displayData(){

    let response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json");
    console.log("response data here", response.data);

    let responseData = response.data;

    let container = document.querySelector("#container-1");

    container.innerHTML += `
        <ul>
            <li>First Name: ${responseData.firstName}</li>
            <li>Last Name: ${responseData.lastName}</li>
            <li>Street Address: ${responseData.address.streetAddress}</li>
            <li>City: ${responseData.address.city}</li>
            <li>State: ${responseData.address.state}</li>
            <li>Postal Code: ${responseData.address.postalCode}</li>
        </ul>
    `

}


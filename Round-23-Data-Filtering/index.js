
document.addEventListener("DOMContentLoaded", async function(){

    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json");
    let responseData = response.data;

    let container = document.querySelector("#container-1");

    let orderedList = document.createElement("ol");
    orderedList.setAttribute("id", "order-list-1");

    for (let i=0; i < 10; i++){
        
        let item = responseData[i];

        let listItem = document.createElement("li");
        listItem.innerHTML = `Name: ${item.first} ${item.last}`
        orderedList.appendChild(listItem);
    }

    container.appendChild(orderedList);
})

async function searchByCountry(){

    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json");
    let responseData = response.data;

    let container = document.querySelector("#container-1");

    let searchItem = document.querySelector("#text-search").value;
    let modifiedSearchValue = searchItem[0].toUpperCase() + searchItem.slice(1)

    console.log("modified search value", modifiedSearchValue);

    console.log(responseData);

    let orderedList = document.createElement("ol");
    orderedList.setAttribute("id", "order-list-1");

    for (let i=0; i <responseData.length; i++){
        
        if (responseData[i]["country"] === modifiedSearchValue){
            console.log("route hit")
            let listItem = document.createElement("li");
            listItem.innerHTML = `Name: ${responseData[i].first} ${responseData[i].last}`
            orderedList.appendChild(listItem);
        }
    }


    container.innerHTML = "";
    container.appendChild(orderedList);
}

async function showDefault(){

    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json");
    let responseData = response.data;

    let container = document.querySelector("#container-1");

    let orderedList = document.createElement("ol");
    orderedList.setAttribute("id", "order-list-1");

    for (let i=0; i < 10; i++){
        
        let item = responseData[i];

        let listItem = document.createElement("li");
        listItem.innerHTML = `Name: ${item.first} ${item.last}`
        orderedList.appendChild(listItem);
    }

    container.innerHTML = "";
    container.appendChild(orderedList);   

}
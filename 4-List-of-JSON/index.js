document.addEventListener("DOMContentLoaded", async function(){

    let response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json");
    let responseData = response.data;
    console.log(responseData);

    let body = document.querySelector("body");
    let unOrderedList = document.createElement("ul");
    
    for (let item of responseData.users){
        let listChild = document.createElement("li");
        listChild.innerHTML = `${item.firstName} ${item.lastName} (${item.emailAddress})`
        unOrderedList.appendChild(listChild);
    }
    body.appendChild(unOrderedList);

})

// This is close to LeetCode Easy Difficult question. Can challenge your understanding of javaScript using this qn.

let composersList;
let listOfComposers = {};

document.addEventListener("DOMContentLoaded", async function(){

    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/products.json");
    let responseData = response.data;

    for (let item of responseData){

        let detailsTab = item["details"];

        for (let songInAlbum of detailsTab){

            let composer = songInAlbum["composer"];
            if (composer === null){
                continue;
            }           
            let deconstruction;

            if (composer.includes(",")){
                deconstruction = composer.split(", ");                
                for (let singleComposer of deconstruction){
                    if (!listOfComposers[singleComposer]){
                        listOfComposers[singleComposer] = [songInAlbum];
                    } else {                        
                        listOfComposers[singleComposer].push(songInAlbum);
                    }
                }            
            } else {
                if (!listOfComposers[composer]){
                    listOfComposers[composer] = [songInAlbum];
                } else {
                    listOfComposers[composer].push(songInAlbum);
                }
            }
        }
    }

    composersList = Object.keys(listOfComposers);

    let selectContainer = document.querySelector("#select-container");

    for (let composer of composersList){
        optionItem = document.createElement("option");
        optionItem.value = composer;
        optionItem.innerText = composer;
        selectContainer.appendChild(optionItem);
    }

})

async function displayDefault(){
    
    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/products.json");
    let responseData = response.data;

    let dataContainer = document.querySelector("#data-container")

    for (i=0; i<10; i++){
        let dataItem = document.createElement("div");
        dataItem.innerHTML = `
            <p> Album Name: ${responseData[i].name} </p>
            <p> Album Id: ${responseData[i].id} </p>
            <p> Album Id: ${responseData[i].price} </p>
        `
        dataItem.setAttribute("style", "border: 1px solid black");
        dataContainer.appendChild(dataItem);
    }
}

async function searchByComposer(){

    console.log("route hit")
    let selectedComposer = document.querySelector("#select-container").value;
    console.log("selected composer", selectedComposer);
    let searchedAlbum = {};
    for (let song of listOfComposers[selectedComposer]){
        if (!searchedAlbum[song["album_id"]]){
            searchedAlbum[song["album_id"]] = 1;
        } else {
            searchedAlbum[song["album_id"]] += 1;
        }
    }
    let listOfAlbumId = Object.keys(searchedAlbum);

    let response = await axios.get("https://raw.githubusercontent.com/robconery/json-sales-data/master/data/products.json")
    let responseData = response.data;

    let dataContainer = document.querySelector("#data-container")
    dataContainer.innerHTML=`<h3> Album Search results for ${selectedComposer}: </h3>`;

    // If you want, can challenge further by doing binary search here instead of linear search
    for (let albumId of listOfAlbumId){

        for (let album of responseData){
            if (albumId == album.id){
                let dataItem = document.createElement("div");
                dataItem.innerHTML = `
                    <p> Album Name: ${album.name} </p>
                    <p> Album Id: ${album.id} </p>
                    <p> Album Id: ${album.price} </p>
                `
                dataItem.setAttribute("style", "border: 1px solid black");
                dataContainer.appendChild(dataItem);    
            }
        }
    }
}










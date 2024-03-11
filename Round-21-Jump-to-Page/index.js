
document.addEventListener("DOMContentLoaded", async function(){

    let response = await axios.get(`./page1.html`);

    let container = document.querySelector("#page");
    container.innerHTML = response.data;
    
})

async function fetchPageData (){

    let choice = document.querySelector("#page-choice").value;
    console.log("choice here", choice);
   
    let response = await axios.get(`./page${choice}.html`);
    console.log("response data here", response.data);


    let container = document.querySelector("#page");
    container.innerHTML = response.data;

}
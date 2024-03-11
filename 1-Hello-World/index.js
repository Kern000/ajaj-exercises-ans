
document.addEventListener("DOMContentLoaded", async ()=>{
    
    let response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt")

    console.log("response data here", response.data);

    const body = document.querySelector("body");
    
    body.innerHTML = `<p> ${response.data} </p>`

})

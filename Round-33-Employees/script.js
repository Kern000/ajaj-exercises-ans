window.addEventListener("DOMContentLoaded", async function(){

  let dataBody = document.querySelector("#data");

  let response = await axios.get("./employees.json");
  let responseData = response.data;

  let newRow;
  for (let employee of responseData["employees"]){
      newRow = document.createElement("tr");
      for (let property in employee){
        let newData = document.createElement("td");
        newData.innerHTML = `${employee[property]}`
        newRow.appendChild(newData);       
      }
      dataBody.appendChild(newRow);
  }
  

})
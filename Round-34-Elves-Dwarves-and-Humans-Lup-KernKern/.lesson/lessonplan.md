# Solution

```
document.querySelector("#kindred").addEventListener('change', async function(){
  let selected = document.querySelector("#kindred").value;4
  if (selected != "none") {
      let file = selected + ".json";
  let response = await axios.get(file);
  document.querySelector("#characters").innerHTML = "";
  for (let character of response.data) {
    document.querySelector("#characters").innerHTML += `<li>${character.name} (${character.age})</li>`
    }
  }

})
```
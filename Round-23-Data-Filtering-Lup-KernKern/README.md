**Step 1:** Include `axios` into this project

**Step 2:** When the website is ready, display the **first ten** results from the JSON file below:

 https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json

Hint: you can use the `DOMContentLoaded` event, which is fired by the `window` object when a page is ready:
 ```
window.addEventListener('DOMContentLoaded', function(){
   console.log("Page is ready!")
})
 ```

**Step 3:** Add in a textbox and a button.

**Step 4:** When the user type in the name of a country into the textbox and press a button, only show the **names** of customer who are from that country.

**Step 5:** Add a button named "Reset"

**Step 6:** When the button is press, revert back to only showing the first ten results in the JSON file.

=
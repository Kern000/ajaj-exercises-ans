There are three html files: `page1.html`, `page2.html`, and `page3.html`. There are some content in  to differenate them frome ach other,

1. **Include** your own **axios** in `index.html`

2. Inside `index.html`,there is a textbox and a button. The textbox allows the user to key in a number.
  
4. There is a `<div>` with the `id` of `page` inside `index.html`

5. When the button is pressed, show `pageX.html` inside `div#page`, where `X` is the number the user has keyed in.** Hint: You can set the `innerHTML` of a `<div>` to be the value of `response.data`

6. Display the first page in `<div#content>` via. `axios.get` when the page first loaded (hint: use `DOMContentLoaded`)

7. If the page don't exist, display in the `div#page` "Page not found".
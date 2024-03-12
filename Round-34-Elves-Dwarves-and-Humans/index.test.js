it("should display the elves characters when elves is selected", function(done){
  document.querySelectorAll('option')[2].selected = true;
  let event = new Event('change');
  document.querySelector("#kindred").dispatchEvent(event);
  // document.querySelector("#kindred").onchange();
  setTimeout(function(){
    let items = document.querySelectorAll('#characters li');
    chai.expect(items[0].innerHTML.includes('Elrond'))
    chai.expect(items[1].innerHTML.includes('Galadriel'))
    chai.expect(items[2].innerHTML.includes('Legolas'))
    done();
  }, 1500)
  
})

it("should display the dwarves characters when dwarves is selected", function(done){
  document.querySelectorAll('option')[1].selected = true;
    let event = new Event('change');
  document.querySelector("#kindred").dispatchEvent(event);
  setTimeout(function(){
    let items = document.querySelectorAll('#characters li');
    chai.expect(items[0].innerHTML.includes('Balin'))
    chai.expect(items[1].innerHTML.includes('Thorin'))
    chai.expect(items[2].innerHTML.includes('Kali'))
    done();
  }, 1500)
  
})

it("should display the human characters when human is selected", function(done){
  document.querySelectorAll('option')[3].selected = true;
    let event = new Event('change');
  document.querySelector("#kindred").dispatchEvent(event);
  setTimeout(function(){
    let items = document.querySelectorAll('#characters li');
    chai.expect(items[0].innerHTML.includes('Aragorn'))
    chai.expect(items[1].innerHTML.includes('Faramir'))
    chai.expect(items[2].innerHTML.includes('Ted Sandy'))
    done();
  }, 1500)
  
})
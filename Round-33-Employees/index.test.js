it("should have three rows", function(){
  chai.expect(  document.querySelectorAll('tbody tr').length)
    .equal(3)
})

it("should have Tan Ah Lian on the second row", function(){
  let secondRow =  document.querySelectorAll('tbody tr')[1];
  let cols = secondRow.querySelectorAll('td');
  chai.expect(cols[0].innerHTML ).equal("2")
  chai.expect(cols[1].innerHTML ).equal("Tan Ah Lian")
  chai.expect(cols[2].innerHTML ).equal("COO")
})


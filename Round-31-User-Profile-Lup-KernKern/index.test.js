it("should have Jon Snow for username", function(){

chai.expect(document.querySelector('#username').innerHTML).equal('Jon Snow')
})

it("should have 32 for age", ()=>{
  chai.expect(document.querySelector('#age').innerHTML).equal('32')
})

it("should have M for gender", ()=>{
  chai.expect(document.querySelector('#gender').innerHTML).equal('M')
})

it("should render hobbies in a nested unordered list", ()=>{
  chai.expect(document.querySelectorAll('#hobbies li').length).equal(3)
})
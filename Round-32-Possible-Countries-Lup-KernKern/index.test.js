let oldDom = document.cloneNode(true);

it("should have four countries in total", function(done){
 
  document.querySelector('#btnLoad').click();
  setTimeout(function(){
    console.log(document);
      chai.expect(
    document.querySelectorAll('#countries option').length
  ).equal(4)
    done()
  }, 1900)

})
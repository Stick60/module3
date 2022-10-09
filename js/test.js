
    fetch("https://qcm.alwayslearn.fr/api/examens")
    .then((res)=> {
        res.json().then(element=>{
          console.log(element);
        });
      
    });



    fetch("https://qcm.alwayslearn.fr/api/examens/('id')")
.then((res)=> {
    res.json().then(elements=>{
      elements['hydra:member'].forEach(element => {
        getElement(element);
      });
    });
  
});




<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
<label class="form-check-label" for="exampleRadios1">
  Default radio
</label>

</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
<label class="form-check-label" for="exampleRadios2">
  Second default radio
</label>
</div>
<div class="form-check disabled">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
<label class="form-check-label" for="exampleRadios3">
  Disabled radio
</label>
</div>
  
  
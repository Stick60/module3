
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

  
  
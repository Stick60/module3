  let app = document.getElementById('app');
    fetch("https://qcm.alwayslearn.fr/api/examens")
    .then((res)=> {
        res.json().then(elements=>{
          elements['hydra:member'].forEach(element => {
            getElement(element);
          });
        });
      
    });

    function getElement(element){
      let p = document.createElement('p');
      p.innerHTML = element.title;
      app.appendChild(p);
    }
  
  
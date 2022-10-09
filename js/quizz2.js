const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);


fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(element=>{
      console.log(element);
    });
  
});
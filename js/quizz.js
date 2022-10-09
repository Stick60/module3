const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(elements=>{
        elements['question'].forEach(element =>{
        getElement(element);
        console.log(element)
        });
    });
  
});





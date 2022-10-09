const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(elements=>{
        elements['question'].forEach(element => {
        getElement(element);
        let title = document.getElementById('titre')
        title.innerHTML = elements.title;
        console.log(element);
        console.log(elements);
        });
    });
  
});

function getElement(element){    
    let div1 = document.createElement('div');
    div1.classList.add('card', 'mb-2');
  
    let div2 = document.createElement('div');
    div2.classList.add('card-header');
    div1.appendChild(div2);
    div2.innerHTML = element.question;
  
    let div3 = document.createElement('div');
    div3.classList.add('card-body');
    div1.appendChild(div3);
  
    let radio1 = document.createElement('input');
    radio1.type= 'radio';
    radio1.name= '1';
    let label1 = document.createElement('label');
    label1.for = '1';
    label1.innerHTML =element.options.option;

    div3.appendChild(radio1);   
     div3.appendChild(label1);
    app.appendChild(div1);
  }

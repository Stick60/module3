const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

let form = document.createElement('form');
app.appendChild(form);


fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(elements=>{
        elements['question'].forEach((element, index ) => {
        let cardBody = getElement(element);
        let title = document.getElementById('titre');
        title.innerHTML = elements.title;

        for (let option in element.options){
            console.log(elements['question'][index].options[option].isCorrect);
            let reponse = document.createElement('p');
            let radio1 = document.createElement('input');
            radio1.type= 'radio';
            radio1.setAttribute('id','reponse'+index+option);
            radio1.name= 'question'+ index;
            radio1.value= option;
            radio1.setAttribute('question',index);
            let label1 = document.createElement('label');
            label1.setAttribute('for','reponse'+index+option);
            label1.innerText =element.options[option].option;
            cardBody.appendChild(reponse);   
            reponse.appendChild(radio1);   
            reponse.appendChild(label1);

            }

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

   form.appendChild(div1);
    return div3;
  }

  let submit = document.createElement('input');
  submit.type='submit';
  let div4 = document.createElement('div');
  form.appendChild(div4);
  div4.appendChild(submit);
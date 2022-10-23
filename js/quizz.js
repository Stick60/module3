const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let note = 0;
let questions ;
let nombreQuestion = 0 ;
let nombreReponse = 0 ;
let title = document.getElementById('titre');
let form = document.createElement('form');
app.appendChild(form);
let submit = document.createElement('input');
submit.type='submit';

fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(elements=>{
        title.innerHTML = elements.title;
        questions = elements['question'];
        elements['question'].forEach((element, index ) => {
            let cardBody = getElement(element);
            nombreQuestion ++;
            for (let option in element.options){
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
    let carte = document.createElement('div');
    carte.classList.add('card', 'mb-2');
  
    let carteHeader = document.createElement('div');
    carteHeader.classList.add('card-header');
    carte.appendChild(carteHeader);
    carteHeader.innerHTML = element.question;
  
    let carteBody = document.createElement('div');
    carteBody.classList.add('card-body');
    carte.appendChild(carteBody);
    form.appendChild(carte);
    return carteBody;
}

function creationSubmit(){
let divSubmit = document.createElement('div');
divSubmit.classList.add('text-center');
form.appendChild(divSubmit);
divSubmit.appendChild(submit);}

setTimeout (creationSubmit, 1000);
  
 submit.addEventListener('click', function(recup){
    recup.preventDefault();
    for (let radio of document.querySelectorAll("input:checked")) {  
        let choix = radio.id;
        let index2 = choix.substr(7, 1);
        let option2 = choix.substr(8);
        if (questions[index2].options[option2].isCorrect==true){
            note ++;} else{};
            nombreReponse++;
        }
        if (nombreQuestion == nombreReponse){
            window.location.href="result.html";
            let note20 = note / nombreQuestion * 20; 
            localStorage.setItem("note", note20);
            }else{nombreReponse=0;
            alert('Répondez à toutes les questions s il vous plait');
            note=0;
        }
    })


  
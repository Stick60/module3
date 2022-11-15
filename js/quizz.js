const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let note = 0;
let questions ;
let nombreQuestion = 0 ;
let title = document.getElementById('titre');
let form = document.createElement('form');
app.appendChild(form);
let submit = document.createElement('input');
submit.type='submit';
submit.classList.add('btn', 'btn-primary');

fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> 
    {
    res.json().then(elements=>
        {
        title.innerHTML = elements.title;
        questions = elements['question'];
        questions.forEach((element, index ) => 
            {
            let cardBody = createCardElement(element);
            nombreQuestion ++;
            for (let option in element.options)
                {
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
                radio1.addEventListener('click', function(affichageSubmit)
                    {
                    let inputChecked = document.querySelectorAll("input:checked");
                    if (inputChecked.length == nombreQuestion )
                        { 
                        let divSubmit = document.createElement('div');
                        divSubmit.classList.add('text-center');
                        form.appendChild(divSubmit);
                        divSubmit.appendChild(submit);
                        }
                    });
                }
            });
        }); 
    });

function createCardElement(element)
    {    
    let carte = document.createElement('div');
    carte.classList.add('card', 'mb-5');
  
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
  
 submit.addEventListener('click', function(recup)
    {
    recup.preventDefault();
    for (let radio of document.querySelectorAll("input:checked")) 
        {  
        let choix = radio.id;
        let index2 = choix.substr(7, 1);
        let option2 = choix.substr(8);
        if (questions[index2].options[option2].isCorrect==true)
            {
                note ++;
            };        
                window.location.href="result.html";
                let note20 = note / nombreQuestion * 20; 
                localStorage.setItem("note", note20);
         }
    })


  
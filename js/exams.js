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
  let div1 = document.createElement('div');
  div1.classList.add('card', 'mb-2');

  let div2 = document.createElement('div');
  div2.classList.add('card-header');
  div1.appendChild(div2);
  div2.innerHTML = element.title;

  let div3 = document.createElement('div');
  div3.classList.add('card-body');
  div1.appendChild(div3);

  let a = document.createElement('a');
  a.href="quizz.html?id="+element.id;
  a.classList.add('btn', 'btn-primary');
  
  a.innerHTML ="Démarrer l'examen";
  div3.appendChild(a);
  app.appendChild(div1);
}
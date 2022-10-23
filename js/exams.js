let div = document.getElementById('app');
fetch("https://qcm.alwayslearn.fr/api/examens")
.then((res)=> {
    res.json().then(elements=>{
      elements['hydra:member'].forEach(element => {
        getElement(element);
      });
    });
  
});

function getElement(element){
  let carte = document.createElement('div');
  carte.classList.add('card', 'mb-2');

  let headerCarte = document.createElement('div');
  headerCarte.classList.add('card-header');
  carte.appendChild(headerCarte);
  headerCarte.innerHTML = element.title;

  let bodyCarte = document.createElement('div');
  bodyCarte.classList.add('card-body');
  carte.appendChild(bodyCarte);

  let lien = document.createElement('a');
  lien.href="quizz.html?id="+element.id;
  lien.classList.add('btn', 'btn-primary');
  
  lien.innerHTML ="Démarrer l'examen";
  bodyCarte.appendChild(lien);
  div.appendChild(carte);
}
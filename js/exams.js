let div = document.getElementById('app');
app.classList.add('text-center');
fetch("https://qcm.alwayslearn.fr/api/examens")
.then((reponse)=> 
    {
    reponse.json().then(elements=>
        {
        elements['hydra:member'].forEach(element => 
            {
            createExamenCard(element);
            });
        });  
    });

function  createExamenCard(element)
    {
    let carte = document.createElement('div');
    carte.classList.add('card', 'mb-3');

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
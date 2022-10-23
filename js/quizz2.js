const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id'); 
/*ces 3 premières lignes me servent seulement à récupérer l'ID dans URL, 
 j'ai vu que tu avais fait différement mais si cela fonctionne ne change rien*/

let form = document.createElement('form');
app.appendChild(form);
/*j'ai créé une balise form dans la div app pour faciliter la récupération des réponses à la fin, j'ai vu que tu ne l'avais pas fait*/

fetch("https://qcm.alwayslearn.fr/api/examens/" + id)
.then((res)=> {
    res.json().then(elements=>{
        elements['question'].forEach((element, index ) => {
        let cardBody = getElement(element);
        /* j'appelle ma fonction getElement(que tu trouveras ligne 53) pour récupèrer les questions; et je récupére au passage la div3 dans cardBody grace à la méthode return que tu verras à la fin de la dite foncion*/

        let title = document.getElementById('titre');
        title.innerHTML = elements.title;
/* bon ici j'ai modifié le fichier html et j'ai claque un id title au H1 car j'avais plus en tête la méthode pour récupérer le H1
J'ai donc récupéré le H1 et j'y insère le titre du questionnaire*/

        for (let option in element.options){
      /* j'initie une boucle pour aller récupérer mes choix de réponse*/
            let reponse = document.createElement('p');
            /*j'ai du créer des balises <p> pour y insérer mes choix de réponse sinon elle se retrouvait cote à cote si je les mettais direct dans la div*/
            let radio1 = document.createElement('input');
            /*ensuite tu crées un bouton style radio*/
            radio1.type= 'radio';
            radio1.setAttribute('id','reponse'+index+option);
            radio1.name= 'question'+ index;
            radio1.value= option;
            radio1.setAttribute('question',index);
            /* je paramètre les attributs pour chaque choix de réponse possible, option correspond au numéro de réponse et index au numéro de la question*/
            let label1 = document.createElement('label');
            label1.setAttribute('for','reponse'+index+option);
            label1.innerText =element.options[option].option;
            /* et ici je déclare les choix de réponse dans les label
            je définis l'attribut for qui doit être le même que l'ID du bouton radio
            et j'y écris la réponse qui est stockée dans element.options[option].option*/
            cardBody.appendChild(reponse);   
            reponse.appendChild(radio1);   
            reponse.appendChild(label1);
            /*j'insère mon bouton radio et mon label dans mon <p> que j'avais appellé réponse, lui même inséré dans cardBody qui correspond
             à la div3 que j'ai créé dans ma fonction getElement*/ 
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
/*la fonction getElement que j'ai appellé après mon fetch donc,
Elle me sert essentiellement à la mise en forme et à récupérer les questions
C'est un morceau de bootstrap que Richard m'avait fait utiliser pour la page exam
que j'ai radapté ici pour le coup
Rien de foufou à part que j'ai utlisé return sur div3 pour pouvoir l'utiliser hors de la fonction(jen avais besoin ensuite pour y mettre mes choix de réponse)*/

let submit = document.createElement('input');
submit.type='submit';
let div4 = document.createElement('div');
form.appendChild(div4);
div4.appendChild(submit);
let note = 0;
submit.addEventListener('click', function(recup){
    recup.preventDefault();
    for (let radio of document.querySelectorAll("input:checked")) {
    let choix = radio.id;
    let index2 = choix.substr(7, 1);
    let option2 = choix.substr(8);

  })

  /* bon c'est ici que ca part en couille pour moi , je crée une div' pour y mettre le bouton envoyer mais le souci déja
  c'est qu'il apparait en haut de la page ....
  ensuite j'ai mis sur écoute le bouton input que j'ai créé et j'ai annulé sa fonction par défaut avec preventdefault
Ensuite j'utilise une boucle for que j'applique sur toutes les réponses que la personne a choisi avec le querySelectorAll("input:checked")
 de la je récupére l id des radio que la personne a coché(let choix =radio.id)
Dans mon id j avais l index (numéro de question) et l'option (numéro de réponse ) que je récupère en utilisant .substr

Maintenant faudrait que je les réutilise pour aller checker si ce sont les bonnes réponses mais je séche encore
Je t'ai supprimé la partie qui ne fonctionne pas qui est encore en test
hésite pas si t as des question je t"ai écrit tout ca d un trait ce ne doit pas être très clair*/
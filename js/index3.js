
function control(){
    let input= document.getElementById('prenom').value;
         if (input.lenght > 2 ){
            window.localStorage.setItem('name', 'input');
            window.location.replace='quizz.html';}
        
        else alert('Veuillez saisir votre prénom ')};
    
        document.getElementsByClassName('btn btn-primary')
        .addEventListener("click", control);
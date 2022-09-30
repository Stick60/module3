

document.getElementById("submit")
.addEventListener("click", (e) => {

     var saisie = document.getElementById("prenom").value;
     alert("Vous avez saisi : " + saisie) ;
     e.preventDefault();
     e.stopPropagation();})
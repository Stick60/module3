document.getElementById("submit")
        .addEventListener("click", (e) => {
             var saisie = document.getElementById("prenom").value;
             if (saisie == "")  {
             alert("Veuillez saisir votre prénom"); 
            } else {window.location.href="exams.html";
                    localStorage.setItem("prenom", saisie);
            }                        
             e.preventDefault();
             e.stopPropagation();})

           
document.getElementById("submit")
        .addEventListener("click", (recupPrenom) => 
                {
                var saisie = document.getElementById("prenom").value;
                if (saisie == "")  
                {
                        alert("Veuillez saisir votre prénom"); 
                } else 
                {
                        window.location.href="exams.html";
                        localStorage.setItem("prenom", saisie);
                }                        
                recupPrenom.preventDefault();
                });
document.getElementById("form")
        .classList.add('text-center');
let div = document.getElementById("app");
div.classList.add('text-center');
const prenom = localStorage.getItem('prenom');
const note = localStorage.getItem('note');
div.innerHTML = prenom + ', vous avez obtenu la note de ' + note + '/20.';
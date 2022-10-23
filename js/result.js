let div = document.getElementById("app");
const prenom = localStorage.getItem('prenom');
const note = localStorage.getItem('note');
div.innerHTML = prenom + ', vous avez obtenu la note de ' + note + '/20.';
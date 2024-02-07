// Début du mini-jeu

// Je sélectionne et je stock
const btnRed = document.getElementById('btn-red');
console.log(btnRed,"bouton rouge");
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue,"bouton bleu");
let compteur = 0;
console.log(compteur, "compteur au demarrage");
let titre = document.getElementById('titre');



// Je soumets le cercle rouge à une action 
btnRed.addEventListener('click', function(){
    add();
});

// Je soumets le cercle rouge à une action 
btnBlue.addEventListener('click', function(){
    add();   
});

function add(){
       // j'incrémente le compteur de 1 
       compteur ++;
       console.log( compteur, "compteur incrémenté");
       titre.innerText = compteur;
}

setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();
}, 10000)

replay.addEventListener('click', function(){
    location.reload();
});
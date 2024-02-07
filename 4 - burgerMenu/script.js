// je séléctionne et stock mon icone 
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
// je séléctionne et stock ma div modal
const modal = document.querySelector('.modal');
console.log(modal);
// au click sur l'icone la div modal decend jusqu'en bas et l'icone change
icone.addEventListener('click',function(){
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');

});
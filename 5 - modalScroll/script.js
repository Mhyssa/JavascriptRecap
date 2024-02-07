// je stock et selectionne mon container modal
const modal = document.querySelector('.modal-container');
console.log(modal);
// select le button
const btn = document.querySelector('.btn-success');
console.log(btn);
// select le code
const code = document.querySelector('.code');
console.log(code);
// select l'icone
const icone = document.querySelector('i');
console.log(icone);
// je soumets mon action

window.addEventListener('scroll',displayModal);
function displayModal(){
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur);
    if(hauteur>400){
        modal.style.display = "flex";
    }
};

btn.addEventListener('click',function(){
    code.style.display ="flex";
    btn.style.display = "none";
});

icone.addEventListener('click',function(){
    // modal.remove();
    modal.style.display = "none";
    window.removeEventListener('scroll',displayModal);
});


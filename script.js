
// Je sélectionne par classe et je stocke
// le bouton .btn-success; 
const btnSuccess = document.querySelector('.btn-success'); 

console.log(btnSuccess); 
// DIV cookies; 
const cookies = document.querySelector('.cookies'); 
console.log(cookies); 

btnSuccess.addEventListener('click', function(){
    console.log('bouton cliqué !'); 
   // cookies.style.opacity = "0";
   cookies.remove();
}); 


// Je sélectionne et je stocke
// icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i.far.fa-meh-blank');
console.log(icone);
// btnButton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn-abo'); 
console.log(btnButton); 

// Je soumets l'icône à une action au clic
icone.addEventListener('click', function(){
    console.log('icône cliquée !'); 
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy'); 
    
});


// Je soumets le bouton à une action au clic
btnButton.addEventListener('click', function(){
    console.log('bouton cliqué'); 

    // A chaque clic, on alterne le style
    btnButton.classList.toggle('abonne'); 
    // On vérifie le texte du bouton
    if(btnButton.innerText === "Abonné"){
        // Action à réaliser si condition est vraie
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else');
        // Action à réaliser si condition fausse
        btnButton.innerText = "Abonné";
    };
}); 

// Je sélectionne et je stocke
// la DIV switch-box
const switchBox = document.querySelector('.switch-box'); 
console.log(switchBox); 
// la DIV btn (le cercle)
const btn = document.querySelector('.btn-switch'); 
console.log(btn)
// l'icône
const iconeSwitch = document.querySelector('i'); 
console.log(iconeSwitch); 
// la DIV container
const container = document.querySelector('.container'); 
console.log(container); 
// le titre
const titre = document.querySelector('h3'); 
console.log(titre); 


// Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée !'); 

    // Je déplace le cercle
    //btn.style.left = "60px";


    // J'utilise .classList.toggle
    // classList.toggle() permet d'alterner une classe
    btn.classList.toggle('btn-change'); 
    // Je déplace l'icône
    iconeSwitch.classList.toggle('icone-change'); 
    // Je change l'icône
    iconeSwitch.classList.toggle('fa-sun'); 
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change'); 

    // Je modifie le texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE"; 
    }else{
        titre.innerText = "DARK MODE"; 
    }

}); 


// Je sélectionne et je stocke
// l'icône burger
const iconeBurger = document.querySelector('.navbar-mobile i'); 
console.log(iconeBurger); 
// la DIV modal
const modal = document.querySelector('.modal'); 
console.log(modal); 

iconeBurger.addEventListener('click', function(){
    console.log("icone cliquée"); 
    modal.classList.toggle('change-modal'); 
    iconeBurger.classList.toggle('fa-times'); 
}); 
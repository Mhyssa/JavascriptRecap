const formulaire = document.getElementById('formulaire');

const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

formulaire.addEventListener('submit',function(e){
    e.preventDefault();
    // Je recupere les valeurs de chacun des input 
    const prenomValue = prenom.value.trim();
    console.log(prenomValue, "prenom");
    // La fonction trim() supprime les espaces avant et après le mot 
    const nomValue = nom.value.trim();
    console.log(nomValue, "nom");
    const emailValue = email.value.trim();
    console.log(emailValue, "email");
    const messageValue = message.value.trim();
    if(emailValue === ""){
        console.log('echec');
    }else{
        console.log('ok');
    }
    console.log(messageValue, "message");
    console.log('event');
})
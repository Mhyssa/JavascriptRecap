const btn = document.querySelector('.btn');
console.log(btn);
const ctn = document.querySelector('.container-notifications');
console.log(ctn);

btn.addEventListener('click',function(){    
    const notif = document.createElement('div'); 
    notif.classList.add('toast');
    notif.innerText = "Fichier enregitrer ! ";

    // element parent + action (element enfant)
    ctn.appendChild(notif);

    // A la fin du chrono je retire la notif du DOM 
    setTimeout(function(){
        notif.remove();
    },1500);
});


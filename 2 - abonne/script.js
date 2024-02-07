console.log('connecté');

const icone = document.querySelector('i');
const btnSub = document.querySelector('.btn');
console.log(icone);
console.log(btnSub);

icone.addEventListener('click',function(){
    icone.classList.toggle('fa-smile-beam');
    icone.classList.toggle('happy');
});

btnSub.addEventListener('click',function(){
    if(btnSub.innerText === "Abonné"){
        btnSub.innerText = "Abonnez-vous";
        btnSub.classList.toggle('btnSub');

    }
    else{
        btnSub.innerText = "Abonné";
        btnSub.classList.toggle('btnSub');
    };
});
const switchBox = document.querySelector('.switch');
console.log(switchBox);
const btn = document.querySelector('.btn');
console.log(btn);
const icone = document.querySelector('i');
console.log(icone);
const container = document.querySelector('.container');
console.log(container);
const titre = document.querySelector('.titre');
console.log(titre);

switchBox.addEventListener('click',function(){
    btn.classList.toggle('btn-change');
    // icone.classList.toggle('fa-smile-beam' + ' ' + 'icone-change');
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-sun');

    switchBox.classList.toggle('switch-change');

    container.classList.toggle('container-change');

    if(titre.innerText === "Light mode"){
        titre.innerText = "Dark mode";
    }
    else { titre.innerText = "Light mode"};
});

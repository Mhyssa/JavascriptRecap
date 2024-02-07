const vignettes = document.querySelectorAll('.small');
console.log(vignettes);
const fullImg = document.getElementById('full');
console.log(fullImg);
const btn = document.querySelector('.btn-add');
console.log(btn);
// j'initialise le panier 
let panier = 0;

const panierCont = document.querySelector('.panier-container');

vignettes.forEach((item)=>{
    item.addEventListener('click',function(){
        let imgSource = item.getAttribute('src');
        fullImg.setAttribute('src', imgSource);
    })
}); 

btn.addEventListener('click',function(){
    panier = panier + 1;
    console.log(panier)
// J'affiche mon contenu en fonction d'une valeur 

if(panier<2){
    panierCont.innerText = 
    "Vous avez" + " " + panier + " " + "produit dans votre panier";
} else {
    panierCont.innerText = 
    "Vous avez" + " " + panier + " " + "produits dans votre panier";
}
});
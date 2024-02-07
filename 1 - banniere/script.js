console.log('connecté');

// Je selectionne et je stocke
// button et .btn-success
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
// la div cookies
const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click',function(){
// console.log('clikééé');
cookies.style.opacity = "0";
});
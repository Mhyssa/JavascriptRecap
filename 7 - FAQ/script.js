const question = document.querySelectorAll('.question');
console.log(question);

// const trois= question[2];
// console.log(trois);

question.forEach((item)=>{
    item.addEventListener('click',function(){
        const next = item.nextElementSibling;
        console.log(next);
    next.classList.toggle('visible');

    icone = item.lastElementChild;
    icone.classList.toggle('fa-chevron-up');
    })
});
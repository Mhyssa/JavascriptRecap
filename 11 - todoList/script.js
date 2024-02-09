const form = document.getElementById('form');
console.log(form);
const todo = document.getElementById('todo');
console.log(todo);
let listItems = document.querySelector('.list-items');
console.log(listItems);

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('click');
    const todoValue = todo.value;
    console.log(todoValue);
    // Je crée l'element avec la méthode template string
    let item = `
                <div class="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <button class="btn-archive">
                        <i class="fas fa-check-circle"></i>
                    </button>
                </div>
                `

    listItems.innerHTML += item;

// Je selectionne tout les btn-delete existant de la page 
const btnDelete = document.querySelectorAll('.btn-delete');
btnDelete.forEach(i => {
    console.log(btnDelete);
    i.addEventListener('click', function(){
        console.log('btn-delete cliqué');
        // j'enleve l'element parent 
        i.parentElement.remove();
    });

});

// Je selectionne tout les btn-archive existant de la page 
const btnArchive = document.querySelectorAll('.btn-archive');
btnArchive.forEach(i => {
    console.log(btnArchive);
    i.addEventListener('click', function(){
        // je cible l'élément parent de i 
        const parent = i.parentElement;
        // J'agis sur la div parent (class item )
        parent.classList.toggle('done');
    });
});

form.reset(); 
});


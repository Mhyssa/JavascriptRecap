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
});



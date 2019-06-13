
var createTodoButton = document.getElementById('create-todo-button');
createTodoButton.addEventListener('click', showCreateTodo);

function showCreateTodo() {
    console.log("== showCreateTodo");
    var modal = document.querySelector('#modal-backdrop');
    var createTodo = document.querySelector('#create-todo-modal');

    // Bootstrap does this...
    // modal.classList.remove('hidden');
    // createTodo.classList.remove('hidden');
}

var closeTodoButton = document.querySelector('.close');
closeTodoButton.addEventListener('click', hideCreateTodo);

var cancelTodoButton = document.querySelector('.btn-secondary');
cancelTodoButton.addEventListener('click', hideCreateTodo);

function hideCreateTodo() {
    console.log('== hideCreateTodo');
    var modal = document.querySelector('#modal-backdrop');
    var createTodo = document.querySelector('#create-todo-modal');

    // Bootstrap does this??
    // modal.classList.add('hidden');
    // createTodo.classList.add('hidden');

    resetfields();
}

function resetfields() {
    console.log("== resetfields");
    
    document.querySelector('#todo-title-input').value = null;
    document.querySelector('#todo-date-input').value = null;
}

var addTodoButton = document.querySelector('.btn-primary.save');
addTodoButton.addEventListener('click', addNewTodo)

function addNewTodo() {
    console.log("== addNewTodo");
    
    var title = document.querySelector('#todo-title-input').value.trim();
    var date = document.querySelector('#todo-date-input').value.trim();

    if (title == "" || date == "") {
        alert("Both fields must be filled, before continuing");
    } else {

        hideCreateTodo();
    }
      

}
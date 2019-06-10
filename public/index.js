
var createTodoButton = document.getElementById('create-todo-button');
createTodoButton.addEventListener('click', showCreateTodo);

function showCreateTodo() {
    console.log("showCreateTodo");
    var modal = document.querySelector('#modal-backdrop');
    var createTodo = document.querySelector('#create-todo-modal');

    modal.classList.remove('hidden');
    createTodo.classList.remove('hidden');
}

var closeTodoButton = document.querySelector('.modal-close-button');
closeTodoButton.addEventListener('click', hideCreateTodo);

var cancelTodoButton = document.querySelector('.modal-cancel-button');
cancelTodoButton.addEventListener('click', hideCreateTodo);

function hideCreateTodo() {
    console.log('hideCreateTodo');
    var modal = document.querySelector('#modal-backdrop');
    var createTodo = document.querySelector('#create-todo-modal');

    modal.classList.add('hidden');
    createTodo.classList.add('hidden');

    resetfields();
}

function resetfields() {
    console.log("supposed to reset fields, its not there yet");
}

var addTodoButton = document.querySelector('.modal-accept-button');
addTodoButton.addEventListener('click', addNewTodo)

function addNewTodo() {
    console.log("addNewTodo");
    hideCreateTodo();
}
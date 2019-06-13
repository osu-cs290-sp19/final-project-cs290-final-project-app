
var createTodoButton = document.querySelector('.btn.btn-primary');
createTodoButton.addEventListener('click', showCreateTodo);

function showCreateTodo() {
    console.log("== showCreateTodo");
    var modal = document.querySelector('#modal-backdrop');
    var createTodo = document.querySelector('#create-todo-modal');

    // Bootstrap does this
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

    // Bootstrap does this
    // modal.classList.add('hidden');
    // createTodo.classList.add('hidden');

    //resetfields();
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
    
    var todoTitle = document.querySelector('#todo-title-input').value.trim();
    var date = document.querySelector('#todo-date-input').value.trim();

    console.log("**** title:", todoTitle);
    console.log("**** date: ", date);

    if (todoTitle == "" || date == "") {
        alert("Both fields must be filled, before continuing");
    } else {
        var postRequest = new XMLHttpRequest();
        var requestURL = '/todo';
        postRequest.open('POST', requestURL);
    
        var requestBody = JSON.stringify({
          title: todoTitle,
          date: date
        });

        console.log("does this work?");
        console.log('todoTitle: ', todoTitle);

        postRequest.addEventListener('load', function (event) {
            console.log("here? ", todoTitle);
            if (event.target.status === 200) {
              var todoTemplate = handlebars.templates.todo;
              var newTodoHTML = todoTemplate({
                title: todoTitle,
                date: date
              });
              var todoContainer = document.querySelector('.todoContainer');
              todoContainer.insertAdjacentHTML('beforeend', newTodoHTML);
            } else {
              alert("Error storing photo: " + event.target.response);
            }
          });
      
          postRequest.setRequestHeader('Content-Type', 'application/json');
          postRequest.send(requestBody);
      

        hideCreateTodo();
    }
      

}
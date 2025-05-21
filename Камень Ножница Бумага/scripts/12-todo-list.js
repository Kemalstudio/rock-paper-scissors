const todoList = [
  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-12-22' }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-item">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button" data-index="${index}">Delete</button> 
      </div>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton) => {
    deleteButton.addEventListener('click', (event) => {
      const index = event.target.dataset.index;
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value.trim();

  if (name && dueDate) {
    todoList.push({ name, dueDate });
    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
  } else {
    alert('Please enter both name and due date.');
  }
}

const todoList = [
  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-12-22' }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];
    const html = `
      <div class="todo-item">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" data-index="${i}">Delete</button>
      </div>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.delete-todo-button').forEach(button => {
    button.addEventListener('click', event => {
      const index = event.target.dataset.index;
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

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

document.querySelector('.js-add-todo-button').addEventListener('click', addTodo);

let todoList = [];

function renderTodoList() {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";
  todoList.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
      <span id="todo-${index}" onclick="editTodo(${index})">${todo}</span>
      <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoListContainer.appendChild(todoItem);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    todoList.push(todoText);
    todoInput.value = "";
    renderTodoList();
  } else {
    alert("Please enter a task!");
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function editTodo(index) {
  const newTodoText = prompt("Edit task:", todoList[index]);
  if (newTodoText !== null && newTodoText.trim() !== "") {
    todoList[index] = newTodoText.trim();
    renderTodoList();
  }
}


renderTodoList();

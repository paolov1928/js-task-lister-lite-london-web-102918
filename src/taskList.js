class TaskList {


}
const formEl = document.querySelector('#create-task-form');
// const inputBar = document.querySelector('#new-task-description');
const taskNameEl = document.querySelector('input[name=new-task-description]')
const taskPriorityEl = document.querySelector('input[name=new-task-priority]')
const listEl = document.querySelector('#list')
const ul = listEl.lastElementChild

function init() {
  formEl.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault();
  const newTodoText = `${taskPriorityEl.value}, ${taskNameEl.value}`
  const todoEl = document.createElement('li')
  todoEl.className = 'card'
  todoEl.innerText = newTodoText
  ul.append(todoEl)

  ul.addEventListener('click', handleCompleteToDo)
  taskNameEl.value = ''
  taskPriorityEl.value = ''
}

function handleCompleteToDo (e) {
  e.target.classList.toggle('done')
}


init();

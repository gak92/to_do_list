import LocalStorage from "./localstorage.js";

export default class UI {
  static updateIndex(tasksList) {
    for (let i = 0; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    console.log(tasksList);
  }

  static removeTask(target, btn, index, tasksList) {
    const currentLi = target.parentElement;
    currentLi.parentElement.removeChild(currentLi);

    tasksList = tasksList.filter((task, idx) => idx !== index);
    this.updateIndex(tasksList);
    LocalStorage.saveData(tasksList);
    this.showAllTasks(tasksList);
  }

  static showAllTasks(tasksList) {
    const todoList = document.querySelector('.todo-list');
    let tasks = '';
  
    tasksList.forEach((task) => {
      tasks += `<li class="todo-item">
      <input type="checkbox" name="check" id="check">
      <input type="text" name="task" id="task" value="${task.description}">
      <i class="fa-solid fa-trash-can btn-delete"></i>
      </li>`;
    });
  
    todoList.innerHTML = tasks;

    const deleteBtn = document.querySelectorAll('.btn-delete');
    deleteBtn.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        this.removeTask(e.target, btn, index, tasksList);
      });
    });
  }
}
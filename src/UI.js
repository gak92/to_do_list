import LocalStorage from './localstorage.js';
import Status from './Status.js';

export default class UI {
  static updateIndex(tasksList) {
    for (let i = 0; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
  }

  static removeTask(target, btn, index, tasksList) {
    const currentLi = target.parentElement;
    currentLi.parentElement.removeChild(currentLi);

    console.log("Before delete: ", tasksList);
    tasksList = tasksList.filter((task, idx) => idx !== index);
    this.updateIndex(tasksList);
    console.log("After Delete: ", tasksList);
    LocalStorage.saveData(tasksList);
    this.showAllTasks(tasksList);
  }

  static editTask(value, index, tasksList) {
    tasksList[index].description = value;
    LocalStorage.saveData(tasksList);
    this.showAllTasks(tasksList);
  }

  static reloadPage() {
    const tasksList = LocalStorage.getData();
    console.log(tasksList);
    tasksList.forEach((task) => {
      task.completed = false;
    });
    LocalStorage.saveData(tasksList);
  }

  static showAllTasks(tasksList) {
    const todoList = document.querySelector('.todo-list');
    let tasks = '';

    tasksList.forEach((task) => {
      tasks += `<li class="todo-item">
      <input type="checkbox" name="check" id="check">
      <input type="text" name="task" id="task" value="${task.description}" class="" reuired>
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

    const taskInput = document.querySelectorAll('#task');
    taskInput.forEach((task, index) => {
      task.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 & task.value !== '') {
          this.editTask(task.value, index, tasksList);
        }
      });
    });

    const checkBoxes = document.querySelectorAll('#check');
    checkBoxes.forEach((checkBox, index) => {
      checkBox.addEventListener('change', (e) => {
        Status.statusChanged(checkBox, index, e.target, tasksList);
      });
    });
  }
}

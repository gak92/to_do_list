import './style.css';
import Task from './task.js';
import LocalStorage from './localstorage.js';
import UI from './UI.js';

let tasksList;
if (LocalStorage.getData() === null) {
  tasksList = [];
} else {
  tasksList = LocalStorage.getData();
}

const addTask = (newTask) => {
  const tasksList = LocalStorage.getData();
  const index = tasksList.length + 1;
  const task = new Task(newTask, false, index);
  tasksList.push(task);
  LocalStorage.saveData(tasksList);
  UI.showAllTasks(tasksList);
};

const clearInput = () => {
  document.querySelector('#add-new-task').value = '';
};

const addNewTask = document.querySelector('#add-new-task');
addNewTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const newTask = addNewTask.value;
    addTask(newTask);
    clearInput();
  }
});

UI.showAllTasks(tasksList);

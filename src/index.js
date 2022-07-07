import './style.css';
import Task from './task.js';
import LocalStorage from './localstorage.js';
import UI from './UI.js';
import Status from './Status.js';

let tasksList;
if (LocalStorage.getData() === null) {
  tasksList = [];
} else {
  tasksList = LocalStorage.getData();
}

const addTask = (newTask) => {
  let index;
  if (LocalStorage.getData() === null) {
    index = 1;
  } else {
    tasksList = LocalStorage.getData();
    index = tasksList.length + 1;
  }
  const task = new Task(newTask, false, index);
  console.log('before adding tasks List: ', tasksList);
  tasksList.push(task);
  LocalStorage.saveData(tasksList);
  UI.showAllTasks(tasksList);
};

const clearInput = () => {
  document.querySelector('#add-new-task').value = '';
};

const addNewTask = document.querySelector('#add-new-task');
addNewTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && addNewTask.value !== '') {
    const newTask = addNewTask.value;
    addTask(newTask);
    clearInput();
  }
});

UI.showAllTasks(tasksList);

const btnRefresh = document.querySelector('#btn-refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
});

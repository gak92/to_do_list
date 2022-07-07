import LocalStorage from './localstorage.js';

export default class Status {
  static statusChanged(checkBox, index, target, tasksList) {
    const currentLi = target.parentElement;
    const taskDescription = currentLi.querySelector('#task');

    if (checkBox.checked) {
      taskDescription.classList.add('strike');
      tasksList[index].completed = true;
    } else {
      taskDescription.classList.remove('strike');
      tasksList[index].completed = false;
    }

    LocalStorage.saveData(tasksList);
  }

  static clearAllCompletedTask(e, tasksList) {
    tasksList = LocalStorage.getData();
    tasksList = tasksList.filter((task) => task.completed === false);
    LocalStorage.saveData(tasksList);
  }
}

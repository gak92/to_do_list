import LocalStorage from "./localstorage.js";
import UI from "./UI.js";

export default class Status {
  static statusChanged(checkBox, index, target, tasksList) {
    let currentLi = target.parentElement;
    let taskDescription = currentLi.querySelector('#task');

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
    console.log(tasksList);

    tasksList = tasksList.filter((task, idx) => task.completed === false);
    UI.updateIndex(tasksList);
    LocalStorage.saveData(tasksList);
    UI.showAllTasks(tasksList);
  }
}

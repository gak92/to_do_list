export default class LocalStorage {
  static getData() {
    return (this.tasksList = JSON.parse(localStorage.getItem('taskslist')));
  }

  static saveData(tasksList) {
    localStorage.setItem('taskslist', JSON.stringify(tasksList));
  }
}

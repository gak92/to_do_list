export default class LocalStorage {
  static getData() {
    return JSON.parse(localStorage.getItem('taskslist'));
  }

  static saveData(tasksList) {
    localStorage.setItem('taskslist', JSON.stringify(tasksList));
  }
}

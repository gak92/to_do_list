import _ from 'lodash';
import './style.css';

const tasksList = [
  {
    description: 'Learn Javscript ES6',
    completed: true,
    index: 0,
  },
  {
    description: 'Practice CSS3 transition',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn Webpack',
    completed: false,
    index: 2,
  },
  {
    description: 'First Capstone project',
    completed: false,
    index: 3,
  },
  {
    description: 'Learn arrow functions',
    completed: false,
    index: 4,
  },
];

const showAllTasks = () => {
  const todoList = document.querySelector('.todo-list');
  let tasks = '';

  tasksList.forEach((task) => {
    tasks += `<li class="todo-item">
    <input type="checkbox" name="check" id="check">
    <input type="text" name="task" id="task" value="${task.description}">
    <i class="fa-solid fa-trash-can"></i>
    </li>`;
  });

  todoList.innerHTML = tasks;
};

showAllTasks();

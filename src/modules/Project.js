export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addTask() {
    this.tasks.push(task);
  }

  removeTask(taskName) {
    const task = this.tasks.find((task) => task.name === taskName);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTasks() {
    return this.tasks;
  }
}

// factory implementation

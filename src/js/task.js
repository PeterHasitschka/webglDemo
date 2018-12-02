class Task {
  constructor(taskFct, scene) {
    this.scene = scene;
    this.fct = taskFct;
  }

  run() {
    this.fct(this.scene);
  }
}

export default Task;

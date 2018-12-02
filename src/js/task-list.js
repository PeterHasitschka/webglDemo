import Task from "./task";
import Scene from "./scene";

class TaskList {
  /**
   * @param scene Scene
   * @param containerElement HTMLElement
   */
  constructor(scene, containerElement) {
    this.iterator = 0;
    this.list = [];
    this.scene = scene;
    this.containerElement = containerElement;
  }

  add(fct, title) {
    this.list.push(new Task(fct, this.scene));
    let listElm = document.createElement("div");
    listElm.innerHTML = "title";
    listElm.classList.add("task");
    listElm.setAttribute("data-iterator", this.list.length - 1);
    this.containerElement.appendChild(listElm);
  }

  runNext() {
    if (typeof this.list[this.iterator] !== "undefined") {
      /**
       * @var task Task
       **/
      let task = this.list[this.iterator];

      let taskElm = document.querySelectorAll(
        '.task[data-iterator="' + this.iterator + '"]'
      )[0];
      console.log(taskElm);
      Array.from(document.getElementsByClassName("task")).forEach(elm => {
        elm.classList.remove("active");
      });
      taskElm.classList.add("active");
      task.run();
      this.iterator++;
    }
  }
}

export default TaskList;

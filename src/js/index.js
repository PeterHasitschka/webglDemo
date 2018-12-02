import Scene from "./scene";
import TaskList from "./task-list";

document.addEventListener("DOMContentLoaded", function(event) {
  let myScene = new Scene();
  myScene.initScene();

  let taskList = new TaskList(
    myScene,
    document.getElementsByClassName("control-container-list")[0]
  );

  taskList.add(scene => {
    console.log("I'm a task", scene);
  }, "Demo Task");

  document
    .getElementsByClassName("next-task-button")[0]
    .addEventListener("click", () => {
      taskList.runNext();
    });
});

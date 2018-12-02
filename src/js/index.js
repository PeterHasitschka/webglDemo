import Scene from "./scene";
import TaskList from "./task-list";
import * as THREE from "three";

document.addEventListener("DOMContentLoaded", function(event) {
  let myScene = new Scene();

  let taskList = new TaskList(
    myScene,
    document.getElementsByClassName("control-container-list")[0]
  );

  document
    .getElementsByClassName("next-task-button")[0]
    .addEventListener("click", () => {
      taskList.runNext();
    });

  /*
  *******************
    Initialize Scene
  *******************
  */
  taskList.add("Init Scene (Camera & Renderer)", scene => {
    scene.threeScene = new THREE.Scene();

    scene.camera = new THREE.PerspectiveCamera(
      75, //Camera frustum vertical field of view.
      window.innerWidth / window.innerHeight, //Camera frustum aspect ratio.
      0.1, // Camera frustum near plane.
      1000 // Camera frustum far plane.
    );
    scene.camera.position.z = 100;

    scene.renderer = new THREE.WebGLRenderer();
    scene.renderer.setSize(window.innerWidth, window.innerHeight);
    scene.container.appendChild(scene.renderer.domElement);
  });

  taskList.add("Add Light", scene => {
    let light = new THREE.PointLight(0xffff00);
    light.position.set(10, 0, 25);
    scene.threeScene.add(light);
  });

  /*
    Add first geometry
   */
  taskList.add("Add Geometry", scene => {
    let geometry = new THREE.BoxGeometry(20, 20, 20);
    let material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });
    let cube = new THREE.Mesh(geometry, material);
    scene.threeScene.add(cube);
  });
});

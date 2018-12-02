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
      scene.container.offsetWidth / scene.container.offsetHeight, //Camera frustum aspect ratio.
      0.1, // Camera frustum near plane.
      1000 // Camera frustum far plane.
    );
    scene.camera.position.z = 10;

    scene.renderer = new THREE.WebGLRenderer();
    scene.renderer.setSize(window.innerWidth, window.innerHeight);
    scene.container.appendChild(scene.renderer.domElement);
  });

  /*
  *******************
    Add Geometry
  *******************
   */
  taskList.add("Add Geometry", scene => {
    let geometry = new THREE.SphereGeometry(5, 32, 32);
    // let material = new THREE.MeshPhongMaterial({ color: 0x00bbff });
    let material = new THREE.MeshPhongMaterial({ color: 0x00bbff });
    let sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere, "sphere");
  });

  /*
  *******************
    Add ambient Light
  *******************
  */
  taskList.add("Add ambient light", scene => {
    let light = new THREE.AmbientLight(0x404040);
    scene.add(light, "ambientlight");
  });

  /*
  *******************
    Add Point Light
  *******************
  */
  taskList.add("Add Point Light", scene => {
    let light = new THREE.PointLight(0xffff00);
    light.position.set(10, 0, 25);
    scene.add(light, "pointlight");
  });

  /*
  *******************
    Remove ambient light
  *******************
  */
  taskList.add("Remove ambient light", scene => {
    scene.removeByName("ambientlight");
  });

  /*
  *******************
    Change camera
  *******************
  */
  taskList.add("Change camera distance", scene => {
    scene.camera.position.z = 40;
  });
});

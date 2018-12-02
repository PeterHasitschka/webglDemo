import * as THREE from "three";

class Scene {
  constructor() {
    /**
     * @var HTMLElement
     */
    this.container = null;

    /**
     * @var THREE.Scene
     */
    this.threeScene = null;

    /**
     * @var THREE.Camera
     */
    this.camera = null;

    /**
     * @var THREE.WebGLRenderer
     */
    this.renderer = null;

    this.container = document.getElementsByClassName("webgl-container")[0];
    if (!this.container)
      throw "Could not find scene container with class identifier webgl-container";
  }

  initScene() {
    this.threeScene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
  }
}

export default Scene;

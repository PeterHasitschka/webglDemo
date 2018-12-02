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

  render() {
    this.renderer.render(this.threeScene, this.camera);
  }
}

export default Scene;

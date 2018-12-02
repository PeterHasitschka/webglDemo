class Scene {
  constructor() {
    this.elementList = [];

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

  add(element, name = null) {
    element.name = name;
    this.threeScene.add(element);
    console.log(element);
  }

  remove(element) {
    this.threeScene.remove(element);
  }

  removeByName(name) {
    let elm = this.threeScene.getObjectByName(name, true);
    if (elm) this.threeScene.remove(elm);
  }

  getObjectByName(name) {
    return this.threeScene.getObjectByName(name, true);
  }
}

export default Scene;

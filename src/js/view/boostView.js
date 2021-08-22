import View from "./view.js";
class Boost extends View {
  _parentElement = document.querySelector(".boost");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    <h1 class="boost-title">Boost your links today</h1>
    <button class="btn-primary">Get Started</button>
 `;
  }
}

export default new Boost();

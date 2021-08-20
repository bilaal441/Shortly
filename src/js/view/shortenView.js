import View from "./view.js";
class Shorten extends View {
  _parentElement = document.querySelector(".shorten");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    <div class="shorten-links">
    <input
      type="text"
      class="shorten-field"
      placeholder="Shorten a link here"
    />
    <div class="message">please add a link</div>
    <button class="btn-secondery">Shorten It!</button>
  </div>

 `;
  }
}

export default new Shorten();

import View from "./view.js";
import showcaseImg from "../../images/illustration-working.svg";
class Showcase extends View {
  _parentElement = document.querySelector(".showcase");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    <div class="showcase-image">
    <img src="${showcaseImg}" alt="working" />
  </div>

  <h1 class="showcase-title">More than just shorter links</h1>

  <p class="showcase-text">
    Build your brand’s recognition and get detailed insights on how your
    links are performing.
  </p>

  <button class="btn-primary">Get Started</button>


 `;
  }
}

export default new Showcase();

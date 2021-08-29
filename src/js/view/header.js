import View from "./view.js";
import logo from "../../images/logo.svg";
import showcaseImg from "../../images/illustration-working.svg";
class Header extends View {
  _parentElement = document.querySelector("#header");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    <div class="logo"> <img src="${logo}" alt=""></div>
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <nav class="nav">
      <ul  class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Features</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Pricing</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Resources </a></li>
      </ul>
      <ul class="nav-links">  
      <li class="nav__item login"><a href="#" class="nav__link">login</a></li>
       <li class="nav__item"><a href="#" class="nav__link btn-primary">sign up</a></li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>

 `;
  }
}

export default new Header();

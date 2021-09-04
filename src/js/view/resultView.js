import View from "./view.js";
import logo from "../../images/logo.svg";
import showcaseImg from "../../images/illustration-working.svg";
class Result extends View {
  _parentElement = document.querySelector(".result");
  _errorMessage = "something went wrong please try!";
  constructor() {
    super();

    this.#addHandlerCopy(this.#coppybtn.bind(this));
  }

  _generateMarkup() {
    return `
    <div class="result-conainer">
        <p class="result-long-con" >
        <a  class="result-long_link" href="${this._data.originalLink}"  target="_blank">
          ${this._data.originalLink}
          </a>
          </p>
          <div class="result-small">
            <a class="result-small__link" href=" https://${this._data.shortLink}" target="_blank">
            ${this._data.shortLink}
            </a>
            <button class="btn-secondery btn-coppy">copy</button>
          </div>
        </div>
 `;
  }

  #coppybtn(el) {
    if (!el) return;
    const text = el
      .closest(".result-small")
      .querySelector(".result-small__link").textContent;
    const input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    el.classList.add("coppied");
    el.textContent = "copied";
  }

  #addHandlerCopy(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-coppy");
      if (!btn) return;

      handler(btn);
    });
  }
}

export default new Result();

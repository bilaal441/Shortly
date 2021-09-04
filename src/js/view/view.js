import icons from "../../images/icon.svg";

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this.#clear();
    this.#insertMarkup(markup);
  }

  #insertMarkup(markup) {
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  #clear() {
    this._parentElement.innerHTML = "";
  }
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="errorMessage">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this.#clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
      <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
      </div>
    `;
    this.#clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

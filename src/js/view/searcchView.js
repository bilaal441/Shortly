import View from "./view.js";
class Search extends View {
  _parentElement = document.querySelector(".shorten");
  #form = document.querySelector(".shorten-links");
  #btn = document.querySelector(".button-shorten");
  #errorMessage = this.#form.querySelector(".message");
  #getInput() {
    return this._parentElement.querySelector(".shorten-field");
  }
  getQuery() {
    const query = this.#getInput().value;
    this.#clearInput();
    return query;
  }
  warnUser(quary) {
    !this.validateURL(quary)
      ? (this.#errorMessage.style.display = "block")
      : (this.#errorMessage.style.display = "none");
  }
  validateURL(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  #clearInput() {
    this.#getInput().value = "";
  }
  addSpinerbtn() {
    const message = getComputedStyle(this.#errorMessage).display;
    if (!message.includes("none")) return;
    this.#btn.classList.add("button--loading");
  }
  removeSpinerbtn() {
    this.#btn.classList.remove("button--loading");
  }
  addHandlerSearch(handler) {
    this.#form.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();

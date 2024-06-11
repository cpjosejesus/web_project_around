import Popup from "./Popup.js";

export class PopupWithFrom extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._submitCallback = callback;
  }

  close() {
    const form = this._popupElement.querySelector(".popup__form");
    super.close();
    form.reset();
  }

  _getInputValues() {
    const inputValues = {};
    const form = this._popupElement.querySelector(".popup__form");
    Array.from(form.querySelectorAll("input")).forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popupElement.querySelector(".popup__form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close();
    });
  }
}

import { toggleLike, popupImg } from "./utils.js";

export default class Card {
  constructor(name, link, elementSelector) {
    this.name = name;
    this.link = link;
    this.elementSelector = elementSelector;
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this.elementSelector).content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
    cardElement.querySelector(".element__title").textContent = this.name;
    cardElement.querySelector(".element__image").src = this.link;
    cardElement.querySelector(".element__image").alt =
      "Paisaje de " + this.name;

    return cardElement;
  }

  _setButtonEvents() {
    const likeBtn = this._cardElement.querySelector(".element__button-like");
    likeBtn.addEventListener("click", () => toggleLike(likeBtn));

    const deleteBtn = this._cardElement.querySelector(
      ".element__button-delete"
    );
    deleteBtn.addEventListener("click", () => this._cardElement.remove());

    // Image card pop up handles
    const imgElement = this._cardElement.querySelector(".element__image");
    imgElement.addEventListener("click", () => {
      popupImg.classList.toggle("popup__opened");
      popupImg.querySelector("img").src = this.link;
      popupImg.querySelector("img").alt = "Paisaje de " + this.name;
      popupImg.querySelector(".popup__title-img").textContent = this.name;
    });
  }

  createCard() {
    this._cardElement = this._getCardTemplate();
    this._setButtonEvents();
    return this._cardElement;
  }
}

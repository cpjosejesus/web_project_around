import { toggleLike } from "./utils.js";

export default class Card {
  constructor(name, link, elementSelector, { handleCardClick }) {
    this.name = name;
    this.link = link;
    this.elementSelector = elementSelector;
    this._handleCardClick = handleCardClick;
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
    const deleteBtn = this._cardElement.querySelector(
      ".element__button-delete"
    );
    const imgElement = this._cardElement.querySelector(".element__image");

    likeBtn.addEventListener("click", () => toggleLike(likeBtn));
    deleteBtn.addEventListener("click", () => this._cardElement.remove());

    // Image card pop up handles
    imgElement.addEventListener("click", this._handleCardClick);
  }

  createCard() {
    this._cardElement = this._getCardTemplate();
    this._setButtonEvents();
    return this._cardElement;
  }
}

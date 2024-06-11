import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popupElement.querySelector(".popup__image");
    this._popupTitle = this._popupElement.querySelector(".popup__title-img");
  }

  open(linkUrl, placeName) {
    this._popupImg.src = linkUrl;
    this._popupImg.alt = placeName;
    this._popupTitle.textContent = placeName;
    super.open();
  }
}

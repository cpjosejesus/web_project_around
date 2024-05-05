import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { config, initialCards, popupImg } from "./utils.js";

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonAdd = document.querySelector(".profile__button-add");

const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");

const popupFormCard = document.querySelector(".popup__form_add");
const popupAddImage = document.querySelector(".popup_add");
const buttonCloseAdd = document.querySelector(".popup__button-close_add");
const inputTitle = document.querySelector(".popup__item_title");
const inputURL = document.querySelector(".popup__item_url");

const profileName = document.querySelector(".profile__name");
const profileType = document.querySelector(".profile__type");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name");
const inputType = document.querySelector(".popup__item_type");

const buttonCloseImg = document.querySelector(".popup__button-close_img");

const elements = document.querySelector(".elements");

const overlays = document.querySelectorAll(".popup__overlay");

const togglePopup = (popup) => {
  inputName.value = profileName.innerHTML;
  inputType.value = profileType.innerHTML;
  popup.classList.toggle("popup__opened");
};

initialCards.forEach((item) => {
  const newElement = new Card(item.name, item.link, "#card-template");
  elements.append(newElement.createCard());
});

// profile edit handlers
buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});

buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileType.textContent = inputType.value;
  togglePopup(popupProfile);
});

// new places handlers
buttonAdd.addEventListener("click", () => {
  togglePopup(popupAddImage);
});

buttonCloseAdd.addEventListener("click", () => {
  togglePopup(popupAddImage);
});

popupFormCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const newCard = new Card(inputTitle.value, inputURL.value, "#card-template");
  elements.prepend(newCard.createCard());
  popupFormCard.reset();
  togglePopup(popupAddImage);
});

buttonCloseImg.addEventListener("click", () => {
  togglePopup(popupImg);
});

// close using escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
      if (popup.classList.contains("popup__opened")) {
        togglePopup(popup);
      }
    });
  }
});

// closing by clicking on overlay in the screen
overlays.forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    const popup = overlay.closest(".popup");
    togglePopup(popup);
  });
});

// form validator
Array.from(document.querySelectorAll(config.formSelector)).forEach(
  (formElement) => {
    const formValidator = new FormValidator(config, formElement);
    formValidator.enableValidation();
  }
);

import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import { PopupWithFrom } from "./PopupWithForm.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";

import { config, popupImg } from "./utils.js";
import {
  initialCards,
  popupImageSelector,
  popupAddButtonSelector,
  popupProfileSelector,
  profileName,
  profileType,
  buttonAdd,
  buttonEdit,
  inputName,
  inputType,
  elements,
} from "./constants.js";

const popupImage = new PopupWithImage(popupImageSelector);
const popupProfile = new PopupWithFrom(popupProfileSelector, (inputValues) => {
  profileName.textContent = inputValues.name;
  profileType.textContent = inputValues.type;
  popupProfile.close();
});

const popupAddButton = new PopupWithFrom(
  popupAddButtonSelector,
  (inputValues) => {
    const card = new Card(
      inputValues.title,
      inputValues.url,
      "#card-template",
      {
        handleCardClick: () => {
          popupImage.open(inputValues.url, inputValues.title);
        },
      }
    );
    elements.prepend(card.createCard());
  }
);

const userInfo = new UserInfo({
  usernameSelector: ".profile__name",
  jobSelector: ".profile__type",
});

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, "#card-template", {
        handleCardClick: () => {
          popupImage.open(item.link, item.name);
        },
      });
      sectionCards.addItem(card.createCard());
    },
  },
  ".elements"
);

sectionCards.renderItems();

buttonAdd.addEventListener("click", () => {
  popupAddButton.open();
});

buttonEdit.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.username;
  inputType.value = userData.job;
  popupProfile.open();
});

// form validator
Array.from(document.querySelectorAll(config.formSelector)).forEach(
  (formElement) => {
    const formValidator = new FormValidator(config, formElement);
    formValidator.enableValidation();
  }
);

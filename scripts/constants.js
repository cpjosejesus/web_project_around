const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonAdd = document.querySelector(".profile__button-add");

const buttonClose = document.querySelector(".popup__button-close");

const popupFormCard = document.querySelector(".popup__form_add");
const popupAddImage = document.querySelector(".popup_add");
const buttonCloseAdd = document.querySelector(".popup__button-close_add");
const inputTitle = document.querySelector(".popup__item_title");
const inputURL = document.querySelector(".popup__item_url");

const profileName = document.querySelector(".profile__name");
const profileType = document.querySelector(".profile__type");
const inputName = document.querySelector(".popup__item_name");
const inputType = document.querySelector(".popup__item_type");

// selectors
const popupImageSelector = ".popup_img";
const popupAddButtonSelector = ".popup_add";
const popupProfileSelector = ".popup_profile";

const elements = document.querySelector(".elements");

export {
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
};

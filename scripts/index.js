const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");

const profileName = document.querySelector(".profile__name");
const profileType = document.querySelector(".profile__type");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name");
const inputType = document.querySelector(".popup__item_type");

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

function togglePopup(popup) {
  inputName.value = profileName.innerHTML;
  inputType.value = profileType.innerHTML;
  popup.classList.toggle("popup__opened");
}

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

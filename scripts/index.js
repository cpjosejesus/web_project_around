const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-close");

const profileName = document.querySelector(".profile__name");
const profileType = document.querySelector(".profile__type");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__item_name");
const inputType = document.querySelector(".popup__item_type");

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

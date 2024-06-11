const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const toggleLike = (btn) => {
  btn.classList.toggle("element__button-like_black");
};

const popupImg = document.querySelector(".popup_img");

export { config, toggleLike, popupImg };

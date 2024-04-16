function showInputError(
  formSelector,
  inputSelector,
  errorMessage,
  inputErrorClass,
  errorClass
) {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(
  formSelector,
  inputSelector,
  inputErrorClass,
  errorClass
) {
  let errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement = "";
}

function hasInvalidInput(inputSelector) {
  return inputSelector.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputSelector, buttonElement, inactiveButtonClass) {
  if (Array.isArray(inputSelector) && hasInvalidInput(inputSelector)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else if (buttonElement) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function checkInputValidity(
  formSelector,
  inputSelector,
  inputErrorClass,
  errorClass
) {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      inputSelector.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formSelector, inputSelector, inputErrorClass, errorClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const inputElements = formElement.querySelectorAll(inputSelector);
    const inputList = Array.from(inputElements);
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (event) => {
        checkInputValidity(
          formElement,
          inputElement,
          inputErrorClass,
          errorClass
        );
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
      });
    });
  });
}

// const config = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__item",
//   submitButtonSelector: ".button_save",
//   inactiveButtonClass: "button_save_disabled",
//   inputErrorClass: "popup__item-invalid",
//   errorClass: "popup__item-error_active",
// });

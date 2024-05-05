export default class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
  }

  //private
  _showInputError(
    formSelector,
    inputSelector,
    errorMessage,
    inputErrorClass,
    errorClass
  ) {
    const errorElement = formSelector.querySelector(
      `.${inputSelector.id}-error`
    );
    inputSelector.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(formSelector, inputSelector, inputErrorClass, errorClass) {
    let errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement = "";
  }

  _hasInvalidInput(inputSelector) {
    return inputSelector.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputSelector, buttonElement, inactiveButtonClass) {
    if (Array.isArray(inputSelector) && this._hasInvalidInput(inputSelector)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else if (buttonElement) {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _checkInputValidity(
    formSelector,
    inputSelector,
    inputErrorClass,
    errorClass
  ) {
    if (!inputSelector.validity.valid) {
      this._showInputError(
        formSelector,
        inputSelector,
        inputSelector.validationMessage,
        inputErrorClass,
        errorClass
      );
    } else {
      this._hideInputError(
        formSelector,
        inputSelector,
        inputErrorClass,
        errorClass
      );
    }
  }

  //public
  enableValidation() {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const inputElements = this.formElement.querySelectorAll(
      this.config.inputSelector
    );
    const inputList = Array.from(inputElements);
    const buttonElement = this.formElement.querySelector(
      this.config.submitButtonSelector
    );
    this._toggleButtonState(
      inputList,
      buttonElement,
      this.config.inactiveButtonClass
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(
          this.formElement,
          inputElement,
          this.config.inputErrorClass,
          this.config.errorClass
        );
        this._toggleButtonState(
          inputList,
          buttonElement,
          this.config.inactiveButtonClass
        );
      });
    });
  }
}

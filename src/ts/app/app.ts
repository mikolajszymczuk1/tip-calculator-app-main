// === Main app file ===

// mathFunctions.ts
import { 
    perPerson,
    tipAmount
} from "./mathFunctions";

// uiFunctions.ts
import {
    addRemoveElementClassName,
    getNumberInputValue,
    getRadioInputValue,
    resetRadioInputs,
    setOutputValue
} from "./uiFunctions";

// Get all needed elements

// -- Section with all inputs (for input event)
const inputSection: HTMLElement = document.querySelector(".tip-calculator__input-part") as HTMLElement;

// -- All Inputs, buttons
const resetButton: HTMLButtonElement = document.querySelector(".tip-calculator__reset-button") as HTMLButtonElement;
const billInput: HTMLInputElement = document.getElementById("bill") as HTMLInputElement;
const numberOfPeopleInput: HTMLInputElement = document.getElementById("number-of-people") as HTMLInputElement;
const customTipInput: HTMLInputElement = document.getElementById("custom-tip") as HTMLInputElement;
const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".tip-calculator__radio-input");

// -- Output elements
const tipAmountOutput: HTMLDivElement = document.getElementById("tip-amount") as HTMLDivElement;
const totalOutput: HTMLDivElement = document.getElementById("total") as HTMLDivElement;

// Events
inputSection.addEventListener("input", mainController);
resetButton.addEventListener("click", resetInputs);

/** Main app function */
function mainController(): void {
    // Get inputs values
    let billValue: number = getNumberInputValue(billInput);
    let numberOfPeopleValue: number = getNumberInputValue(numberOfPeopleInput);
    let customTipValue: number = getNumberInputValue(customTipInput);
    let tipValue: number = getRadioInputValue(radioInputs);

    // Calculations
    let perPersonValue: number = perPerson(billValue, numberOfPeopleValue);
    let tipAmountValue: number;
    if (customTipInput.value === "") {
        tipAmountValue = tipAmount(perPersonValue, tipValue);
    } else {
        tipAmountValue = tipAmount(perPersonValue, customTipValue);
    }

    // Error checking (Catch divide by 0 error)
    let numberOfPeopleInputWrapper: HTMLElement = numberOfPeopleInput.parentNode?.parentNode as HTMLElement;
    if (numberOfPeopleValue === 0) {
        addRemoveElementClassName(numberOfPeopleInputWrapper, "tip-calculator__number-input-wrapper--error-mode", true);
        addRemoveElementClassName(resetButton, "tip-calculator__reset-button--disable", true);
        resetButton.disabled = true;
    } else {
        addRemoveElementClassName(numberOfPeopleInputWrapper, "tip-calculator__number-input-wrapper--error-mode", false);
        addRemoveElementClassName(resetButton, "tip-calculator__reset-button--disable", false);
        resetButton.disabled = false;
    }

    // Set outpus values
    setOutputValue(tipAmountOutput, (Math.round(tipAmountValue * 100) / 100));
    setOutputValue(totalOutput, (Math.round((tipAmountValue + perPersonValue) * 100) / 100));
}

/** Function remove values from each app input and set default values for outputs */
function resetInputs(): void {
    billInput.value = "";
    numberOfPeopleInput.value = "";
    customTipInput.value = "";
    tipAmountOutput.innerHTML = "$0.00";
    totalOutput.innerHTML = "$0.00";
    resetRadioInputs(radioInputs);
}

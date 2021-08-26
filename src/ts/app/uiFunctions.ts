// === All functions to DOM manipulations ===

/** Function to activate or deactivate element (Add or remove active class) */
function addRemoveElementClassName(el: HTMLElement, className: string, onOff: boolean): void {
    onOff ? el.classList.add(className) : el.classList.remove(className);
}

/** Return value from number input */
function getNumberInputValue(el: HTMLInputElement): number {
    return el.value === "" ? 0 : parseFloat(el.value);
}

/** Return radio input value */
function getRadioInputValue(elementsArray: NodeListOf<HTMLInputElement>): number {
    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].checked) {
            return parseInt(elementsArray[i].value);
        }
    }

    return 0;
}

/** Reset all radios in array 'elementsArray' */
function resetRadioInputs(elementsArray: NodeListOf<HTMLInputElement>): void {
    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[i].checked) {
            elementsArray[i].checked = false;
        }
    }
}

/** */
function setOutputValue(outputEl: HTMLElement, newValue: number): void {
    newValue === 0 ? outputEl.innerHTML = "$0.00" : outputEl.innerHTML = "$" + newValue.toString();
}

export { 
    addRemoveElementClassName,
    getNumberInputValue,
    getRadioInputValue,
    resetRadioInputs,
    setOutputValue
}

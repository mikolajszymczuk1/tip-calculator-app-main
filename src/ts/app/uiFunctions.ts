// === All functions to DOM manipulations ===

/** Function to activate or deactivate element (Add or remove active class) */
function addRemoveElementClassName(el: HTMLElement, className: string, onOff: boolean): void {
    if (onOff) {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
}

/** Return value from number input */
function getNumberInputValue(el: HTMLInputElement): number {
    if (el.value === "") {
        return 0;
    }

    return parseFloat(el.value);
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
    if (newValue === 0) {
        outputEl.innerHTML = "$0.00";
    } else {
        outputEl.innerHTML = "$" + newValue.toString();
    }
}

export { 
    addRemoveElementClassName,
    getNumberInputValue,
    getRadioInputValue,
    resetRadioInputs,
    setOutputValue
}

// === Tests for all ui functions ===
import "@testing-library/jest-dom";

import {
    addRemoveElementClassName,
    getNumberInputValue,
    getRadioInputValue,
    resetRadioInputs,
    setOutputValue
} from "../ts/app/uiFunctions";

describe("addRemoveElementClassName", (): void => {
    const div: HTMLDivElement = document.createElement("div");
    const testClassName: string = "testClass";

    test("if onOff is true, should add class 'testClass'", (): void => {
        addRemoveElementClassName(div, testClassName, true);
        expect(div).toHaveClass(testClassName);
    });

    test("if onOff is false, should remove class 'testClass'", (): void => {
        addRemoveElementClassName(div, testClassName, false);
        expect(div).not.toHaveClass(testClassName);
    });
});

describe("getNumberInputValue", (): void => {
    const input: HTMLInputElement = document.createElement("input");
    input.type = "number";
    input.value = "";

    test("if input value === '', should return 0", (): void => {
        expect(getNumberInputValue(input)).toEqual(0);
    });

    test("if input value != '', should return value", (): void => {
        input.value = "100";
        expect(getNumberInputValue(input)).toEqual(100);
    });
});

describe("getRadioInputValue", (): void => {
    document.body.innerHTML = `
        <input class="radio-input" type="radio" name="testRadio" value="10">
        <input class="radio-input" type="radio" name="testRadio" value="20">
        <input class="radio-input" type="radio" name="testRadio" value="30">
        <input class="radio-input" type="radio" name="testRadio" value="40">
    `;

    const allRadioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".radio-input");

    test("if one radio of all is checked, should return checked radio value", (): void => {
        allRadioInputs[1].checked = true;
        expect(getRadioInputValue(allRadioInputs)).toEqual(20);
    });

    test("if no one radio of all is checked, should return 0", (): void => {
        allRadioInputs[1].checked = false;
        expect(getRadioInputValue(allRadioInputs)).toEqual(0);
    });
});

describe("resetRadioInputs", (): void => {
    document.body.innerHTML = `
        <input class="radio-input" type="radio" name="testRadio" value="10">
        <input class="radio-input" type="radio" name="testRadio" value="20">
        <input class="radio-input" type="radio" name="testRadio" value="30">
        <input class="radio-input" type="radio" name="testRadio" value="40">
    `;

    const allRadioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".radio-input");
    allRadioInputs[1].checked = true;

    test("After reset all radio should be unchecked", (): void => {
        expect(getRadioInputValue(allRadioInputs)).toEqual(20);
        resetRadioInputs(allRadioInputs);
        expect(getRadioInputValue(allRadioInputs)).toEqual(0);
    });
});

describe("setOutputValue", (): void => {
    const div: HTMLDivElement = document.createElement("div");

    test("if new value === 0, should set innerHtml to '$0.00'", (): void => {
        setOutputValue(div, 0);
        expect(div.innerHTML).toEqual("$0.00");
    });

    test("if newValue != 0, should set innerHtml to 'newValue' ", (): void => {
        setOutputValue(div, 112.5);
        expect(div.innerHTML).toEqual("$112.5");
    });
});

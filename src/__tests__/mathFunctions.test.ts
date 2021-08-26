// === Tests for all math functions ===
import {
    perPerson,
    tipAmount
    
} from "../ts/app/mathFunctions";

describe("perPerson", (): void => {
    test("When 25 and 5, should return 5", (): void => {
        expect(perPerson(25, 5)).toEqual(5);
    });

    test("When devide by zero, should return 0", (): void => {
        expect(perPerson(144, 0)).toEqual(0);
    });
});

describe("tipAmount", (): void => {
    test("When 100 and 50, should return 50", (): void => {
        expect(tipAmount(100, 50)).toEqual(50);
    });

    test("When 200 and 100, should return 200", (): void => {
        expect(tipAmount(200, 100)).toEqual(200);
    });
});

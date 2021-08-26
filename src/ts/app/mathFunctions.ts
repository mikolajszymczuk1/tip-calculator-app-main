// === Math functions ===

/** Function returns cost per person */
function perPerson(bill: number, numOfPeople: number): number {
    return numOfPeople === 0 ? 0 : (bill / numOfPeople);
}

/** Function returns a percentage of cost value */
function tipAmount(value: number, percent: number): number {
    return value * (percent / 100);
}

export {
    perPerson,
    tipAmount
}

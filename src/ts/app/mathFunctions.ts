// === Math functions ===

/** Function returns cost per person */
function perPerson(bill: number, numOfPeople: number): number {
    if (numOfPeople === 0) {
        return 0;
    }
    
    return bill / numOfPeople;
}

/** Function returns a percentage of cost value */
function tipAmount(value: number, percent: number): number {
    return value * (percent / 100);
}

export {
    perPerson,
    tipAmount
}

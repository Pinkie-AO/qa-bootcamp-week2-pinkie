function calculateTax(income: number): number {
    if (income < 0) {
        throw new Error("Income cannot be negative");
    }

    return income * 0.2;
}

console.log(calculateTax(1000));
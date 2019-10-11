const calculateBill = require('../index');

test("calculateBill is a function", () => {
    expect(calculateBill).toBeDefined();
});

test("it returns a string", () => {
    const result = calculateBill();
    expect(typeof calculateBill).toBe('string');
});

test("it returns the correct amount", () => {
    const amount = 100;
    const vat = 20;
    const tip = 10;
    expect(calculateBill(amount, vat, tip).toBe("£130"))

});
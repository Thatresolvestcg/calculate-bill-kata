// create a function -- this is todo
// this function will need three arguments
// we will need to return a string with a currency sign £ so maybe "£" + var

// take price, vat and tip rate as numbers

// (amount + (amount * vat / 100) + tip)

// test("calculateBill is a functon", () => {
//   expect(calculateBill).toBeDefined();
// });

const calculateBill = (amount, vat, tip) => {
  incVat = amount + amount * (vat / 100);
  total = incVat + tip;
  console.log("the total amount is £:" + total);
};

calculateBill(10, 20, 5);

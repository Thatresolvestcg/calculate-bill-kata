import { type } from "os";

// create a function -- this is todo
// this function will need three arguments
// we will need to return a string with a currency sign £ so maybe "£" + var


const calculateBill = (amount, vat, tip) => {
  if (typeof amount !== "number") {
    console.log("all inputs must be numbers, please check the amount value");
  } else if (typeof vat !== "number") {
    console.log("all inputs must be numbers, please check the vat value");
  } else if (typeof tip !== "number") {
    console.log("all inputs must be numbers, please check the tip value");
  } else {
    incVat = amount + amount * (vat / 100);
    total = incVat + tip;
    console.log("the total amount is £" + total);
  }
};

module.exports = calculateBill;
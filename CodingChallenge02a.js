console.log("Hello, World!");
// Product Pricing Assistant

//variables

let productName = "Pokemon Card Pack";
let costPerUnit = 1.99;
let basePrice = 6.99;
let discountRate = 0.05; // 5% discount
const TAX_RATE = 0.07; // 7% sales tax
const FIXED_MONTHLY_COSTS = 1000; // Fixed costs per month

// Calculations

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + TAX_RATE);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(FIXED_MONTHLY_COSTS / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Output Results

console.log(`Product Name: ${productName}`);
console.log(`Base Price: $${basePrice.toFixed(2)}`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Final Price (with Tax): $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even Units: ${breakEvenUnits}`);
console.log(`Is Profitable per Unit: ${isProfitablePerUnit}`);
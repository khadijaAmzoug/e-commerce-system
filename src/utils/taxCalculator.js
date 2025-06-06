"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    const taxRate = category.toLowerCase() === 'groceries' ? 0.03 : 0.0475;
    const taxAmount = price * taxRate;
    return parseFloat(taxAmount.toFixed(2));
}

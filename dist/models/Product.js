"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, title, price, discountPercentage, category, discountAmount, taxAmount) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.discountAmount = discountAmount;
        this.taxAmount = taxAmount;
    }
    getPriceWithDiscount() {
        const finalPrice = this.price - this.discountAmount + this.taxAmount;
        return parseFloat(finalPrice.toFixed(2));
    }
    displayDetails() {
        return `
Product: ${this.title}
Original Price: $${this.price.toFixed(2)}
Discount: $${this.discountAmount.toFixed(2)}
Tax: $${this.taxAmount.toFixed(2)}
Final Price: $${this.getPriceWithDiscount().toFixed(2)}
Category: ${this.category}
`;
    }
}
exports.Product = Product;

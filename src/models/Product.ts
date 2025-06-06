

export class Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  category: string;
  discountAmount: number;
  taxAmount: number;

  constructor(
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    category: string,
    discountAmount: number,
    taxAmount: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    this.discountAmount = discountAmount;
    this.taxAmount = taxAmount;
  }

  getPriceWithDiscount(): number {

    const finalPrice = this.price - this.discountAmount + this.taxAmount;
    return parseFloat(finalPrice.toFixed(2));
  }

  displayDetails(): string {
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

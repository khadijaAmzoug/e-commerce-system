

export function calculateTax(price: number, category: string): number {
  const taxRate = category.toLowerCase() === 'groceries' ? 0.03 : 0.0475;
  const taxAmount = price * taxRate;
  return parseFloat(taxAmount.toFixed(2));
}


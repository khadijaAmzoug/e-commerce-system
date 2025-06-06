

export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.products; 
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error; 
  }
}

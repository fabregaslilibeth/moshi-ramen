export interface Product {
  name: string;
  sku: string;
  category: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  // Ramen Bowls
  {
    name: "Tonkotsu Ramen",
    sku: "RAM-001",
    category: "Ramen",
    price: 12.99,
    image: "🍜"
  },
  {
    name: "Spicy Miso Ramen",
    sku: "RAM-002", 
    category: "Ramen",
    price: 11.99,
    image: "🌶️"
  },
  {
    name: "Shoyu Ramen",
    sku: "RAM-003",
    category: "Ramen", 
    price: 10.99,
    image: "🥢"
  },
  {
    name: "Shio Ramen",
    sku: "RAM-004",
    category: "Ramen",
    price: 10.99,
    image: "🍲"
  },
  {
    name: "Vegetarian Ramen",
    sku: "RAM-005",
    category: "Ramen",
    price: 9.99,
    image: "🥬"
  },
  {
    name: "Chicken Paitan Ramen",
    sku: "RAM-006",
    category: "Ramen",
    price: 11.99,
    image: "🐔"
  },

  // Appetizers
  {
    name: "Gyoza (6 pieces)",
    sku: "APP-001",
    category: "Appetizers",
    price: 6.99,
    image: "🥟"
  },
  {
    name: "Edamame",
    sku: "APP-002",
    category: "Appetizers",
    price: 4.99,
    image: "🫘"
  },
  {
    name: "Takoyaki (8 pieces)",
    sku: "APP-003",
    category: "Appetizers",
    price: 7.99,
    image: "🐙"
  },
  {
    name: "Karaage Chicken",
    sku: "APP-004",
    category: "Appetizers",
    price: 8.99,
    image: "🍗"
  },
  {
    name: "Agedashi Tofu",
    sku: "APP-005",
    category: "Appetizers",
    price: 5.99,
    image: "🧈"
  },

  // Sides
  {
    name: "Extra Noodles",
    sku: "SID-001",
    category: "Sides",
    price: 2.99,
    image: "🍝"
  },
  {
    name: "Extra Chashu Pork",
    sku: "SID-002",
    category: "Sides",
    price: 3.99,
    image: "🥓"
  },
  {
    name: "Soft Boiled Egg",
    sku: "SID-003",
    category: "Sides",
    price: 1.99,
    image: "🥚"
  },
  {
    name: "Seaweed",
    sku: "SID-004",
    category: "Sides",
    price: 1.49,
    image: "🌊"
  },
  {
    name: "Bamboo Shoots",
    sku: "SID-005",
    category: "Sides",
    price: 1.99,
    image: "🎋"
  },

  // Beverages
  {
    name: "Green Tea",
    sku: "BEV-001",
    category: "Beverages",
    price: 2.99,
    image: "🍵"
  },
  {
    name: "Japanese Beer (Asahi)",
    sku: "BEV-002",
    category: "Beverages",
    price: 4.99,
    image: "🍺"
  },
  {
    name: "Sake (Hot)",
    sku: "BEV-003",
    category: "Beverages",
    price: 6.99,
    image: "🍶"
  },
  {
    name: "Ramune Soda",
    sku: "BEV-004",
    category: "Beverages",
    price: 3.99,
    image: "🥤"
  },
  {
    name: "Matcha Latte",
    sku: "BEV-005",
    category: "Beverages",
    price: 4.99,
    image: "🫖"
  },

  // Desserts
  {
    name: "Mochi Ice Cream",
    sku: "DES-001",
    category: "Desserts",
    price: 5.99,
    image: "🍡"
  },
  {
    name: "Green Tea Ice Cream",
    sku: "DES-002",
    category: "Desserts",
    price: 4.99,
    image: "🍦"
  },
  {
    name: "Dorayaki",
    sku: "DES-003",
    category: "Desserts",
    price: 3.99,
    image: "🥞"
  },
  {
    name: "Taiyaki",
    sku: "DES-004",
    category: "Desserts",
    price: 4.99,
    image: "🐟"
  }
];

export const categories = [
  "All",
  "Ramen",
  "Appetizers", 
  "Sides",
  "Beverages",
  "Desserts"
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") {
    return products;
  }
  return products.filter(product => product.category === category);
}

export function getProductBySku(sku: string): Product | undefined {
  return products.find(product => product.sku === sku);
}

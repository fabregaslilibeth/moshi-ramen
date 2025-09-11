import { CartState, CartItem } from '@/types/cart';

const CART_STORAGE_KEY = 'moshi-ramen-cart';

export const saveCartToStorage = (cart: CartState): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }
};

export const loadCartFromStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }
  
  return {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
};

export const clearCartFromStorage = (): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear cart from localStorage:', error);
    }
  }
};

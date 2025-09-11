'use client';

import { useState, useEffect, useCallback } from 'react';
import { CartState, CartItem, CartContextType } from '@/types/cart';
import { Product } from '@/data/products';
import { saveCartToStorage, loadCartFromStorage, clearCartFromStorage } from '@/utils/cartStorage';

const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  return { totalItems, totalPrice };
};

export const useCart = (): CartContextType => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.sku === product.sku);
      
      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = prevCart.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...prevCart.items, { product, quantity }];
      }
      
      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  }, []);

  const removeFromCart = useCallback((sku: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.sku !== sku);
      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  }, []);

  const updateQuantity = useCallback((sku: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(sku);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item => 
        item.product.sku === sku 
          ? { ...item, quantity }
          : item
      );
      
      const { totalItems, totalPrice } = calculateCartTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    });
    clearCartFromStorage();
  }, []);

  const getItemQuantity = useCallback((sku: string): number => {
    const item = cart.items.find(item => item.product.sku === sku);
    return item ? item.quantity : 0;
  }, [cart.items]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
  };
};

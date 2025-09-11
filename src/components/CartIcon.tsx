'use client';

import { useCartContext } from '@/context/CartContext';

export const CartIcon = () => {
  const { cart } = useCartContext();

  return (
    <div className="relative">
      <a 
        href="/cart"
        className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      </a>
      {cart.totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cart.totalItems > 99 ? '99+' : cart.totalItems}
        </span>
      )}
    </div>
  );
};
